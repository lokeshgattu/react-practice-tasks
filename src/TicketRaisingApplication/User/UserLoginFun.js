import { useNavigate } from "react-router-dom";
import UserLoginClass from "./UserLoginClass";

function UserLoginFun() {
  let navigate = useNavigate();
  return (
    <>
      <UserLoginClass navigate={{ navigate }}></UserLoginClass>
    </>
  );
}
export default UserLoginFun;
