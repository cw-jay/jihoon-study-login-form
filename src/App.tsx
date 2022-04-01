// dependency
import React, { useState } from 'react'
import './App.css'

// components
import Button from './atoms/Button'
import Checkbox from './atoms/Checkbox'
import Password from './molecules/Password'
import Autocomplete from './molecules/Autocomplete'

function filteredListForPartialMatch(arr: string[], sub: string): string[] {
	sub = sub.toLowerCase()
	return arr.filter(
		(str) =>
			sub.length <= str.length &&
			str.toLowerCase().startsWith(sub.slice(0, str.length))
	)
}

function App() {
	const [email, setEmail] = useState('')
	const [isShowEmailOptions, setShowEmailOptions] = useState(false)

	const emailList = ['gmail.com', 'naver.com', 'hanmail.net']
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
		if (emailRegex.test(e.target.value)) {
			showEmailList(true)
		} else {
			showEmailList(false)
		}
	}

	const showEmailList = (isShow: boolean) => {
		setShowEmailOptions(isShow)
	}
	return (
		<>
			<div className="container">
				<div className="row">
					<Autocomplete
						value={email}
						onChange={onChangeEmail}
						isShowOptions={isShowEmailOptions}
						options={filteredListForPartialMatch(
							emailList,
							email.substring(email.lastIndexOf('@') + 1)
						)}
						prefixTextForOptions={email.substring(
							0,
							email.lastIndexOf('@') + 1
						)}
						placeholder="아이디 (이메일)"
					/>
				</div>
				<div className="row">
					<Checkbox id="autoLoginCheck" label="자동 로그인" />
				</div>
				<div className="row">
					<Password placeholder="비밀번호" fullWidth />
				</div>
				<div className="row">
					<Button colorMode="black" className="fullWidth" text="로그인" />
				</div>
				<div className="row">
					<Button className="fullWidth" text="회원가입" />
				</div>
			</div>
		</>
	)
}

export default App
