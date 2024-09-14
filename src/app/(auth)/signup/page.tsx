import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto mt-12 max-w-lg px-6">
      <Logo size={56} />
      <h1 className="mt-10 text-2xl">Crie a sua conta</h1>
      <div className="mb-14 mt-10 flex flex-col gap-6">
        <SignupForm />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 md:flex-row">
        <div className="text-gray-500">Já tem uma conta?</div>
        <Link href="/signin" className="hover:underline">
          Entrar no Z
        </Link>
      </div>
    </div>
  );
}
