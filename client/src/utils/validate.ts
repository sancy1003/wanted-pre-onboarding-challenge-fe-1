// email 검증 정규식
export const validateEmail = (text: string) => {
	const regExp =
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	if (text.match(regExp) != null) return true;
	else return false;
};

// 문자 최소 길이 검사
export const validateMinLength = (text: string, min: number) => {
	return text.length >= min;
};

// 문자 최대 길이 검사
export const validateMaxLength = (text: string, max: number) => {
	return text.length <= max;
};
