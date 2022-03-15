import { Box, Image, Text } from "@chakra-ui/react";
import ImageLogo from "../navbar/Logo.png";

import "./index.scss";

export const Footbar = () => {
  return (
    <Box className="containerFootbar">
      <Box className="containerAdress">
        <Text>Palo Negro - Maracay, Edo. Aragua</Text>
        <Text>Tamanaco #65</Text>
      </Box>
      <Box className="containerLogo">
        <Image src={ImageLogo} alt="Logo de Dulce y Salao" />
      </Box>
      <Box className="containerNetworks">
        aqui van los logos de las redes sociales
      </Box>
    </Box>
  );
};
