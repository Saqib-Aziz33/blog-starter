import sequelize from "db";
import { DataTypes } from "sequelize";

const Blog = sequelize.define(
  "Blog",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    views: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    tableName: "blogs",
  }
);

export default Blog;
