import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/CrmRoute';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMDB', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

app.get('/', (req, res) => {
  res.send('Node and express is starting at the server');
});

app.listen(PORT, function(){
  console.log('Server is running on',PORT);
});