'use server'
import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password
      }
    })
    return { success: true }
  } catch (error) {
    const err = error as { status?: string };
    if (err.status === 'UNAUTHORIZED') {
      return { success: false, error: "Invalid email or password" }
    }
    return { success: false, error: "Something went wrong" }
  }
};