import styles from './Username.module.css'

interface UsernameProps {
	username: string
}

export function Username({ username }: UsernameProps) {
	return <span className={styles.username}>@{username}</span>
}
