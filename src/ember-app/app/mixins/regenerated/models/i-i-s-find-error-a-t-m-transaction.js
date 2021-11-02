import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  transactionId: DS.attr('number'),
  transactionDate: DS.attr('string'),
  amount: DS.attr('number'),
  aTM: DS.belongsTo('i-i-s-find-error-a-t-m', { inverse: null, async: false }),
  account: DS.belongsTo('i-i-s-find-error-account', { inverse: null, async: false })
});

export let ValidationRules = {
  transactionId: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m-transaction.validations.transactionId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  transactionDate: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m-transaction.validations.transactionDate.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  amount: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m-transaction.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  aTM: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m-transaction.validations.aTM.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  account: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m-transaction.validations.account.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ATMTransactionE', 'i-i-s-find-error-a-t-m-transaction', {
    transactionId: attr('Transaction id', { index: 0 }),
    transactionDate: attr('Transaction date', { index: 1 }),
    amount: attr('Amount', { index: 2 }),
    account: belongsTo('i-i-s-find-error-account', 'Account', {
      accountType: attr('Account type', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'accountType' }),
    aTM: belongsTo('i-i-s-find-error-a-t-m', 'ATM', {
      adress: attr('Adress', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'adress' })
  });

  modelClass.defineProjection('ATMTransactionL', 'i-i-s-find-error-a-t-m-transaction', {
    transactionId: attr('Transaction id', { index: 0 }),
    transactionDate: attr('Transaction date', { index: 1 }),
    amount: attr('Amount', { index: 2 }),
    account: belongsTo('i-i-s-find-error-account', 'Account type', {
      accountType: attr('Account type', { index: 3 })
    }, { index: -1, hidden: true }),
    aTM: belongsTo('i-i-s-find-error-a-t-m', 'Adress', {
      adress: attr('Adress', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
