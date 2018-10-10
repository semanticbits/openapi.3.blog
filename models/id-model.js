const MockIdModel = {
  create: (createId) => {
    return { id: createId, data: 'New record created...'}
  },
  read: (getId) => {
    return { id: getId, data: 'Got a specific ID...'}
  },
  readList: () => {
    return [
      { id: 001, data: 'Multiple...' },
      { id: 002, data: 'Records...' },
      { id: 003, data: 'Returned...' }
    ]
  },
  update: (updateId) => {
    return { id: updateId, data: 'Updated a specific ID...'}
  },
  delete: (deleteId) => {
    return { id: deleteId, data: 'Deleted a specific ID...'}
  },
  validate: (id) => {
    if (!Number.isInteger(id)) throw new Error('Invalid ID!')
  }
}

module.exports = MockIdModel

