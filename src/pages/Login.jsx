import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await loginUser(formData);

      console.log(response);

      if (response.success) {
        navigate("/dashboard");
      } else {
        setErrorMessage(response.message || "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:flex-row lg:gap-10 lg:p-12">
        <div className="max-w-md space-y-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Welcome back
          </p>

          <h1 className="text-3xl font-semibold sm:text-4xl">
            Sign in to your account
          </h1>

          <p className="text-slate-300">
            Access your workspace and keep your authentication flow moving.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
        >
          <p className="text-red-500">{errorMessage}</p>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none ring-0 transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-slate-400">
            New here?{" "}
            <Link
              to="/register"
              className="font-medium text-cyan-400 hover:text-cyan-300"
            >
              Create an account
            </Link>
          </p>

          <p className="text-center">
            <Link to="/" className="text-sm text-cyan-400 hover:text-cyan-300">
              ← Back to Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
