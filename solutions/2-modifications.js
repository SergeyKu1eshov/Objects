import _ from 'lodash';

// BEGIN
export default function normalize (object) {
  object.name = _.capitalize(object.name);
  object.description = object.description.toLowerCase();
}
  // END