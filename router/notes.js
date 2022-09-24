const express = require('express')
const noteController = require('../controller/notes')

const noteRouter = express.Router()

noteRouter.get('/', noteController.getAllNotes)
noteRouter.post('/', noteController.addNote)
noteRouter.put('/:id', noteController.updateNote)
noteRouter.delete('/:id', noteController.deleteNote)
noteRouter.get('/:id', noteController.getNoteById)
module.exports = noteRouter