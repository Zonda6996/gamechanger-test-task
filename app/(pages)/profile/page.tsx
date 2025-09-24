'use client'

import SectionTitle from '@/app/ui/SectionTitle'
import { useEffect, useState } from 'react'
import styles from './Profile.module.scss'
import avatarPlacehoder from '@/app/assets/images/avatarPlaceholde.png'
import Image from 'next/image'
import { Button } from '@mui/material'

interface User {
	login: string
	email: string
	phone?: string
	address?: string
}

export default function Profile() {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchProfile() {
			const res = await fetch('/api/profile?email=ifresh3d@gmail.com')
			const data = await res.json()
			setUser(data)
			setLoading(false)
		}
		fetchProfile()
	}, [])

	const handleSave = async () => {
		if (!user) return
		const res = await fetch('/api/profile', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		})
		const result = await res.json()
		console.log(result)
	}

	if (loading) return <p>Загрузка...</p>
	if (!user) return <p>Пользователь не найден</p>

	return (
		<div className={styles['profile-wrapper']}>
			<SectionTitle className={styles.title}>Профиль</SectionTitle>
			<div className={styles['form-wrapper']}>
				<Image src={avatarPlacehoder} alt='Avatar' width={203} height={203} />
				<form className={styles.form}>
					<div className={styles['input-wrapper']}>
						<label>Имя</label>
						<input value={user.login} type='text' placeholder='Имя' disabled />
					</div>
					<div className={styles['input-wrapper']}>
						<label>Email</label>
						<input
							value={user.email}
							type='text'
							placeholder='Email'
							disabled
						/>
					</div>
					<div className={styles['input-wrapper']}>
						<label>Телефон</label>
						<input
							placeholder='Телефон'
							value={user.phone || ''}
							onChange={e => setUser({ ...user, phone: e.target.value })}
						/>
					</div>
					<div className={styles['input-wrapper']}>
						<label>Адрес</label>
						<input
							placeholder='Адрес'
							value={user.address || ''}
							onChange={e => setUser({ ...user, address: e.target.value })}
						/>
					</div>
					<Button
						variant='contained'
						type='submit'
						fullWidth
						sx={{
							backgroundColor: 'rgba(1, 71, 255, 1)',
							fontWeight: '600',
							height: '54px',
							textTransform: 'capitalize',
							fontSize: '20px',
						}}
					>
						Редактировать
					</Button>
				</form>
			</div>
		</div>
	)
}
