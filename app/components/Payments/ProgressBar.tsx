import styles from './Payments.module.scss'

interface ProgressBarProps {
	percentage: number
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
	return (
		<div className={styles['progress-bar-wrapper']}>
			<div className={styles['progress-bar-container']}>
				<div
					className={styles['progress-bar-fill']}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
			<span className={styles['progress-bar-label']}>{percentage}%</span>
		</div>
	)
}
