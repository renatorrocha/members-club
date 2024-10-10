import { CornerDownLeft } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function InputCardId() {
	const [cardId, setCardId] = useState("");

	return (
		<div className="py-2 pr-4 pl-2 border rounded-xl border-base-gray-400 bg-base-gray-300 flex gap-3 focus-within:border-principal-pink transition-all duration-300">
			<input
				type="text"
				placeholder="ID do Cartão"
				className="placeholder:text-base-gray-500 placeholder:text-md text-base-gray-700 caret-principal-pink bg-transparent border-0 flex-1 focus:outline-none focus:border-transparent focus:ring-0 text-md"
				value={cardId}
				onChange={(e) => setCardId(e.target.value)}
			/>

			<button
				type="submit"
				className={twMerge(
					"h-10 w-10 bg-base-gray-700/60 items-center rounded-xl transition-all duration-300",
					cardId && "bg-base-gray-700",
				)}
			>
				<CornerDownLeft className="size-5 text-base-white m-auto" />
			</button>
		</div>
	);
}
