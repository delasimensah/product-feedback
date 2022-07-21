import { Box, Title, Text, Button } from "@mantine/core";

import { Icon } from ".";

const NoSuggestions = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-full space-y-10 bg-white rounded-xl">
      <Icon
        src="/assets/suggestions/illustration-empty.svg"
        className="w-24 h-24 md:w-36 md:h-36"
      />

      <Box className="flex flex-col items-center justify-center space-y-5 md:w-[58%] lg:w-[35%]">
        <Title className="text-center h1 text-gore">
          There is no feedback yet.
        </Title>

        <Text className="text-center body1 text-grey">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Text>
      </Box>

      <Button
        leftIcon={
          <Icon src="/assets/shared/icon-plus.svg" className="w-3 h-3" />
        }
        variant="filled"
        classNames={{
          root: "w-36 text-xs lg:w-40 lg:text-sm",
          filled: "bg-primary hover:bg-[#AF48DC]",
        }}
      >
        Add Feedback
      </Button>
    </Box>
  );
};

export default NoSuggestions;
