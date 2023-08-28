const productsdata = (sequelize, DataTypes) => {
  return sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};

export default productsdata;
