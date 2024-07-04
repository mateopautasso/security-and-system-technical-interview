import { Avatar, Name, Username, ListInterest, ContactForm } from './components'
import { SectionTitle, PageLink } from '@/components'
import { USER_MOCK } from '@/utils/mock/user.mock'
import styles from './about.module.css'

export default function About() {
	return (
		<main>
			<article className={styles.article}>
				<header>
					<figure className={styles.avatar}>
						<Avatar src={'https://i.imgur.com/rYiuYrA.png'} alt={`Profile picture of ${USER_MOCK.username}`} />
					</figure>
					<div className={styles.articleHeaderInfo}>
						<Name firstName={USER_MOCK.firstName} lastName={USER_MOCK.lastName} />
						<Username username={USER_MOCK.username} />
					</div>
				</header>

				<section>
					<SectionTitle>¿Quién soy?</SectionTitle>
					<p>{USER_MOCK.about}</p>
				</section>

				<section>
					<SectionTitle>Intereses</SectionTitle>
					<p>{USER_MOCK.interest.description}</p>
					<ListInterest />
				</section>

				<section>
					<SectionTitle>Contacto</SectionTitle>
					<ContactForm />
				</section>
			</article>
		</main>
	)
}
