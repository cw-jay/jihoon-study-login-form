/**
 * validateEmailPrefix
 * @description 입력된 문자열이 email 형식에 맞는지 검사(@ 앞까지)
 * @param {string} emailPrefix - 검사할 대상 값
 * @return {boolean} true or false
 */
export function validateEmailPrefix(emailPrefix: string): boolean {
	// regex: @ 가 포함된, 알파벳과 숫자로 이루어진 문자열 체크, dot(.), underscore(_), dash(-)는 문자열 사이에서만 가능
	const emailRegex = new RegExp(/^[a-z0-9]+(?:[._-][a-z0-9]+)*@/, 'i')
	return emailRegex.test(emailPrefix)
}