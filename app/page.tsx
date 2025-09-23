import Orders from './components/Orders/Orders'
import Payments from './components/Payments/Payments'
import Profile from './components/Profile/Profile'
import Translation from './components/Translation/Translation'
import dashboardStyles from './page.module.scss'

export default function Dashboard() {
	return (
		<div className={dashboardStyles['dashboard-wrapper']}>
			<h2 className={dashboardStyles.title}>Привет, Алим Джолдаспаев 👋️</h2>
			<div className={dashboardStyles['dashboard-blocks']}>
				<Orders />
				<Profile />
			</div>
			<div className={dashboardStyles['dashboard-blocks']}>
				<Translation />
				<Payments />
			</div>
		</div>
	)
}
