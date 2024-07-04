export const validateEmail = (email: string, max: number) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return email.length <= max && emailRegex.test(email)
}

export const validateTextFieldLength = (textField: string, min: number, max: number) => textField.length >= min && textField.length <= max
