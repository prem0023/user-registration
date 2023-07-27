import React from "react";
import UserDataTable from "./UserDataTable";
import { useSelector } from "react-redux";

const UserDataContainer = () => {
  const user = useSelector((store) => store.user.userData);

  return (
    <div>
      {/* Other components or content */}
      <UserDataTable userData={user} />
    </div>
  );
};

export default UserDataContainer;
