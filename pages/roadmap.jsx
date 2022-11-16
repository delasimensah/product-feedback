import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Text, Badge, Tabs } from "@mantine/core";

// components
import { Icon, PrimaryButton, BackButton } from "../components";

const Heading = ({ title, count, text }) => (
  <Box>
    <Text className="capitalize text-bay h4">
      {title} ({count})
    </Text>
    <Text className="font-normal text-grey body3">{text}</Text>
  </Box>
);

const CardWrapper = ({ data, color, title }) => (
  <Box className="space-y-3">
    {data.map((sugg, idx) => (
      <Box
        key={idx}
        className={`p-5 bg-white border-t-[6px] rounded-md border-t-${color} space-y-2`}
      >
        <Text className="flex items-center font-normal capitalize text-grey body3">
          <div
            className={`h-[5px] w-[5px] bg-${color} rounded-full inline-block mr-2`}
          />
          {title}
        </Text>

        <Link href={`/feedback-details/${sugg.id}`}>
          <a className="h4 text-bay hover:text-deepBlue">{sugg.title}</a>
        </Link>

        <Text className="font-normal text-grey body3">{sugg.description}</Text>

        <Badge
          size="lg"
          className="p-4 mb-2 mr-2 font-semibold capitalize rounded-lg body2 text-deepBlue bg-ghostWhite2"
        >
          {sugg.category}
        </Badge>

        <Box className="flex items-center justify-between">
          <Badge
            // size="lg"
            className="p-4 rounded-lg cursor-pointer bg-ghostWhite2 hover:bg-[#B5BCE0]"
            component="button"
            classNames={{
              inner: "flex items-center space-x-2 ",
            }}
            onClick={() => console.log("upvote function")}
          >
            <Icon src="/assets/shared/icon-arrow-up.svg" className="w-3 h-3" />

            <Text className="body3 text-bay">{sugg.upvotes}</Text>
          </Badge>

          <Box className="flex items-center space-x-2">
            <Icon src="/assets/shared/icon-comments.svg" className="w-3 h-3" />
            <Text className="body3">{sugg.comments.length}</Text>
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
);

const Roadmap = () => {
  const router = useRouter();
  const feedback = useSelector((state) => state.feedback.feedback);

  const planned = useMemo(() => {
    return feedback.filter((feed) => feed.status === "planned");
  }, [feedback]);

  const inProgress = useMemo(() => {
    return feedback.filter((feed) => feed.status === "in-progress");
  }, [feedback]);

  const live = useMemo(() => {
    return feedback.filter((feed) => feed.status === "live");
  }, [feedback]);

  const grid = "space-y-5 px-10 py-5 md:px-0 md:py-0";

  return (
    <Box className="container mx-auto md:py-5 lg:py-10 md:px-5 xl:px-10 md:space-y-10">
      <Box className="flex items-center justify-between p-3 md:rounded-lg bg-bay">
        <Box className="">
          <BackButton light />
          <Text className="pl-1 text-white h3">Roadmap</Text>
        </Box>

        <PrimaryButton
          icon={<Icon src="/assets/shared/icon-plus.svg" className="w-3 h-3" />}
          text="add feedback"
          onClick={() => router.push("/new-feedback")}
        />
      </Box>

      <Box className="hidden grid-cols-3 gap-10 md:grid">
        <Box className={`${grid}`}>
          <Heading
            title="planned"
            count={planned.length}
            text="Ideas prioritzed for research"
          />

          <CardWrapper data={planned} color="pink" title="planned" />
        </Box>

        <Box className={`${grid}`}>
          <Heading
            title="in-progress"
            count={inProgress.length}
            text="Currently being developed"
          />

          <CardWrapper data={inProgress} color="primary" title="in progress" />
        </Box>

        <Box className={`${grid}`}>
          <Heading title="live" count={live.length} text="Released features" />

          <CardWrapper data={live} color="lightBlue" title="live" />
        </Box>
      </Box>

      {/* mobile tabs */}
      <Tabs
        grow
        classNames={{
          root: "md:hidden",
          tabControl: "h-[60px]",

          tabActive: "border-b-primary border-b-4 text-bay h4",
          tabLabel: "text-grey ",
        }}
      >
        <Tabs.Tab label={`Planned (${planned.length})`}>
          <Box className={`${grid}`}>
            <Heading
              title="planned"
              count={planned.length}
              text="Ideas prioritzed for research"
            />

            <CardWrapper data={planned} color="pink" title="planned" />
          </Box>
        </Tabs.Tab>
        <Tabs.Tab label={`In-Progress (${inProgress.length})`}>
          <Box className={`${grid}`}>
            <Heading
              title="in-progress"
              count={inProgress.length}
              text="Currently being developed"
            />

            <CardWrapper
              data={inProgress}
              color="primary"
              title="in progress"
            />
          </Box>
        </Tabs.Tab>
        <Tabs.Tab label={`Live (${live.length})`}>
          <Box className={`${grid}`}>
            <Heading
              title="live"
              count={live.length}
              text="Released features"
            />

            <CardWrapper data={live} color="lightBlue" title="live" />
          </Box>
        </Tabs.Tab>
      </Tabs>
    </Box>
  );
};

export default Roadmap;
