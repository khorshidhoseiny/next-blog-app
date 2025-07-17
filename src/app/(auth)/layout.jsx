import React from "react";

function layout({ children }) {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
}

export default layout;
