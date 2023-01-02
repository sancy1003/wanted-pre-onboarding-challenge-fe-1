interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-slate-400">
			<div className="flex gap-x-5 h-[600px]">{children}</div>
		</div>
	);
};

export default Layout;
