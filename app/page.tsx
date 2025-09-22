import Orders from './components/Orders/Orders'
import Profile from './components/Profile/Profile'
import Translation from './components/Translation/Translation'
import dashboardStyles from './page.module.scss'

export default function Dashboard() {
	return (
		<div className={dashboardStyles['dashboard-wrapper']}>
			<h2 className={dashboardStyles.title}>Привет, Алим Джолдаспаев 👋️</h2>
			<div className={dashboardStyles['orders-profile-wrapper']}>
				<Orders />
				<Profile />
			</div>
			<Translation />
		</div>
	)
}
 