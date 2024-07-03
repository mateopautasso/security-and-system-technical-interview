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

interface ChipListProps {
	children: React.ReactNode
}
export function ChipList({ children }: ChipListProps) {
	return <ul className={styles.chipList}>{children}</ul>
}
