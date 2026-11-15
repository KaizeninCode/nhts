import { RegistrationForm } from "@/components/registration-form"

export default function RegistrationPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-sidebar p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <RegistrationForm />
      </div>
    </div>
  )
}
