import z from 'zod'

export const registerSchema = z
	.object({
		login: z.string().min(3, 'Логин слишком короткий'),
		email: z.email('Некорректный email'),
		password: z
			.string()
			.min(6, 'Пароль должен бытьь не меньше 6 символов')
			.regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
			.regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Пароли не совпадают',
	})

export const loginSchema = z.object({
	email: z.email('Некорректный email'),
	password: z.string().min(1, 'Введите пароль'),
})
