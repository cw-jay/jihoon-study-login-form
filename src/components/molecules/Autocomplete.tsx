// dependency
import React, { useState } from 'react'

// components
import Input from '../atoms/Input'

interface IAutocompleteProps {
	value: string
	options: string[]
	isShowOptions: boolean
	prefixTextForOptions?: string
	className?: string
	placeholder?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Autocomplete(props: IAutocompleteProps) {
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const {
		value,
		options,
		isShowOptions,
		prefixTextForOptions,
		className,
		placeholder,
		onChange
	} = props
	const onFocusInput = () => {
		setIsFocus(true)
	}
	const onBlurInput = () => {
		setIsFocus(false)
	}
	return (
		<div className={className}>
			<Input
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				fullWidth
				onFocus={onFocusInput}
				onBlur={onBlurInput}
			/>
			{isShowOptions && isFocus && (
				<div className="option-panel">
					<ul>
						{options.map((item) => (
							<li key={item} className="option-item">
								{prefixTextForOptions}
								{item}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
