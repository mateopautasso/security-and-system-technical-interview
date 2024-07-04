import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	load?: boolean
}

export function PrimaryButton({ ...props }: ButtonProps) {
	return (
		<button className={`${styles.button} ${styles.primaryButton}`} datatype={props.load ? 'load' : ''} {...props}>
			{props.children}
		</button>
	)
}
