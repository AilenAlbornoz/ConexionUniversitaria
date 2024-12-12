const img = document.getElementById('sede');
const text = document.getElementById('text');

img.addEventListener('click', function(){
    img.classList.toggle('flipped');
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', function(){
const addNoteButton = document.getElementById('addNoteButton');
const fortaleza = document.getElementById('fortaleza');
const notasContainer = document.getElementById('notasContainer');

    addNoteButton.addEventListener('click', function() {
        const noteText = fortaleza.value.trim(); 
        if (noteText) { 
            addNote(noteText); 
            fortaleza.value = '';
        }
    })

    function addNote(text) {
        const noteCard = document.createElement('div'); 
        noteCard.className = 'noteCard'; 
        noteCard.textContent = text; 

        notasContainer.appendChild(noteCard); 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const addNoteButton = document.getElementById('addNoteButton');
    const fortaleza = document.getElementById('fortaleza');
    const notasContainer = document.getElementById('notasContainer');
    const notaTipo = document.getElementById('notaTipo');

    // Cargar notas del localStorage al iniciar
    loadNotes();

    addNoteButton.addEventListener('click', function() {
        const noteText = fortaleza.value.trim(); 
        const noteCategory = notaTipo.value;

        if (noteText) { 
            addNote(noteText, noteCategory); 
            fortaleza.value = '';
        }
    });

    function addNote(text, category) {
        const noteCard = document.createElement('div'); 
        noteCard.className = 'noteCard'; 
        noteCard.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: ${text}`; 

        notasContainer.appendChild(noteCard); 

        // Guardar en localStorage
        saveNoteToLocalStorage(text, category);
    }

    function saveNoteToLocalStorage(text, category) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ text, category });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => {
            const noteCard = document.createElement('div'); 
            noteCard.className = 'noteCard'; 
            noteCard.textContent = `${note.category.charAt(0).toUpperCase() + note.category.slice(1)}: ${note.text}`; 
            notasContainer.appendChild(noteCard);
        });
    }
});

document.addEventListener("DOMContentLoaded", function(){

    // Inicializa el índice del párrafo actual
    let currentIndex = 0; 
    const items = document.querySelectorAll('.carousel-item');
    console.log(items);
    
    // Muestra el primer párrafo al cargar
    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }
    
    // Maneja el evento del botón "Información"
    document.getElementById("infoButton").addEventListener("click", function() {
        const info = document.getElementById("info");
        if (info.style.display === "none" || info.style.display === "") {
            info.style.display = "block"; // Muestra la información
            showItem(currentIndex); // Muestra el primer párrafo
        } else {
            info.style.display = "none"; // Oculta la información
        }
    });
    
    // Maneja el evento del botón "Anterior"
    document.getElementById("prevButton").addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1; // Mueve al anterior o al último
        showItem(currentIndex);
    });
    
    // Maneja el evento del botón "Siguiente"
    document.getElementById("nextButton").addEventListener("click", function() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0; // Mueve al siguiente o al primero
        showItem(currentIndex);
    });
    });