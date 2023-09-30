import {
  Image,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

const HeaderPage = () => {
  return (
    <>
      <Flex>
        <Image
          height="40px"
          src="/static/images/logo.png"
          alt="University Card"
        />
      </Flex>
    </>
  );
};

export default HeaderPage;
