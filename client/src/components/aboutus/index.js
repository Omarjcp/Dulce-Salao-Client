import { Box, Image, Text } from "@chakra-ui/react";
import { Footbar } from "../footbar";
import "./index.scss";

export const AboutUs = () => {
  return (
    <Box className="containerMainAboutus">
      <Box
        padding="6"
        boxShadow="lg"
        bg="white"
        className="containerTextAboutus"
      >
        <Text>
          Somos una empresa familiar que realiza trabajos de reposteria casera y
          otros productos para alegrarles el día.
          <br />
          Realizamos productos elaborados con la mejor materia prima ya que el
          disfrute de nuestros clientes es nuestra principal motivación.
        </Text>
        <br />
        <Text>"Niñas a comeerr"</Text>
        <label>Maibe. M.</label>
      </Box>
      <Box style={{ position: "absolute", bottom: "0" }}>
        <Footbar />
      </Box>
    </Box>
  );
};
