import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      setLoading(true);
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("data", data);
      setLoading(false);

      if (data.success === false) {
        setError(true);
      }
      navigate("/sign-in");
    } catch (error) {
      console.log("Error!", error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="my-7 text-3xl text-center font-semibold">Sign Up</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center"
      >
        <input
          type="text"
          placeholder="enter username"
          id="username"
          className="bg-slate-100 p-3 rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter email"
          id="email"
          className="bg-slate-100 p-3 rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter password"
          id="password"
          className="bg-slate-100 p-3 rounded-md"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 py-5 rounded-md uppercase hover:opacity-90 disabled:opacity-80"
        >
          {loading ? "Loading..." : " Sign Up"}
        </button>

        <OAuth />
      </form>

      <div className="flex gap-2 mt-5 items-center">
        <p>Have an account?</p>

        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>

      <p className="text-red-700 mt-5">{error && "Something went wrong!!!"}</p>
    </div>
  );
};

export default SignUp;
