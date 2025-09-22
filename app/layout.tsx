import type { Metadata } from 'next'
import './globals.scss' // глобальные стили
import { inter } from './ui/fonts'
import Header from './components/Header/Header'

export const metadata: Metadata = {
	title: 'Test Task',
	description: 'Test task for GameChanger',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
					<Header />
				<div className='app-wrapper'>
					<main className='page-content'>{children}</main>
				</div>
			</body>
		</html>
	)
}
