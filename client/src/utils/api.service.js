import axios from "axios";

export default async (message) => {
  try {
    if (message.split(" ")[0] == "codigo") {
      const { data } = await axios.post(
        "https://tottus-chat-bot.azurewebsites.net/api/consultapedido",
        { codigo: message.split(" ")[1] }
      );
      return {
        user: "bot",
        message:
          "estado del pedido: " +
          data.estado +
          ", fecha entregada: " +
          data.fecha_entrega+". En que más le puedo apoyar? " ,
      };
    }
    if (message.split(" ")[0] == "codigo_p") {
      const { data } = await axios.post(
        "https://tottus-chat-bot.azurewebsites.net/api/ConsultaProducto?",
        { codigo: message.split(" ")[1] }
      );
      return {
        user: "bot",
        message:
          "Cantidad: " +
          data.cantidad_en_stock +
          ", Precio: " +
          data.precio_venta+". En que más le puedo apoyar? " ,
      };
    }
    if (message.split(" ")[0] == "dni") {

      const { data } = await axios.post(
        "https://tottus-chat-bot.azurewebsites.net/api/consultacliente",
        { dni: message.split(" ")[1] }
      );
      return {
        user: "bot",
        message:
          "Nombre cliente: " +
          data.nombre_cliente +
          ", Apellido cliente: " +
          data.apellido_contacto +
          ", Linea direccion: " +
          data.linea_direccion1+". En que más le puedo apoyar? " ,
      };
    }
    const { data } = await axios.post(
      "https://tottus-chat-bot.azurewebsites.net/api/dialogflowbot?code=%2FBciBExoall7DU8h6hrJmbCWaRPIF1ZuqzhH65ipT6Az03J2e1QHgg%3D%3D",
      { message }
    );
    return {
      user: "bot",
      message: data.fulfillmentText,
    };
  } catch (err) {
    console.log(err);
    return {
      user: "bot",
      message: "Hey, ha ocurrido un error....",
    };
  }
};
