const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    PostId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    ImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    // Likes: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   required: true,
    // },
    // Comments: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   required: true,
    // },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
