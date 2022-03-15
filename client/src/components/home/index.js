import { Box } from "@chakra-ui/react";
import { Categories } from "./categories";
import { Products } from "./products";

import "./index.scss";
import { Footbar } from "../footbar";

export const Home = () => {
  return (
    <Box display="flex">
      <Box className="containerCategoriesHome">
        <Categories />
      </Box>
      <Box className="containerProductsHome">
        <Products />
      </Box>
    </Box>
  );
};
