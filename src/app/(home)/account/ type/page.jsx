import Link from "next/link";

export default function Component() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary-foreground">
            Choose your account type
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Select whether you want to create a vendor or buyer account.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="flex flex-col items-center justify-center rounded-lg border border-primary bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            prefetch={false}
          >
            <StoreIcon className="mb-4 h-12 w-12" />
            <h3 className="text-lg font-semibold">Vendor</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Create a seller account to list and manage your products.
            </p>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center rounded-lg border border-primary bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            prefetch={false}
          >
            <ShoppingCartIcon className="mb-4 h-12 w-12" />
            <h3 className="text-lg font-semibold">Buyer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Create a buyer account to browse and purchase products.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

/**
 * @param {import("react").JSX.IntrinsicAttributes & import("react").SVGProps<SVGSVGElement>} props
 */
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

/**
 * @param {import("react").JSX.IntrinsicAttributes & import("react").SVGProps<SVGSVGElement>} props
 */
function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
