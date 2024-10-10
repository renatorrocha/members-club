import { CornerDownLeft } from "lucide-react";
import Logo from "/logo.svg";

export default function App() {
	return (
		<main className="px-4 pt-8 mx-auto">
			<div className="border w-full items-center">
				<img
					src={Logo}
					alt="Member Club logo"
					className="w-[100px] h-12 mx-auto mb-4"
				/>

				<div className="py-2 pr-4 pl-2 border rounded-xl border-base-gray-400 flex gap-3">
					<input
						placeholder="ID do Cartão"
						className="placeholder:text-base-gray-500 placeholder:text-md border-0 flex-1"
					/>

					<button
						type="submit"
						className="h-10 w-10 bg-base-gray-700/60 items-center rounded-xl"
					>
						<CornerDownLeft className="size-5 text-base-white m-auto" />
					</button>
				</div>
			</div>
		</main>
	);
}
