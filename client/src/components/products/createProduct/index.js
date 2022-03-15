import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Form, Input, Button, Select, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createProduct } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const NewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { msgCreate, categories, flavors, filling } = useSelector(
    (state) => state
  );
  const [form] = Form.useForm();

  // console.log(categories, flavors, filling);

  const onFinish = (value) => {
    // const formData = new FormData();

    // if (!!value.foto) {
    //   for (let i = 0; i < value.foto.fileList.length; i++) {
    //     formData.append(
    //       `imagen${i}`,
    //       value.foto.fileList[i],
    //       value.foto.fileList[i].name
    //     );
    //   }

    // }

    console.log(value);

    // formData.append("values", JSON.stringify(value));

    // dispatch(createProduct(formData));
  };

  useEffect(() => {
    if (msgCreate) {
      message.loading(msgCreate);
      setTimeout(() => {
        history.go(0);
      }, 2000);
    }
  }, [msgCreate]);

  // const normFile = (e) => {
  //   console.log("Upload event:", e);

  //   if (Array.isArray(e)) {
  //     return e;
  //   }

  //   return e && e.fileList;
  // };

  return (
    <Form
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      layout="vertical"
      form={form}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="nombre"
        label="Nombre"
        rules={[
          { required: true },
          {
            type: "string",
            min: 4,
          },
        ]}
      >
        <Input placeholder="Nombre del producto" style={{ width: "19rem" }} />
      </Form.Item>
      <Form.Item
        name="descripcion"
        label="Descriocion"
        rules={[
          { required: true },
          {
            type: "string",
            min: 4,
          },
        ]}
      >
        <Input.TextArea
          placeholder="Separa las diferentes descripciones con punto y seguido"
          style={{ width: "19rem", height: "9rem" }}
        />
      </Form.Item>
      <Form.Item name="estado" label="Estado" rules={[{ required: true }]}>
        <Select placeholder="hay, no hay, consultar" style={{ width: "19rem" }}>
          <Select.Option value="hay">Hay</Select.Option>
          <Select.Option value="no hay">No hay</Select.Option>
          <Select.Option value="consultar disponibilidad">
            Consultar
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="foto"
        label="Imagen del producto"
        extra="Carga imagen del producto"
        rules={[{ required: true }]}
      >
        <Input placeholder="Foto del producto" style={{ width: "19rem" }} />
        {/* <Upload name="foto" accept=".jpg,.png">
          <Button style={{ width: "19rem" }} icon={<UploadOutlined />}>
            Click to upload
          </Button>
        </Upload> */}
      </Form.Item>

      <Form.Item name="sabor" label="Sabor">
        <Select placeholder="Sabores" style={{ width: "19rem" }}>
          {flavors?.map((flavor) => (
            <Select.Option value={flavor.nombre}>{flavor.nombre}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="relleno" label="Relleno">
        <Select placeholder="Rellenos" style={{ width: "19rem" }}>
          {filling?.map((fill) => (
            <Select.Option value={fill.nombre}>{fill.nombre}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="categoria" label="Categoria">
        <Select placeholder="Categorias" style={{ width: "19rem" }}>
          {categories?.map((category) => (
            <Select.Option value={category.nombre}>
              {category.nombre}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          style={{
            width: "19rem",
          }}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
