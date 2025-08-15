import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import LogoutButton from "./logout_button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/login")
  }


  const response = await fetch(`${process.env.API_URL}/candidates`, {
    next: {
      revalidate: 5,
    },
    headers: {
      'x-api-key': process.env.API_SECRET ?? '',
    }
  })


  const data: Array<{ email: string }> = await response.json()

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <LogoutButton />
      </header>

      <Table className="rounded-md overflow-hidden">
        <TableCaption>A list of the latest applicants.</TableCaption>
        <TableHeader className="bg-neutral-50/5">
          <TableRow>
            <TableHead>E-mail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((candidate, index) => (
            <TableRow key={candidate.email + index}>
              <TableCell className="font-medium">{candidate.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
