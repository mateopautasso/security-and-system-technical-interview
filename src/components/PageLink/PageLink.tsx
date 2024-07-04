import Link from 'next/link'
import style from './PageLink.module.css'
import React from 'react'

interface PageLinkProps {
	children: React.ReactNode
	href: string
}

export function PageLink({ children, href }: PageLinkProps) {
	return (
		<Link href={href} className={style.link}>
			{children}
		</Link>
	)
}
