export enum MinimumFieldLength {
	CONTACT_FORM_NAME = 1,
	CONTACT_FORM_MESSAGE = 1,
}

export enum MaximumFieldLength {
	CONTACT_FORM_EMAIL = 254,
	CONTACT_FORM_NAME = 50,
	CONTACT_FORM_MESSAGE = 500,
}

export enum FieldErrorMessages {
	MIN_MAX_FORM_NAME = `El campo debe tener entre ${MinimumFieldLength.CONTACT_FORM_NAME} y ${MaximumFieldLength.CONTACT_FORM_NAME} caracteres.`,
	MIN_MAX_FORM_MESSAGE = `El campo debe tener entre ${MinimumFieldLength.CONTACT_FORM_MESSAGE} y ${MaximumFieldLength.CONTACT_FORM_MESSAGE} caracteres.`,
	INVALID_EMAIL = 'Email no válido.',
}
