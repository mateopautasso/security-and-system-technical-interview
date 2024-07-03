import React from 'react'
import styles from './SectionTitle.module.css'

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function SectionTitle({ ...props }: SectionTitleProps) {
	return (
		<h2 className={styles.h2} {...props}>
			{props.children}
		</h2>
	)
}
