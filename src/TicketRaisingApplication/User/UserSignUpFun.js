import { useNavigate } from "react-router-dom";
import UserSignUpClass from "./UserSignUpClass";

function UserSignUpFun() {
  let navigate = useNavigate();
  return (
    <>
      <UserSignUpClass navigate={{ navigate }}></UserSignUpClass>
    </>
  );
}
export default UserSignUpFun;
