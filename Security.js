// Data expanded for professional look
const cars = [
    { id: 1, make: 'toyota', model: 'Land Cruiser Prado', year: 2021, price: 65000, loc: 'Harare', fuel: 'Diesel', trans: 'Auto', img: 'prado.jpg' },
    { id: 2, make: 'toyota', model: 'Hilux GD6', year: 2019, price: 38500, loc: 'Bulawayo', fuel: 'Diesel', trans: 'Manual', img: 'hilux.jpg' },
    { id: 3, make: 'mazda', model: 'CX-5', year: 2017, price: 18000, loc: 'Mutare', fuel: 'Petrol', trans: 'Auto', img: 'cx5.jpg' },
    { id: 4, make: 'nissan', model: 'X-Trail', year: 2018, price: 21500, loc: 'Harare', fuel: 'Petrol', trans: 'Auto', img: 'xtrail.jpg' },
    { id: 5, make: 'honda', model: 'Fit (New Shape)', year: 2016, price: 8200, loc: 'Gweru', fuel: 'Petrol', trans: 'Auto', img: 'fit.jpg' },
    { id: 6, make: 'toyota', model: 'Fortuner', year: 2022, price: 55000, loc: 'Harare', fuel: 'Diesel', trans: 'Auto', img: 'fortuner.jpg' },
];

const carGrid = document.getElementById('carGrid');
const matchCount = document.getElementById('matchCount');

function renderCars(data) {
    carGrid.innerHTML = '';
    matchCount.innerText = data.length;

    data.forEach(car => {
        const html = `
            <article class="car-card" data-aos="fade-up">
                <div class="verified-tag">🛡️ ID & DOC VERIFIED</div>
                <div class="car-img-placeholder"></div>
                <div class="car-content">
                    <h3 class="car-title">${car.year} ${car.make.toUpperCase()} ${car.model}</h3>
                    <div class="car-specs">
                        <span>⛽ ${car.fuel}</span>
                        <span>⚙️ ${car.trans}</span>
                        <span>📍 ${car.loc}</span>
                    </div>
                    <div class="flex-between">
                        <span class="price-tag">$${car.price.toLocaleString()}</span>
                        <button class="btn-primary" style="padding: 8px 15px; font-size: 0.8rem;">View Vehicle</button>
                    </div>
                </div>
            </article>
        `;
        carGrid.innerHTML += html;
    });
}

// Filter logic
document.getElementById('filterForm').addEventListener('change', () => {
    const make = document.getElementById('makeFilter').value;
    const price = document.getElementById('priceRange').value;
    
    document.getElementById('priceVal').innerText = `$${parseInt(price).toLocaleString()}`;

    const filtered = cars.filter(car => {
        return (make === 'all' || car.make === make) && (car.price <= price);
    });

    renderCars(filtered);
});

// Theme Switcher
document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.documentElement;
    const current = body.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', target);
    document.getElementById('themeToggle').innerText = target === 'dark' ? '☀️' : '🌙';
});

// Initial Load
renderCars(cars);