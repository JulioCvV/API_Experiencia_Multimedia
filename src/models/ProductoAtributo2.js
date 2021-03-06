import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const ProductoAtributo2 = sequelize.define(
  "producto_atributo_2",
  {
    idProductoAtributo2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idAtributoPA2: { type: DataTypes.INTEGER, allowNull: false },
    idProductoC2A: { type: DataTypes.INTEGER, allowNull: false },
  },
  { tableName: "producto_atributo_2", timestamps: false }
);

export default ProductoAtributo2;
