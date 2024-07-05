import { Loader } from '@geist-ui/icons'
import styles from './Loader.module.css'

export function SmallLoader() {
	return <Loader className={`${styles.primaryLoader} ${styles.smallLoader}`} />
}

export function BigLoader() {
	return <Loader className={`${styles.primaryLoader} ${styles.bigLoader}`} />
}
