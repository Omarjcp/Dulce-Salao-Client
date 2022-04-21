import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Footbar } from "../footbar";

import iconInstagram from "./iconInstagram.png";
import iconWhatsapp from "./iconWhatsapp.png";
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
        <Text display="flex" alignItems="center">
          {/* <InstagramOutlined
            style={{ fontSize: "2rem", color: "pink", marginRight: ".5rem" }}
          /> */}
          <Image src={iconInstagram} marginRight="1rem" w="2.6rem" />
          <Link
            href="https://www.instagram.com/duulceysalaoo/?hl=es-la"
            isExternal
            color="#ff7b7b"
            _hover={{ color: "pink" }}
          >
            Dulce y salao <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <Text display="flex" alignItems="center">
          {/* <WhatsAppOutlined
            style={{ fontSize: "2rem", marginRight: ".5rem", color: "pink" }}
          /> */}
          <Image src={iconWhatsapp} marginRight="1rem" w="2.6rem" />
          <Link
            href="https://api.whatsapp.com/send?phone=+5804243286384"
            isExternal
            color="#ff7b7b"
            _hover={{ color: "pink" }}
          >
            Nuestro Whatsapp <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Box>
      {/* <Box className="containerFooterContactUs">
        <Footbar />
      </Box> */}
    </Box>
  );
};
