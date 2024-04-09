import {
  Box,
  Button,
  Flex,
  HStack,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { IEstate } from "../models/IEstate";
import ModalDetails from "./ModalDetails";
import ModalForm from "./ModalForm";

interface Props {
  estateDetails: IEstate;
  onCloseModal: () => void;
}

const EstateModalContent = ({ estateDetails, onCloseModal }: Props) => {
  return (
    <ModalContent>
      <ModalHeader>Details</ModalHeader>

      <ModalCloseButton />

      <ModalBody>
        <HStack>
          <Flex>
            <Box flex="2" pr="5">
              <ModalDetails estateDetails={estateDetails} />
            </Box>
            <Box flex="1" pl="5">
              <ModalForm />
            </Box>
          </Flex>
        </HStack>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="teal" mr={3} onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="ghost">Save</Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default EstateModalContent;
