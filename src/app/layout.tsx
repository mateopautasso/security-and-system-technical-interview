import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Security and System Interview',
	description: 'Entrevista técnica para la empresa "Security and System".',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
