import React from 'react'

interface IButtonProps {
	text?: string
	style?: React.CSSProperties
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: IButtonProps): JSX.Element {
	const { text, ...otherProps } = props

	return <button {...otherProps}>{text}</button>
}

Button.defaultProps = {
	text: 'button'
}
