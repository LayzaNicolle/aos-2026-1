import 'dotenv/config';
import SequelizePkg from "sequelize"; // Importando todo o pacote
const { Sequelize, DataTypes } = SequelizePkg;

import getUserModel from "./user.js";
import getMessageModel from "./message.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: require("pg"),
});

const models = {
  User: getUserModel(sequelize, { DataTypes }),
  Message: getMessageModel(sequelize, { DataTypes }),
};

Object.values(models).forEach((model) => {
  if ("associate" in model) {
    model.associate(models);
  }
});

export { sequelize };
export default models;