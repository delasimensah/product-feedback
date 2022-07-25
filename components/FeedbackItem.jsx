import { Box, Text } from "@mantine/core";

const FeedbackItem = ({ suggestion }) => {
  const { title, category, upvotes, status, description, comments } =
    suggestion;

  return (
    <Box className="px-5 py-10 bg-white rounded-lg">
      <Text>Title: {title}</Text>
      <Text>Category: {category}</Text>
      <Text>Upvotes: {upvotes}</Text>
      <Text>Status: {status}</Text>
      <Text>Description: {description}</Text>
      <Text>Comments: {comments.length}</Text>
    </Box>
  );
};

export default FeedbackItem;
