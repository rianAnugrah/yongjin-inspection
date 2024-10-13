// components/FullScreenBackground.js
import Image from 'next/image';

const FullScreenBackground = ({ imageUrl, children }) => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={imageUrl}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default FullScreenBackground;