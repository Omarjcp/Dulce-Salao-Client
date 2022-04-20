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
          &nbsp;&nbsp;&nbsp; Es un poco complicado pensar cuando empezó nuestra
          pasión por sacar el lado más bonito de lo dulce y lo salado… Algo que
          viene de herencia, tal vez. <br />
          &nbsp;&nbsp;&nbsp; Somos una familia incansable productora y
          comercializadora de alimentos de excelente calidad, con exquisitas
          recetas, sabores de toda una vida y combinaciones que nos permite
          explorar cada ingrediente de la más alta calidad, con la más fina
          elaboración y precios accesibles. Así conseguimos que nuestros
          productos sean una delicia para los ojos y un capricho para el
          paladar, que se puede disfrutar en cualquier momento. Comprometidos en
          deleitar con cariño y calidez a la comunidad en que nos desenvolvemos.
          Dedicamos el tiempo necesario a las necesidades de cada consumidor,
          porque no son un simple consumidor, ni un cliente, son persona que se
          convierten en aliados, permitiéndonos llegar cada vez más a un nuevo
          hogar. ¿Nuestra musa? cada pequeño detalle, cada palabra recibida,
          cada crítica, el olor de cada postre dulce y de cada complemento
          salado. Que nos llevan y nos recuerda que aún hay mucho por descubrir
          en este maravilloso y mágico mundo de
          <strong style={{ color: "#ff7b7b" }}>
            <i> dulceysalao</i>
          </strong>
          . Y recordar siempre que no solo lo dulce tiene una historia que
          contar.
        </Text>
        <br />
        <Text color="#ff7b7b">
          <i> Maibe. M.</i>
        </Text>
      </Box>
      <Box className="containerFooterAboutUs">
        <Footbar />
      </Box>
    </Box>
  );
};
