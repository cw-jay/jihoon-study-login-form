import React from 'react'

interface IButtonProps {
	text?: string
	colorMode?: 'black' | 'white'
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: IButtonProps) {
	const { text, className, colorMode, onClick } = props
	const textColor = colorMode === 'black' ? 'white' : 'black'
	return (
		<button
			style={{
				padding: '5px',
				color: textColor,
				backgroundColor: colorMode
			}}
			className={className}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

Button.defaultProps = {
	text: '로그인',
	colorMode: 'white'
}
