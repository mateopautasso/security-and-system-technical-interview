'use client'
import { useReducer, useState } from 'react'
import { Form, Input, Label, ErrorField, PrimaryButton, TextArea } from '@/components'
import { contactFormReducer, initialState, ActionTypes } from './contactForm.reducer'
import { FieldErrorMessages } from '@/models/form.model'
import styles from './ContactForm.module.css'
type EventHandleChange = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export function ContactForm() {
	const [formState, dispatch] = useReducer(contactFormReducer, initialState)
	const [errorEmail, setErrorEmail] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (name: ActionTypes) => {
		return (event: EventHandleChange) => {
			if (name === ActionTypes.EMAIL) setErrorEmail(false)
			const { value } = event.target
			dispatch({ type: name, payload: value })
		}
	}

	const buttonDisabled = !formState.name.value || formState.name.error || !formState.message.value || formState.message.error

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const invalidEmail = !formState.email.value || formState.email.error
		invalidEmail ? setErrorEmail(true) : setErrorEmail(false)
		if (buttonDisabled || invalidEmail) return

		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			alert('Data: ' + JSON.stringify({ Nombre: formState.name.value, Email: formState.email.value, Message: formState.message.value }))
		}, 2000)
	}

	return (
		<Form action=''>
			<Label>
				Nombre <Input type='text' name='name' onChange={handleChange(ActionTypes.NAME)} error={formState.name.error} />
				{formState.name.error && <ErrorField message={FieldErrorMessages.MIN_MAX_FORM_NAME} />}
			</Label>

			<Label>
				Email <Input type='text' name='email' onChange={handleChange(ActionTypes.EMAIL)} error={errorEmail} />
				{errorEmail && <ErrorField message={FieldErrorMessages.INVALID_EMAIL} />}
			</Label>

			<Label>
				Mensaje <TextArea name='message' onChange={handleChange(ActionTypes.MESSAGE)} error={formState.message.error} />
				{formState.message.error && <ErrorField message={FieldErrorMessages.MIN_MAX_FORM_MESSAGE} />}
			</Label>

			<div className={styles.buttonContainer}>
				<PrimaryButton disabled={buttonDisabled || isLoading} load={isLoading} onClick={handleSubmit}>
					Enviar mensaje
				</PrimaryButton>
			</div>
		</Form>
	)
}
