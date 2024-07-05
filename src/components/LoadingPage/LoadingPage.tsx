import { BigLoader, SkeletonPage } from '@/components'

export function LoadingPage() {
	return (
		<main>
			<SkeletonPage>
				<BigLoader />
			</SkeletonPage>
		</main>
	)
}
