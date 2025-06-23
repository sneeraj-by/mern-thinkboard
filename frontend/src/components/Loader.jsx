import { LoaderIcon } from "lucide-react";

const Loader = ({ customClass }) => {
  return (
    // min-h-screen bg-base-100
    <div className={`flex items-center justify-center ${customClass}`}>
      <LoaderIcon className="animate-spin size-10" />
    </div>
  );
};

export default Loader;
