import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-gray-700">Filter:</span>
      <select
        className="border border-gray-300 rounded px-2 py-1"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default Filter;
