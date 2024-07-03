import { SectionTitle, PageTitle, PageLink, Chip, ChipList, Input, TextArea, PrimaryButton, Label } from '@/components'
import { Avatar, Name, Username } from './components'
import { USER_MOCK } from './mock/user.mock'
import { Activity } from '@geist-ui/icons'
import styles from './about.module.css'
import { Form } from '@/components/Form/Form'

export default function About() {
	return (
		<main>
			<header className={styles.header}>
				<PageTitle label='Sobre mí' />
				<PageLink label='INICIO' href='/' />
			</header>

			<article className={styles.article}>
				<header className={styles.articleHeader}>
					<figure className={styles.figure}>
						<Avatar
							src={'https://lh3.googleusercontent.com/a/ACg8ocL44MPyt5GGQHkguoAjR9F1c7o3XeI1KlbocpcY5-n34hQZnZYl=s288-c-no'}
							alt={`Profile picture of ${USER_MOCK.username}`}
						/>
					</figure>
					<div className={styles.articleHeaderInfo}>
						<Name firstName={USER_MOCK.firstName} lastName={USER_MOCK.lastName} />
						<Username username={USER_MOCK.username} />
					</div>
				</header>

				<section className={styles.section}>
					<SectionTitle label='¿Quién soy?' />
					<p>{USER_MOCK.descripton}</p>
				</section>

				<section className={styles.section}>
					<SectionTitle label='Intereses' />
					<ChipList>
						{USER_MOCK.interests.map((interest) => (
							<li key={interest.title}>
								<Chip label={interest.title} icon={<Activity />} />
							</li>
						))}
					</ChipList>
				</section>

				<section className={styles.section}>
					<SectionTitle label='Contacto' />
					<Form action=''>
						<Label>
							Nombre <Input type='text' />
						</Label>

						<Label>
							Email <Input type='text' />
						</Label>

						<Label>
							Mensaje <TextArea />
						</Label>

						<PrimaryButton>Enviar</PrimaryButton>
					</Form>
				</section>
			</article>
		</main>
	)
}
