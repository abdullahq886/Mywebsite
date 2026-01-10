/* --- HERO SECTION --- */
.hero-section {
    padding: 80px 0;
    background: linear-gradient(135deg, rgba(0,82,204,0.05) 0%, rgba(0,168,107,0.05) 100%);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 50px;
    align-items: center;
}

.hero-text h1 { font-size: 3.5rem; line-height: 1.1; margin: 15px 0; }
.vetted-badge { background: var(--secondary); color: white; padding: 5px 12px; border-radius: 4px; font-size: 0.8rem; font-weight: 700; }
.highlight { color: var(--primary); }

/* ADVANCED SEARCH CARD */
.advanced-search-card {
    background: var(--light-bg);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border: 1px solid var(--border-color);
}
.search-tabs { display: flex; gap: 10px; margin-bottom: 20px; }
.tab-btn { flex: 1; padding: 10px; border: none; background: none; cursor: pointer; color: var(--text-main); border-bottom: 2px solid transparent; }
.tab-btn.active { border-color: var(--primary); font-weight: 700; color: var(--primary); }
.input-grid { display: grid; gap: 15px; margin-bottom: 20px; }
.form-group label { display: block; font-size: 0.8rem; margin-bottom: 5px; opacity: 0.7; }
.form-group select, .form-group input { width: 100%; padding: 12px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--light-bg); color: var(--text-main); }
.btn-search { width: 100%; padding: 15px; background: var(--primary); color: white; border: none; border-radius: 6px; font-weight: 700; cursor: pointer; }

/* TRUST PILLARS */
.trust-pillars { padding: 60px 0; background: var(--light-bg); border-bottom: 1px solid var(--border-color); }
.pillar-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
.pillar { text-align: center; }
.pillar .icon { font-size: 2.5rem; margin-bottom: 15px; }
.pillar h3 { margin-bottom: 10px; font-size: 1.1rem; }
.pillar p { font-size: 0.9rem; opacity: 0.7; }

/* CAR GRID */
.inventory-section { padding: 80px 0; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.car-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }

.car-card { background: var(--light-bg); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden; position: relative; transition: 0.3s; }
.car-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.verified-tag { position: absolute; top: 12px; left: 12px; background: var(--secondary); color: white; font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; z-index: 10; }
.car-img-wrapper img { width: 100%; height: 200px; object-fit: cover; }
.car-details { padding: 20px; }
.car-specs { display: flex; gap: 10px; margin: 15px 0; }
.car-specs span { font-size: 0.75rem; background: var(--border-color); padding: 4px 8px; border-radius: 4px; }
.price-usd { font-size: 1.4rem; font-weight: 800; color: var(--primary); }
.btn-view { background: var(--primary); color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; }

/* FOOTER */
.main-footer { background: var(--dark-bg); color: #94a3b8; padding: 80px 0 20px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 50px; }
.footer-col h4 { color: white; margin-bottom: 25px; font-size: 1.1rem; }
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 12px; }
.footer-col a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; }
.footer-bottom { border-top: 1px solid #1e293b; margin-top: 60px; padding-top: 20px; text-align: center; font-size: 0.8rem; }

/* MOBILE ADJUSTMENTS */
@media (max-width: 992px) {
    .hero-grid { grid-template-columns: 1fr; text-align: center; }
    .hero-text h1 { font-size: 2.5rem; }
    .pillar-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
}