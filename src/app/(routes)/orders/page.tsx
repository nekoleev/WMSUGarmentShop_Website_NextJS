/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};
type Payment = {
  order: string;
  status: string;
  product: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "product",
    header: "Product"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    order: "ORD015",
    status: "Pending",
    product: "Polo - Male",
    lastOrder: "2024-03-30",
    method: "Cash"
  },
  {
    order: "ORD014",
    status: "Completed",
    product: "Polo - Female",
    lastOrder: "2024-02-20",
    method: "PayMaya"
  },
  {
    order: "ORD013",
    status: "Processing",
    product: "Slacks - Male",
    lastOrder: "2024-01-15",
    method: "Cash"
  },
  {
    order: "ORD012",
    status: "Completed",
    product: "Slacks - Female",
    lastOrder: "2023-12-08",
    method: "GCash"
  },
  {
    order: "ORD011",
    status: "Pending",
    product: "Polo - Female",
    lastOrder: "2023-11-25",
    method: "GCash"
  },
  {
    order: "ORD010",
    status: "Completed",
    product: "Polo - Male",
    lastOrder: "2023-10-18",
    method: "PayMaya"
  },
  {
    order: "ORD009",
    status: "Processing",
    product: "Polo - Male",
    lastOrder: "2023-09-05",
    method: "Cash"
  },
  {
    order: "ORD008",
    status: "Pending",
    product: "Slacks - Male",
    lastOrder: "2023-08-30",
    method: "Cash"
  },
  {
    order: "ORD007",
    status: "Completed",
    product: "Slacks - Female",
    lastOrder: "2023-07-22",
    method: "GCash"
  },
  {
    order: "ORD006",
    status: "Processing",
    product: "Slacks - Female",
    lastOrder: "2023-06-18",
    method: "Cash"
  },
  {
    order: "ORD005",
    status: "Completed",
    product: "PATHFit Uniform",
    lastOrder: "2023-05-12",
    method: "Cash"
  },
  {
    order: "ORD004",
    status: "Pending",
    product: "PATHFit Uniform",
    lastOrder: "2023-04-05",
    method: "GCash"
  },
  {
    order: "ORD003",
    status: "Completed",
    product: "PATHFit Uniform",
    lastOrder: "2023-03-10",
    method: "PayMaya"
  },
  {
    order: "ORD002",
    status: "Processing",
    product: "PATHFit Uniform",
    lastOrder: "2023-02-20",
    method: "Cash"
  },
  {
    order: "ORD001",
    status: "Pending",
    product: "PATHFit Uniform",
    lastOrder: "2023-01-15",
    method: "PayMaya"
  }
];


export default function OrdersPage({ }: Props) {
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
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
          <Skeleton className="h-[50px] w-[1100px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}