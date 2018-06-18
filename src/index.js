// @flow

const assign = Object.assign ? Object.assign : require('object-assign')

// SANITIZE OBJECT
// I've usually had to write something like this at least once a project.
// The idea is you have an object you want to clone with certain keys

const sanitizeObject = (entity: Object, values: Array<string>): Object => {
  const newEntity = assign({}, entity)

  values.forEach(val => delete newEntity[val])

  return newEntity
}

module.exports = sanitizeObject
