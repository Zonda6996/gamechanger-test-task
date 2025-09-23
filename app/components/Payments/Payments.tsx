import SectionTitle from '@/app/ui/SectionTitle'
import paymentsStyles from './Payments.module.scss'
import Dropdown from './Dropdown'
import PaymentsEmployee from './PaymentsEmployee'
import PaymentsStatus from './PaymentsStatus'
import Image from 'next/image'
import arrowUpIcon from '@/app/assets/icons/arrowUp.svg'
import avatarPlaceholder from '@/app/assets/images/avatarPlaceholder.jpg'
import StatusBadge from './StatusBadge'
import ProgressBar from './ProgressBar'

export default function Payments() {
	return (
		<div className={paymentsStyles['payments-wrapper']}>
			<div className={paymentsStyles['title-dropdown-flex']}>
				<SectionTitle>Платежи</SectionTitle>
				<Dropdown />
			</div>
			<div>
				<div className={paymentsStyles['title-row']}>
					<div>
						<span>Employee</span>
						<Image
							src={arrowUpIcon}
							alt='Arrow Up Icon'
							width={11}
							height={11}
						/>
					</div>
					<span>Статус</span>
					<span>Выполнено</span>
					<span>Действие</span>
				</div>
				<div className={paymentsStyles['cols-wrapper']}>
					<div className={paymentsStyles['user-info']}>
						<Image
							src={avatarPlaceholder}
							alt='Avatar'
							width={45}
							height={45}
						/>
						<div>
							<p>Имя</p>
							<span>Почта@jourrapide.com</span>
						</div>
					</div>
					<StatusBadge className={paymentsStyles.red}>Не оплачено</StatusBadge>
					<ProgressBar percentage={96} />
					<span className={paymentsStyles.action}>Смотреть</span>

					<div className={paymentsStyles['user-info']}>
						<Image
							src={avatarPlaceholder}
							alt='Avatar'
							width={45}
							height={45}
						/>
						<div>
							<p>Gregory Davis A</p>
							<span>gregorydavis@dayrep.com</span>
						</div>
					</div>
					<StatusBadge className={paymentsStyles.green}>Оплачено</StatusBadge>
					<ProgressBar percentage={73} />
					<span className={paymentsStyles.action}>Смотреть</span>

					<div className={paymentsStyles['user-info']}>
						<Image
							src={avatarPlaceholder}
							alt='Avatar'
							width={45}
							height={45}
						/>
						<div>
							<p>Gregory Davis A</p>
							<span>gregorydavis@dayrep.com</span>
						</div>
					</div>
					<StatusBadge className={paymentsStyles.green}>Оплачено</StatusBadge>
					<ProgressBar percentage={73} />
					<span className={paymentsStyles.action}>Смотреть</span>
				</div>
			</div>
		</div>
	)
}
