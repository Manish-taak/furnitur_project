const cartmodel = (sequelize, DataTypes) => {
    return sequelize.define("cart", {
      userid : {
        type: DataTypes.STRING,
      },
      productname : {
        type: DataTypes.STRING,
      },
      image : {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.STRING,
      },
      quantity:{
        type:DataTypes.STRING
      }
    });
  };
  
  export default cartmodel;
  