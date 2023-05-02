import statusCheck from './statusCheck.js';
import bookCtrl from './bookCtrl.js';
import bookingCtrl from './bookingCtrl.js';
import userCtrl from './userCtrl.js';

export default (repository) => ({
  statusCheck,
  bookCtrl: bookCtrl(repository.bookRepo),
  bookingCtrl: bookingCtrl(repository.bookingRepo),
  userCtrl: userCtrl(repository.userRepo)
});
