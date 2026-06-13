import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-commerce-backend-chi-three.vercel.app/users/all-users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">

      <h1 className="text-4xl font-bold mb-8">
        All Users
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {users.map((user) => (
          <div
            key={user._id}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {user.firstName?.charAt(0)}
              </div>
            </div>

            <h2 className="text-xl font-bold text-center">
              {user.firstName} {user.lastName}
            </h2>

            <div className="mt-5 space-y-3">

              <p>
                <span className="font-bold">
                  Email :
                </span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-bold">
                  Phone :
                </span>{" "}
                {user.phone}
              </p>

              <p>
                <span className="font-bold">
                  Password :
                </span>{" "}
                <span className="text-red-500 break-all">
                  {user.password}
                </span>
              </p>

            </div>

            <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              View Profile
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Users;