import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

function Register() {
  return (
    <AuthLayout
      badge="Create account"
      title="Start your secure journey"
      subtitle="Join the platform by filling out the details below."
      maxWidth="max-w-5xl"
    >
      <p className="text-red-500"></p>

      <form className="grid gap-4 md:grid-cols-2">
        <Input id="firstName" label="First Name" />

        <Input id="lastName" label="Last Name" required />

        <Input id="username" label="Username" required />

        <Input id="email" label="Email" type="email" required />

        <Input id="phone" label="Phone" type="tel" required />

        <Input id="dob" label="Date of Birth" type="date" required />

        <Select
          id="gender"
          label="Gender"
          required
          options={[
            { value: "", label: "Select gender" },
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
          ]}
        />

        <Input id="password" label="Password" type="password" required />

        <div className="md:col-span-2">
          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit">Create account</Button>

          <p className="text-sm text-slate-400">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-medium text-cyan-400 hover:text-cyan-300"
            >
              Login here
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
