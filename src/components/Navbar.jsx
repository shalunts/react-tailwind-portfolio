/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  XIcon,
  CodeIcon,
  CogIcon,
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
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
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
                </Disclosure.Button>
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
                  class={sayHi ? 'wave' : ''}
                >
                  👋
                </span>

                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button
                      onClick={toggleWaving}
                      className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
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

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => {
                const isActiveRoute = location.pathname === item.href;

                return (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      isActiveRoute
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={isActiveRoute ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
