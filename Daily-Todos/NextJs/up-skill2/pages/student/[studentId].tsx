import CustomButton from "@/modules/components/CustomButton";
import { Button, Center, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const StudentPage = () => {
  const router = useRouter();
  const studentId = router.query.studentId;
  return (
    <Stack spacing={4} direction="column" align="center">
        <Text>{studentId}</Text>
      <Button colorScheme="teal" size="xs">
        Button
      </Button>
      <Button colorScheme="teal" size="sm">
        Button
      </Button>
      <Button colorScheme="teal" size="md">
        Button
      </Button>
      <Button colorScheme="teal" size="lg">
        Button
      </Button>
      <CustomButton btnTxt="Button" />
    </Stack>
  );
};

export default StudentPage;
