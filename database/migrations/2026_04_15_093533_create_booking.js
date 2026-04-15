import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('bookings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    startDate: { type: DataTypes.DATEONLY,  allowNull: false  },
    endDate: { type: DataTypes.DATEONLY,  allowNull: false  },
    carId: { type: DataTypes.INTEGER,  allowNull: false  },
    totalPrice: { type: DataTypes.INTEGER,  allowNull: true  },
    userUID: { type: DataTypes.STRING,  allowNull: true  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('bookings');
}

export { up, down }
