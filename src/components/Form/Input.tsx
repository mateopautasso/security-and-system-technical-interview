import styles from './styles/Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export function Input({ ...props }: InputProps) {
	return <input className={styles.input} {...props} />
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export function TextArea({ ...props }: TextAreaProps) {
	return <textarea className={styles.textArea} {...props} />
}
