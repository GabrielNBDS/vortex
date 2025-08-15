import { auth } from "@/lib/auth"
import { LoginForm } from "./login-form"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />

        <div className="flex justify-center">
          <Button variant="link" className="text-muted-foreground mt-2">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
