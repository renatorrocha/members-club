import Logo from "/logo.svg";
import InputCardId from "./components/input-card-id";
import UserCard from "./components/user-card";
import LoyaltyCard from './components/loyalty-card';

const data = {
    id: "207-245-699-104",
    name: "Capitão Nascimento",
    clientSince: "12/04/2023",
    appointmentHistory: [
        {
            date: "01/05/2024",
            time: "10:00",
        },
        {
            date: "12/02/2024",
            time: "09:00",
        },
        {
            date: "30/12/2023",
            time: "11:00",
        },
        {
            date: "05/11/2023",
            time: "10:30",
        },
    ],
    loyaltyCard: {
        totalCuts: 4,
        cutsNeeded: 10,
        cutsRemaining: 6,
    },
};

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

                <LoyaltyCard />
            </div>
        </main>
    );
}
