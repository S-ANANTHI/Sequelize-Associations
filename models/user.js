'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // One-to-Many
      User.hasMany(models.Post, {
        foreignKey: 'userId',
        as: 'posts'
      });

      // One-to-One
      User.hasOne(models.Profile, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,            
      validate: {
        notNull: {msg: 'First name is required'},            
        len: {
          args: [3, 50],
          msg: 'Enter valid name'              
        }
    }},
    lastName: {
      type: DataTypes.STRING,
      allowNull: true             
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,            
      unique: true,               
      validate: {
        isEmail: {msg: 'invalid mail'}              
      }
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: {msg: 'Invalid date'}
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [10,10],
          msg: 'enter 10 digits'
        }
      }
    },
    aadhar: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^\d{12}$/,
          msg: 'Aadhar must be 12 digits'
        }
      }
    },
    pancard: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
          msg: 'Invalid PAN'
        }
      }
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};