import { AuthenticateFormComponent } from "@/components/auth/form";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center ">
        <h1 className="text-[1.55rem] font-bondoni font-semibold text-custom-gray-reg">Welcome to Open Fashion</h1>
        <h2 className="text-sm font-semibold text-custom-gray-reg">Step into style with us</h2>
        <AuthenticateFormComponent />
    </main>
  )
}
