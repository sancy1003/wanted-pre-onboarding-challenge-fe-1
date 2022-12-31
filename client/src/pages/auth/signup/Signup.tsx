interface SignupForm {
	email: string;
	password: string;
}

interface Props {
	signupForm: SignupForm;
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Signup = ({ signupForm, handleOnChange, handleOnSubmit }: Props) => {
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
						value={signupForm.email}
					/>
					<input
						name="password"
						className="border border-slate-200 bg-slate-100 rounded-sm px-4 py-3"
						type="password"
						placeholder="비밀번호"
						minLength={8}
						onChange={handleOnChange}
						value={signupForm.password}
					/>
				</div>
				<div className="flex flex-col items-center gap-y-3">
					<button
						type="submit"
						className="w-full p-4 bg-cyan-500 hover:bg-cyan-400 text-cyan-100 font-bold"
					>
						회원가입
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;