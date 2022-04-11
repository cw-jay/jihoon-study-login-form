// dependency
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logIn } from 'services/login'
import { validateEmailFormat } from 'utils/common'
import useEmailFilter from 'hooks/useEmailRecommend'
import useInput from 'hooks/useInput'

// components
import Button from 'components/atoms/Button'
import Checkbox from 'components/atoms/Checkbox'
import Password from 'components/molecules/Password'
import Autocomplete from 'components/molecules/Autocomplete'

function Login() {
	const [isAutoLogin, setIsAutoLogin] = useState(false)
	const { isTouched: isEmailTouched, ...emailFilterProps } = useEmailFilter()
	const isEmptyValue = (value: string) => {
		return value.length === 0
	}
	const { isError: isPasswordInvalid, ...passwordProps } = useInput(
		'',
		isEmptyValue
	)
	const navigate = useNavigate()

	const onChangeAutoLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsAutoLogin(e.target.checked)
	}

	const submit = () => {
		logIn({ id: emailFilterProps.value, isAutoLogin })
		navigate('/mypage')
	}

	const isDisabledSubmitButton = useMemo(() => {
		return (
			isEmptyValue(passwordProps.value) ||
			isEmptyValue(emailFilterProps.value) ||
			!validateEmailFormat(emailFilterProps.value)
		)
	}, [passwordProps.value, emailFilterProps.value])

	return (
		<>
			<div className="row">
				<Autocomplete {...emailFilterProps} placeholder="아이디 (이메일)" />
			</div>
			{isEmailTouched && isEmptyValue(emailFilterProps.value) && (
				<span className="error-message">아이디(이메일)을 입력해주세요</span>
			)}
			{isEmailTouched &&
				emailFilterProps.value &&
				!validateEmailFormat(emailFilterProps.value) && (
					<span className="error-message">
						올바른 이메일 형식을 입력해주세요
					</span>
				)}
			<div className="row">
				<Checkbox
					id="autoLoginCheck"
					checked={isAutoLogin}
					onChange={onChangeAutoLogin}
					label="자동 로그인"
				/>
			</div>
			<div className="row">
				<Password {...passwordProps} placeholder="비밀번호" fullWidth />
			</div>
			{isPasswordInvalid && (
				<span className="error-message">비밀번호를 입력해주세요</span>
			)}
			<div className="row">
				<Button
					colorMode="black"
					className="fullWidth"
					text="로그인"
					onClick={submit}
					disabled={isDisabledSubmitButton}
				/>
			</div>
			<div className="row">
				<Button className="fullWidth" text="회원가입" />
			</div>
		</>
	)
}

export default Login
