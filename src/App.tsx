import Logo from "/logo.svg";
import InputCardId from "./components/input-card-id";
import UserCard from "./components/user-card";
import FidelityCard from "./components/fidelity-card";

export default function App() {
	return (
		<main className="px-4 pt-8 mx-auto bg-base-gray-200 h-screen">
			<div className="border w-full items-center">
				<img
					src={Logo}
					alt="Member Club logo"
					className="w-[100px] h-12 mx-auto mb-4"
				/>

				<InputCardId />

				<UserCard />

				<FidelityCard />
			</div>
		</main>
	);
}
