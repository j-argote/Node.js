const fs = require('fs')
const chalk = require('chalk')

// Add Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// Remove Note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }   
}

// List Notes
const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.keyword('orange').inverse('Your notes!'))
    notes.forEach((note) => console.log(note.title))
}

// Read Note
const readNote = (title) => {
    const notes = loadNotes()
    const noteData = notes.find((note) => note.title === title)

    if (noteData) {
        console.log(chalk.cyan.inverse(noteData.title))
        console.log(noteData.body)
    } else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

// Save Notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load Notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}