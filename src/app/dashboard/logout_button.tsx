'use client'
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth_client";

import { useRouter } from 'next/navigation'
import { useTransition } from "react";

export default function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <Button disabled={isPending} onClick={() => {
      startTransition(async () => {
        await authClient.signOut();
        router.push("/login");
      });
    }} variant="outline">Logout</Button>
  )
}