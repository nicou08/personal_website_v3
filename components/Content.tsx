import Image from "next/image";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-950 w-full h-full">
      <div className="flex justify-center w-full h-full">
        <div className="grid grid-cols-3 h-full w-1/2 gap-4">
          <div className="bg-red-300 text-white"> HELLO </div>
          <div className="bg-red-300 text-white"> HELLO </div>
          <div className="bg-red-300 text-white"> HELLddO </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
