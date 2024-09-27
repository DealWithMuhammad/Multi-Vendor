'use client';

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { User } from '@nextui-org/react';
import { LayoutDashboard, PlusCircle, User2 } from 'lucide-react';
import Link from 'next/link';

// Define menu items as an array
const menuItems = [
  {
    icon: <LayoutDashboard size={18} />,
    text: 'Dashboard',
    href: '/vendors/dashboard',
    active: true,
  },
  {
    icon: <PlusCircle size={18} />,
    text: 'Manage Products',
    href: '/vendors/products',
  },
  {
    icon: <User2 size={18} />,
    text: 'Manage Orders',
    href: '/vendors/orders',
  },
  { text: 'Subscription Management', href: '/vendors/subscription' },
  { text: 'Messaging', href: '/vendors/messaging' },
  { text: 'Analytic', href: '/vendors/analytic' },
];

export default function Layout({ children, user }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
        zIndex: 0,
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between" className="px-20">
          <p className="flex align-middle gap-3">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
            />
            REDI
          </p>
          <User
            name={user?.name || 'Jane Doe'}
            description={user?.description || 'Product Designer'}
            avatarProps={{
              src:
                user?.avatar ||
                'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        {/* Render dynamic menu items */}
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            href={item.href}
            active={item.active}
          />
        ))}
        <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase mt-6">
          Sending with Roadie
        </div>
        {/* Render additional dynamic menu items if needed */}
      </AppShell.Navbar>
      <AppShell.Main className="bg-white">{children}</AppShell.Main>
    </AppShell>
  );
}

function MenuItem({ icon, text, href = '#', active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-md px-6 py-4 text-sm ${
        active
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {text}
    </Link>
  );
}
