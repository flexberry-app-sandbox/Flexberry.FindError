import { Serializer as DebitCardSerializer } from
  '../mixins/regenerated/serializers/i-i-s-find-error-debit-card';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DebitCardSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
