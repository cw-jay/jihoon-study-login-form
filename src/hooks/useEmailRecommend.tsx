import { useState } from 'react'

export default function useEmailFilter() {
	const [email, setEmail] = useState('')
	const [isShowEmailOptions, setShowEmailOptions] = useState(false)
	const emailList = ['gmail.com', 'naver.com', 'hanmail.net']

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isEmail = emailRegex.test(e.target.value)
		setEmail(e.target.value)
		showEmailList(isEmail)
	}

	const showEmailList = (isShow: boolean) => {
		setShowEmailOptions(isShow)
	}

	const getFilteredListForEmailLikeMatch = (
		arr: string[],
		sub: string
	): string[] => {
		const reg = new RegExp('^' + sub.substring(sub.lastIndexOf('@') + 1), 'i')
		return arr.filter((element) => element.match(reg))
	}

	const prefixTextForOptions = email.substring(0, email.lastIndexOf('@') + 1)

	return {
		...{
			value: email,
			isShowOptions: isShowEmailOptions,
			prefixTextForOptions,
			onChange: onChangeEmail,
			options: getFilteredListForEmailLikeMatch(emailList, email)
		}
	}
}
