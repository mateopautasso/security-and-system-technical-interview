import styles from '@/app/home.module.css'
import { SectionTitle } from '@/components'
import Link from 'next/link'

export default function Home() {
	return (
		<main className={styles.main}>
			<SectionTitle style={{ textDecoration: 'underline', textAlign: 'center', lineHeight: '1.4' }}>
				Prueba Técnica para Security and System
			</SectionTitle>
			<section>
				<p>
					<span>Candidato:</span> Mateo Pautasso
				</p>
				<p>
					<span>Puesto:</span> Desarrollador Frontend
				</p>
				<p>
					<span>Objetivo:</span>{' '}
					<Link href={'/about'} className={styles.link}>
						Sobre mí
					</Link>
				</p>
			</section>
		</main>
	)
}
