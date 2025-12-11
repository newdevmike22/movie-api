import { FaArrowLeft } from "react-icons/fa";

const ResetButton = ({ onReset }) => {
  return (
    <div className="flex justify-center mb-4">
      <button onClick={onReset} className="flex items-center bg-[#db0404] px-3 py-2 rounded text-white font-semibold hover:bg-gray-500">
        <FaArrowLeft className="mr-2 text-white text-bold" /> Back to Popular
      </button>
    </div>
  );
};

export default ResetButton;
