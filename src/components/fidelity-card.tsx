import Card from "./card";
import CheckPin from "/check-pin.svg";

export default function FidelityCard() {
	return (
		<Card className="flex-col">
			<div className="flex items-start justify-between w-full">
				<div className="space-y-1">
					<p className="text-base-gray-500 subtitle-sm">Cartão Fidelidade</p>
					<p className="text-xs text-base-gray-500">
						Ao fazer cortes de cabelo, o <br /> décimo sai de graça!
					</p>
				</div>

				<span className="px-2 bg-gray-200 py-1 rounded-3xl subtitle-sm text-base-gray-500">
					ID: 124-537-835-230
				</span>
			</div>

			<div className="size-14 rounded-lg bg-base-gray-200">
				<img src={CheckPin} alt="" />
			</div>
		</Card>
	);
}
