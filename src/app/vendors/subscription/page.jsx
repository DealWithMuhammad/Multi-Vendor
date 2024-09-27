"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const plans = [
  {
    name: "Basic",
    price: 9.99,
    features: [
      "Up to 100 products",
      "Basic analytics",
      "24/7 support",
      "Custom domain",
    ],
    notIncluded: ["Advanced analytics", "Priority support", "Multiple users"],
  },
  {
    name: "Pro",
    price: 29.99,
    features: [
      "Up to 1000 products",
      "Advanced analytics",
      "24/7 priority support",
      "Custom domain",
      "Multiple users (up to 5)",
    ],
    notIncluded: ["Unlimited products", "White-label solution"],
  },
  {
    name: "Enterprise",
    price: 99.99,
    features: [
      "Unlimited products",
      "Advanced analytics",
      "24/7 priority support",
      "Custom domain",
      "Unlimited users",
      "White-label solution",
      "Dedicated account manager",
    ],
    notIncluded: [],
  },
];

export default function SubscriptionManagement() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Choose Your Subscription Plan
      </h1>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <Label htmlFor="billing-cycle">Bill Monthly</Label>
        <Switch
          id="billing-cycle"
          checked={billingCycle === "annually"}
          onCheckedChange={(checked) =>
            setBillingCycle(checked ? "annually" : "monthly")
          }
        />
        <Label htmlFor="billing-cycle">Bill Annually (Save 20%)</Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">
                  $
                  {billingCycle === "annually"
                    ? (plan.price * 0.8 * 12).toFixed(2)
                    : plan.price}
                </span>{" "}
                / {billingCycle === "annually" ? "year" : "month"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
