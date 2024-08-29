import { useNavigate } from "react-router-dom";
import AdminLoginClass from "./AdminLoginClass";

function AdminLoginFunctional() {
  let navigate = useNavigate();

  return (
    <>
      <AdminLoginClass navigate={{ navigate }}></AdminLoginClass>
    </>
  );
}
export default AdminLoginFunctional;
