import {
  Flex,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  VStack,
  Text,
} from "@chakra-ui/react";
import useProperty from "../hooks/useProperty";
import { useState } from "react";

interface Props {
  setSelectPrice: (price: number[]) => void;
  selectedPrice: number[] | null;
}

const RangeSliderFilter = ({ selectedPrice, setSelectPrice }: Props) => {
  const { properties, error } = useProperty<number>("Price");

  useState;

  return (
    <VStack spacing={4} width="500px">
      <Heading size="md">Price</Heading>
      <RangeSlider
        w="100%"
        defaultValue={[250000, 750000]}
        min={0}
        max={1000000}
        step={500}
        aria-label={["min", "max"]}
        onChangeEnd={(val) => setSelectPrice(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Flex justify="space-between" w="full">
        <Text>Min: {selectedPrice?.[0]}</Text>
        <Text>Max: {selectedPrice?.[1]}</Text>
      </Flex>
    </VStack>
  );
};

export default RangeSliderFilter;
