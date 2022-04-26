import React from 'react'

interface IButtonProps {
	id?: string
	text?: string
	colorMode?: 'black' | 'white'
	className?: string
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: IButtonProps) {
	const { text, id, className = '', colorMode, onClick, disabled } = props
	const textColor = colorMode === 'black' ? 'white' : 'black'
	return (
		<button
			style={{
				padding: '5px',
				color: textColor,
				backgroundColor: colorMode
			}}
			id={id}
			className={className}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

Button.defaultProps = {
	text: 'button',
	colorMode: 'white'
}
