import { Button, Form, Input } from "antd";
import { useRutes } from "../hooks/useRutes";

export default function FormRegister() {
  const { goToHome } = useRutes();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-full flex flex-col items-center justify-center"
    >
      <Form.Item
        label="Nombre de usuario"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
        className="w-full my-1"
      >
        <Input placeholder="Ingrese su nombre de usuario" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
        className="w-full my-1"
      >
        <Input placeholder="Ingrese su mail" />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className="w-full my-1"
      >
        <Input.Password placeholder="Ingrese su contraseña" />
      </Form.Item>
      <Form.Item className="w-full mt-5">
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-10 py-3 bg-green-400 rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex"
          onClick={goToHome}
        >
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
