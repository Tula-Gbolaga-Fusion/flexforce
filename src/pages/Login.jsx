import { Link } from "react-router-dom";
import { Button, Input } from "../components/UI";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAdmin = pathname === "/login/admin";
  const isAgency = pathname === "/login/agency";
  const isJobSeeker = pathname === "/login";

  const submitFunc = (e) => {
    e.preventDefault();
    let redirectPath = "/jobseeker";
    if (isAdmin) {
      redirectPath = "/admin";
    }
    if (isAgency) {
      redirectPath = "/agency";
    }
    navigate(redirectPath);
  };

  return (
    <div className="bg-gray-100 px-2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="cardimg" />
          </div>
          <h2 className="text-center text-[20px] font-bold mb-3">
            {`Login as ${
              isAdmin
                ? " an Admin"
                : isAgency
                ? "an Agency Staff"
                : isJobSeeker
                ? "a Job Seeker"
                : ""
            } `}
          </h2>
          <div className="flex justify-center my-3">
            {!isJobSeeker && (
              <Button
                title={"Jobseeker Login"}
                onClick={() => {
                  navigate("/login");
                }}
              />
            )}
            {!isAgency && (
              <Button
                title={"Agency Login"}
                onClick={() => {
                  navigate("/login/agency");
                }}
              />
            )}
            {!isAdmin && (
              <Button
                title={"Admin Login"}
                onClick={() => {
                  navigate("/login/admin");
                }}
              />
            )}
          </div>
          {(isAgency || isJobSeeker) && (
            <h3 className="text-center">
              Don't have an account?{" "}
              <Link
                to={`${
                  isJobSeeker
                    ? "/jobseeker/registration"
                    : isAgency
                    ? "/agency/registration"
                    : ""
                }`}
                className="text-blue-500"
              >
                Create Account
              </Link>
            </h3>
          )}
          <form>
            <Input label={"Email"} type="email" placeholder={"Enter Email"} />
            <Input
              label={"Password"}
              type="password"
              placeholder={"Enter Passsword"}
            />
            <p className="text-blue-500 italic">Forgot Password?</p>
            <div className="flex items-center justify-center my-2">
              <Button title="Sign In" onClick={submitFunc} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Login };
