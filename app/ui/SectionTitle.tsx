import { ReactNode } from 'react'
import styles from './SectionTitle.module.scss'
import clsx from 'clsx'

interface SectionTitleProps {
	children: ReactNode
	className?: string
}

export default function SectionTitle({
	children,
	className,
}: SectionTitleProps) {
	return <h3 className={clsx(styles.title, className)}>{children}</h3>
}
