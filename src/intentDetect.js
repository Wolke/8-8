var dialogflow = require("dialogflow");
var uuid = require("uuid");

var f = async () => {
  let sessionClient = new dialogflow.SessionsClient({
    credentials: {
      client_email: process.env.client_email,
      private_key: process.env.private_key.replace(/\\n/g, "\n")
    }
  });

  let sessionPath = sessionClient.sessionPath(
    process.env.project_id,
    uuid.v4()
  );
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: "你好",
        languageCode: "zh-TW"
      }
    }
  };
  let r = await sessionClient.detectIntent(request);
  // console.log(JSON.stringify(r));
};
f();

module.exports = f;
