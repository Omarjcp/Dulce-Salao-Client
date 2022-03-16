import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { Box, Button } from "@chakra-ui/react";
import { getProductsForId } from "../../redux/actions";
// import { Loading } from "../loading";
import { CarouselComp } from "../home/products/carousel";

import "./index.scss";
import { Loading } from "../loading";
import { Footbar } from "../footbar";

export const ProductDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();
  let { productId, idState } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);

  // let idProduct = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getProductsForId(id));
  }, [id]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Box className="parentDescription">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Box
            className="containerImageDescription"
            maxW="md"
            borderRadius="lg"
            overflow="hidden"
          >
            <CarouselComp product={productId && productId} />
          </Box>
          <Box
            className="containerDescription"
            shadow="lg"
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="6"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                color="#696969"
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="md"
                textTransform="uppercase"
              >
                {productId?.nombre
                  ? productId?.nombre
                  : "Producto no encontrado"}
              </Box>
            </Box>

            <Box mt="1" as="h2" color="#696969">
              {productId?.descripcion
                ? productId?.descripcion
                : "Producto no encontrado"}
            </Box>

            <a
              href="https://api.whatsapp.com/send?phone=+5804243286384"
              target="_blank"
            >
              <Button
                className="buttonConsult"
                variant="outline"
                borderWidth="1px"
                borderColor="pink"
              >
                Consultar
              </Button>
            </a>
          </Box>
        </>
      )}
      <Box className="containerFooterDetails">
        <Footbar />
      </Box>
    </Box>
  );
};
