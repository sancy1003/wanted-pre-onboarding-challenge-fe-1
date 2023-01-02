const TodoList = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-slate-400">
			<div className="flex gap-x-5 h-[600px]">
				<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
					<div className="flex justify-between items-end mb-5">
						<h1 className="font-bold text-lg">Todos</h1>
						<button className="p-2 bg-cyan-500 hover:bg-cyan-400 rounded-md text-xs text-white">
							Todo 추가
						</button>
					</div>
					<ul className="flex flex-col gap-y-2 overflow-y-scroll">
						{[0, 1, 2, 3, 4, 5].map((item) => (
							<li
								key={item}
								className="flex px-4 py-2 text-[15px] bg-slate-100 hover:bg-slate-50 rounded-md cursor-pointer"
							>
								<p className="flex-1">{item}</p>
								<div className="flex gap-x-2">
									<button
										onClick={(e) => {
											e.stopPropagation();
										}}
										className="text-slate-600 hover:text-cyan-700 hover:font-bold"
									>
										수정
									</button>
									<button
										onClick={(e) => {
											e.stopPropagation();
										}}
										className="text-slate-600 hover:text-cyan-700 hover:font-bold"
									>
										삭제
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col w-[500px] bg-white rounded-md p-5">
					<div className="mb-5">
						<h1 className="font-bold text-lg">일정 추가</h1>
					</div>
					<div className="flex flex-col gap-y-4 h-full">
						<input
							type="text"
							placeholder="일정 이름"
							className="border border-slate-200 bg-slate-100 rounded-sm px-4 py-3"
						/>
						<textarea
							placeholder="일정 내용"
							className="flex-1 border border-slate-200 bg-slate-100 rounded-sm px-4 py-3 resize-none"
						/>
						<div className="flex justify-end gap-x-4">
							<button className="text-slate-600 hover:text-cyan-700 hover:font-bold">
								등록
							</button>
							<button className="text-slate-600 hover:text-cyan-700 hover:font-bold">
								취소
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
