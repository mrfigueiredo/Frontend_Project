import { Button, Heading, List, ListItem } from "@chakra-ui/react";

import useProperty from "../hooks/useProperty";

interface Props {
  onSelectLocation: (location: string) => void;
  selectedLocation: string | null;
}

const LocationFilter = ({ selectedLocation, onSelectLocation }: Props) => {
  const { properties, error } = useProperty<string>("Location");

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Locations
      </Heading>
      <List>
        {properties.map((location) => (
          <ListItem key={location} paddingY="5px">
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={location == selectedLocation ? "bold" : "normal"}
              onClick={() => onSelectLocation(location)}
              fontSize="md"
              variant="link"
            >
              {location}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default LocationFilter;
