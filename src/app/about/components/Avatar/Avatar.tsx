import styles from './Avatar.module.css'
import Image from 'next/image'

interface AvatarProps {
	src: string
	alt: string
}

export function Avatar({ src, alt }: AvatarProps) {
	return <Image width={75} height={75} src={src} alt={alt} className={styles.image}></Image>
}
