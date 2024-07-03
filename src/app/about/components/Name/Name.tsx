import styles from './Name.module.css'

interface NameProps {
	firstName: string
	lastName: string
}

export function Name({ firstName, lastName }: NameProps) {
	return (
		<p className={styles.name}>
			{firstName} {lastName}
		</p>
	)
}
