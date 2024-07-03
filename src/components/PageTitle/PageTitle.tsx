import style from './PageTitle.module.css'

interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function PageTitle({ ...props }: PageTitleProps) {
	return (
		<h1 className={style.h1} {...props}>
			{props.children}
		</h1>
	)
}
