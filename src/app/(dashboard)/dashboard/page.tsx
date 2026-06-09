import { auth, signOut } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">GEBOW</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {session.user.email}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome, {session.user.name || session.user.email}!
          </h2>
          <p className="mt-2 text-gray-600">
            This is your dashboard. The MVP is live — you are authenticated and the app is working.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Authentication"
              description="Sign in, sign up, session management — working with NextAuth.js v5."
              status="active"
            />
            <DashboardCard
              title="Database"
              description="PostgreSQL 16 + Prisma ORM — schema defined, migrations ready."
              status="active"
            />
            <DashboardCard
              title="Type Safety"
              description="End-to-end TypeScript with strict mode. tRPC routes defined."
              status="active"
            />
            <DashboardCard
              title="CI/CD"
              description="GitHub Actions pipeline: lint, typecheck, test, e2e on every push."
              status="active"
            />
            <DashboardCard
              title="Deployment"
              description="Dockerized — one command to deploy on Railway or any Docker host."
              status="pending"
            />
            <DashboardCard
              title="Features"
              description="Coming next: real features built on this foundation."
              status="pending"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function DashboardCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: "active" | "pending";
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            status === "active"
              ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
              : "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
