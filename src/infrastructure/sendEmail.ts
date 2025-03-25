import Mailjet, { SendEmailV3_1 } from "node-mailjet";

export const sendEmail = async (
  data: Pick<SendEmailV3_1.Message, "To" | "Variables" | "TemplateID">
) => {
  const apiKey = process.env["MJ_APIKEY_PUBLIC"];
  const apiSecret = process.env["MJ_APIKEY_PRIVATE"];

  if (process.env.NODE_ENV === "development") {
    console.info("Dont send email in development");
    console.info(data);
    return;
  }

  if (!apiKey || !apiSecret) {
    throw new Error("Mailjet credentials must be set");
  }

  const mailjet = new Mailjet({
    apiKey,
    apiSecret,
  });

  const message = {
    From: {
      Email: "ai@ohappydev.fr",
    },
    TemplateLanguage: true,
    ...data,
  } satisfies SendEmailV3_1.Message;

  return mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [message],
    })
    .then(() => console.log("Email sent"))
    .catch((error) => console.log(error));
};
