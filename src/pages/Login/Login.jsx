import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectLoader } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const loader = useSelector(selectLoader);
  return <div>{loader ? <Loader /> : <LoginForm />}</div>;
};

export default Login;
