import React from "react";

export default function ProgressBar({ current = 0, total = 16 }) {
  const percentage = Math.min(current / total, 1) * 100;

  return (
    <div className="w-full px-6 py-2">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">
        {current} / {total}
      </p>
    </div>
  );
}
