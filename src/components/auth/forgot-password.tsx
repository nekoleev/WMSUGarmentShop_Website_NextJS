"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { PasswordInput } from "../ui/password-input"

const formSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
  confirmPassword: z.string()
}).refine((data) => {
  return data.password === data.confirmPassword
}, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})

export default function ForgotPasswordForm() {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
        password: "",
        confirmPassword: "",
    },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }

  return (
    <>  
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="New Password" />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="Confirm New Password" />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit" className="w-full">Reset Password</Button>
          <Button type="button" className="w-full bg-transparent text-red-700 border-2 border-red-700 hover:text-white" asChild>
            <Link href={"/"}>Signin Instead</Link>
          </Button>
          </form>
        </Form>
    </>
  );
}
