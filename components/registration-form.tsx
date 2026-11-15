import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function RegistrationForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const points = [
    "Farm-to-export traceability",
    "Digital farmer registration",
    "QR-verified produce",
    "Handles license & permit",
  ];

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold text-primary">Welcome</h1>
                <p className="text-balance text-muted-foreground">
                  Create a new NHTS account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="name"
                  placeholder="Enter your name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="+254 700 000 000"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Register</Button>
              </Field>

              <FieldDescription className="text-center">
                Already have an account? <a href="/auth/login">Log In</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative bg-primary md:block p-4 grid place-content-center">
            <h1 className="text-2xl text-white font-bold">
              National Horticulture Traceability System
            </h1>
            <h4 className="text-slate-400">
              Powered by Horticulture Crops Directorate (HCD, Kenya) V4.0
            </h4>
            <ul className="mt-4">
              {points.map(point=> (
                <li key={point} className="text-white text-lg">&#10004; {point}</li>
              )) }
            </ul>
          </div>
        </CardContent>
      </Card>
      {/* <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription> */}
    </div>
  );
}
