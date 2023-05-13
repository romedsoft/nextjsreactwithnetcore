'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }



const userImageUrl =  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";


const UserMenu = (props: any) => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
        <>
        <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
        
        <span className='text-white text-sm'>Hello {session.user.name} ! </span>
        <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={userImageUrl} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {props.userNavigation.map((item: any) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
            {({ active }) => (
                  <a 
                  key="signOut"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                  onClick={() => signOut()}
                  >
                  Sign Out
              </a>
                )}
                
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu></>
    );
  }
  return (
    <button onClick={() => signIn()} className='text-gray-400 hover:text-white'>
      Sign In
    </button>
  );
};

export default UserMenu;