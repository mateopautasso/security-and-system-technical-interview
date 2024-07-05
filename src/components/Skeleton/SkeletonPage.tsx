import styles from './SkeletonPage.module.css'

export function SkeletonPage({ children }: { children?: React.ReactNode }) {
	return <div className={styles.main}>{children}</div>
}
