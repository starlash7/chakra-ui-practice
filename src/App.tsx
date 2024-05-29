import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import Count from "./components/Count";
import ModalComp from "./components/ModalComp";
import AvartarComp from "./components/AvartarComp";

const App: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        flexDir="column"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        gap={8}
      >
        <Count />
        <Button onClick={onOpen}>Open Modal</Button>
        <AvartarComp />
      </Flex>
      <ModalComp isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
