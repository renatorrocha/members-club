import { data } from "../App";
import Card from "./card";
import SealCheck from "/seal-check.svg";

export default function AppointmentHistory({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={className + "lg:p-6"}>
      <div className="flex-1 flex flex-col gap-4 h-[420px]">
        <div className="flex justify-between items-center">
          <p className="text-base-gray-500 subtitle-sm uppercase">Histórico</p>

          <p className="text-xs text-base-gray-500">
            {data.loyaltyCard.totalCuts} cortes
          </p>
        </div>

        <div className="h-[1px] bg-base-gray-300 w-full" />

        {data.appointmentHistory.map((appointment) => (
          <div
            className="flex justify-between items-center"
            key={appointment.date}
          >
            <div className="flex flex-col gap-1">
              <p className="subtitle-sm text-base-gray-600">
                {appointment.date}
              </p>
              <p className="text-xs text-base-gray-500">{appointment.time}</p>
            </div>

            <div className="size-10 bg-principal-green/10 rounded-full flex items-center justify-center">
              <img src={SealCheck} alt={""} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
