import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  bank: DS.belongsTo('i-i-s-find-error-bank', { inverse: null, async: false }),
  account: DS.belongsTo('i-i-s-find-error-account', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-find-error-customer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  bank: {
    descriptionKey: 'models.i-i-s-find-error-customer.validations.bank.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  account: {
    descriptionKey: 'models.i-i-s-find-error-customer.validations.account.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CustomerE', 'i-i-s-find-error-customer', {
    name: attr('Name', { index: 0 }),
    account: belongsTo('i-i-s-find-error-account', 'Account', {
      accountType: attr('Account type', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'accountType' })
  });

  modelClass.defineProjection('CustomerL', 'i-i-s-find-error-customer', {
    name: attr('Name', { index: 0 }),
    account: belongsTo('i-i-s-find-error-account', 'Account type', {
      accountType: attr('Account type', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
