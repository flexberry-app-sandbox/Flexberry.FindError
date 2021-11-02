import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-find-error-a-t-m-l');
  this.route('i-i-s-find-error-a-t-m-e',
  { path: 'i-i-s-find-error-a-t-m-e/:id' });
  this.route('i-i-s-find-error-a-t-m-e.new',
  { path: 'i-i-s-find-error-a-t-m-e/new' });
  this.route('i-i-s-find-error-a-t-m-transaction-l');
  this.route('i-i-s-find-error-a-t-m-transaction-e',
  { path: 'i-i-s-find-error-a-t-m-transaction-e/:id' });
  this.route('i-i-s-find-error-a-t-m-transaction-e.new',
  { path: 'i-i-s-find-error-a-t-m-transaction-e/new' });
  this.route('i-i-s-find-error-account-l');
  this.route('i-i-s-find-error-account-e',
  { path: 'i-i-s-find-error-account-e/:id' });
  this.route('i-i-s-find-error-account-e.new',
  { path: 'i-i-s-find-error-account-e/new' });
  this.route('i-i-s-find-error-bank-l');
  this.route('i-i-s-find-error-bank-e',
  { path: 'i-i-s-find-error-bank-e/:id' });
  this.route('i-i-s-find-error-bank-e.new',
  { path: 'i-i-s-find-error-bank-e/new' });
  this.route('i-i-s-find-error-customer-l');
  this.route('i-i-s-find-error-customer-e',
  { path: 'i-i-s-find-error-customer-e/:id' });
  this.route('i-i-s-find-error-customer-e.new',
  { path: 'i-i-s-find-error-customer-e/new' });
  this.route('i-i-s-find-error-debit-card-l');
  this.route('i-i-s-find-error-debit-card-e',
  { path: 'i-i-s-find-error-debit-card-e/:id' });
  this.route('i-i-s-find-error-debit-card-e.new',
  { path: 'i-i-s-find-error-debit-card-e/new' });
});

export default Router;
