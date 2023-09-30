import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import HeaderPage from "./Header";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box maxW="container.md" my="lg" mx={{ base: "lg", md: "auto" }} >
      <HeaderPage />
      {children}
    </Box>
  );
};

export default Layout;
