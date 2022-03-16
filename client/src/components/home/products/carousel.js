import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { Carousel } from "antd";
import { Image, Box, CloseButton, Avatar } from "@chakra-ui/react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import swal from "sweetalert";

import "./index.scss";
import { deleteProduct, getProducts } from "../../../redux/actions";

export const CarouselComp = ({ product, token }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let { id } = useParams();

  let productsWhitImages = product?.foto?.split(", ");

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product?.id));

    swal("producto eliminado correctamente", {
      buttons: false,
      timer: 3000,
    });

    dispatch(getProducts());
    setTimeout(
      location.pathname === "/" ? history.go(0) : history.push("/"),
      3000
    );
  };

  return (
    <Box maxW="md">
      <Carousel
        arrows={true}
        prevArrow={<LeftCircleOutlined />}
        nextArrow={<RightCircleOutlined />}
      >
        {productsWhitImages?.length > 1 ? (
          productsWhitImages?.map((img) => {
            return (
              <>
                {localStorage.getItem("token") ? (
                  <CloseButton
                    position="absolute"
                    color="red"
                    onClick={onDelete}
                  />
                ) : (
                  <></>
                )}
                <Image
                  className={id ? "imageProductDetails" : "imageProduct"}
                  w="100%"
                  backgroundSize="auto"
                  src={img}
                />
              </>
            );
          })
        ) : (
          <>
            {localStorage.getItem("token") ? (
              <CloseButton position="absolute" color="red" onClick={onDelete} />
            ) : (
              <></>
            )}
            <Image
              className={id ? "imageProductDetails" : "imageProduct"}
              w="100%"
              backgroundSize="auto"
              src={productsWhitImages}
            />
          </>
        )}
      </Carousel>
    </Box>
  );
};
