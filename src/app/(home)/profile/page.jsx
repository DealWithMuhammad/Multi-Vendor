"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Data: Move this to a config or environment variable
const statsData = [
  {
    title: "Total Orders",
    value: "125",
    change: "+5%",
    changeType: "positive",
  },
  { title: "Active Orders", value: "8", change: "-2%", changeType: "negative" },
  {
    title: "Wishlist Items",
    value: "24",
    change: "+12%",
    changeType: "positive",
  },
  { title: "Savings", value: "$320.50", change: "+8%", changeType: "positive" },
];

const ordersData = [
  { id: "ORD-001", item: "Leather Bag", status: "Shipped", progress: 75 },
  { id: "ORD-002", item: "Painting", status: "Processing", progress: 30 },
  { id: "ORD-003", item: "Painting3", status: "Delivered", progress: 100 },
];

const wishlistData = [
  { name: "Bag", price: "$799.99", inStock: true },
  { name: "Bag", price: "$249.99", inStock: false },
  { name: "Bag", price: "$59.99", inStock: true },
];

const activityData = [
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
];

// Modularized Components
// @ts-ignore
const StatCard = ({ title, value, change, changeType }) => (
  <Card>
    <CardHeader className="flex justify-between">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Badge
        variant={changeType === "positive" ? "default" : "destructive"}
        className="text-xs"
      >
        {change}
      </Badge>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

// @ts-ignore
const OrderItem = ({ id, item, status, progress }) => (
  <div className="flex items-center space-x-4">
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900 truncate">{item}</p>
      <p className="text-sm text-gray-500 truncate">{id}</p>
    </div>
    <div className="text-base font-semibold text-gray-900">{status}</div>
    <Progress value={progress} className="w-24" />
  </div>
);

// @ts-ignore
const WishlistItem = ({ name, price, inStock }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">{price}</p>
    </div>
    <Badge variant={inStock ? "default" : "secondary"}>
      {inStock ? "In Stock" : "Out of Stock"}
    </Badge>
  </div>
);

// @ts-ignore
const ActivityItem = ({ action, details, time, index }) => (
  <div className="flex">
    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
      {index + 1}
    </div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-900">{action}</p>
      <p className="text-sm text-gray-500">{details}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

// Main Component
export default function EnhancedBuyerDashboard() {
  // @ts-ignore
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 bg-white">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              My Profile
            </h1>

            {/* Stats Grid */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
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
                    {ordersData.map((order) => (
                      <OrderItem key={order.id} {...order} />
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
                    {wishlistData.map((item, index) => (
                      <WishlistItem key={index} {...item} />
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
                  {activityData.map((activity, index) => (
                    <ActivityItem key={index} index={index} {...activity} />
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
