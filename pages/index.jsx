// components
import { TopBar, Navigation, SuggestionItem } from "../components";

const Suggestions = () => {
  return (
    <div className="container h-screen mx-auto overflow-hidden lg:flex lg:space-x-5 md:pt-5 lg:pt-10">
      <div className="hidden lg:block w-60">
        <Navigation />
      </div>

      <div className="flex flex-col flex-1 h-full">
        <div className="md:space-y-5 lg:space-y-0">
          <div className="lg:hidden">
            <Navigation />
          </div>

          <TopBar />
        </div>

        <div className="flex-1 py-5 space-y-5 overflow-auto overscroll-contain">
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
          <SuggestionItem />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
