export default function UserCard() {
	return (
		<article className="bg-base-gray-100 border-base-gray-300 rounded-2xl p-4 flex gap-4 items-center">
			<figure className="p-[3px] bg-gradient-base rounded-[18px] w-fit">
				<img
					src="https://picsum.photos/300"
					alt="Random User"
					className="size-16 rounded-2xl bg-white p-[3px]"
				/>
			</figure>

			<div className="flex flex-col ">
				<h2 className="text-base-gray-600 title-sm">name</h2>
				<p className="text-base-gray-500 title-xs">Cliente desde clientSince</p>
			</div>
		</article>
	);
}
