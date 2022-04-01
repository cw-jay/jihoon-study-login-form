// dependency
import React, { useState } from 'react'

// components
import Input from '../atoms/Input'

interface IPasswordProps {
	value?: string
	className?: string
	placeholder?: string
	fullWidth?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Password(props: IPasswordProps) {
	const [isPasswordType, setPasswordType] = useState(true)
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
