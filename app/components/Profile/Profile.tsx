import SectionTitle from '@/app/ui/SectionTitle'
import profileStyles from './Profile.module.scss'
import avatarPlaceholder from '@/app/assets/images/avatarPlaceholder.jpg'
import Image from 'next/image'

export default function Profile() {
	return (
		<div className={profileStyles['profile-wrapper']}>
			<SectionTitle>Профиль</SectionTitle>
			<div className={profileStyles['flex-wrapper']}>
				<div>
					<Image
						src={avatarPlaceholder}
						alt='Avatar Placeholder'
						width={93}
						height={93}
					/>
				</div>
				<div className={profileStyles.form}>
					<div className={profileStyles['span-label-wrapper']}>
						<label>Имя</label>
						<span>Джолдаспаев Алимжан</span>
					</div>
					<div className={profileStyles['span-label-wrapper']}>
						<label>Email</label>
						<span>name@mail.ru</span>
					</div>
					<div className={profileStyles['span-label-wrapper']}>
						<label>Телефон</label>
						<span>+7 (123) 456-78-90</span>
					</div>
					<div className={profileStyles['span-label-wrapper']}>
						<label>Адрес</label>
						<span>Адрес</span>
					</div>
				</div>
			</div>
		</div>
	)
}
