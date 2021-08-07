import axios from "axios";

export default async message => {
   try {
      if(message.split(" ")[0] == "codigo"){
      const { data } = await axios.post(
         "https://tottus-chat-bot.azurewebsites.net/api/consultapedido",
            { codigo: message.split(" ")[1] }
      );
      return {
         user: "bot",
         message: "estado del pedido: " + data.estado + " fecha entregada: " + data.fecha_entrega
      };
      }

      const { data } = await axios.post(
        "https://tottus-chat-bot.azurewebsites.net/api/dialogflowbot?code=%2FBciBExoall7DU8h6hrJmbCWaRPIF1ZuqzhH65ipT6Az03J2e1QHgg%3D%3D",
         { message }
      );
      return {
         user: "bot",
         message: data.fulfillmentText
      };
   } catch (err) {
      console.log(err);
      return {
         user: "bot",
         message: "Hey, ha ocurrido un error...."
      };
   }
};
