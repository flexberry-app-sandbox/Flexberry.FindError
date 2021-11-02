import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  adress: DS.attr('string'),
  mangedBy: DS.attr('string'),
  bank: DS.belongsTo('i-i-s-find-error-bank', { inverse: null, async: false })
});

export let ValidationRules = {
  adress: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m.validations.adress.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  mangedBy: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m.validations.mangedBy.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  bank: {
    descriptionKey: 'models.i-i-s-find-error-a-t-m.validations.bank.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ATME', 'i-i-s-find-error-a-t-m', {
    adress: attr('Adress', { index: 0 }),
    mangedBy: attr('Manged by', { index: 1 }),
    bank: belongsTo('i-i-s-find-error-bank', 'Bank', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ATML', 'i-i-s-find-error-a-t-m', {
    adress: attr('Adress', { index: 0 }),
    mangedBy: attr('Manged by', { index: 1 }),
    bank: belongsTo('i-i-s-find-error-bank', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
