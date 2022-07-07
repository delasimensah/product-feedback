const Suggestions = () => {
  return (
    <div className="container flex flex-col h-screen mx-auto overflow-hidden md:space-y-5 lg:space-y-0 lg:space-x-5 md:pt-10 lg:pt-20 lg:flex-row">
      <div className="hidden space-x-5 md:flex lg:block lg:flex-col lg:space-x-0 lg:space-y-5 md:basis-1/5">
        <div className="h-40 rounded-lg bg-violet basis-1/3"></div>

        <div className="h-40 bg-white rounded-lg basis-1/3"></div>

        <div className="h-40 bg-white rounded-lg basis-1/3"></div>
      </div>

      <div className="h-20 bg-violet md:hidden">content</div>

      <div className="flex flex-col flex-grow space-y-5 md:basis-4/5 md:flex-grow-0">
        <div className="h-20 md:rounded-lg lg:h-40 bg-bay"></div>

        <div className="flex-grow px-5 space-y-5 md:p-0">
          <div className="h-40 bg-white rounded-lg"></div>
          <div className="h-40 bg-white rounded-lg"></div>
          <div className="h-40 bg-white rounded-lg"></div>
          <div className="h-40 bg-white rounded-lg"></div>
          <div className="h-40 bg-white rounded-lg"></div>
          <div className="h-40 bg-white rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
