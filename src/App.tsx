// dependency
import React, { useState } from 'react'
import './App.css'

// components
import Button from './atoms/Button'
import Checkbox from './atoms/Checkbox'
import Password from './molecules/Password'
import Autocomplete from './molecules/Autocomplete'
import useEmailFilter from './hooks/useEmailRecommend'

function App() {
	const emailFilterProps = useEmailFilter()
	return (
		<>
			<div className="container">
				<div className="row">
					<Autocomplete {...emailFilterProps} placeholder="아이디 (이메일)" />
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
