import React from "react";

export const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]" +
        className
      }
      onClick={action}
    >
      <span className="text-xs mr-5">{icon}</span>
      {text}
    </div>
  );
};
