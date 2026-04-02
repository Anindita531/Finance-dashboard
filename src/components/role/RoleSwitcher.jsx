import { useState } from "react";

const RoleSwitcher = ({ role, setRole }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        className="border p-2 rounded bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;