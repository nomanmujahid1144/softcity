import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

const Error = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const params = useParams();

  const redirect = () => {
    alert.show(`You don't have access this Panel`);
    if (params.name === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    redirect();
  }, [params.name]);

  return null; // Return null or any other component JSX here
};

export default Error;
