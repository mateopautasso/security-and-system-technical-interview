import styles from './styles/Form.module.css'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export function Form({ children, ...props }: FormProps) {
	return (
		<form className={styles.form} {...props}>
			{children}
		</form>
	)
}
