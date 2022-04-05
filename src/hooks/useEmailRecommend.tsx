import { useState } from 'react'
import { validateEmailPrefix } from '../util/common'

/**
 * useEmailFilter
 * @description email 관련된 state와 입력된 email을 기반으로 emailList를 필터 하기 위한 hook
 * @return {Object} {value: 입력받은 input 값 , isShowOptions: email 추천리스트를 보여주기 위한 flag, prefixTextForOptions: email 추천리스트 목록 값 앞에 붙을 문자열, onChange: input값이 바뀔때 호출되는 이벤트 리스너, options: 추천 email list }
 */
export default function useEmailFilter() {
	const [email, setEmail] = useState<string>('')
	const [isShowEmailOptions, setShowEmailOptions] = useState<boolean>(false)
	const emailList = ['gmail.com', 'naver.com', 'hanmail.net']

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isEmail = validateEmailPrefix(e.target.value)
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
		const regexForTargetInput = new RegExp(
			'^' + sub.substring(sub.lastIndexOf('@') + 1),
			'i'
		)
		return arr.filter((element) => element.match(regexForTargetInput))
	}

	const prefixTextForOptions = email.substring(0, email.lastIndexOf('@') + 1)

	return {
		value: email,
		isShowOptions: isShowEmailOptions,
		prefixTextForOptions,
		onChange: onChangeEmail,
		options: getFilteredListForEmailLikeMatch(emailList, email)
	}
}
