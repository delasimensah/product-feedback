import { Box, Text, Title, Badge } from "@mantine/core";

import { Icon } from ".";

const FeedbackItem = ({ suggestion }) => {
  const { title, category, upvotes, description, comments } = suggestion;

  return (
    <>
      <Box className="hidden gap-10 p-8 bg-white rounded-lg md:flex">
        <Badge
          className="h-16 rounded-lg cursor-pointer bg-ghostWhite2"
          component="div"
        >
          <Icon src="/assets/shared/icon-arrow-up.svg" className="w-5 h-5" />
          <Text className="mt-2 text-center body3 text-bay">{upvotes}</Text>
        </Badge>

        <Box className="flex items-center justify-between flex-grow">
          <Box className="space-y-2">
            <Title className="h2 text-bay">{title}</Title>
            <Text className="text-grey">{description}</Text>
            <Badge
              size="lg"
              className="p-4 mb-2 mr-2 font-semibold capitalize rounded-lg cursor-pointer body2 text-deepBlue bg-ghostWhite2"
            >
              {category}
            </Badge>
          </Box>

          <Box className="flex items-center space-x-2">
            <Icon src="/assets/shared/icon-comments.svg" className="w-5 h-5" />
            <Text>{comments.length}</Text>
          </Box>
        </Box>
      </Box>

      <Box className="gap-10 p-8 space-y-5 bg-white rounded-lg md:hidden">
        <Box className="space-y-2">
          <Title className="h2 text-bay">{title}</Title>
          <Text className="text-grey">{description}</Text>
          <Badge
            size="lg"
            className="p-4 mb-2 mr-2 font-semibold capitalize rounded-lg cursor-pointer body2 text-deepBlue bg-ghostWhite2"
          >
            {category}
          </Badge>
        </Box>

        <Box className="flex items-center justify-between">
          <Badge
            className="h-10 rounded-lg cursor-pointer bg-ghostWhite2"
            component="div"
            classNames={{
              inner: "flex items-center space-x-2",
            }}
          >
            <Icon src="/assets/shared/icon-arrow-up.svg" className="w-5 h-5" />
            <Text className="text-center body3 text-bay">{upvotes}</Text>
          </Badge>

          <Box className="flex items-center space-x-2">
            <Icon src="/assets/shared/icon-comments.svg" className="w-5 h-5" />
            <Text>{comments.length}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeedbackItem;
