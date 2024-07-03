import styles from './Chip.module.css'

interface ChipProps {
	label: string
	icon?: React.ReactElement
}

export function Chip({ label, icon }: ChipProps) {
	return (
		<span className={styles.chip}>
			{icon ? icon : null}
			{label}
		</span>
	)
}
