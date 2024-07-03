import { SectionTitle, PageTitle, PageLink, Chip, ChipList, Input, TextArea, PrimaryButton, Label } from '@/components'
import { Avatar, Name, Username, ListInterest } from './components'
import { USER_MOCK } from '@/utils/mock/user.mock'
import { Form } from '@/components/Form/Form'
import styles from './about.module.css'

export default function About() {
	return (
		<main>
			<header className={styles.header}>
				<PageTitle>Sobre mí</PageTitle>
				<PageLink label='INICIO' href='/' />
			</header>

			<article className={styles.article}>
				<header>
					<figure>
						<Avatar src={'https://i.imgur.com/rYiuYrA.png'} alt={`Profile picture of ${USER_MOCK.username}`} />
					</figure>
					<div className={styles.articleHeaderInfo}>
						<Name firstName={USER_MOCK.firstName} lastName={USER_MOCK.lastName} />
						<Username username={USER_MOCK.username} />
					</div>
				</header>

				<section>
					<SectionTitle>¿Quién soy?</SectionTitle>
					<p>{USER_MOCK.descripton}</p>
				</section>

				<section>
					<SectionTitle>Intereses</SectionTitle>
					<ListInterest />
				</section>

				<section>
					<SectionTitle>Contacto</SectionTitle>
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
						<PrimaryButton>Enviar mensaje</PrimaryButton>
					</Form>
				</section>
			</article>
		</main>
	)
}
