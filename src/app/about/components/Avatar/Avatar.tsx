import styles from './Avatar.module.css'
import Image from 'next/image'
import { AVATAR_BLUR } from '@/utils/mock/user.mock'

interface AvatarProps {
	src: string
	alt: string
}

export function Avatar({ src, alt }: AvatarProps) {
	return <Image fill src={src} alt={alt} placeholder='blur' blurDataURL={AVATAR_BLUR} className={styles.image} />
}
