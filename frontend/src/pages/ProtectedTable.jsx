import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedTable() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to access this page");
      navigate("/login");
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User Details</h2>
          <button
            onClick={handleLogout}
            className="px-3 py-1 border rounded hover:bg-red-50"
          >
            Logout
          </button>
        </div>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b bg-indigo-50">
              <th className="py-2 px-2">Field</th>
              <th className="py-2 px-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-slate-50">
              <td className="py-2 px-2 font-medium">Name</td>
              <td className="py-2 px-2">{user.name || "—"}</td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="py-2 px-2 font-medium">Date of Birth</td>
              <td className="py-2 px-2">{user.dob || "—"}</td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="py-2 px-2 font-medium">Email</td>
              <td className="py-2 px-2">{user.email || "—"}</td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="py-2 px-2 font-medium">Password</td>
              <td className="py-2 px-2">{user.password ? "********" : "—"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
