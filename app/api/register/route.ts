import { createBitrixContact } from '@/app/lib/bitrix'
import db from '@/app/lib/db'
import { registerSchema } from '@/app/lib/validation'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const parseResult = registerSchema.safeParse(body)

		if (!parseResult.success) {
			return NextResponse.json(
				{ error: parseResult.error.issues[0].message },
				{ status: 400 }
			)
		}

		const { login, email, password } = parseResult.data

		const hashed = await bcrypt.hash(password, 10)

		try {
			const stmt = db.prepare(
				'INSERT INTO users (login, email, password) VALUES (?, ?, ?)'
			)
			stmt.run(login, email, hashed)
		} catch (err) {
			if (
				err instanceof Error &&
				err.message.includes('UNIQUE constraint failed')
			) {
				return NextResponse.json(
					{ error: 'Это электронное письмо уже занято!' },
					{ status: 400 }
				)
			}
			throw err
		}

		await createBitrixContact(login, email)

		return NextResponse.json({ message: 'Регистрация успешна' })
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({ error: err.message }, { status: 500 })
		}
		return NextResponse.json({ error: 'Неизвестная ошибка' }, { status: 500 })
	}
}
