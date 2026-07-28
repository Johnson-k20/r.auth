import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await registerUser(formData);

      console.log(response);

      if (response.success) {
        navigate("/login");
      } else {
        setErrorMessage(response.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Create account
          </p>

          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Start your secure journey
          </h1>

          <p className="mt-3 text-slate-300">
            Join the platform by filling out the details below.
          </p>
        </div>

        <p className="text-red-500">{errorMessage}</p>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              First Name
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Last Name
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Date of Birth
            </label>

            <input
              id="dob"
              name="dob"
              type="date"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Gender
            </label>

            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            >
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create account"}
            </button>

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
      </div>
    </div>
  );
}

export default Register;
