import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function Login() {
  return (
    <AuthLayout
      badge="Welcome back"
      title="Sign in to your account"
      subtitle="Access your workspace and keep your authentication flow moving."
      maxWidth="max-w-6xl"
    >
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
        <div className="hidden lg:block flex-1"></div>

        <form className="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
          <p className="text-red-500"></p>

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="name@example.com"
            required
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>

          <p className="text-center text-sm text-slate-400">
            New here?{" "}
            <Link
              to="/register"
              className="font-medium text-cyan-400 hover:text-cyan-300"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
