// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

import {loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo} from './todos'
import {getFilters , setFilters} from './filters'
import {renderTodos, generateTodoDOM, generateSummaryDOM} from './views'
import uuidv4 from 'uuid/v4'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value,
    })
    renderTodos()
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    // if (text.length > 0) {
    //     todos.push({
    //         id: uuidv4(),
    //         text,
    //         completed: false
    //     })
    //     saveTodos(todos)
    //     renderTodos(todos, filters)
    //     e.target.elements.text.value = ''
    // }
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderNotes()
    }
})

