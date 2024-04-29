"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
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
  username: z.string().email(),
  password: z.string().min(5, {
    message: "Password is at least 5 characters.",
  }),
})

export default function SigninForm() {
const router = useRouter();
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    })
    
    
    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push('/dashboard')
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    }

  return (
    <>
        <div className="flex justify-center"><h2 className="text-red-500 font-bold text-xl mb-5">SIGNIN WITH YOUR ADMIN ACCOUNT</h2></div>
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
                  <FormDescription className="flex gap-1">
                    This requires an admin account. <FormMessage />
                  </FormDescription>
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
                  <div className="flex justify-between items-center">
                    <FormDescription className="flex gap-1">
                      Your password. <FormMessage />
                      
                    </FormDescription>
                    <div className="flex justify-end"><Link href={`/forgot-password`} className="text-sm">Forgot Password?</Link></div>
                  </div>
                  
                  
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
            Signin
          </Button>
          </form>
      </Form>
      </>
      );
      
}
