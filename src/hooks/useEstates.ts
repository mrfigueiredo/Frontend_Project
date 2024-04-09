import axios from "axios";
import { useEffect, useState } from "react";

import { IEstate } from "../models/IEstate";
import _ from "lodash";
import { EstateQuery } from "../App";

const useEstates = (estateQuery: EstateQuery, deps: any[]) => {
  const [estates, setEstates] = useState<IEstate[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("./data/listings.json")
      .then((response) => {
        const singleObjectQuery = _.omit(estateQuery, ["Price"]);

        var result = _.filter(response.data, (item) => {
          return _.every(singleObjectQuery, (value, key) => {
            return _.get(item, key) === value;
          });
        });

        const priceQuery: number[] | null = estateQuery.Price;

        if (priceQuery) {
          result = _.filter(result, (item) => {
            const price = _.get(item, "Sale Price");
            return price >= priceQuery[0] && price <= priceQuery[1];
          });
        }

        setEstates(result);
      })
      .catch((error) => setError(error.message));
  }, [...deps]);

  return { estates, error };
};

export default useEstates;
