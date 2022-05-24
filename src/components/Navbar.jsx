/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Popover, Menu, Transition } from '@headlessui/react';

import {
  MenuIcon,
  XIcon,
  CodeIcon,
  BookOpenIcon,
  MailIcon,
} from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import profile_img from '../assets/profile_img.png';

const navigation = [
  { name: 'Works', href: '/', icon: <CodeIcon /> },
  { name: 'About', href: '/about', icon: <BookOpenIcon /> },
  { name: 'Contact', href: '/contact', icon: <MailIcon /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();

  const [sayHi, setSayHi] = useState(false);

  const toggleWaving = () => {
    setSayHi(true);

    setTimeout(() => {
      setSayHi(false); // true for only 1,5 sec
    }, 1500);
  };

  return (
    <Popover as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  ) : (
                    <MenuIcon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  )}
                </Popover.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block h-8 w-auto'
                    src={logo}
                    alt='logo'
                  />
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => {
                      const isActiveRoute =
                        location.pathname === item.href;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActiveRoute
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center gap-2'
                          )}
                          aria-current={
                            isActiveRoute ? 'page' : undefined
                          }
                        >
                          <div style={{ width: '1rem' }}>
                            {item.icon}
                          </div>
                          <span>{item.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <span
                  style={{ fontSize: '1.5em' }}
                  className={sayHi ? 'wave' : ''}
                >
                  👋
                </span>

                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button
                      onClick={toggleWaving}
                      className='bg-gray-800 flex text-sm rounded-full outline-none ring-2 ring-offset-2 ring-offset-gray-800  hover:ring-white '
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src={profile_img}
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          {/* For Mobile  */}
          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute z-10 top-16 bg-gray-800 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => {
                  const isActiveRoute =
                    location.pathname === item.href;

                  return (
                    <Popover.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        isActiveRoute
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-base font-medium flex flex-row items-center gap-2'
                      )}
                      aria-current={
                        isActiveRoute ? 'page' : undefined
                      }
                    >
                      <div style={{ width: '1rem' }}>{item.icon}</div>
                      {item.name}
                    </Popover.Button>
                  );
                })}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
