// Select elements
const habitList = document.getElementById('habits');
const habitForm = document.getElementById('habit-form');
const newHabitInput = document.getElementById('new-habit');
const yesBtn = document.getElementById('yes-btn');
const customizeBtn = document.getElementById('customize-btn');
const closeBtn = document.getElementById('close-chat');
const chatbox = document.getElementById('chatbox');

// Predefined habits
const predefinedHabits = [
    'Drink 8 glasses of water',
    'Exercise for 30 minutes',
    'Read for 20 minutes'
];

// Function to add a habit to the list
function addHabitToList(habitText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="habit-checkbox">
        <span>${habitText}</span>
        <button class="delete-btn">Delete</button>
    `;
    habitList.appendChild(li);
}

// Add event listener for "Yes, keep them" button
yesBtn.addEventListener('click', function() {
    predefinedHabits.forEach(habit => addHabitToList(habit));
    chatbox.style.display = 'none';
});

// Add event listener for close button
closeBtn.addEventListener('click', function() {
    chatbox.style.display = 'none';
});

// Add event listener for adding a new habit
habitForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newHabit = newHabitInput.value;
    if (newHabit === '') {
        alert('Please enter a habit!');
        return;
    }

    // Create new habit item
    addHabitToList(newHabit);

    // Clear input field (BUG: This doesn't work)
    newHabitInput.value = '';
});

// Add event listener for marking habits as complete
habitList.addEventListener('change', function(e) {
    if (e.target.classList.contains('habit-checkbox')) {
        const checkbox = e.target;
        const habitText = checkbox.nextElementSibling;

        // BUG: Progress tracker doesn't update
        if (checkbox.checked) {
            habitText.style.textDecoration = 'line-through';
        } else {
            habitText.style.textDecoration = 'none';
        }
    }
});

// Add event listener for deleting habits
habitList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        habitList.removeChild(li); // BUG: Doesn't delete properly
    }
});