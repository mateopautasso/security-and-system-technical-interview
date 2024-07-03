import Image from 'next/image'
import styles from '@/assets/styles/page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<button>Bienvenido!</button>
			<p>TEXTO DE EJEMPLO</p>
		</main>
	)
}
