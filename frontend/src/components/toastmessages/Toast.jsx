import { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {

  useEffect(() => {
    const time = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`flex items-center gap-4 rounded-lg px-4 py-2 text-white shadow-lg ${
          type === "SUCCESS" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {/* Message */}
        <p>{message}</p>
        {/* Close button */}
        <button
          onClick={onClose}
          className="font-bold text-xl hover:opacity-70"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;