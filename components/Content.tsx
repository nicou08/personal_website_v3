// Desc: Content component

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full bg-gradient-45 animate-color">
      <div className="overflow-y-auto w-full h-full scroll-smooth">
        {children}
      </div>
    </div>
  );
};

export default Content;
