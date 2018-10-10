const express = require('express')
const IdModel = require('../models/id-model')

const ApiRouter = express.Router()

// GET: List request
ApiRouter.get('/', (req, res, next) => {
  const dataList = IdModel.readList()
  res.json(dataList)
})

// GET: A specific dummy ID request
ApiRouter.get('/:dummyId', (req, res, next) => {
  const dummyId = Number(req.params.dummyId)
  IdModel.validate(dummyId)

  const individualRecord = IdModel.read(dummyId)
  res.json(individualRecord)
})

// PATCH: Update a specific ID
ApiRouter.patch('/:patchId', (req, res, next) => {
  const patchId = Number(req.params.patchId)
  IdModel.validate(patchId)

  const updatedRecord = IdModel.update(patchId)
  res.json(updatedRecord)
})

// PUT: Update a specific ID
ApiRouter.put('/:putId', (req, res, next) => {
  const putId = Number(req.params.putId)
  IdModel.validate(putId)

  const updatedRecord = IdModel.update(putId)
  res.json(updatedRecord)
})

// POST: A specific data body to the server
ApiRouter.post('/', (req, res, next) => {
  if (req.body) {
    IdModel.validate(Number(req.body.id))

    const newRecord = IdModel.create(Number(req.body.id))
    res.json(newRecord)
  } else {
    next(new Error('Missing data for POST!'))
  }
})

// DELETE: A specific ID is deleted
ApiRouter.delete('/:deleteId', (req, res, next) => {
  const deleteId = req.params.deleteId
  IdModel.validate(deleteId)

  const deletedId = IdModel.delete(deleteId)
  res.json(deletedId)
})

module.exports = ApiRouter
