import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const AdminSidebar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <ul className="space-y-4">
        <li>
          <Link to="/admin">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/users">
            Users
          </Link>
        </li>

        <li>
          <Link to="/admin/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="ordersadmin">
            Orders
          </Link>
        </li>

        <li>
          <Link to="/admin/analytics">
            Analytics
          </Link>
        </li>
        <button
          onClick={handleLogout}
          className="bg-red-700 hover:opacity-70 m-2 px-6 py-3 rounded-lg font-semibold w-20 h-12 text-2xl"
        >
          <IoIosLogOut/>
        </button>
      </ul>
    </div>
  );
};

export default AdminSidebar;