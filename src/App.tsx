import Logo from "/logo.svg";
import InputId from "./components/button";

export default function App() {
	return (
		<main className="px-4 pt-8 mx-auto">
			<div className="border w-full items-center">
				<img
					src={Logo}
					alt="Member Club logo"
					className="w-[100px] h-12 mx-auto mb-4"
				/>

				<InputId />
			</div>
		</main>
	);
}
