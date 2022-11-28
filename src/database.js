const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(
    'test',
    'postgres',
    '',
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

exports.sequelize = sequelize;