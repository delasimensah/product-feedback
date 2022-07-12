import { Box } from "@mantine/core";

// components
import { TopBar, Navigation, SuggestionItem } from "../components";

const Suggestions = () => {
  return (
    <Box className="container h-screen mx-auto overflow-hidden lg:flex lg:space-x-5 md:pt-5 lg:pt-10">
      <Box className="hidden lg:block w-60">
        <Navigation />
      </Box>

      <Box className="flex flex-col flex-1 h-full">
        <Box className="md:space-y-5 lg:space-y-0">
          <Box className="lg:hidden">
            <Navigation />
          </Box>

          <TopBar />
        </Box>

        <Box className="flex-1 py-5 space-y-5 overflow-auto overscroll-contain">
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
        </Box>
      </Box>
    </Box>
  );
};

export default Suggestions;
