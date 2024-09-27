"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { RiUser6Line } from "react-icons/ri";

const UserAccount = () => {
  return (
    <div className="pt-1 font-medium">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 transition duration-150">
          <span className="flex items-center justify-center p-2 bg-gray-200 dark:bg-neutral-800 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-700 transition duration-150">
            <RiUser6Line size={20} />
          </span>
          <span className="hidden md:inline-block">Account</span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-lg bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-4 space-y-2">
              <Link
                href="/account/login"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-150"
              >
                <RiUser6Line size={18} />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Log In
                </span>
              </Link>
              <Link
                href="/signup"
                className="block text-center p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-150"
              >
                Create Account
              </Link>
            </div>
            <div className="p-4 space-y-2">
              <Link
                href="/forgot-pass"
                className="block text-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-150"
              >
                Reset Password
              </Link>
              <Link
                href="/creation-type"
                className="block text-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-150"
              >
                Account Type
              </Link>
            </div>
            <div className="p-4 space-y-2">
              <Link
                href="/profile"
                className="block text-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-150"
              >
                My Profile
              </Link>
              <Link
                href="/profile/wishlist"
                className="block text-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-150"
              >
                Wishlists
              </Link>
              <Link
                href="/profile/my-orders"
                className="block text-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-150"
              >
                My Orders
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAccount;
