import { Modal, ModalOverlay, ModalContent, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Modal isCentered isOpen={true}>
      <ModalOverlay
        bg="blackAlpha.800"
        backdropFilter="blur(7px) hue-rotate(0deg)"
      />
      <ModalContent
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="transparent"
        boxShadow="none"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </ModalContent>
    </Modal>
  );
};
