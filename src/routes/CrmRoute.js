import { addNewContact } from '../controllers/CrmController';

const routes = (app) => {
  app.route('/contact')
      .get((req, res) => {
          res.send('Get request successfull');
      })
      .post(addNewContact);
}

export default routes;