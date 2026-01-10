// 1. THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check local storage for theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    let currentTheme = html.getAttribute('data-theme');
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
    themeToggle.innerText = theme === 'dark' ? '☀️' : '🌙';
}

// 2. MOBILE MENU TOGGLE
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple toggle for mobile view
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--card)';
        navLinks.style.padding = '20px';
    } else {
        navLinks.style.display = 'none';
    }
});

// 3. SMOOTH SCROLL FOR INTERNAL NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Remove active class from links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// 4. HEADER BACKGROUND ON SCROLL
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});


// --- THEME TOGGLE LOGIC ---
const themeToggle = document.getElementById('themeToggle');
const bodyElement = document.documentElement; // Targets <html>

// Check for saved preference in local storage
const savedTheme = localStorage.getItem('zimsafe-theme') || 'light';
bodyElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = bodyElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    bodyElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('zimsafe-theme', newTheme);
    updateThemeIcon(newTheme);
});






// Sample Car Data (You will eventually pull this from a database)
const carData = [
    { id: 1, make: 'toyota', model: 'Hilux GD6', year: 2021, price: 35000, loc: 'harare', img: 'hilux.jpg', verified: true },
    { id: 2, make: 'mazda', model: 'Axela', year: 2015, price: 8500, loc: 'bulawayo', img: 'axela.jpg', verified: true },
    { id: 3, make: 'nissan', model: 'NP300 Hardbody', year: 2018, price: 18000, loc: 'mutare', img: 'np300.jpg', verified: true },
    { id: 4, make: 'toyota', model: 'Corolla Aqua', year: 2016, price: 7200, loc: 'harare', img: 'aqua.jpg', verified: true },
];

const carGrid = document.getElementById('carGrid');
const carCount = document.getElementById('carCount');

// Function to Render Cars
function renderCars(cars) {
    carGrid.innerHTML = '';
    carCount.innerText = cars.length;

    cars.forEach(car => {
        const carCard = `
            <article class="car-card">
                ${car.verified ? '<div class="verified-badge">✓ Verified Seller</div>' : ''}
                <img src="assets/images/${car.img}" alt="${car.model}" class="car-image">
                <div class="car-info">
                    <h3>${car.year} ${car.make.toUpperCase()} ${car.model}</h3>
                    <p class="car-meta">📍 ${car.loc.charAt(0).toUpperCase() + car.loc.slice(1)} • 52,000 km</p>
                    <div class="car-price">$${car.price.toLocaleString()}</div>
                    <div class="card-footer">
                        <button class="btn-outline">Details</button>
                        <button class="btn-primary-sm">Contact</button>
                    </div>
                </div>
            </article>
        `;
        carGrid.innerHTML += carCard;
    });
}

// Initial Render
renderCars(carData);

// Sorting Logic
document.getElementById('sortSelect').addEventListener('change', (e) => {
    let sortedCars = [...carData];
    const val = e.target.value;

    if (val === 'priceLow') sortedCars.sort((a, b) => a.price - b.price);
    if (val === 'priceHigh') sortedCars.sort((a, b) => b.price - a.price);
    if (val === 'newest') sortedCars.sort((a, b) => b.year - a.year);

    renderCars(sortedCars);
});

// Price Range Label Update
const priceRange = document.getElementById('priceRange');
const priceLabel = document.getElementById('priceLabel');

priceRange.addEventListener('input', (e) => {
    priceLabel.innerText = `$${Math.round(e.target.value / 1000)}k`;
});






// Sample Mock Data
const cars = [
    { id: 1, make: 'toyota', model: 'Hilux GD6', year: 2021, price: 35000, loc: 'harare', img: 'hilux.jpg' },
    { id: 2, make: 'mazda', model: 'Axela', year: 2016, price: 9200, loc: 'bulawayo', img: 'axela.jpg' },
    { id: 3, make: 'nissan', model: 'NP300 Hardbody', year: 2019, price: 21000, loc: 'harare', img: 'np300.jpg' },
    { id: 4, make: 'toyota', model: 'Corolla Aqua', year: 2017, price: 7800, loc: 'bulawayo', img: 'aqua.jpg' },
];

const carGrid = document.getElementById('carGrid');
const matchCount = document.getElementById('matchCount');

// Function to render cars
function displayCars(data) {
    carGrid.innerHTML = '';
    matchCount.innerText = data.length;

    data.forEach(car => {
        const card = `
            <div class="car-card">
                <div class="verified-badge">✓ VERIFIED BY ROY</div>
                <div class="car-img" style="background-color: #ccc;"></div>
                <div class="car-details">
                    <h3>${car.year} ${car.make.toUpperCase()} ${car.model}</h3>
                    <p class="car-loc">📍 ${car.loc.toUpperCase()} • 120,000 km</p>
                    <div class="price-row">
                        <span class="price-tag">$${car.price.toLocaleString()}</span>
                        <button class="btn-reset" style="padding: 5px 10px; font-size: 0.8rem;">View</button>
                    </div>
                </div>
            </div>
        `;
        carGrid.innerHTML += card;
    });
}






