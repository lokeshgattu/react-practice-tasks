import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminDashBoardClass from "./AdminDashBoardClass";
function AdminDashBoardFunctional() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      {console.log(params)}
      <AdminDashBoardClass
        data={params}
        navigate={{ navigate }}
      ></AdminDashBoardClass>
    </>
  );
}
export default AdminDashBoardFunctional;
