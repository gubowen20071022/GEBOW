import Link from "next/link";
import { auth } from "@/server/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">GEBOW</h1>
          <div>
            {session ? (
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/signin"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="max-w-3xl px-4 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build something great
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            GEBOW is a greenfield web application built with Next.js 15,
            TypeScript, PostgreSQL, and modern best practices.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={session ? "/dashboard" : "/signin"}
              className="rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              {session ? "Go to Dashboard" : "Get started"}
            </Link>
            <a
              href="https://github.com/gubowen20071022/GEBOW"
              className="text-base font-semibold leading-7 text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white py-4 text-center text-sm text-gray-500">
        GEBOW — MIT License
      </footer>
    </div>
  );
}
