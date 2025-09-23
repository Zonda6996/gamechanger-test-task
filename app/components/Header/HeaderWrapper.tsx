'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import { ROUTES } from '@/app/lib/routes'

const noHeaderRoutes: (typeof ROUTES)[keyof typeof ROUTES][] = [
	ROUTES.LOGIN,
	ROUTES.REGISTER,
]

export default function HeaderWrapper() {
	const pathname = usePathname()

	if (noHeaderRoutes.includes(pathname as (typeof noHeaderRoutes)[number])) {
		return null
	}

	return <Header />
}
