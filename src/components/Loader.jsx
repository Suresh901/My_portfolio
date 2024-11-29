import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      {/* <div className="relative w-12 h-12 text-white transform rotate-45 perspective-1000 rounded-full loader">
        <div className="absolute inset-0 rounded-full text-[#FF3D00] animate-spin transform rotate-y-70 delay-[400ms]"></div>
      </div> */}

      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#f1f1f1",
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
