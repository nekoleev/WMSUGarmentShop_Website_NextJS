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
      <div className="w-[50%] h-full border-2 rounded-xl">hello World</div>
      <div className="w-[50%] h-full p-20 border-2 border-red-700">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="Password" />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Reset Password</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
