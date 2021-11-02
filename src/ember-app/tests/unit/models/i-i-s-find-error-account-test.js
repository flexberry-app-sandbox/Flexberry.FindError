import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-find-error-account', 'Unit | Model | i-i-s-find-error-account', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-find-error-a-t-m-transaction',
    'model:i-i-s-find-error-a-t-m',
    'model:i-i-s-find-error-account',
    'model:i-i-s-find-error-bank',
    'model:i-i-s-find-error-customer',
    'model:i-i-s-find-error-debit-card',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
