import { data } from "../App";
import Card from "./card";

export default function UserCard() {
  return (
    <Card>
      <figure className="p-[3px] bg-gradient-base rounded-[18px] w-fit">
        <img
          src="https://picsum.photos/300"
          alt="Random User"
          className="size-16 rounded-2xl bg-white p-[3px]"
        />
      </figure>

      <div className="flex flex-col">
        <h2 className="text-base-gray-600 title-sm">{data.name}</h2>
        <p className="text-base-gray-500 text-xs">
          Cliente desde {data.clientSince}
        </p>
      </div>
    </Card>
  );
}
