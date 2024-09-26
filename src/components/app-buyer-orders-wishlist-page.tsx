'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Bell, MessageSquare, Search, Menu, ShoppingCart, Heart } from 'lucide-react'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: 'Orders and Wishlist',
  description: 'View your orders and wishlist items',
}

export function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const orders = [
    { id: 'ORD-001', item: 'Wireless Earbuds', status: 'Shipped', progress: 75, date: '2023-05-15', total: '$129.99' },
    { id: 'ORD-002', item: 'Smart Watch', status: 'Processing', progress: 30, date: '2023-05-18', total: '$249.99' },
    { id: 'ORD-003', item: 'Laptop Stand', status: 'Delivered', progress: 100, date: '2023-05-10', total: '$39.99' },
    { id: 'ORD-004', item: 'Mechanical Keyboard', status: 'Shipped', progress: 60, date: '2023-05-20', total: '$149.99' },
    { id: 'ORD-005', item: 'Wireless Mouse', status: 'Processing', progress: 15, date: '2023-05-22', total: '$59.99' },
  ]

  const wishlistItems = [
    { name: '4K Ultra HD TV', price: '$799.99', inStock: true, image: '/placeholder.svg?height=100&width=100' },
    { name: 'Noise-Cancelling Headphones', price: '$249.99', inStock: false, image: '/placeholder.svg?height=100&width=100' },
    { name: 'Electric Coffee Grinder', price: '$59.99', inStock: true, image: '/placeholder.svg?height=100&width=100' },
    { name: 'Smart Home Security Camera', price: '$129.99', inStock: true, image: '/placeholder.svg?height=100&width=100' },
    { name: 'Portable Bluetooth Speaker', price: '$89.99', inStock: false, image: '/placeholder.svg?height=100&width=100' },
  ]

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

        {/* Orders and Wishlist Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Orders and Wishlist</h1>
            
            <Tabs defaultValue="orders" className="space-y-4">
              <TabsList>
                <TabsTrigger value="orders" className="flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 bg-white p-4 rounded-lg shadow">
                          <div className="flex-1">
                            <h3 className="font-semibold">{order.item}</h3>
                            <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                            <p className="text-sm text-gray-500">Date: {order.date}</p>
                          </div>
                          <div className="flex flex-col md:items-end space-y-2">
                            <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Shipped' ? 'secondary' : 'outline'}>
                              {order.status}
                            </Badge>
                            <p className="text-sm font-medium">{order.total}</p>
                            <Progress value={order.progress} className="w-24" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {wishlistItems.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow flex space-x-4">
                          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                          <div className="flex flex-col justify-between">
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.price}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge variant={item.inStock ? 'default' : 'secondary'}>
                                {item.inStock ? 'In Stock' : 'Out of Stock'}
                              </Badge>
                              <Button variant="outline" size="sm">Remove</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}