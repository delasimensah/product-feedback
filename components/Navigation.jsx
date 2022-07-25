import { useState } from "react";
import Link from "next/link";
import { Box, Title, Text, Drawer, Badge } from "@mantine/core";

import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/feedbackSlice";

import { Icon } from ".";

const Card = ({ className, children }) => (
  <Box className={`h-40 rounded-lg p-5 bg-white ${className}`}>{children}</Box>
);

const RoadMap = () => {
  const feedback = useSelector((state) => state.feedback.feedback);

  return (
    <Box className="space-y-3">
      <Box className="flex items-center justify-between">
        <Title className="h3 text-bay">Roadmap</Title>

        <Link href="/">
          <a
            className={`${
              feedback.length > 0 ? "text-deepBlue" : "text-gray-300"
            } underline body3`}
          >
            View
          </a>
        </Link>
      </Box>

      <Box>
        <Box className="flex items-center justify-between">
          <span className="flex items-center space-x-3">
            <Box className="h-[6px] w-[6px] bg-pink rounded-full"></Box>

            <Text className="body2 text-gore">Planned</Text>
          </span>

          <Text className="body3 text-bay">0</Text>
        </Box>

        <Box className="flex items-center justify-between">
          <span className="flex items-center space-x-3">
            <Box className="h-[6px] w-[6px] bg-primary rounded-full"></Box>

            <Text className="body2 text-gore">In-Progress</Text>
          </span>

          <Text className="body3 text-bay">0</Text>
        </Box>

        <Box className="flex items-center justify-between">
          <span className="flex items-center space-x-3">
            <Box className="h-[6px] w-[6px] bg-lightBlue rounded-full"></Box>

            <Text className="body2 text-gore">Live</Text>
          </span>

          <Text className="body3 text-bay">0</Text>
        </Box>
      </Box>
    </Box>
  );
};

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.feedback.category);

  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <Box className="">
      {categories.map((cat, idx) => (
        <Badge
          key={idx}
          size="lg"
          className={`mr-2 mb-2 rounded-lg capitalize body3 cursor-pointer  ${
            cat === category
              ? "bg-deepBlue text-white"
              : "text-deepBlue bg-ghostWhite2"
          }`}
          onClick={() => dispatch(setCategory(cat))}
        >
          {cat}
        </Badge>
      ))}
    </Box>
  );
};

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box className="flex lg:block md:space-x-5 lg:space-x-0 lg:space-y-5">
      <Box className="flex items-center justify-between h-20 px-5 bg-cover bg-header-sm z-[1000] w-full md:flex-1 md:h-40 md:bg-header-md md:rounded-lg md:p-5 md:items-end lg:bg-header-lg ">
        <Box className="">
          <Title className="capitalize text-ghostWhite2 h3 md:h2">
            Frontend Mentor
          </Title>
          <Text className="capitalize text-ghostWhite body2 md:body1">
            feedback board
          </Text>
        </Box>

        <Box className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <Icon
              src="/assets/shared/mobile/icon-close.svg"
              className="w-5 h-5"
            />
          ) : (
            <Icon
              src="/assets/shared/mobile/icon-hamburger.svg"
              className="w-5 h-5"
            />
          )}
        </Box>
      </Box>

      <Card className="hidden md:flex-1 md:block">
        <Categories />
      </Card>

      <Card className="hidden md:flex-1 md:block">
        <RoadMap />
      </Card>

      <Drawer
        opened={mobileOpen}
        onClose={() => setMobileOpen(false)}
        position="right"
        overlayOpacity={0.5}
        size="85%"
        withCloseButton={false}
      >
        <Box className="h-full p-5 mt-20 bg-ghostWhite">
          <Box className="space-y-5">
            <Card>
              <Categories />
            </Card>

            <Card>
              {" "}
              <RoadMap />
            </Card>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navigation;
