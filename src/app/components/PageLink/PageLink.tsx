import Link from 'next/link'
import style from './PageLink.module.css'

interface PageLinkProps {
	label: string
	href: string
}

export function PageLink({ label, href }: PageLinkProps) {
	return (
		<Link href={href} className={style.link}>
			{label}
		</Link>
	)
}
