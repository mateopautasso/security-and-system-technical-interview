import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({ ...props }: ButtonProps) {
	return (
		<button className={`${styles.button} ${styles.primaryButton}`} {...props}>
			{props.children}
		</button>
	)
}
