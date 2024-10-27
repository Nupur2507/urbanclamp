"use client";

import {
    CircleUserRound,
    HomeIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { CartDrawer } from "../cart/_components/CartDrawer";
import { BottomCartDrawer } from "../cart/_components/BottomCartDrawer";
import BottomNavSearch from "./BottomNavSearch";

const BottomNav = () => {
    return (
        <nav className="fixed bottom-0 lg:hidden flex w-full">
            <div className="flex w-full justify-around items-center px-2 py-4 bg-background shadow-lg">
                <Link href="/homes">
                    <HomeIcon className="hover:cursor-pointer h-6 w-6" />
                </Link>
                <BottomNavSearch />
                <BottomCartDrawer />
                <Link href="/signin">
                    <CircleUserRound />
                </Link>
            </div>
        </nav>
    );
};

export default BottomNav;
