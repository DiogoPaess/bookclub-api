import NodeMailJet from "node-mailjet";

const mailjet = NodeMailJet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

class Mail {
  async sendForgotPasswordMail(email, name, token) {
    try {
      const result = await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "diogolii88@gmail.com",
              Name: "Diogo",
            },
            To: [
              {
                Email: email,
                Name: name,
              },
            ],
            TemplateID: 5254683,
            TemplateLanguage: true,
            Subject: "Alteração de senha",
            Variables: {
              name: name,
              token: token,
            },
          },
        ],
      });
      return result;
    } catch (error) {
      return { error };
    }
  }
}

export default new Mail();
