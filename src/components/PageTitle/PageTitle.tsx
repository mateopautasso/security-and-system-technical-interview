import style from './PageTitle.module.css'

interface PageTitleProps {
	label: string
}

export function PageTitle({ label }: PageTitleProps) {
	return <h1 className={style.h1}>{label}</h1>
}
