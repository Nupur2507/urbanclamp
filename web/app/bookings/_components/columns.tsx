"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Booking } from "@/data/bookings";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Booking>[] = [
    // {
    //     id: "track",
    //     header: "Track/View",
    //     cell: ({ row }) => {
    //         return (
    //             <Button variant="outline">
    //                 <Link href={`/bookings/${row.getValue("id")}`}>
    //                     {row.getValue("status") === "complete" ||
    //                     row.getValue("status") === "failed"
    //                         ? "View"
    //                         : "Track"}
    //                 </Link>
    //             </Button>
    //         );
    //     },
    // },
    {
        accessorKey: "id",
        header: "Booking ID",
    },
    {
        accessorKey: "bookingStatus",
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className="font-mono">{row.getValue("bookingStatus")}</div>
            );
        },
    },
    {
        accessorKey: "serviceId",
        header: "Service ID",
    },
    {
        accessorKey: "partnerId",
        header: "Partner ID",
    },
    { accessorKey: "bookingDate", header: "Booking Date" },
    {
        accessorKey: "userId",
        header: "User ID",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const payment = row.original;

    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button
    //                         variant="ghost"
    //                         className="h-8 w-8 p-0"
    //                     >
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontalIcon className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() =>
    //                             navigator.clipboard.writeText(payment.id)
    //                         }
    //                     >
    //                         Copy payment ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem>View customer</DropdownMenuItem>
    //                     <DropdownMenuItem>
    //                         View payment details
    //                     </DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         );
    //     },
    // },
];
