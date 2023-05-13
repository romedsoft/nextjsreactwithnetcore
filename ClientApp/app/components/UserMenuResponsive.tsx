'use client'

import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const userImageUrl =  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const UserMenuResponsive = (props: any) => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
        <>
        <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={userImageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{session.user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{session.user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
        <div className="mt-3 space-y-1 px-2">
                    {props.userNavigation.map((item : any) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    <Disclosure.Button 
                    key="signout"
                    as="a" 
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" 
                    onClick={() => signOut()}>
                        Sign Out
                    </Disclosure.Button>
         </div>
        </>
    );
  }
  return (
    <>
    <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button 
                    as="a" 
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" 
                    onClick={() => signIn()}>
                        Sign In
                    </Disclosure.Button>
         </div>
    </>
  );
};

export default UserMenuResponsive;