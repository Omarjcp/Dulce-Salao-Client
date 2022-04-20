import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductsForId } from "../../redux/actions";

import { CarouselComp } from "../home/products/carousel";
import { Loading } from "../loading";
import { Footbar } from "../footbar";

import { Box, Button } from "@chakra-ui/react";
import { List } from "antd";

import "./index.scss";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { productId } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);

  let descriptionProduct = productId?.descripcion?.split(". ");

  useEffect(() => {
    dispatch(getProductsForId(id));
  }, [id]);

  useEffect(() => {
    if (productId && Number(productId.id) === Number(id)) {
      setLoading(false);
    }
  }, [productId]);

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
              <List
                size="small"
                dataSource={descriptionProduct}
                renderItem={(item) => <List.Item>- {item}</List.Item>}
              />
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
