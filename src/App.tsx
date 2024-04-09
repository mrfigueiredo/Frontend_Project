import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EstateGrid from "./components/EstateGrid";
import LocationFilter from "./components/LocationFilter";
import { useState } from "react";
import FilterGrid from "./components/FilterGrid";

export interface EstateQuery {
  Location: string | null;
  Bedrooms: number | null;
  Bathrooms: number | null;
  Parking: number | null;
  Price: number[] | null;
}

function App() {
  const [estateQuery, setEstateQuery] = useState<EstateQuery>(
    {} as EstateQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "filters" "content"`,
        lg: `"nav nav" "location filters" "location content"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="location" padding={5}>
          <LocationFilter
            onSelectLocation={(Location) =>
              setEstateQuery({ ...estateQuery, Location })
            }
            selectedLocation={estateQuery.Location}
          />
        </GridItem>
      </Show>
      <GridItem area="filters">
        <FilterGrid
          onSelectBedrooms={(Bedrooms) =>
            setEstateQuery({ ...estateQuery, Bedrooms })
          }
          onSelectBathrooms={(Bathrooms) =>
            setEstateQuery({ ...estateQuery, Bathrooms })
          }
          onSelectParking={(Parking) =>
            setEstateQuery({ ...estateQuery, Parking })
          }
          onSelectPrice={(Price) => setEstateQuery({ ...estateQuery, Price })}
          estateQuery={estateQuery}
        />
      </GridItem>
      <GridItem area="content">
        <EstateGrid estateQuery={estateQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
