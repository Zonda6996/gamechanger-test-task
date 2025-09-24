'use client'

import { loginSchema } from '@/app/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import authImg from '@/app/assets/images/authImg.jpg'
import Image from 'next/image'
import styles from '../register/Register.module.scss'
import { Button } from '@mui/material'
import Link from 'next/link'
import { ROUTES } from '@/app/lib/routes'
import { useRouter } from 'next/navigation'

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setError,
	} = useForm<LoginForm>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
	})

	const onSubmit = async (data: LoginForm) => {
		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

			const result = await res.json()

			if (res.ok) {
				router.push(ROUTES.HOME)
			} else {
				if (result.error.includes('пароль')) {
					setError('password', { type: 'manual', message: result.error })
				} else {
					setError('email', { type: 'manual', message: result.error })
				}
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className={styles['auth-container']}>
			<div className={styles['auth-wrapper']}>
				<div className={styles['form-wrapper']}>
					<h3 className={styles.logo}>Логотоип</h3>
					<h4 className={styles.title}>Регистрация</h4>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles['input-wrapper']}>
							<label>Mail</label>
							<input placeholder='Email' {...register('email')} />
							{errors.email && (
								<p className={styles['error-message']}>
									{errors.email.message}
								</p>
							)}
						</div>
						<div className={styles['input-wrapper']}>
							<label>Пароль</label>
							<input placeholder='Пароль' {...register('password')} />
							{errors.password && (
								<p className={styles['error-message']}>
									{errors.password.message}
								</p>
							)}
						</div>
						<Button
							fullWidth
							variant='contained'
							type='submit'
							disabled={!isValid}
							sx={{
								backgroundColor: '0147FF',
								height: '46px',
								textTransform: 'capitalize',
								fontSize: '18px',
							}}
						>
							Вход
						</Button>
					</form>
					<div className={styles['form-footer']}>
						<p>или</p>
						<Link className={styles.link} href={ROUTES.REGISTER}>
							Регистрация
						</Link>
					</div>
				</div>
				<Image
					src={authImg}
					alt='Register Background Image'
					width={560}
					height={720}
					className={styles['bg-img']}
					priority
				/>
			</div>
		</div>
	)
}
