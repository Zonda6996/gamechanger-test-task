import type { Metadata } from 'next'
import './globals.scss'
import { inter } from './ui/fonts'
import HeaderWrapper from './components/Header/HeaderWrapper'

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
				<HeaderWrapper />
				<div className='app-wrapper'>
					<main className='page-content'>{children}</main>
				</div>
			</body>
		</html>
	)
}
