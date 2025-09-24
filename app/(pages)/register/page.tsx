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
import { useRouter } from 'next/navigation'

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
	const router = useRouter()
	
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setError,
	} = useForm<RegisterForm>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange',
	})

	
	const onSubmit = async (data: RegisterForm) => {
		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

			const result = await res.json()

			if (res.ok) {
				router.push(ROUTES.HOME)
			} else {
				console.error(result.error || 'Ошибка регистрации')
				setError('email', { type: 'manual', message: result.error })
			}

			console.log(result.message)
		} catch (err) {
			console.error('Ошибка при запросе:', err)
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
							<label>Логин</label>
							<input placeholder='Логин' {...register('login')} />
							{errors.login && (
								<p className={styles['error-message']}>
									{errors.login.message}
								</p>
							)}
						</div>
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
						<div className={styles['input-wrapper']}>
							<label>Подтвердите пароль</label>
							<input
								placeholder='Повторите пароль'
								{...register('confirmPassword')}
							/>
							{errors.confirmPassword && (
								<p className={styles['error-message']}>
									{errors.confirmPassword.message}
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
							Отправить
						</Button>
					</form>
					<div className={styles['form-footer']}>
						<p>или</p>
						<Link className={styles.link} href={ROUTES.LOGIN}>
							Вход
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
