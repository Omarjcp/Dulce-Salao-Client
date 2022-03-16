import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Box,
  Wrap,
  WrapItem,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import {
  getProducts,
  getProductsForId,
  getProductsForName,
} from "../../../redux/actions";

import "./index.scss";
// import { Loading } from "../../loading";
import { CarouselComp } from "./carousel";
import { Loading } from "../../loading";

export const Products = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  const history = useHistory();
  let { products, token } = useSelector((state) => state);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [togleLoading, setTogleLoading] = useState(true);

  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductsForName(input));
    setInput("");
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = (e) => {
    dispatch(getProductsForId(e.id));
    history.push(`/detalle/${e.id}`);
  };

  useEffect(() => {
    setTimeout(() => setTogleLoading(false), 2000);
  });

  return togleLoading ? (
    <Loading />
  ) : !products ? (
    <>
      <Modal onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ups!</ModalHeader>
          <ModalBody>
            Actualmente no contamos con estos productos, si quieres ponte en
            contacto con nosotros y lo podemos resolver ;)
          </ModalBody>
          <ModalFooter>
            <Button marginRight="1rem" onClick={() => dispatch(getProducts())}>
              Ver productos
            </Button>
            <Button onClick={() => history.push("/contacto")}>Contactar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{" "}
    </>
  ) : (
    <>
      <form className="containerInputSearch" onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Buscar producto por nombre"
          value={input}
          onChange={onChange}
        />
        <Button type="submit" colorScheme="pink" variant="solid">
          <SearchIcon />
        </Button>
      </form>

      <Wrap spacing="0" justify="center" alignItems="center" paddingTop="1rem">
        {products?.map((product) => {
          return (
            <WrapItem key={product.id}>
              <Box
                className="containerProduct"
                borderWidth="1px"
                borderRadius="lg"
                borderColor="pink"
                overflow="hidden"
              >
                <CarouselComp product={product} token={token} />

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                  h="9rem"
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      color="gray.500"
                      // fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="lg"
                    >
                      {product.nombre}
                    </Box>
                  </Box>

                  <Box
                    color="#8FD1CD"
                    letterSpacing="wide"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    className="nameProduct"
                  >
                    {product.nombre}
                  </Box>

                  <Button
                    className="buttonSeeMore"
                    variant="outline"
                    borderWidth="1px"
                    borderColor="pink"
                    onClick={() => onClick(product)}
                  >
                    VER MÁS
                  </Button>
                </Box>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
};
