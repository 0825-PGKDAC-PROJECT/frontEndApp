import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert("Login successful (frontend)");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        
        {/* Title */}
        <h3 className="text-center fw-bold mb-2">
          My Gaddi.com
        </h3>

        <h5 className="text-center text-muted mb-4">
          Login
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        {/* Register link */}
        <div className="text-center mt-2">
          <small>
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none fw-semibold">
              Register
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
