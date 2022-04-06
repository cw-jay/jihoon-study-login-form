// dependency
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logOut, getUserId, getIsAutoLogin } from 'services/login'

// components
import Button from 'components/atoms/Button'

function MyPage() {
	const userId = getUserId()
	const navigate = useNavigate()
	useEffect(() => {
		if (!userId) {
			return navigate('/')
		}
		if (!getIsAutoLogin()) {
			logOut()
		}
	}, [userId])
	const onClickLogOutButton = () => {
		logOut()
		navigate('/')
	}
	return (
		<>
			<div>
				로그인이 되었습니다. <br />
				{userId} 님 환영합니다.
			</div>
			<br />
			<Button text="로그아웃 하기" onClick={onClickLogOutButton} />
		</>
	)
}

export default MyPage
