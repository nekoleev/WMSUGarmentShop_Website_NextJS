"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import PageTitle from "@/components/PageTitle"
import { cn } from "@/lib/utils"

const data: Orders[] = [
  {
    id: "dsa137",
    order: "ORD015",
    status: "Pending",
    product: "Polo - Male",
    dateOrder: "2024-03-30",
    method: "Cash"
  },
  {
    id: "dsa136",
    order: "ORD014",
    status: "Completed",
    product: "Polo - Female",
    dateOrder: "2024-02-20",
    method: "PayMaya"
  },
  {
    id: "dsa135",
    order: "ORD013",
    status: "Processing",
    product: "Slacks - Male",
    dateOrder: "2024-01-15",
    method: "Cash"
  },
  {
    id: "dsa134",
    order: "ORD012",
    status: "Completed",
    product: "Slacks - Female",
    dateOrder: "2023-12-08",
    method: "GCash"
  },
  {
    id: "dsa133",
    order: "ORD011",
    status: "Pending",
    product: "Polo - Female",
    dateOrder: "2023-11-25",
    method: "GCash"
  },
  {
    id: "dsa132",
    order: "ORD010",
    status: "Completed",
    product: "Polo - Male",
    dateOrder: "2023-10-18",
    method: "PayMaya"
  },
  {
    id: "dsa131",
    order: "ORD009",
    status: "Processing",
    product: "Polo - Male",
    dateOrder: "2023-09-05",
    method: "Cash"
  },
  {
    id: "dsa130",
    order: "ORD008",
    status: "Pending",
    product: "Slacks - Male",
    dateOrder: "2023-08-30",
    method: "Cash"
  },
  {
    id: "dsa129",
    order: "ORD007",
    status: "Completed",
    product: "Slacks - Female",
    dateOrder: "2023-07-22",
    method: "GCash"
  },
  {
    id: "dsa128",
    order: "ORD006",
    status: "Processing",
    product: "Slacks - Female",
    dateOrder: "2023-06-18",
    method: "Cash"
  },
  {
    id: "dsa127",
    order: "ORD005",
    status: "Completed",
    product: "PATHFit Uniform",
    dateOrder: "2023-05-12",
    method: "Cash"
  },
  {
    id: "dsa126",
    order: "ORD004",
    status: "Pending",
    product: "PATHFit Uniform",
    dateOrder: "2023-04-05",
    method: "GCash"
  },
  {
    id: "dsa125",
    order: "ORD003",
    status: "Completed",
    product: "PATHFit Uniform",
    dateOrder: "2023-03-10",
    method: "PayMaya"
  },
  {
    id: "dsa124",
    order: "ORD002",
    status: "Processing",
    product: "PATHFit Uniform",
    dateOrder: "2023-02-20",
    method: "Cash"
  },
  {
    id: "dsa123",
    order: "ORD001",
    status: "Pending",
    product: "PATHFit Uniform",
    dateOrder: "2023-01-15",
    method: "PayMaya"
  }
];

export type Orders = {
  id: string;
  order: string;
  status: string;
  product: string;
  dateOrder: string;
  method: string;
};

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "order",
    header: "Order No.",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <p>{row.getValue("order")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "product",
    header: "Product"
  },
  {
    accessorKey: "dateOrder",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Ordered
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase pl-4">{row.getValue("dateOrder")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200 text-red-800": row.getValue("status") === "Pending",
            "bg-orange-200 text-orange-800": row.getValue("status") === "Processing",
            "bg-green-200 text-green-800": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <PageTitle title="Orders" />
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Status..."
          value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("status")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-red-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
