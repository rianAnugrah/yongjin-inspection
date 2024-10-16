import { AiOutlineSetting } from 'react-icons/ai';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-100 my-4 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <AiOutlineSetting className="text-6xl text-blue-500 animate-spin" />
        <h1 className="text-4xl font-bold text-gray-800">Under Construction</h1>
      </div>
      <p className="mt-4 text-lg text-gray-600 text-center">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};

export default UnderConstruction;