import { MaximumFieldLength, MinimumFieldLength } from '@/models/form.model'
import { validateTextFieldLength, validateEmail } from '@/utils/validations/form.validation'

export interface ContactFormState {
	name: {
		value: string
		error: boolean
	}
	email: {
		value: string
		error: boolean
	}
	message: {
		value: string
		error: boolean
	}
}

export enum ActionTypes {
	NAME = 'name',
	EMAIL = 'email',
	MESSAGE = 'message',
}

export interface Action {
	type: ActionTypes
	payload: string
}

export const initialState: ContactFormState = {
	name: {
		value: '',
		error: false,
	},
	email: {
		value: '',
		error: false,
	},
	message: {
		value: '',
		error: false,
	},
}

export const contactFormReducer = (state: ContactFormState, action: Action) => {
	const { type, payload } = action

	switch (type) {
		case ActionTypes.NAME:
			if (validateTextFieldLength(payload, MinimumFieldLength.CONTACT_FORM_NAME, MaximumFieldLength.CONTACT_FORM_NAME)) {
				return { ...state, name: { value: payload, error: false } }
			} else return { ...state, name: { ...state.name, error: true } }

		case ActionTypes.EMAIL:
			if (validateEmail(payload, MaximumFieldLength.CONTACT_FORM_EMAIL)) {
				return { ...state, email: { value: payload, error: false } }
			} else return { ...state, email: { ...state.email, error: true } }

		case ActionTypes.MESSAGE:
			if (validateTextFieldLength(payload, MinimumFieldLength.CONTACT_FORM_MESSAGE, MaximumFieldLength.CONTACT_FORM_MESSAGE)) {
				return { ...state, message: { value: payload, error: false } }
			} else return { ...state, message: { ...state.message, error: true } }

		default:
			return state
	}
}
