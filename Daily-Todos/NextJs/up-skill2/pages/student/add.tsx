import Layout from "@/modules/components/Layout";
import { Button, Flex, IconButton, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import {AiFillCloseSquare} from 'react-icons/ai';

const AddStudent = () => {
  const fruits = ['Apple', 'Orange', 'Grape', 'Strawberry']
  
  const onSubmit = () => {
    console.log(inputValue.current?.value)
  }

  const inputValue = useRef<HTMLInputElement>(null);
  return (
    <Layout>
      <Stack mt={10} spacing={4}>
        <Text>Name</Text>
        <Input ref={inputValue} />
        <Text color='teal'>Fruits</Text>
        <Select placeholder='Select option'>
          {fruits?.map(item => (
            <option value={item}>{item}</option>
          ))}
        </Select>
        <Flex border='solid 1px red'  alignItems='center' gap={3}>
          <Text fontSize={20}> Apple</Text>
          <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='18px'
            icon={<AiFillCloseSquare />}
          />
          <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='18px'
            icon={<AiFillCloseSquare />}
          />
        </Flex>
        <Button
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Layout>
  );
};

export default AddStudent;
