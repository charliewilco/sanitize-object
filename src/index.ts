// SANITIZE OBJECT
// I've usually had to write something like this at least once a project.
// The idea is you have an object you want to clone with certain keys

function sanitize<T>(entity: object, values: string[]): Partial<T> {
  const newEntity = Object.assign({}, entity);

  values.forEach(
    (val: string): void => {
      delete newEntity[val];
    }
  );

  return newEntity;
}

export default sanitize