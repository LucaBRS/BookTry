let { booksDbSetup } = require("./BookService");



const knex = require("knex");
 let sqlDb = knex({
 debug: true,
 client: "pg",
 connection: 'postgresql://postgres:lol1@localhost:5432/test',
 ssl: true
 });

//   'postgresql://postgres:lol1@localhost:5432/test'

// process.env.DATABASE_URL

function setupDataLayer() {
console.log("Setting up Data Layer");

return booksDbSetup(sqlDb);
}

 module.exports = { database: sqlDb, setupDataLayer };