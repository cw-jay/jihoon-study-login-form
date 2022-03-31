import React from 'react'

interface IInputProps {
	id?: string
	type?: 'text' | 'password'
	value?: string
	className?: string
	style?: React.CSSProperties
	autoComplete?: 'off' | 'on'
	required?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
	onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
}

export default function Input(props: IInputProps): JSX.Element {
	return <input {...props} />
}

Input.defaultProps = {
	type: 'text',
	autoComplete: 'off'
}
