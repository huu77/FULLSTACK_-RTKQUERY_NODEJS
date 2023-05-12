const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('QLBH', "sa", "huucaca2002", {
  dialect: 'mssql',
  host: 'localhost',
  port:'1433',
  dialectOptions: {
    options: {
      encrypt: false, // sử dụng kết nối bảo mật
   
    },
}
})
//   const connect=async()=>{

  
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);

//   }
// }
// connect()
module.exports=sequelize