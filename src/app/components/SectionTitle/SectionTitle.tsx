import styles from './SectionTitle.module.css'

interface SectionTitleProps {
	label: string
}

export function SectionTitle({ label }: SectionTitleProps) {
	return <h2 className={styles.h2}>{label}</h2>
}
