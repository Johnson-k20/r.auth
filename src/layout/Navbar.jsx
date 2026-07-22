import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Navbar() {
  return (
    <header className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/70 px-6 py-4 backdrop-blur">
      <Link to="/" className="text-lg font-semibold tracking-wide">
        SecureAuth
      </Link>

      <nav className="flex items-center gap-6 text-sm text-slate-300">
        <Link to="/login" className="transition hover:text-white">
          Login
        </Link>

        <Button as={Link} to="/register" className="px-4 py-2">
          Register
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
