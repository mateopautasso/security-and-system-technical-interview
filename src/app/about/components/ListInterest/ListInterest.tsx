'use client'
import { Settings, Code, Video, Book, Music } from '@geist-ui/icons'
import { Chip, ChipList } from '@/components'
import { USER_MOCK } from '../../../../utils/mock/user.mock'

const IconMap = new Map()
IconMap.set(USER_MOCK.interest.chips[0].title, Settings)
IconMap.set(USER_MOCK.interest.chips[1].title, Code)
IconMap.set(USER_MOCK.interest.chips[2].title, Video)
IconMap.set(USER_MOCK.interest.chips[3].title, Book)
IconMap.set(USER_MOCK.interest.chips[4].title, Music)

export function ListInterest() {
	return (
		<ChipList>
			{USER_MOCK.interest.chips.map((interest) => {
				const Icon = IconMap.get(interest.title)
				return (
					<li key={interest.title}>
						<Chip label={interest.title} icon={<Icon />} />
					</li>
				)
			})}
		</ChipList>
	)
}
