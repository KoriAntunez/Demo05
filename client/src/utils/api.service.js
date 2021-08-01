import axios from "axios";

export default async message => {
   try {
      const { data } = await axios.post(
        "https://dialoflowbotexample.azurewebsites.net/api/Dialogflowbot?code=pzSFSgpx/HMGa4f3sBVAri4KSkGtNXveaWEvBcxPhrvoroeOo5TKvA==",
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
