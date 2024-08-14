import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "../../components/UI";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const AgencyRegistration = () => {
  const navigate = useNavigate();
  const submitFunc = (e) => {
    e.preventDefault();
    navigate("/agency");
  };
  return (
    <div className="bg-gray-100 px-2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl ">
          <div className="flex justify-center mb-2 ">
            <img src={Logo} alt="cardimg" className="max-w-md w-full" />
          </div>
          <h2 className="text-center font-bold mb-3">
            Create your Agency profile
          </h2>
          <div className="flex justify-center my-3">
            <Button
              title={"Jobseeker Registration"}
              onClick={() => {
                navigate("/jobseeker/registration");
              }}
            />
          </div>
          <h3 className="text-center">
            Already have an account?
            <Link to="/login/agency" className="text-blue-500">
              {" "}
              Login{" "}
            </Link>
          </h3>
          <form>
            <p className="font-bold">Agency Details</p>
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Input
                label={"Agency Name"}
                type="text"
                placeholder={"Enter Agency Name"}
              />
              <Input
                label={"Primary Address"}
                type="text"
                placeholder={"Enter Primary address"}
              />
              <Input
                label={"Phone Number"}
                type="number"
                placeholder={"Enter Phone Number"}
              />
              <Input label={"Email"} type="email" placeholder={"Enter Email"} />
            </div>
            <Textarea label={"Brief Description"} />
            <p className="font-bold">Primary Staff Details</p>
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
export { AgencyRegistration };
