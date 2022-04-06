export function autoLogIn({
	id,
	isAutoLogin
}: {
	id: string
	isAutoLogin: boolean
}) {
	localStorage.setItem('isAuth', JSON.stringify({ id, isAutoLogin }))
}

export function logOut() {
	localStorage.removeItem('isAuth')
}

export function getIsAutoLogin(): boolean {
	const isAuth = localStorage.getItem('isAuth')
	if (isAuth) {
		return JSON.parse(isAuth).isAutoLogin
	}
	return false
}

export function getUserId(): string {
	const isAuth = localStorage.getItem('isAuth')
	if (isAuth) {
		return JSON.parse(isAuth).id
	}
	return ''
}
