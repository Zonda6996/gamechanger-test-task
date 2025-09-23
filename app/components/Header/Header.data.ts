import { ROUTES } from '@/app/lib/routes'
import dashboardIcon from '@/app/assets/icons/dashboardIcon.svg'
import profileIcon from '@/app/assets/icons/profileIcon.svg'
import ordersIcon from '@/app/assets/icons/ordersIcon.svg'
import paymentsIcon from '@/app/assets/icons/paymentsIcon.svg'
import translationIcon from '@/app/assets/icons/translationIcon.svg'

export interface HeaderLinks {
	href: string
	name: string
	img: string
}

export const headerLinks: HeaderLinks[] = [
	{
		href: ROUTES.HOME,
		name: 'Дашборд',
		img: dashboardIcon,
	},
	{
		href: ROUTES.PROFILE,
		name: 'Профиль',
		img: profileIcon,
	},
	{
		href: ROUTES.ORDERS,
		name: 'Заказы',
		img: ordersIcon,
	},
	{
		href: ROUTES.PAYMENTS,
		name: 'Платежи',
		img: paymentsIcon,
	},
	{
		href: ROUTES.TRANSLATION,
		name: 'Трансляция',
		img: translationIcon,
	},
]
