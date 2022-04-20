import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Button, Select, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  createProduct,
  getCategories,
  getFilling,
  getFlavor,
} from "../../../redux/actions";

import { app } from "../../../fb";

import "./index.scss";
import { Loading } from "../../loading";

export const NewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { msgCreate, categories, flavors, filling } = useSelector(
    (state) => state
  );

  const [imageStorage, setImageStorage] = useState([]);
  const [toggleLoading, setToggleLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (value) => {
    setToggleLoading(true);
    const urlsImages = [];
    let stringsUrlsImages = "";

    for (let i = 0; i < imageStorage.length; i++) {
      const archivoRef = imageStorage[i]?.originFileObj;
      const storageRef = app?.storage()?.ref(value.nombre);
      const archivoPath = storageRef?.child(
        `${value.nombre}-${archivoRef?.name}`
      );
      await archivoPath?.put(archivoRef);

      const enlaceUrl = await archivoPath?.getDownloadURL();
      urlsImages.push(enlaceUrl);
    }

    stringsUrlsImages = urlsImages.join(", ");
    value.foto = stringsUrlsImages;
    if (value) {
      setToggleLoading(false);
      console.log(value);
      dispatch(createProduct(value));
      form.resetFields();
    }
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getFlavor());
    dispatch(getFilling());
  }, []);

  const normFile = (e) => {
    setImageStorage(e?.fileList);
    // console.log("NORM FILE", imageStorage);
  };

  const props = {
    action: "https://dulce-y-salado.herokuapp.com/products",
    onChange({ file, fileList }) {
      setToggleLoading(true);
      // console.log(file.status);
      if (file.status !== "uploading") {
        setToggleLoading(false);
      }
    },
    defaultFileList: [],
  };

  return (
    <>
      {toggleLoading ? <Loading /> : <></>}
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
          name="foto"
          valuePropName="fileList"
          extra="Carga imagen del producto"
          getValueFromEvent={normFile}
          // noStyle
          // rules={[
          //   {
          //     required: true,
          //     message: "Image is required",
          //   },
          // ]}
        >
          <Upload {...props} accept="image/*" maxCount="3">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
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
          label="Descripcion"
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
          <Select
            placeholder="hay, no hay, consultar"
            style={{ width: "19rem" }}
          >
            <Select.Option value="hay">Hay</Select.Option>
            <Select.Option value="no hay">No hay</Select.Option>
            <Select.Option value="consultar disponibilidad">
              Consultar
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="sabor" label="Sabor">
          <Select placeholder="Sabores" style={{ width: "19rem" }}>
            {flavors?.map((flavor) => (
              <Select.Option value={flavor.nombre}>
                {flavor.nombre}
              </Select.Option>
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
    </>
  );
};
