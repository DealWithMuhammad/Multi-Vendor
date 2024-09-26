'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Bell, MessageSquare, Search, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: 'Enhanced Buyer Dashboard',
  description: 'A modern and feature-rich dashboard for buyers',
}

export function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative lg:translate-x-0 z-50`}>
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">BuyerHub</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {['Dashboard', 'Orders', 'Wishlist', 'Messages', 'Settings'].map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button className="w-full" variant="outline">Logout</Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-4 flex-1 justify-end">
              <div className="relative hidden md:block">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-8 w-64" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Buyer Dashboard</h1>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {/* Stats Cards */}
              {[
                { title: 'Total Orders', value: '125', change: '+5%', changeType: 'positive' },
                { title: 'Active Orders', value: '8', change: '-2%', changeType: 'negative' },
                { title: 'Wishlist Items', value: '24', change: '+12%', changeType: 'positive' },
                { title: 'Savings', value: '$320.50', change: '+8%', changeType: 'positive' },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Badge variant={stat.changeType === 'positive' ? 'default' : 'destructive'} className="text-xs">
                      {stat.change}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 'ORD-001', item: 'Wireless Earbuds', status: 'Shipped', progress: 75 },
                      { id: 'ORD-002', item: 'Smart Watch', status: 'Processing', progress: 30 },
                      { id: 'ORD-003', item: 'Laptop Stand', status: 'Delivered', progress: 100 },
                    ].map((order) => (
                      <div key={order.id} className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {order.item}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {order.id}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                          {order.status}
                        </div>
                        <Progress value={order.progress} className="w-24" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Wishlist Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Wishlist Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: '4K Ultra HD TV', price: '$799.99', inStock: true },
                      { name: 'Noise-Cancelling Headphones', price: '$249.99', inStock: false },
                      { name: 'Electric Coffee Grinder', price: '$59.99', inStock: true },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.price}</p>
                        </div>
                        <Badge variant={item.inStock ? 'default' : 'secondary'}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: 'Order Shipped', details: 'Your order #ORD-001 has been shipped', time: '2 hours ago' },
                    { action: 'Price Drop Alert', details: 'An item in your wishlist is now on sale', time: '5 hours ago' },
                    { action: 'New Message', details: 'You have a new message from Seller XYZ', time: 'Yesterday' },
                    { action: 'Review Reminder', details: 'Please leave a review for your recent purchase', time: '2 days ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                          {index + 1}
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}