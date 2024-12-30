import { data } from "../App";
import Card from "./card";
import GiftPin from "/gift-pin.svg";

export default function UserProgressCard({
  className,
}: {
  className?: string;
}) {
  const cutsRemaining = data.loyaltyCard.cutsRemaining;

  return (
    <Card className={className + " lg:p-8"}>
      <div className="flex-1 gap-6 flex justify-between items-center">
        <div className=" flex-1">
          <p className="text-base-gray-500 text-sm">
            <span className="text-base-gray-600 title-sm">{cutsRemaining}</span>{" "}
            cortes restantes
          </p>

          <div className="flex items-center gap-3">
            <div className="w-full bg-base-gray-300 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-base"
                style={{
                  width: `${
                    (data.loyaltyCard.totalCuts / data.loyaltyCard.cutsNeeded) *
                    100
                  }%`,
                }}
              />
            </div>

            <p className="text-xs text-base-gray-500 w-fit text-nowrap">
              {data.loyaltyCard.totalCuts} de {data.loyaltyCard.cutsNeeded}
            </p>
          </div>
        </div>

        <div className="bg-base-gray-200 rounded-full size-[56px] flex items-center justify-center">
          <img src={GiftPin} alt="" className="object-fill size-9" />
        </div>
      </div>
    </Card>
  );
}
