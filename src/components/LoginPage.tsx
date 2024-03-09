import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "../stores/userStore";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = (value: string, key: string) => {
    setUser({ ...user, [key]: value });
  };

  const loginUser = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:8070/api/v1/users/login/${user.email}`,
      );

      if (!res.data.email) {
        console.log("Email is incorrect.");
      } else {
        if (res.data.password === user.password) {
          console.log("Login Successful.");
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        } else {
          console.log("Password is incorrect.");
        }
      }

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow-md p-8 border">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log In to{" "}
          <span className="text-3xl font-bold text-amber-500">Connecto</span>
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              onChange={(e) => handleChange(e.target.value, "password")}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg btn btn-outline font-medium text-center "
            onClickCapture={(e) => loginUser(e)}
          >
            Log In
          </button>
          <Link
            to="/forgot-password"
            className="block pt-4 text-center text-sm text-gray-500 hover:underline"
          >
            Forgot password?
          </Link>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Create a new account{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
