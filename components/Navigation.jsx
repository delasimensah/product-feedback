import { useState } from "react";
import { Box, Title, Text } from "@mantine/core";
import Image from "next/image";

import { Drawer } from "@mantine/core";

const Icon = ({ src }) => <Image src={src} alt="" width={20} height={20} />;

const Card = ({ className, children }) => (
  <Box className={`h-44 rounded-lg p-3 bg-white ${className}`}>{children}</Box>
);

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box className="flex lg:block md:space-x-5 lg:space-x-0 lg:space-y-5">
      <Box className="flex items-center justify-between h-20 px-3 bg-cover bg-header-sm z-[1000] w-full md:flex-1 md:h-44 md:bg-header-md md:rounded-lg md:p-3 md:items-end lg:bg-header-lg ">
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
            <Icon src="/assets/shared/mobile/icon-close.svg" />
          ) : (
            <Icon src="/assets/shared/mobile/icon-hamburger.svg" />
          )}
        </Box>
      </Box>

      <Card className="hidden md:flex-1 md:block">hello</Card>

      <Card className="hidden md:flex-1 md:block">hello</Card>

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
            <Card>hello</Card>

            <Card>hello</Card>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navigation;
