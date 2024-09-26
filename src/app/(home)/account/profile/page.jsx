"use client";

import { useState } from "react";
import { Bell, MessageSquare, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function EnhancedBuyerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex  bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className=" mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Buyer Dashboard
            </h1>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {/* Stats Cards */}
              {[
                {
                  title: "Total Orders",
                  value: "125",
                  change: "+5%",
                  changeType: "positive",
                },
                {
                  title: "Active Orders",
                  value: "8",
                  change: "-2%",
                  changeType: "negative",
                },
                {
                  title: "Wishlist Items",
                  value: "24",
                  change: "+12%",
                  changeType: "positive",
                },
                {
                  title: "Savings",
                  value: "$320.50",
                  change: "+8%",
                  changeType: "positive",
                },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Badge
                      variant={
                        stat.changeType === "positive"
                          ? "default"
                          : "destructive"
                      }
                      className="text-xs"
                    >
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
                      {
                        id: "ORD-001",
                        item: "Leather Bag1",
                        status: "Shipped",
                        progress: 75,
                      },
                      {
                        id: "ORD-002",
                        item: "Painting",
                        status: "Processing",
                        progress: 30,
                      },
                      {
                        id: "ORD-003",
                        item: "Paitning3",
                        status: "Delivered",
                        progress: 100,
                      },
                    ].map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center space-x-4"
                      >
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
                      {
                        name: "Bag",
                        price: "$799.99",
                        inStock: true,
                      },
                      {
                        name: "Bag",
                        price: "$249.99",
                        inStock: false,
                      },
                      {
                        name: "Bag",
                        price: "$59.99",
                        inStock: true,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.price}</p>
                        </div>
                        <Badge variant={item.inStock ? "default" : "secondary"}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
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
                    {
                      action: "Order Shipped",
                      details: "Your order #ORD-001 has been shipped",
                      time: "2 hours ago",
                    },
                    {
                      action: "Price Drop Alert",
                      details: "An item in your wishlist is now on sale",
                      time: "5 hours ago",
                    },
                    {
                      action: "New Message",
                      details: "You have a new message from Seller XYZ",
                      time: "Yesterday",
                    },
                    {
                      action: "Review Reminder",
                      details: "Please leave a review for your recent purchase",
                      time: "2 days ago",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                          {index + 1}
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.details}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {activity.time}
                        </p>
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
  );
}
