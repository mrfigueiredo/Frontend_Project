import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IEstate } from "../models/IEstate";
import { formatDate } from "../utils/formatDate";

interface Props {
  estateDetails: IEstate;
}

const ModalDetails = ({ estateDetails }: Props) => {
  return (
    <HStack>
      <Card borderRadius={25} overflow="hidden">
        <CardHeader>
          <HStack justifyContent="space-between">
            <VStack align="baseline">
              <Heading fontSize="2xl">{estateDetails.Title}</Heading>
              <Text fontSize="xl" color="gray.300">
                {estateDetails.Location}
              </Text>
            </VStack>
            <VStack align="end">
              <Text fontSize="3xl">${estateDetails["Sale Price"]}</Text>
              <Text fontSize="lg" color="gray.300">
                Date Listed: {formatDate(estateDetails.DateListed)}
              </Text>
            </VStack>
          </HStack>
        </CardHeader>

        <CardBody justifyContent="flex-end">
          <Box
            bgImage={estateDetails.PictureURL}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            boxSize="350px"
          />

          <HStack justifyContent="space-between" marginTop={5}>
            <VStack>
              <Text fontSize="xl" color="gray.300">
                {estateDetails.Bedrooms}
              </Text>
              <Text fontSize="lg" color="gray.300">
                BED
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="xl" color="gray.300">
                {estateDetails.Bathrooms}
              </Text>
              <Text fontSize="lg" color="gray.300">
                BATH
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="xl" color="gray.300">
                {estateDetails.Parking}
              </Text>
              <Text fontSize="lg" color="gray.300">
                PARKING
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="xl" color="gray.300">
                {estateDetails.Sqft}
              </Text>
              <Text fontSize="lg" color="gray.300">
                SQFT
              </Text>
            </VStack>
            <VStack>
              <Text fontSize="xl" color="gray.300">
                {estateDetails.YearBuilt}
              </Text>
              <Text fontSize="lg" color="gray.300">
                YEAR BUILT
              </Text>
            </VStack>
          </HStack>
        </CardBody>

        <CardFooter>{estateDetails.Description}</CardFooter>
      </Card>
    </HStack>
  );
};

export default ModalDetails;
