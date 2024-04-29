"use client"
/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { RussianRuble, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { useState, useEffect } from "react";
import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "₱45,231.89",
    discription: "+20.1% from last month",
    icon: RussianRuble
  },
  {
    label: "Monthly Visitors",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];


export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Generate a random delay between 0 and 2 seconds
    const randomDelay = Math.random() * 2;

    // Simulate loading by delaying setIsLoading(false) after the random delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, randomDelay * 1000); // Convert seconds to milliseconds

    // Clear the timeout when component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5  w-full">
        <Skeleton className="h-[30px] w-[283px]" />
        <div className="flex flex-col gap-5  w-full">
            <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                <Skeleton className="h-[126px] w-[283px]" />
                <Skeleton className="h-[126px] w-[283px]" />
                <Skeleton className="h-[126px] w-[283px]" />
                <Skeleton className="h-[126px] w-[283px]" />
            </section>
            <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
                <Skeleton className="h-[460px] w-[570px]" />
                <Skeleton className="h-[460px] w-[570px]"/>
                {/*  */}
            </section>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Products" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
    </div>
  );
}