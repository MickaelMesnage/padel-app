import { BrandWithPulseAnimation } from "@/components/atoms/BrandWithPulseAnimation";

const Loading = () => {
  return (
    <div className="w-full h-80 flex items-center justify-center">
      <BrandWithPulseAnimation />
    </div>
  );
};

export default Loading;
