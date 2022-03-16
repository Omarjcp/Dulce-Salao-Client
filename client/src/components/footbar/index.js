import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import ImageLogo from "../navbar/Logo.png";

import "./index.scss";

export const Footbar = () => {
  return (
    <Box className="containerFootbar">
      <Box className="containerAdress">
        <Text className="adress">Palo Negro - Maracay, Edo. Aragua</Text>
        <Text className="adressligth">Tamanaco #65</Text>
      </Box>
      <Box className="containerLogo">
        <Image
          className="imageLogoFooter"
          src={ImageLogo}
          alt="Logo de Dulce y Salao"
        />
      </Box>
      <Box className="containerNetworks">
        <a
          href="https://api.whatsapp.com/send?phone=+5804243286384"
          target="_blank"
        >
          <WhatsAppOutlined
            style={{ fontSize: "2.3rem", marginRight: "2rem", color: "#fff" }}
          />
        </a>
        <a
          href="https://www.instagram.com/duulceysalaoo/?hl=es-la"
          target="_blank"
        >
          <InstagramOutlined style={{ fontSize: "2.3rem", color: "#fff" }} />
        </a>
      </Box>
    </Box>
  );
};
