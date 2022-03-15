import * as yup from "yup";

const usernameRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^[a-z0-9_-]{9,16}$/;

export const schema = yup.object().shape({
  admin: yup
    .string()
    .required("Este campo es requerido")
    .matches(usernameRegex, "El nombre de usuario no es valido."),
  password: yup
    .string()
    .required("Este campo es requerido")
    .matches(passwordRegex, "La contraseña no es valida."),
});
