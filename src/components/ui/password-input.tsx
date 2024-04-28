import * as React from "react"
import { Input } from "./input"
import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
    return (
      <Input type={showPassword ? "text" : "password"} suffix={showPassword ? <EyeIcon color="red" onClick={()=>setShowPassword(false)} /> : <EyeOffIcon onClick={()=>setShowPassword(true)} />} className={className}{...props} ref={ref} />
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
