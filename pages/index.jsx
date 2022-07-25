import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mantine/core";

import { setFeedback } from "../redux/feedbackSlice";
import DATA from "../utils/data.json";

// components
import { TopBar, Navigation, NoFeedback, FeedbackItem } from "../components";

const Suggestions = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback.feedback);
  const category = useSelector((state) => state.feedback.category);
  const sortBy = useSelector((state) => state.feedback.sortBy);

  const filteredFeedback = feedback.filter((feed) => {
    if (category === "All") return true;

    return feed.category === category.toLowerCase();
  });

  switch (sortBy) {
    case "Most Upvotes":
      filteredFeedback.sort((a, b) => b.upvotes - a.upvotes);
      break;
    case "Least Upvotes":
      filteredFeedback.sort((a, b) => a.upvotes - b.upvotes);
      break;
    case "Most Comments":
      filteredFeedback.sort((a, b) => b.comments.length - a.comments.length);
      break;
    case "Least Comments":
      filteredFeedback.sort((a, b) => a.comments.length - b.comments.length);
      break;
  }

  useEffect(() => {
    dispatch(setFeedback(DATA.productRequests));
  }, [dispatch]);

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

          <TopBar suggestions={filteredFeedback.length} />
        </Box>

        <Box className="flex-1 px-3 py-5 space-y-5 overflow-auto overscroll-contain md:px-0">
          {filteredFeedback.length ? (
            <>
              {filteredFeedback.map((suggestion, idx) => {
                return <FeedbackItem key={idx} suggestion={suggestion} />;
              })}
            </>
          ) : (
            <NoFeedback />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Suggestions;
