import Header from "./Header";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full bg-gradient-45 animate-color">
      <div className="overflow-y-auto w-full h-full">
        <div className="flex flex-col lg:flex-row lg:justify-center">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
