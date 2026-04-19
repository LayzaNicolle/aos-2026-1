import { Sequelize, DataTypes } from 'sequelize';
import { createRequire } from 'module';
import dotenv from 'dotenv';

dotenv.config();

const require = createRequire(import.meta.url);

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

const Tarefa = sequelize.define('Tarefa', {
  objectId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

await sequelize.sync();

export default Tarefa;