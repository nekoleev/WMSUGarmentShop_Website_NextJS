/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  discription: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent className="">
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm text-red-500 font-semibold">{props.label}</p>
        {/* icon */}
        <props.icon className="h-4 w-4 text-red-600" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-red-600">{props.amount}</h2>
        <p className="text-xs text-green-600">{props.discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}