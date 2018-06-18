// @flow

const assign = Object.assign ?  Object.assign : require('object-assign')

// SANITIZE OBJECT
// I've usually had to write something like this in

const sanitizeObject = (entity: Object, values: Array<string>): Object => {
  const newEntity = assign({}, entity)
  
  values.forEach(val => delete newEntity[val])
  
  return newEntity
}

module.exports = sanitizeObject
