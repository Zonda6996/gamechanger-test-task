import clsx from 'clsx'
import React, { ReactNode } from 'react'
import styles from './Payments.module.scss'

interface StatusBageProps {
	children: ReactNode
	className?: string
}

export default function StatusBadge({ children, className }: StatusBageProps) {
	return <span className={clsx(styles.badge, className)}>{children}</span>
}
