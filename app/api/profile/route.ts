import db from '@/app/lib/db'
import { NextResponse } from 'next/server'
import { User } from '../types/types'

export async function GET(req: Request) {
	try {
		const url = new URL(req.url)
		const email = url.searchParams.get('email')

		if (!email) {
			return NextResponse.json({ error: 'Email обязателен' }, { status: 400 })
		}

		const stmt = db.prepare(
			'SELECT login, email, phone, address FROM users WHERE email = ?'
		)
		const user = stmt.get(email) as
			| Pick<User, 'login' | 'email' | 'phone' | 'address'>
			| undefined

		if (!user) {
			return NextResponse.json(
				{ error: 'Пользователь не найден' },
				{ status: 404 }
			)
		}

		return NextResponse.json(user)
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({ error: err.message }, { status: 500 })
		}
		return NextResponse.json({ error: 'Неизвестная ошибка' }, { status: 500 })
	}
}

export async function PUT(req: Request) {
	try {
		const { email, phone, address } = await req.json()

		const stmt = db.prepare(
			'UPDATE users SET phone = ?, address = ? WHERE email = ?'
		)
		stmt.run(phone, address, email)

		return NextResponse.json({ message: 'Профиль обновлен' })
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({ error: err.message }, { status: 500 })
		}
		return NextResponse.json({ error: 'Неизвестная ошибка' }, { status: 500 })
	}
}
