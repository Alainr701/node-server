// Puerto
process.env.PORT = process.env.PORT || 3000;
//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

bd
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI ;
}
process.env.URLDB = MONGO_URI;