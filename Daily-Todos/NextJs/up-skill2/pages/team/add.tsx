import CustomButton from "@/modules/components/CustomButton";
import HeaderPage from "@/modules/components/Header";
import Layout from "@/modules/components/Layout";
import { Button, Flex, Input, Stack, Text, Heading } from "@chakra-ui/react";

const AddTeam = () => {
  return (
    <Layout>
      <HeaderPage />
      <Flex direction="column" align="center">
        <Heading color="teal">Add Team</Heading>
        <Stack spacing=".05em" mt="md" minWidth="lg">
          <Text color="teal">Name</Text>
          <Input />
          <Text color="teal">Sport code</Text>
          <Input />
          <Text color="teal">Name</Text>
          <Input />
          <Text color="teal">Sport code</Text>
          <Input />
          <Button colorScheme="teal">
            Add team
          </Button>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default AddTeam;
