import { AuthInterface } from "../interfaces/auth.interface";
import { UserInterface } from "../interfaces/user.interface";
import User from "../models/user.model";
import { AuthType, LoginType } from "../schemas/auth.schema";
import { encrypt, verified } from "../utils/hashPwd.handle";
import { generateToken } from "../utils/jwt.handle";

const registerServiceNewUser = async ({
  firstName,
  secondLastName,
  image,
  lastName,
  secondName,
  birthdate,
  email,
  password,
  aboutMe,
}: AuthType) => {
  const findUser = await User.findOne({ where: { email: email } });

  if (findUser) {
    throw new Error("Usuario ya existe!");
  }

  const convertToSequelizeDate = (dateString: string) => {
    const day = dateString.split("/")[0];
    const month = dateString.split("/")[1];
    const year = dateString.split("/")[2];
    const formattedDate = `${year}-${month}-${day} 00:00:00`;
    return new Date(formattedDate);
  };

  const pwdHash = await encrypt(password);

  const newUser = await User.create({
    firstName,
    secondName,
    lastName,
    secondLastName,
    aboutMe,
    image,
    birthdate: convertToSequelizeDate(birthdate),
    email,
    password: pwdHash,
  });

  return newUser;
};

const loginServiceUser = async ({ email, password }: LoginType) => {
  const findUser = await User.findOne({ where: { email: email } });

  if (!findUser) {
    throw new Error("Usuario no existe!");
  }

  // Tomo la contraseña encriptada
  const passEncrypt = findUser.password;

  const isCorrect = await verified(password, passEncrypt);

  if (!isCorrect) {
    throw new Error("Datos incorrectos!");
  }

  // Tomo el id que me devuelve
  const id = findUser.dataValues.id;

  const token = await generateToken(id);

  const data = {
    token,
    userId: id,
  };

  return data;
};

export { registerServiceNewUser, loginServiceUser };
