import styles from './Button.module.css'
import { SmallLoader } from '../Loader/Loader'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	load?: boolean
}

export function PrimaryButton({ load, ...props }: ButtonProps) {
	return (
		<button className={`${styles.button} ${styles.primaryButton}`} data-load={load} {...props}>
			{load ? <SmallLoader /> : props.children}
		</button>
	)
}
