'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'dob', {
      type: Sequelize.DATEONLY,
      allowNull: true
    });
    await queryInterface.addColumn('Users', 'phone', {
      type: Sequelize.BIGINT,
      allowNull: true
    });
    await queryInterface.addColumn('Users', 'aadhar', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
    await queryInterface.addColumn('Users', 'pancard', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'dob');
    await queryInterface.removeColumn('Users', 'phone');
    await queryInterface.removeColumn('Users', 'aadhar');
    await queryInterface.removeColumn('Users', 'pancard');

  }
};
