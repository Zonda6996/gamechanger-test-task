import db from '@/app/lib/db'
import { loginSchema } from '@/app/lib/validation'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { User } from '../types/types'

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const parseResult = loginSchema.safeParse(body)

		if (!parseResult.success) {
			return NextResponse.json(
				{ error: parseResult.error.issues[0].message },
				{ status: 400 }
			)
		}

		const { email, password } = parseResult.data

		const stmt = db.prepare('SELECT * FROM users WHERE email = ?')
		const user = stmt.get(email) as User | undefined

		if (!user) {
			return NextResponse.json(
				{ error: 'Пользователь не найден' },
				{ status: 404 }
			)
		}

		const valid = await bcrypt.compare(password, user.password)
		if (!valid) {
			return NextResponse.json({ error: 'Неверный пароль' }, { status: 401 })
		}

		return NextResponse.json({
			message: 'Успешный вход',
			user: { login: user.login, email: user.email },
		})
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({ error: err.message }, { status: 500 })
		}
		return NextResponse.json({ error: 'Неизвестная ошибка' }, { status: 500 })
	}
}
