import { UserInterface } from '@/models/user.model'

export const USER_MOCK: UserInterface = {
	firstName: 'Mateo',
	lastName: 'Pautasso',
	username: 'mateopautasso',
	avatar: '/src/assets/images/avatar.webp',
	email: 'mateopautassodev@gmail.com',
	about:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ut doloribus dicta voluptatem assumenda architecto aperiam a molestiae iusto inventore deleniti nobis esse rerum repellendus debitis quis alias, sequi quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, voluptas obcaecati pariatur similique culpa nihil reprehenderit in cumque tenetur aliquam ad. Beatae cum ullam enim, ut delectus mollitia fugit itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta unde maxime quibusdam, accusamus ex natus dolor voluptates hic magnam, in, reiciendis pariatur nam dicta illo aperiam voluptatibus non eligendi tempora.',
	interest: {
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A possimus aut, ipsa ipsum placeat pariatur laudantium non voluptates id esse modi fuga aperiam ab hic? Nostrum repellendus ipsum modi nobis. Lorem, ipsum dolor sit amet consectetur adipisicingelit. Harum deleniti asperiores nam aperiam, necessitatibus accusamus ducimus temporibus totam molestiae nihil est teneturullam. Nam consequuntur dolores sapiente dolorem rerum.',
		chips: [
			{ title: 'Desarrollo de Software', icon: '' },
			{ title: 'Desarrollo Web', icon: '' },
			{ title: 'Películas', icon: '' },
			{ title: 'Literatura', icon: '' },
			{ title: 'Música', icon: '' },
		],
	},
}

export const AVATAR_BLUR =
	'data:image/png;base64,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'
