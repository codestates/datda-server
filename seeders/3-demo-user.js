'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          permission: 'institution',
          email: 'institution1@datda.net',
          name: '김원장',
          password: 'institution1',
          mobile: '01011111111',
          mainPhoto: '김원장 사진',
          role: '원장님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: null,
        },
        {
          permission: 'institution',
          email: 'institution2@datda.net',
          name: '성원장',
          password: 'institution2',
          mobile: '01011112222',
          mainPhoto: '성원장 사진',
          role: '원장님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: null,
        },
        {
          permission: 'teacher',
          email: 'teacher1@datda.net',
          name: '이선생',
          password: 'teacher1',
          mobile: '01022221111',
          mainPhoto: '이선생 사진',
          role: '선생님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 1,
        },
        {
          permission: 'teacher',
          email: 'teacher2@datda.net',
          name: '심선생',
          password: 'teacher2',
          mobile: '01022222222',
          mainPhoto: '심선생 사진',
          role: '선생님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 2,
        },
        {
          permission: 'teacher',
          email: 'teacher3@datda.net',
          name: '초선생',
          password: 'teacher3',
          mobile: '01022223333',
          mainPhoto: '초선생 사진',
          role: '선생님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 3,
        },
        {
          permission: 'parent',
          email: 'parent1@datda.net',
          name: '박엄마',
          password: 'parent1',
          mobile: '01033331111',
          mainPhoto: '박엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 1, // 오류!
        },
        {
          permission: 'parent',
          email: 'parent2@datda.net',
          name: '윤엄마',
          password: 'parent2',
          mobile: '01033332222',
          mainPhoto: '윤엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 1, // 오류!
        },
        {
          permission: 'parent',
          email: 'parent3@datda.net',
          name: '선엄마',
          password: 'parent3',
          mobile: '01033333333',
          mainPhoto: '선엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 2, // 오류!
        },
        {
          permission: 'parent',
          email: 'parent4@datda.net',
          name: '최엄마',
          password: 'parent4',
          mobile: '01033334444',
          mainPhoto: '최엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 2, // 오류!
        },
        {
          permission: 'parent',
          email: 'parent5@datda.net',
          name: '경엄마',
          password: 'parent5',
          mobile: '01033335555',
          mainPhoto: '경엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 3, // 오류!
        },
        {
          permission: 'guestTeacher',
          email: 'guestTeacher1@datda.net',
          name: '임선생',
          password: 'guestTeacher1',
          mobile: '01044441111',
          mainPhoto: '임선생 사진',
          role: '선생님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: null,
        },
        {
          permission: 'guestTeacher',
          email: 'guestTeacher2@datda.net',
          name: '구선생',
          password: 'guestTeacher2',
          mobile: '01044442222',
          mainPhoto: '구선생 사진',
          role: '선생님',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 1,
        },
        {
          permission: 'guestParent',
          email: 'guestParent1@datda.net',
          name: '신엄마',
          password: 'guestParent1',
          mobile: '01055551111',
          mainPhoto: '신엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: null,
        },
        {
          permission: 'guestParent',
          email: 'guestParent2@datda.net',
          name: '소엄마',
          password: 'guestParent2',
          mobile: '01055552222',
          mainPhoto: '소엄마 사진',
          role: '엄마',
          salt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          classsId: 1, // 오류!
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};