import { Link } from "react-router-dom";
import { Button, Input } from "../../components/UI";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const submitFunc = (e) => {
    e.preventDefault();
    navigate("/jobseeker");
  };
  return (
    <div className="bg-gray-100 px-2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="cardimg" />
          </div>
          <h2 className="text-center font-bold mb-6">
            Create your Job Seeker Account
          </h2>
          <div className="flex justify-center my-3">
            <Button
              title={"Agency Registration"}
              onClick={() => {
                navigate("/agency/registration");
              }}
            />
          </div>
          <h3 className="text-center">
            Already have an account?
            <Link to="/login" className="text-blue-500">
              {" "}
              Login{" "}
            </Link>
          </h3>
          <form>
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Input
                label={"First Name"}
                type="text"
                placeholder={"Enter Firstname"}
              />
              <Input
                label={"Last Name"}
                type="text"
                placeholder={"Enter Lastname"}
              />
              <Input
                label={"Phone Number"}
                type="number"
                placeholder={"Enter Phone Number"}
              />
              <Input label={"Email"} type="email" placeholder={"Enter Email"} />
              <Input
                label={"Password"}
                type="password"
                placeholder={"Enter Passsword"}
              />
              <Input
                label={"Confirm Password"}
                type="password"
                placeholder={"Retype Passsword"}
              />
            </div>

            <div className="flex items-center justify-center my-2">
              <Button title="Sign Up" onClick={submitFunc} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Register };
