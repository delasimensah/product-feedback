import { Box } from "@mantine/core";

// components
import {
  TopBar,
  Navigation,
  SuggestionItem,
  NoSuggestions,
} from "../components";

const Suggestions = () => {
  const suggestions = [];

  return (
    <Box className="container h-screen mx-auto overflow-hidden lg:flex lg:space-x-5 md:pt-5 lg:pt-10 md:px-5 xl:px-10">
      <Box className="hidden lg:block w-60">
        <Navigation />
      </Box>

      <Box className="flex flex-col flex-1 h-full">
        <Box className="md:space-y-5 lg:space-y-0">
          <Box className="lg:hidden">
            <Navigation />
          </Box>

          <TopBar suggestions={suggestions.length} />
        </Box>

        <Box className="flex-1 px-3 py-5 space-y-5 overflow-auto overscroll-contain md:px-0">
          {suggestions.length ? (
            <>
              {suggestions.map((suggestion, idx) => {
                return <SuggestionItem key={idx} suggestion={suggestion} />;
              })}
            </>
          ) : (
            <NoSuggestions />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Suggestions;
