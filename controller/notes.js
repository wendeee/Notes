
const NoteModel = require('../model/note')

async function getAllNotes(req, res){
    try{
        const notes = await NoteModel.find()
        res.status(200).json({
            message: 'Notes found successfully',
            data: notes
        })
    }catch(error){
        res.status(404).json({
            message: 'Notes not found',
            data: error
        })
    }
}

async function addNote(req, res){
    const noteInfo = req.body;
    try{
        const note = await NoteModel.create(noteInfo)
        res.status(201).json({
            message: 'Note added successfully',
            data: note
        })
    }
    catch(error){
        res.status(404).json({
            message: 'Notes not added',
            data: error
        })
    }
}

async function updateNote(req, res){
    const noteId = req.params.id;
    const noteInfo = req.body;
    try{
        const note = await NoteModel.findByIdAndUpdate(noteId, noteInfo)
        res.status(200).json({
            message: 'Update successful',
            data: note
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Update unsuccessful',
            data: error
        })
    }
}

async function deleteNote(req, res){
    const noteId = req.params.id;
    try{
        const note = await NoteModel.findByIdAndDelete(noteId)
        res.status(200).json({
            message: 'Deleted successfully',
            data: note
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Not deleted successfully',
            data: error
        })
    }
}

async function getNoteById(req, res){
    const noteId = req.params.id;
    try{
        const note = await NoteModel.findById(noteId)
        res.status(200).json({
            message: 'Found successfully',
            data: note
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Not found',
            data: error
        })
    }
}
module.exports = {
    getAllNotes,
    addNote,
    updateNote,
    deleteNote,
    getNoteById
}