import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="px-2 m-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-slate-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
