import { useState } from "react";

import { IEstate } from "../models/IEstate";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import EstateModalContent from "./EstateModalContent";

interface Props {
  estate: IEstate;
}

const EstateCard = ({ estate }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Card borderRadius={25} overflow="hidden">
        <Image src={estate.ThumbnailURL} />
        <CardHeader>
          <Heading fontSize="2xl">{estate.Title}</Heading>
        </CardHeader>
        <CardBody justifyContent="flex-end">
          <Text fontSize="xl" color="gray.300">
            {estate.Location}
          </Text>
          <Text fontSize="lg" color="gray.300">
            {estate.Bedrooms} beds | {estate.Bathrooms} baths
          </Text>
          <Text fontSize="3xl">${estate["Sale Price"]}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="teal" size="lg" onClick={openModal}>
            View Details
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={closeModal} size="auto">
        <ModalOverlay />
        <EstateModalContent estateDetails={estate} onCloseModal={closeModal} />
      </Modal>
    </>
  );
};

export default EstateCard;
