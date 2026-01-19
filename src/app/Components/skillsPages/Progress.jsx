import React from 'react';

function Progress({ skill, percentage ,color }) {
  return (
    <div className="my-2">
      <div className="flex justify-between mb-1">
        <span className="text-gray-400 font-medium">{skill}</span>
        <span className="text-gray-400 font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className={` h-4 rounded-full transition-all duration-1000`}
          style={{ width: `${percentage}%`,background:`${color}` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
