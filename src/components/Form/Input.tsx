import { CSSProperties } from 'react'
import styles from './styles/Input.module.css'

interface ErrorFieldProps {
	message: string
	isAbsolute?: boolean
	top?: number
	left?: number
}
export function ErrorField({ message, isAbsolute, top, left }: ErrorFieldProps) {
	const location: CSSProperties = isAbsolute ? { position: 'absolute', top, left } : {}
	return (
		<span className={styles.errorField} style={location}>
			{message}
		</span>
	)
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean
}
export function Input({ ...props }: InputProps) {
	return <input className={styles.input} datatype={props.error ? 'error' : ''} {...props} />
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean
}
export function TextArea({ ...props }: TextAreaProps) {
	return <textarea className={styles.textArea} datatype={props.error ? 'error' : ''} {...props} />
}
