import { Serializer as ATMSerializer } from
  '../mixins/regenerated/serializers/i-i-s-find-error-a-t-m';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ATMSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
