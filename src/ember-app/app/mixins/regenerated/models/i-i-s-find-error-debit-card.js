import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  accountNumber: DS.attr('number'),
  ownedBy: DS.attr('string'),
  account: DS.belongsTo('i-i-s-find-error-account', { inverse: null, async: false }),
  customer: DS.belongsTo('i-i-s-find-error-customer', { inverse: null, async: false }),
  bank: DS.belongsTo('i-i-s-find-error-bank', { inverse: null, async: false })
});

export let ValidationRules = {
  accountNumber: {
    descriptionKey: 'models.i-i-s-find-error-debit-card.validations.accountNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ownedBy: {
    descriptionKey: 'models.i-i-s-find-error-debit-card.validations.ownedBy.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  account: {
    descriptionKey: 'models.i-i-s-find-error-debit-card.validations.account.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-find-error-debit-card.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  bank: {
    descriptionKey: 'models.i-i-s-find-error-debit-card.validations.bank.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DebitCardE', 'i-i-s-find-error-debit-card', {
    accountNumber: attr('Account number', { index: 0 }),
    ownedBy: attr('Owned by', { index: 1 }),
    bank: belongsTo('i-i-s-find-error-bank', 'Bank', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    customer: belongsTo('i-i-s-find-error-customer', 'Customer', {
      name: attr('Name', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' }),
    account: belongsTo('i-i-s-find-error-account', 'Account', {
      accountType: attr('Account type', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'accountType' })
  });

  modelClass.defineProjection('DebitCardL', 'i-i-s-find-error-debit-card', {
    accountNumber: attr('Account number', { index: 0 }),
    ownedBy: attr('Owned by', { index: 1 }),
    bank: belongsTo('i-i-s-find-error-bank', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true }),
    customer: belongsTo('i-i-s-find-error-customer', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true }),
    account: belongsTo('i-i-s-find-error-account', 'Account type', {
      accountType: attr('Account type', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
