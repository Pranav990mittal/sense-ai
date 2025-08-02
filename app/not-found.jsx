import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-neutral-900 text-center">
      <h1 className="text-7xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse mb-4">
        404
      </h1>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or might have been moved.
      </p>
      <Link href="/">
        <Button>
          Return Home
        </Button>
      </Link>
    </div>
  );
}
