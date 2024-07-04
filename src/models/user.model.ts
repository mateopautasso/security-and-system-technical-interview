export interface UserInterface {
	firstName: string
	lastName: string
	username: string
	avatar: string
	email: string
	about: string
	interest: Interest
}

export interface Interest {
	description: string
	chips: InterestChip[]
}

export interface InterestChip {
	title: string
	icon: string
}
