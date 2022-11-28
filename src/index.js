const {app} = require('./app');
const {sequelize} = require('./database');
const port = 3000;

require('./models/posts')

const main = async () => {
    await sequelize.sync();
    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    })
}


main();