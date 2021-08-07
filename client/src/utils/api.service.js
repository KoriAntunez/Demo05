import axios from "axios";

export default async message => {
   try {
      const { data } = await axios.post(
        "https://tottus-chat-bot.azurewebsites.net/api/dialogflowbot?code=%2FBciBExoall7DU8h6hrJmbCWaRPIF1ZuqzhH65ipT6Az03J2e1QHgg%3D%3D",
         { message }
      );
      return {
         data: data.codigo_pedido,
      };
   } catch (err) {
      console.log(err);
      return {
         user: "bot",
         message: "Hey, ha ocurrido un error...."
      };
   }
};
