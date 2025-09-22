'use client'

import Link from 'next/link'
import headerStyles from './Header.module.scss'
import { headerLinks } from './Header.data'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Header() {
	const pathname = usePathname()

	return (
		<header className={headerStyles.header}>
			<nav className={headerStyles.nav}>
				{headerLinks.map(link => (
					<Link key={link.href} href={link.href}>
						<div className={headerStyles['link-wrapper']}>
							<div
								className={clsx(
									headerStyles.link,
									pathname === link.href && headerStyles.active
								)}
							>
								<Image src={link.img} alt={link.img} />
								{link.name}
							</div>
						</div>
					</Link>
				))}
			</nav>
		</header>
	)
}
