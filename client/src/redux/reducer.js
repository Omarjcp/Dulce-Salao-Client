import {
  SIGN_IN,
  GET_CATEGORIES,
  GET_CATEGORY_FOR_ID,
  CREATE_CATEGORY,
  GET_PRODUCTS,
  GET_PRODUCTS_FOR_NAME,
  GET_PRODUCTS_FOR_ID,
  GET_PRODUCT_FOR_CATEGORIES_ID,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  GET_FLAVOR,
  CREATE_FLAVOR,
  CREATE_FILLING,
  GET_FILLING,
  GET_PRODUCT_FOR_FLAVOR_ID,
  GET_PRODUCT_FOR_FILLING_ID,
  GET_PRODUCT_FOR_CATEGORY_ID,
} from "./actions";

const estadoInicial = {
  products: [],
  productId: {},
  categories: [],
  flavors: [],
  filling: [],
  idState: undefined,
  msg: "",
  token: "",
  msgLogin: "",
  msgCreate: "",
  msgNotCreate: "",
  msgUpdate: "",
  msgDelete: "",
  msgCreateCategory: "",
  msgCreateFlavor: "",
  msgCreateFilling: "",
};

export default function rootReducer(state = estadoInicial, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        msgLogin: action.payload.msg,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        msgCreate: action.payload.msg,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        msgDelete: action.payload.msg,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        msgUpdate: action.payload.msg,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };

    case GET_PRODUCTS_FOR_ID:
      return {
        ...state,
        productId: action.payload.data,
        idState: action.payload.data.id,
      };

    case GET_PRODUCTS_FOR_NAME:
      return {
        ...state,
        products: action.payload.data,
        msg: action.payload.msg,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        msgCreateCategory: action.payload.msg,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data,
      };

    case GET_CATEGORY_FOR_ID:
      return {
        ...state,
        categories: action.payload.data,
      };

    case CREATE_FLAVOR:
      return {
        ...state,
        msgCreateFlavor: action.payload.msg,
      };

    case GET_FLAVOR:
      return {
        ...state,
        flavors: action.payload.data,
      };

    case CREATE_FILLING:
      return {
        ...state,
        msgCreateFilling: action.payload.msg,
      };

    case GET_FILLING:
      return {
        ...state,
        filling: action.payload.data,
      };

    case GET_PRODUCT_FOR_CATEGORIES_ID:
      return {
        ...state,
        products: action.payload.data,
      };

    case GET_PRODUCT_FOR_CATEGORY_ID:
      return {
        ...state,
        products: action.payload.data,
      };

    case GET_PRODUCT_FOR_FLAVOR_ID:
      return {
        ...state,
        products: action.payload.data,
      };

    case GET_PRODUCT_FOR_FILLING_ID:
      return {
        ...state,
        products: action.payload.data,
      };

    default:
      return state;
  }
}
