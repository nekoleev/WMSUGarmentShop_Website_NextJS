import ForgotPasswordForm from "@/components/auth/forgot-password"; 
import Image from "next/image";
import logo from '@/assets/images/wmsu-logo.png';
import GarmentText from '@/assets/images/logo.png';

export default function ForgotPasswordPage() {
    return (
        <>
            <div className="flex flex-col items-center gap-2 pt-12 w-[50%] h-full rounded-xl bg-red-700">
                <Image src={logo} width={120} height={120} alt="Wmsu Logo"/>
                <Image src={GarmentText} width={250} height={250} alt="Wmsu Garment Shop"/>
            </div>
            <div className="w-[50%] h-full p-20 border-2 border-red-700">
                <ForgotPasswordForm/>
            </div>
        </>
    );
}