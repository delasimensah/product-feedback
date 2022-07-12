import { Box } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <Box className="container h-screen mx-auto text-white bg-black">
      {children}
    </Box>
  );
};

export default Layout;
