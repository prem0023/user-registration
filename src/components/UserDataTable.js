import React from "react";

const UserDataTable = ({ userData }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold mb-4">User Data Table</h2>
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border py-2 px-4">Name</th>
            <th className="border py-2 px-4">Email</th>
            <th className="border py-2 px-4">DOB</th>
            <th className="border py-2 px-4">City</th>
            <th className="border py-2 px-4">Pincode</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border py-2 px-4  text-center ">{user.name}</td>
              <td className="border py-2 px-4  text-center ">{user.email}</td>
              <td className="border py-2 px-4  text-center ">{user.dob}</td>
              <td className="border py-2 px-4  text-center ">{user.city}</td>
              <td className="border py-2 px-4  text-center ">{user.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
