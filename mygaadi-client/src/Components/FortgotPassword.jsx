import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    alert("Password reset link sent (frontend)");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        
        {/* Title */}
        <h3 className="text-center fw-bold mb-2">
          My Gaddi.com
        </h3>

        <h5 className="text-center text-muted mb-4">
          Forgot Password
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Remembered your password?{" "}
            <Link to="/" className="text-decoration-none fw-semibold">
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
