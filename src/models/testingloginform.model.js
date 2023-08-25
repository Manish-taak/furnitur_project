const testinguserform = (sequelize, DataTypes)=>{
    return( 
        sequelize.define( 
            "testingform" , { 
                name : { 
                    type : DataTypes.STRING
                },
                class : { 
                    type : DataTypes.STRING
                },
                number : { 
                    type : DataTypes.STRING
                },
                email : { 
                    type : DataTypes.STRING
                }
            }
        )
    )
}

export default testinguserform