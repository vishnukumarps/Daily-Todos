import { Button } from "@chakra-ui/react";

type ButtonProps = {
  btnTxt: string;
  btnSize?: string;
  onclickFunction?: () => {};
};
const CustomButton = ({ btnTxt, btnSize, onclickFunction }: ButtonProps) => {
  return (
    <Button colorScheme="teal" size={btnSize ? btnSize : "lg"}>
      {btnTxt}
    </Button>
  );
};

export default CustomButton;
