import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-6 left-6">
      <button
        className=" w-12 h-12 rounded-full border-white border-2 text-white hover:bg-white hover:text-black"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaArrowLeft size={40} />
      </button>
    </div>
  );
};

export default GoBackBtn;
