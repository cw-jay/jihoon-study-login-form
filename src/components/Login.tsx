// dependency
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logIn } from 'services/login'

// components
import Button from 'components/atoms/Button'
import Checkbox from 'components/atoms/Checkbox'
import Password from 'components/molecules/Password'
import Autocomplete from 'components/molecules/Autocomplete'
import useEmailFilter from 'hooks/useEmailRecommend'

function Login() {
	const [isAutoLogin, setIsAutoLogin] = useState(false)
	const emailFilterProps = useEmailFilter()
	const navigate = useNavigate()

	const onChangeAutoLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsAutoLogin(e.target.checked)
	}

	function submit() {
		logIn({ id: emailFilterProps.value, isAutoLogin })
		navigate('/mypage')
	}
	return (
		<>
			<div className="row">
				<Autocomplete {...emailFilterProps} placeholder="아이디 (이메일)" />
			</div>
			<div className="row">
				<Checkbox
					id="autoLoginCheck"
					checked={isAutoLogin}
					onChange={onChangeAutoLogin}
					label="자동 로그인"
				/>
			</div>
			<div className="row">
				<Password placeholder="비밀번호" fullWidth />
			</div>
			<div className="row">
				<Button
					colorMode="black"
					className="fullWidth"
					text="로그인"
					onClick={submit}
				/>
			</div>
			<div className="row">
				<Button className="fullWidth" text="회원가입" />
			</div>
		</>
	)
}

export default Login
