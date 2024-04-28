"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/router';
import { PasswordInput } from "@/components/ui/password-input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
})

export default function SigninForm() {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    })
    
    
    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }

  return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} type="email" suffix={<MailIcon/>} />
                  </FormControl>
                  <FormDescription >
                    This requires an admin account.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="Password" />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <div className="flex justify-end"><Link href={`/forgot-password`} className="text-sm">Forgot Password?</Link></div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="button" className="w-full" asChild>
            <Link href={"/dashboard"}>Signin Instead</Link>
          </Button>
          </form>
        </Form>
  );
}
