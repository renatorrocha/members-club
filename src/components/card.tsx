import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={twMerge(
        "bg-base-gray-100 border-base-gray-300 rounded-2xl p-4 flex gap-4 items-center h-full",
        className
      )}
    >
      {children}
    </article>
  );
}
