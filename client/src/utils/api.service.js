import axios from "axios";

export default async message => {
   try {
      const { data } = await axios.post(
        "https://tottus-chat-bot.azurewebsites.net/api/Dialogflowbot?",
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
