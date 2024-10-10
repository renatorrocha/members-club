export default function UserCard() {
	return (
		<article className="bg-base-gray-100 border-base-gray-300 rounded-2xl p-4">
			<figure className="p-1 bg-gradient-to-r from-[#2DAA6E] via-[#2DAAAA] to-[#D658B3] rounded-xl w-fit">
				<img
					src="https://picsum.photos/300"
					alt="Random User"
					className="size-14 rounded-xl"
				/>
			</figure>

			<h2>name</h2>
			<p>Cliente desde clientSince</p>
		</article>
	);
}
