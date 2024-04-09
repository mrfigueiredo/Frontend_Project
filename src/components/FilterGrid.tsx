import { Box, HStack, Image, Text } from "@chakra-ui/react";
import DropdownFilterSelector from "./DropdownFilterSelector";
import { EstateQuery } from "../App";
import RangeSliderFilter from "./RangeSliderFilter";

interface Props {
  onSelectBedrooms: (bedrooms: number) => void;
  onSelectBathrooms: (bathrooms: number) => void;
  onSelectParking: (parkings: number) => void;
  onSelectPrice: (price: number[]) => void;

  estateQuery: EstateQuery;
}

const FilterGrid = ({
  onSelectBedrooms,
  onSelectBathrooms,
  onSelectParking,
  onSelectPrice,
  estateQuery,
}: Props) => {
  return (
    <HStack justifyContent="space-between" padding="25px">
      <DropdownFilterSelector
        key={"Bedrooms"}
        keyProperty={"Bedrooms"}
        onSelectProperty={onSelectBedrooms}
        selectedProperty={estateQuery.Bedrooms}
      />
      <DropdownFilterSelector
        key={"Bathrooms"}
        keyProperty={"Bathrooms"}
        onSelectProperty={onSelectBathrooms}
        selectedProperty={estateQuery.Bathrooms}
      />
      <DropdownFilterSelector
        key={"Parkings"}
        keyProperty={"Parking"}
        onSelectProperty={onSelectParking}
        selectedProperty={estateQuery.Parking}
      />

      <RangeSliderFilter
        setSelectPrice={onSelectPrice}
        selectedPrice={estateQuery.Price}
      />
    </HStack>
  );
};

export default FilterGrid;
