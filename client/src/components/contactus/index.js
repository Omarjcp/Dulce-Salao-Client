import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Footbar } from "../footbar";
import "./index.scss";

export const ContactUs = () => {
  return (
    <Box className="containerMainContactus">
      <Box
        padding="6"
        boxShadow="lg"
        bg="white"
        className="containerTextContactus"
      >
        <Text>
          Ya que nuestros productos son realizados artesanalmente es primordial
          para nosotros ofrecer un producto fresco, por ende los mismos son
          realizados con previo pedido.
        </Text>
        <br />
        <Text>
          Puedes encontrarnos en nuestro instagram{" "}
          <Link
            href="https://www.instagram.com/duulceysalaoo/?hl=es-la"
            isExternal
            _hover={{ color: "pink" }}
          >
            Dulce y salao <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <Text>
          Del mismo modo puedes hacer tu consulta por{" "}
          <Link
            href="https://api.whatsapp.com/send?phone=+5804243286384"
            isExternal
            _hover={{ color: "pink" }}
          >
            Nuestro Whatsapp <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Box>
      <Box className="containerFooterContactUs">
        <Footbar />
      </Box>
    </Box>
  );
};
