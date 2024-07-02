import { USER_MOCK } from './mock/user'

export default function About() {
	return (
		<main>
			<h1>Name: {USER_MOCK.firstName}</h1>
			<span>Lastname: {USER_MOCK.lastName}</span>
			<p>Username: {USER_MOCK.username}</p>
			<p>Description: {USER_MOCK.descripton}</p>
			<ul>
				{USER_MOCK.interests.map((interest) => (
					<li key={interest.title}>{interest.title}</li>
				))}
			</ul>
		</main>
	)
}
