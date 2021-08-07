const Dialogflow = require('dialogflow');
const uuid = require('uuid');
const {DialogFlowModel} = require('./models');
const {CLIENT_EMAIL, LANGUAGE, PRIVATE_KEY, PROJECT_ID } = require('./config');
/*CONFIGURACIÓN DE LAS CREDENCIALES*/
const credentials = {
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY
}

const sessionId = uuid.v4();
const sessionClient = new Dialogflow.SessionsClient({
    projectId: PROJECT_ID,
    credentials
});

module.exports = async function (context, req) {
    const {message} = req.body;
    const requestOptions = new DialogFlowModel();
    requestOptions.session = sessionClient.sessionPath(PROJECT_ID, sessionId);
    requestOptions.queryInput = {
        text: {
            text: message,
            languageCode:LANGUAGE 
        }
    };

    const response = await sessionClient.detectIntent(requestOptions);

    context.res = {
        body: response[0].queryResult
    }
};