/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  dateOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "dateOrder",
    header: "Date"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    name: "Loniel Gapol",
    email: "loniel.gapol@wmsu.edu.ph",
    dateOrder: "2024-03-30",
    method: "PayMaya"
  },
  {
    name: "Vannest Zapanta",
    email: "vannest.zapanta@wmsu.edu.ph",
    dateOrder: "2024-02-22",
    method: "GCash"
  },
  {
    name: "Jehana Khairan",
    email: "jehana.khairan@wmsu.edu.ph",
    dateOrder: "2024-01-18",
    method: "Cash"
  },
  {
    name: "Richmond Bregun",
    email: "richmond.bregun@wmsu.edu.ph",
    dateOrder: "2023-12-08",
    method: "GCash"
  },
  {
    name: "Emman Idulsa",
    email: "emman.idulsa@wmsu.edu.ph",
    dateOrder: "2023-11-05",
    method: "PayMaya"
  },
  {
    name: "Jelaine Macias",
    email: "jelaine.macias@wmsu.edu.ph",
    dateOrder: "2023-10-25",
    method: "Cash"
  }
];




export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}