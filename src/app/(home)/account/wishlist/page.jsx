import { Button } from "@/components/ui/button";

export default function Component() {
  const img =
    "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const wishlist = [
    {
      id: 1,
      image: img,
      name: "Cozy Knit Sweater",
      price: 49.99,
    },
    {
      id: 2,
      image: img,
      name: "Leather Backpack",
      price: 79.99,
    },
    {
      id: 3,
      image: img,
      name: "Retro Sunglasses",
      price: 29.99,
    },
    {
      id: 4,
      image: img,
      name: "Bamboo Cutting Board",
      price: 24.99,
    },
    {
      id: 5,
      image: img,
      name: "Scented Candle Set",
      price: 39.99,
    },
  ];
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-right">Price</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr
                key={item.id}
                className="border-b border-muted/40 hover:bg-muted/20 transition-colors"
              >
                <td className="px-4 py-3">
                  <img
                    src="/placeholder.svg"
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                </td>
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3 text-right">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <ShoppingCartIcon className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="ghost" size="icon">
                      <XIcon className="w-4 h-4" />
                      <span className="sr-only">Remove from Wishlist</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
