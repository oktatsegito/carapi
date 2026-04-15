import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Car = sequelize.define('cars', {
    brand: { type: DataTypes.STRING,  allowNull: false, 
        validate: { 
            len: [1, 50]
        }
    },
    model: { type: DataTypes.STRING,  allowNull: false, 
        validate: { 
            len: [1, 50]
        }
    },
    licensePlate: { type: DataTypes.STRING,  allowNull: false, 
        validate: { 
            len: [1, ],
            is: /^[A-Z]{3}-\d{3}$/
        }
    },
    year: { type: DataTypes.INTEGER,  allowNull: true, 
        validate: { 
            max: 2025,
            min: 2000
        }
    },
    dailyPrice: { type: DataTypes.INTEGER,  allowNull: true, 
        validate: { 
            max: 2000,
            min: 100
        }
    }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Car
