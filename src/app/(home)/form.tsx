"use client"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import { useState, useTransition } from "react"
import { apply } from "./apply"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  email: z.email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  })

  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await apply(values.email);

        if (!result.success) {
          toast.error(result.error)
          return
        }

        setSuccess(true)
        form.reset()
      } catch (error) {
        console.log(error)
        toast.error('Failed to submit the form. Please try again.');
      }
    })
  }

  if (success) {
    return (
      <Alert >
        <AlertTitle>Thank you for applying!</AlertTitle>
        <AlertDescription className="text-center mx-auto">
          We will get back to you soon.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-left" />
            </FormItem>
          )}
        />
        <Button disabled={isPending} className="mt-4 w-full" type="submit">Submit</Button>
      </form>
    </Form>
  )
}