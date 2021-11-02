import { Serializer as BankSerializer } from
  '../mixins/regenerated/serializers/i-i-s-find-error-bank';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BankSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
