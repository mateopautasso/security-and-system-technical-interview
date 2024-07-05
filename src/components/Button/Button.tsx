import styles from './Button.module.css'
import { SmallLoader } from '../Loader/Loader'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	load?: boolean
}

export function PrimaryButton({ ...props }: ButtonProps) {
	return (
		<button className={`${styles.button} ${styles.primaryButton}`} datatype={props.load ? 'load' : ''} {...props}>
			{props.load ? <SmallLoader /> : props.children}
		</button>
	)
}
