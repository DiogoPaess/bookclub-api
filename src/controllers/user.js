import { User } from "../models";

class userController {
  async create(req, res) {
    const user = new User({
      name: "Diogo",
      email: "diogo1@hotmail.com",
      password: "diogo123",
      password_hash: "diogo123",
      reset_password_token: "teste",
      reset_password_token_sent_at: new Date(),
      avatar_url: "teste_url",
    });

    await user.save();
    return res.json({ user });
  }
}

export default new userController();
