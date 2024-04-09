import { SimpleGrid } from "@chakra-ui/react";
import useEstates from "../hooks/useEstates";
import EstateCard from "./EstateCard";
import { EstateQuery } from "../App";

interface Props {
  estateQuery: EstateQuery;
}

const EstateGrid = ({ estateQuery }: Props) => {
  const { estates, error } = useEstates(estateQuery, [estateQuery]);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={10}
    >
      {estates.map((estate) => (
        <EstateCard key={estate.Id} estate={estate} />
      ))}
    </SimpleGrid>
  );
};

export default EstateGrid;
