import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct, getProducts } from "../../../redux/actions";
import { app } from "../../../fb";

import { Image, Box, CloseButton } from "@chakra-ui/react";
import { Carousel } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import swal from "sweetalert";

import "./index.scss";

export const CarouselComp = ({ product, token }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let { id } = useParams();

  let productsWhitImages = product?.foto?.split(", ");

  const onDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product?.id));

    for (let i = 0; i < productsWhitImages.length; i++) {
      await app?.storage().refFromURL(productsWhitImages[i]).delete();
    }

    swal("producto eliminado correctamente", {
      buttons: false,
      timer: 4000,
    });

    setTimeout(() => {
      if (location.pathname === "/") {
        dispatch(getProducts());
      } else {
        history.push("/");
        dispatch(getProducts());
      }
    }, 4000);
  };

  return (
    <Box>
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
