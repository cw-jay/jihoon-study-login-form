// dependency
import React, { useState } from 'react'

// components
import Input from 'components/atoms/Input'

interface IPasswordProps {
	value?: string
	className?: string
	placeholder?: string
	fullWidth?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	onBlur?: React.FocusEventHandler<HTMLInputElement>
}

export default function Password(props: IPasswordProps) {
	const [isPasswordType, setPasswordType] = useState<boolean>(true)
	const toggleInputType = () => {
		setPasswordType((isPasswordType) => !isPasswordType)
	}
	return (
		<>
			<Input {...props} type={isPasswordType ? 'password' : 'text'} />
			<span
				onClick={toggleInputType}
				style={{
					marginLeft: -50,
					cursor: 'pointer'
				}}
			>
				{isPasswordType ? 'show' : 'hide'}
			</span>
		</>
	)
}
