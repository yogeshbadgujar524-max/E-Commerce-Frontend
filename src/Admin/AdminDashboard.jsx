import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-5 mt-8">

          <div className="bg-blue-500 p-6 rounded-lg text-white">
            <h2>Total Users</h2>
            <p className="text-3xl font-bold">
              120
            </p>
          </div>

          <div className="bg-green-500 p-6 rounded-lg text-white">
            <h2>Total Orders</h2>
            <p className="text-3xl font-bold">
              45
            </p>
          </div>

          <div className="bg-purple-500 p-6 rounded-lg text-white">
            <h2>Total Products</h2>
            <p className="text-3xl font-bold">
              20
            </p>
          </div>

          <div className="bg-red-500 p-6 rounded-lg text-white">
            <h2>Revenue</h2>
            <p className="text-3xl font-bold">
              ₹50,000
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;