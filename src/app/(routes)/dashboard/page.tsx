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

const uesrSalesData: SalesProps[] = [
  {
    name: "Loniel Gapol",
    email: "loniel.gapol@wmsu.edu.ph",
    saleAmount: "+₱500.00"
  },
  {
    name: "Jelaine Macias",
    email: "jelaine.macias@wmsu.edu.ph",
    saleAmount: "+₱500.00"
  },
  {
    name: "Vannest Zapanta",
    email: "vannest.zapanta@wmsu.edu.ph",
    saleAmount: "+₱500.00"
  },
  {
    name: "Jehana Khairan",
    email: "jehana.khairan@wmsu.edu.ph",
    saleAmount: "+₱500.00"
  },
  {
    name: "Richmond Bregun",
    email: "richmond.bregun@wmsu.edu.ph",
    saleAmount: "+₱500.00"
  }
];

export default async function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Generate a random delay between 1 and 3 seconds
    const randomDelay = Math.floor(Math.random() * 3) + 1;

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
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
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
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent className="">
          <p className="p-4 font-bold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}