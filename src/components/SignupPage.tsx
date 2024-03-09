import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore.ts";
import axios from "axios";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = (value: string, key: string) => {
    setUser({ ...user, [key]: value });
  };

  const createUser = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8070/api/v1/users/register",
        user,
      );

      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow-md p-8 border">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign Up to{" "}
          <span className="text-3xl font-bold text-amber-500">Connecto</span>
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your First Name"
              required
              onChange={(e) => handleChange(e.target.value, "firstname")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your Last Name"
              required
              onChange={(e) => handleChange(e.target.value, "lastname")}
            />
          </div>
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
            onClick={(e) => createUser(e)}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already Have a Account ?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
