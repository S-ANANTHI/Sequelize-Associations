'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
      firstName: 'Jonny',
      lastName: 'Doe',
      email: 'jonny123@gmail.com',
      dob: '1999-01-06',
      phone: 8765456789,
      aadhar: '999412341234',
      pancard: 'ESADE1234Q',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ravi',
      lastName: 'Mohan',
      email: 'ravi123@gmail.com',
      dob: '1998-06-03',
      phone: 9988776789,
      aadhar: '888412341234',
      pancard: 'SAQDE1234P',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
