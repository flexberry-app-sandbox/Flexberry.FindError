import { Serializer as ATMTransactionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-find-error-a-t-m-transaction';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ATMTransactionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
