import { PrimaryButton } from '@/components'
import { render, screen } from '@testing-library/react'

jest.mock('@/components/Loader/Loader', () => {
	return {
		__esModule: true,
		SmallLoader: () => <svg data-testid='small-loader'>SmallLoader Mock</svg>,
	}
})

it('renderiza SmallLoader cuando la prop "load" es "true"', () => {
	render(<PrimaryButton load={true}>My Button</PrimaryButton>)

	expect(screen.getByTestId('small-loader')).toBeInTheDocument()
})
