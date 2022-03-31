import React from 'react'

interface CheckboxProps {
	id: string
	label?: string
	className?: string
	disabled?: boolean
	checked?: boolean
	onClick?: React.MouseEventHandler<HTMLInputElement>
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Checkbox(props: CheckboxProps): JSX.Element {
	const { id = '', label = '', ...otherProps } = props
	return (
		<>
			<input type="checkbox" id={`${id}${label}`} {...otherProps} />
			<label htmlFor={`${id}${label}`}>{label}</label>
		</>
	)
}

Checkbox.defaultProps = {}
