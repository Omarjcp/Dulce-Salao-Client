import axios from "axios";

import instance from "./server/index";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_FOR_ID = "GET_PRODUCTS_FOR_ID";
export const GET_PRODUCTS_FOR_NAME = "GET_PRODUCTS_FOR_NAME";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const GET_PRODUCT_FOR_CATEGORIES_ID = "GET_PRODUCT_FOR_CATEGORIES_ID";

export const GET_PRODUCT_FOR_CATEGORY_ID = "GET_PRODUCT_FOR_CATEGORY_ID";
export const GET_PRODUCT_FOR_FILLING_ID = "GET_PRODUCT_FOR_FILLING_ID";
export const GET_PRODUCT_FOR_FLAVOR_ID = "GET_PRODUCT_FOR_FLAVOR_ID";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_FOR_ID = "GET_CATEGORY_FOR_ID";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const GET_FLAVOR = "GET_FLAVOR";
// export const GET_FLAVOR_FOR_ID = "GET_FLAVOR_FOR_ID";
export const CREATE_FLAVOR = "CREATE_FLAVOR";
export const DELETE_FLAVOR = "DELETE_FLAVOR";

export const GET_FILLING = "GET_FILLING";
// export const GET_FILLING_FOR_ID = "GET_FILLING_FOR_ID";
export const CREATE_FILLING = "CREATE_FILLING";
export const DELETE_FILLING = "DELETE_FILLING";

export const SIGN_IN = "SIGN_IN";

export function signIn(payload) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "https://dulce-y-salado.herokuapp.com/login",
        payload
      );
      if (data.token) {
        localStorage.setItem("token", data.token);
        return dispatch({ type: SIGN_IN, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function createProduct(payload) {
  return async function (dispatch) {
    try {
      const { data } = await instance.post(
        "products",
        payload
        // , {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // }
      );
      return dispatch({ type: CREATE_PRODUCT, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateProduct(id, payload) {
  return async function (dispatch) {
    try {
      console.log("antes action", payload);
      const { data } = await instance.put("products/" + id, payload);
      return dispatch({ type: UPDATE_PRODUCT, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      const { data } = await instance.delete("products/" + id);
      console.log(data);
      return dispatch({ type: DELETE_PRODUCT, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProducts() {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "https://dulce-y-salado.herokuapp.com/products"
      );
      return dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProductsForName(nombre) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `https://dulce-y-salado.herokuapp.com/products?name=${nombre}`
      );
      return dispatch({ type: GET_PRODUCTS_FOR_NAME, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProductsForId(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "https://dulce-y-salado.herokuapp.com/products/" + id
      );
      return dispatch({ type: GET_PRODUCTS_FOR_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createCategory(payload) {
  return async function (dispatch) {
    try {
      const { data } = await instance.post("categorias", payload);
      return dispatch({ type: CREATE_CATEGORY, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "https://dulce-y-salado.herokuapp.com/categorias"
      );
      return dispatch({ type: GET_CATEGORIES, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteCategory(id) {
  return async function (dispatch) {
    try {
      const { data } = await instance.delete("categorias/" + id);
      console.log(data);
      return dispatch({ type: DELETE_CATEGORY, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getCategoriesForId(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "https://dulce-y-salado.herokuapp.com/categorias?id=" + id
      );
      return dispatch({ type: GET_CATEGORY_FOR_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createFlavor(payload) {
  return async function (dispatch) {
    try {
      const { data } = await instance.post("sabores", payload);
      return dispatch({ type: CREATE_FLAVOR, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getFlavor() {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "https://dulce-y-salado.herokuapp.com/sabores"
      );
      return dispatch({ type: GET_FLAVOR, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteFlavor(id) {
  return async function (dispatch) {
    try {
      const { data } = await instance.delete("sabores/" + id);
      return dispatch({ type: DELETE_FLAVOR, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createFilling(payload) {
  return async function (dispatch) {
    try {
      const { data } = await instance.post("rellenos", payload);
      return dispatch({ type: CREATE_FILLING, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getFilling() {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "https://dulce-y-salado.herokuapp.com/rellenos"
      );
      return dispatch({ type: GET_FILLING, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteFilling(id) {
  return async function (dispatch) {
    try {
      const { data } = await instance.delete("rellenos/" + id);
      return dispatch({ type: DELETE_FILLING, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProductsForCategoriesId(
  nameCategory,
  categoryId,
  nameRelleno,
  rellenoId,
  nameSabor,
  saborId
) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `https://dulce-y-salado.herokuapp.com/products?${nameCategory}=${categoryId}&${nameRelleno}=${rellenoId}&${nameSabor}=${saborId}`
      );
      return dispatch({ type: GET_PRODUCT_FOR_CATEGORIES_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProductsForCategoryId(categoryId) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `https://dulce-y-salado.herokuapp.com/products?categoryId=${categoryId}`
      );
      return dispatch({ type: GET_PRODUCT_FOR_CATEGORY_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProductsForFlavorId(flavorId) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `https://dulce-y-salado.herokuapp.com/products?saborId=${flavorId}`
      );
      return dispatch({ type: GET_PRODUCT_FOR_FLAVOR_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getProductsForFillingId(fillingId) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `https://dulce-y-salado.herokuapp.com/products?rellenoId=${fillingId}`
      );
      return dispatch({ type: GET_PRODUCT_FOR_FILLING_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}
