import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  accountType: DS.attr('string')
});

export let ValidationRules = {
  accountType: {
    descriptionKey: 'models.i-i-s-find-error-account.validations.accountType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AccountE', 'i-i-s-find-error-account', {
    accountType: attr('Account type', { index: 0 })
  });

  modelClass.defineProjection('AccountL', 'i-i-s-find-error-account', {
    accountType: attr('Account type', { index: 0 })
  });
};
