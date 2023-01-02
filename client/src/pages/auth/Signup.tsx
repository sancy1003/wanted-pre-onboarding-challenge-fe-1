import { validateEmail, validateMinLength } from '../../utils/validate';

interface AuthForm {
	email: string;
	password: string;
}

interface Props {
	authForm: AuthForm;
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Signup = ({ authForm, handleOnChange, handleOnSubmit }: Props) => {
	const isButtonActive =
		validateEmail(authForm.email) && validateMinLength(authForm.password, 8);

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-slate-400">
			<form
				onSubmit={handleOnSubmit}
				className="bg-white rounded-sm overflow-hidden p-8"
			>
				<div className="mb-10 text-center font-bold text-3xl text-slate-700">
					회원가입
				</div>
				<div className="flex flex-col gap-y-2 mb-8 w-80">
					<input
						name="email"
						className="border border-slate-200 bg-slate-100 rounded-sm px-4 py-3"
						type="email"
						placeholder="이메일"
						onChange={handleOnChange}
						value={authForm.email}
					/>
					<input
						name="password"
						className="border border-slate-200 bg-slate-100 rounded-sm px-4 py-3"
						type="password"
						placeholder="비밀번호"
						minLength={8}
						onChange={handleOnChange}
						value={authForm.password}
					/>
				</div>
				<div className="flex flex-col items-center gap-y-3">
					<button
						type="submit"
						disabled={!isButtonActive}
						className="w-full p-4 bg-cyan-500 hover:bg-cyan-400 text-cyan-100 disabled:bg-slate-300 disabled:text-slate-500 font-bold"
					>
						회원가입
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
