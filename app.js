// Application State
let currentPage = 'home';
let currentFilter = 'all';
let currentExercise = null;
let currentWorkout = null;
let currentExerciseIndex = 0;
let workoutTimer = null;
let workoutTimeRemaining = 0;
let isWorkoutPaused = false;
let progress = {
    totalWorkouts: 0,
    totalMinutes: 0,
    currentStreak: 0,
    exercisesCompleted: 0,
    history: []
};

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('footflex-progress');
    if (saved) {
        progress = JSON.parse(saved);
        updateProgressUI();
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('footflex-progress', JSON.stringify(progress));
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    loadProgress();
    initializeNavigation();
    renderCategories();
    renderFeaturedExercises();
    renderExercises();
    initializeFilters();
    // Service worker temporarily disabled - causing 404 errors
    // registerServiceWorker();
});

// Register Service Worker for PWA
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const page = link.dataset.page;
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    currentPage = page;

    // Re-render icons
    lucide.createIcons();

    // Update progress page if needed
    if (page === 'progress') {
        updateProgressUI();
    }
}

// Render categories on home page
function renderCategories() {
    const grid = document.getElementById('category-grid');
    if (!grid) return;

    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.id}')">
            <i data-lucide="${cat.icon}" class="category-icon"></i>
            <h3>${cat.name}</h3>
            <p>${cat.description}</p>
        </div>
    `).join('');

    lucide.createIcons();
}

// Filter exercises by category
function filterByCategory(categoryId) {
    navigateTo('exercises');
    setTimeout(() => {
        setFilter(categoryId);
    }, 100);
}

// Render featured exercises
function renderFeaturedExercises() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;

    const featured = exercises.slice(0, 3);
    grid.innerHTML = featured.map(ex => `
        <div class="exercise-card" onclick="showExerciseDetail(${ex.id})">
            <div class="exercise-image">
                <i data-lucide="${ex.icon}"></i>
            </div>
            <div class="exercise-content">
                <h3>${ex.name}</h3>
                <p>${ex.description}</p>
                <div class="exercise-meta">
                    <span><i data-lucide="clock"></i> ${ex.duration}s</span>
                    <span><i data-lucide="zap"></i> ${ex.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Render all exercises
function renderExercises() {
    const grid = document.getElementById('exercises-grid');
    if (!grid) return;

    const filtered = currentFilter === 'all' 
        ? exercises 
        : exercises.filter(ex => ex.category === currentFilter);

    grid.innerHTML = filtered.map(ex => `
        <div class="exercise-card" onclick="showExerciseDetail(${ex.id})">
            <div class="exercise-image">
                <i data-lucide="${ex.icon}"></i>
            </div>
            <div class="exercise-content">
                <h3>${ex.name}</h3>
                <p>${ex.description}</p>
                <div class="exercise-meta">
                    <span><i data-lucide="clock"></i> ${ex.duration}s</span>
                    <span><i data-lucide="zap"></i> ${ex.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Initialize filter buttons
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            setFilter(filter);
        });
    });
}

function setFilter(filter) {
    currentFilter = filter;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderExercises();
}

// Show exercise detail
function showExerciseDetail(exerciseId) {
    currentExercise = exercises.find(ex => ex.id === exerciseId);
    if (!currentExercise) return;

    const detail = document.getElementById('exercise-detail');
    const category = categories.find(cat => cat.id === currentExercise.category);

    detail.innerHTML = `
        <div class="exercise-detail-header">
            <div class="exercise-detail-image">
                <i data-lucide="${currentExercise.icon}"></i>
            </div>
            <div class="exercise-detail-info">
                <h1>${currentExercise.name}</h1>
                <p>${currentExercise.description}</p>
                <div class="exercise-detail-meta">
                    <div><i data-lucide="clock"></i> ${currentExercise.duration} seconds</div>
                    <div><i data-lucide="zap"></i> ${currentExercise.difficulty}</div>
                    <div><i data-lucide="tag"></i> ${category ? category.name : currentExercise.category}</div>
                </div>
            </div>
        </div>
        <div class="exercise-detail-section">
            <h2>Instructions</h2>
            <ul>
                ${currentExercise.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ul>
        </div>
        <div class="exercise-detail-section">
            <h2>Benefits</h2>
            <ul>
                ${currentExercise.benefits.map(ben => `<li>${ben}</li>`).join('')}
            </ul>
        </div>
        <div class="exercise-detail-section">
            <h2>Target Areas</h2>
            <ul>
                ${currentExercise.targetAreas.map(area => `<li>${area}</li>`).join('')}
            </ul>
        </div>
        <button class="start-exercise-btn" onclick="startSingleExercise(${currentExercise.id})">
            <i data-lucide="play"></i>
            Start Exercise
        </button>
    `;

    navigateTo('exercise-detail');
    lucide.createIcons();
}

// Start a single exercise
function startSingleExercise(exerciseId) {
    currentWorkout = {
        name: 'Single Exercise',
        exercises: [exerciseId]
    };
    currentExerciseIndex = 0;
    navigateTo('active-workout');
    loadCurrentExercise();
}

// Start a workout
function startWorkout(workoutType) {
    const workout = workouts[workoutType];
    if (!workout) return;

    currentWorkout = workout;
    currentExerciseIndex = 0;
    navigateTo('active-workout');
    loadCurrentExercise();
}

// Load current exercise in workout
function loadCurrentExercise() {
    if (!currentWorkout || currentExerciseIndex >= currentWorkout.exercises.length) {
        completeWorkout();
        return;
    }

    const exerciseId = currentWorkout.exercises[currentExerciseIndex];
    const exercise = exercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    currentExercise = exercise;
    workoutTimeRemaining = exercise.duration;
    isWorkoutPaused = false;

    const container = document.getElementById('current-exercise');
    container.innerHTML = `
        <div class="current-exercise-image">
            <i data-lucide="${exercise.icon}"></i>
        </div>
        <h2>${exercise.name}</h2>
        <p>${exercise.description}</p>
        <div class="timer-display" id="timer">${formatTime(workoutTimeRemaining)}</div>
        <p style="font-size: 0.9rem; color: var(--text-light);">
            ${currentExerciseIndex + 1} of ${currentWorkout.exercises.length}
        </p>
    `;

    updateWorkoutProgress();
    updatePlayPauseButton();
    lucide.createIcons();

    // Start timer
    if (workoutTimer) clearInterval(workoutTimer);
    workoutTimer = setInterval(() => {
        if (!isWorkoutPaused) {
            workoutTimeRemaining--;
            updateTimerDisplay();
            
            if (workoutTimeRemaining <= 0) {
                clearInterval(workoutTimer);
                setTimeout(() => {
                    nextExercise();
                }, 500);
            }
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const timer = document.getElementById('timer');
    if (timer) {
        timer.textContent = formatTime(workoutTimeRemaining);
    }
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update workout progress bar
function updateWorkoutProgress() {
    const progress = ((currentExerciseIndex + 1) / currentWorkout.exercises.length) * 100;
    const fill = document.getElementById('workout-progress-fill');
    const text = document.getElementById('workout-progress-text');
    
    if (fill) fill.style.width = `${progress}%`;
    if (text) text.textContent = `${currentExerciseIndex + 1} / ${currentWorkout.exercises.length}`;
}

// Toggle play/pause
function togglePlayPause() {
    isWorkoutPaused = !isWorkoutPaused;
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    const btn = document.getElementById('play-pause-btn');
    const text = document.getElementById('play-pause-text');
    
    if (btn && text) {
        if (isWorkoutPaused) {
            btn.innerHTML = `<i data-lucide="play"></i><span id="play-pause-text">Resume</span>`;
        } else {
            btn.innerHTML = `<i data-lucide="pause"></i><span id="play-pause-text">Pause</span>`;
        }
        lucide.createIcons();
    }
}

// Previous exercise
function previousExercise() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        loadCurrentExercise();
    }
}

// Next exercise
function nextExercise() {
    if (currentExerciseIndex < currentWorkout.exercises.length - 1) {
        currentExerciseIndex++;
        loadCurrentExercise();
    } else {
        completeWorkout();
    }
}

// Complete workout
function completeWorkout() {
    if (workoutTimer) clearInterval(workoutTimer);

    // Update progress
    progress.totalWorkouts++;
    progress.exercisesCompleted += currentWorkout.exercises.length;
    
    // Calculate total minutes
    const totalSeconds = currentWorkout.exercises.reduce((sum, id) => {
        const ex = exercises.find(e => e.id === id);
        return sum + (ex ? ex.duration : 0);
    }, 0);
    progress.totalMinutes += Math.round(totalSeconds / 60);

    // Add to history
    const today = new Date();
    progress.history.unshift({
        name: currentWorkout.name,
        exercises: currentWorkout.exercises.length,
        minutes: Math.round(totalSeconds / 60),
        date: today.toLocaleDateString(),
        time: today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Keep only last 10 entries
    if (progress.history.length > 10) {
        progress.history = progress.history.slice(0, 10);
    }

    saveProgress();

    // Show completion message
    const container = document.getElementById('current-exercise');
    container.innerHTML = `
        <div class="current-exercise-image">
            <i data-lucide="check-circle" style="color: white;"></i>
        </div>
        <h2>Workout Complete! 🎉</h2>
        <p>Great job! You completed ${currentWorkout.exercises.length} exercises.</p>
        <p style="font-size: 0.9rem; color: var(--text-light);">
            Total time: ${Math.round(totalSeconds / 60)} minutes
        </p>
        <button class="btn btn-primary btn-large" onclick="navigateTo('home')" style="margin-top: 2rem;">
            <i data-lucide="home"></i>
            Return Home
        </button>
    `;
    lucide.createIcons();
}

// Update progress UI
function updateProgressUI() {
    document.getElementById('total-workouts').textContent = progress.totalWorkouts;
    document.getElementById('total-minutes').textContent = progress.totalMinutes;
    document.getElementById('current-streak').textContent = progress.currentStreak;
    document.getElementById('exercises-completed').textContent = progress.exercisesCompleted;

    const historyList = document.getElementById('history-list');
    if (progress.history.length === 0) {
        historyList.innerHTML = '<p class="empty-state">No workouts yet. Start your first workout today!</p>';
    } else {
        historyList.innerHTML = progress.history.map(item => `
            <div class="history-item">
                <div class="history-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.exercises} exercises</p>
                </div>
                <div class="history-item-time">
                    <span>${item.minutes} min</span>
                    <small>${item.date} at ${item.time}</small>
                </div>
            </div>
        `).join('');
    }
}
