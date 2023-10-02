import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

const Error = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const params = useParams();

  useEffect(() => {
    alert.show(`You don't have access this Panel`);
    navigate(-1);
  }, []);
};

export default Error;
