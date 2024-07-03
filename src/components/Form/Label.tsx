import styles from './styles/Label.module.css'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ ...props }: LabelProps) {
	return (
		<label className={styles.label} {...props}>
			{props.children}
		</label>
	)
}
