'use client'

import { registerSchema } from '@/app/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import authImg from '@/app/assets/images/authImg.jpg'
import Image from 'next/image'
import styles from './Register.module.scss'
import { Button } from '@mui/material'
import Link from 'next/link'
import { ROUTES } from '@/app/lib/routes'

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<RegisterForm>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange',
	})

	const onSubmit = async (data: RegisterForm) => {
		console.log('Отправляем на сервер:', data)
	}

	return (
		<div className={styles['auth-container']}>
			<div>
				<h3>Логотоип</h3>
				<h4>Регистрация</h4>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label>Логин</label>
						<input placeholder='Логин' {...register('login')} />
						{errors.login && <p>{errors.login.message}</p>}
					</div>
					<div>
						<label>Mail</label>
						<input placeholder='Email' {...register('email')} />
						{errors.email && <p>{errors.email.message}</p>}
					</div>
					<div>
						<label>Пароль</label>
						<input placeholder='Пароль' {...register('password')} />
						{errors.password && <p>{errors.password.message}</p>}
					</div>
					<div>
						<label>Подтвердите пароль</label>
						<input
							placeholder='Повторите пароль'
							{...register('confirmPassword')}
						/>
						{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
					</div>
					<Button variant='contained' type='submit' disabled={!isValid}>
						Отправить
					</Button>
				</form>
				<div>
					<p>или</p>
					<Link href={ROUTES.LOGIN}>Вход</Link>
				</div>
			</div>
			<Image
				src={authImg}
				alt='Register Background Image'
				width={560}
				height={720}
				className={styles['bg-img']}
			/>
		</div>
	)
}
