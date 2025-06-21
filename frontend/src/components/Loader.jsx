import { LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    // min-h-screen bg-base-100
    <div className="flex items-center justify-center">
      <LoaderIcon className="animate-spin size-10" />
    </div>
  );
};

export default Loader;
