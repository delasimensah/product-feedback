import { Box, Text, Title, Badge } from "@mantine/core";
import Link from "next/link";

import { Icon } from ".";

const CommentIcon = ({ comments }) => {
  return (
    <Box className="flex items-center space-x-2">
      <Icon src="/assets/shared/icon-comments.svg" className="w-5 h-5" />
      <Text>{comments}</Text>
    </Box>
  );
};

const UpvoteButton = ({ upvotes }) => {
  return (
    <Badge
      className="h-10 md:h-16 rounded-lg cursor-pointer bg-ghostWhite2 hover:bg-[#B5BCE0]"
      component="button"
      classNames={{
        inner: "flex items-center space-x-2 md:space-x-0 md:flex-col",
      }}
      onClick={() => console.log("upvote function")}
    >
      <Icon src="/assets/shared/icon-arrow-up.svg" className="w-5 h-5" />
      <Text className="text-center md:mt-2 body3 text-bay">{upvotes}</Text>
    </Badge>
  );
};

const Details = ({ title, description, category }) => {
  return (
    <Box className="space-y-2">
      <Title className="h2 text-bay">{title}</Title>
      <Text className="text-grey">{description}</Text>
      <Badge
        size="lg"
        className="p-4 mb-2 mr-2 font-semibold capitalize rounded-lg body2 text-deepBlue bg-ghostWhite2"
      >
        {category}
      </Badge>
    </Box>
  );
};

const LinkWrapper = ({ children, className, id }) => {
  return (
    <Link href={`/feedback-details/${id}`}>
      <a className={`block ${className}`}>{children}</a>
    </Link>
  );
};

const FeedbackItem = ({ suggestion }) => {
  const { title, category, upvotes, description, comments, id } = suggestion;

  return (
    <>
      {/* desktop and tablet */}
      <Box className="hidden gap-10 bg-white rounded-lg md:flex">
        <Box className="py-8 pl-8">
          <UpvoteButton upvotes={upvotes} />
        </Box>

        <LinkWrapper className="flex-grow" id={id}>
          <Box className="flex items-center justify-between py-8 pr-8">
            <Details
              title={title}
              description={description}
              category={category}
            />

            <CommentIcon comments={comments.length} />
          </Box>
        </LinkWrapper>
      </Box>

      {/* mobile */}
      <Box className="gap-10 p-8 space-y-5 bg-white rounded-lg md:hidden">
        <LinkWrapper id={id}>
          <Details
            title={title}
            description={description}
            category={category}
          />
        </LinkWrapper>

        <Box className="flex items-center justify-between">
          <UpvoteButton upvotes={upvotes} />

          <LinkWrapper id={id}>
            <CommentIcon comments={comments.length} />
          </LinkWrapper>
        </Box>
      </Box>
    </>
  );
};

export default FeedbackItem;
