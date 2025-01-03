import { Gift } from "lucide-react";
import Card from "./card";
import CheckPin from "/check-pin.png";

const data = {
  id: "207-245-699-104",
  loyaltyCard: {
    totalCuts: 4,
    cutsNeeded: 10,
    cutsRemaining: 6,
  },
};

export default function LoyaltyCard({ className }: { className?: string }) {
  return (
    <Card className={className + " flex-col lg:py-8 lg:px-6 h-fit"}>
      <div className="flex items-start justify-between w-full">
        <div className="space-y-1">
          <p className="text-base-gray-500 subtitle-sm uppercase">
            Cartão Fidelidade
          </p>
          <p className="text-xs text-base-gray-500">
            Ao fazer cortes de cabelo, o <br className="block lg:hidden" />{" "}
            décimo sai de graça!
          </p>
        </div>

        <span className="px-2 bg-gray-200 py-1 rounded-3xl subtitle-sm text-base-gray-500">
          ID: {data.id}
        </span>
      </div>

      <section className="flex flex-wrap gap-2 items-center justify-center">
        {Array.from({ length: data.loyaltyCard.cutsNeeded }).map((_, index) => (
          <div
            key={index}
            className="size-14 md:size-24 rounded-lg bg-base-gray-200 flex items-center justify-center"
          >
            {index < data.loyaltyCard.totalCuts && (
              <img
                src={CheckPin}
                alt=""
                className="mx-auto size-10 md:size-16"
              />
            )}

            {index === data.loyaltyCard.cutsNeeded - 1 && (
              <Gift className="text-base-gray-300 md:size-12 " />
            )}
          </div>
        ))}
      </section>
    </Card>
  );
}
