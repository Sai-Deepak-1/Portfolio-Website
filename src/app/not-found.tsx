import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center text-center">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">This page wandered off.</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for does not exist or has moved.</p>
        <Button className="mt-8" asChild>
          <Link href="/"><ArrowLeft className="mr-2 size-4" aria-hidden="true" />Back home</Link>
        </Button>
      </div>
    </main>
  );
}
