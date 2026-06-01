/* ========================================
   CLEBER STORE - CATÁLOGO DINÂMICO
   Carrega produtos do localStorage (admin)
   e renderiza nas páginas de catálogo
   ======================================== */

(function () {
    'use strict';

    const DATA_VERSION = 'cs_v1';

    // ==========================================
    // DEFAULT PRODUCTS — Tênis importados
    // ==========================================
    const DEFAULT_PRODUCTS = [
        // Air Max Plus TN 1
        { id: 1,  name: 'Air Max Plus TN 1 x Lacoste',       category: 'Tênis Nike',    price: 309.00, originalPrice: 349.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 38 },
        { id: 2,  name: 'Air Max Plus TN 1 "Celestine Blue"', category: 'Tênis Nike',    price: 309.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 27 },
        { id: 3,  name: 'Air Max Plus TN 1 "Wild Grape"',     category: 'Tênis Nike',    price: 309.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 21 },
        // Air Max Plus TN 3
        { id: 4,  name: 'Air Max Plus TN 3 "Obsidian"',       category: 'Tênis Nike',    price: 349.00, originalPrice: 389.00, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 44 },
        { id: 5,  name: 'Air Max Plus TN 3 "White Black"',    category: 'Tênis Nike',    price: 349.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 33 },
        { id: 6,  name: 'Air Max Plus TN 3 "Track Red"',      category: 'Tênis Nike',    price: 349.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 28 },
        { id: 7,  name: 'Air Max Plus TN 3 "Triple Black"',   category: 'Tênis Nike',    price: 349.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 51 },
        { id: 8,  name: 'Air Max Plus TN 3 "Laser Blue"',     category: 'Tênis Nike',    price: 349.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 19 },
        // Air Max 95
        { id: 9,  name: 'Air Max 95 "Dark Grey"',             category: 'Tênis Nike',    price: 379.00, originalPrice: 429.00, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 23 },
        { id: 10, name: 'Air Max 95 "Triple White"',          category: 'Tênis Nike',    price: 379.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 31 },
        { id: 11, name: 'Air Max 95 "Triple Black"',          category: 'Tênis Nike',    price: 379.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 42 },
        { id: 12, name: 'Air Max 95 "Crystal Blue"',          category: 'Tênis Nike',    price: 379.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 17 },
        { id: 13, name: 'Air Max 95 "Neon"',                  category: 'Tênis Nike',    price: 379.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 25 },
        { id: 14, name: 'Air Max 95 "Grey Red"',              category: 'Tênis Nike',    price: 379.00, originalPrice: 429.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 15 },
        // Air Force 1
        { id: 15, name: 'Air Force 1 Low "Triple White"',     category: 'Air Force 1',   price: 369.00, originalPrice: 409.00, image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 56 },
        { id: 16, name: 'Air Force 1 Low "Triple Black"',     category: 'Air Force 1',   price: 369.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 47 },
        { id: 17, name: 'Air Force 1 Mid "White",',           category: 'Air Force 1',   price: 389.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 34 },
        // Air Max DN
        { id: 18, name: 'Air Max DN "Triple Black"',          category: 'Tênis Nike',    price: 329.00, originalPrice: 369.00, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 34 },
        { id: 19, name: 'Air Max DN "White Volt"',            category: 'Tênis Nike',    price: 329.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 22 },
        // Jordan
        { id: 20, name: 'Jordan 4 "Red Thunder"',             category: 'Jordan',        price: 399.00, originalPrice: 449.00, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 48 },
        { id: 21, name: 'Jordan 4 "Military Blue"',           category: 'Jordan',        price: 399.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 39 },
        { id: 22, name: 'Jordan 11 "Bred"',                   category: 'Jordan',        price: 449.00, originalPrice: 499.00, image: 'https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 62 },
        { id: 23, name: 'Jordan 1 Low "Grey Toe"',            category: 'Jordan',        price: 379.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 29 },
        // Asics & Mizuno
        { id: 24, name: 'Asics Gel-Kayano 14',                category: 'Asics & Mizuno',price: 359.00, originalPrice: 399.00, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 18 },
        { id: 25, name: 'Asics Gel-Nimbus 25',                category: 'Asics & Mizuno',price: 379.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1584735175315-9d5df23be91b?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 14 },
        { id: 26, name: 'Mizuno Wave Prophecy',               category: 'Asics & Mizuno',price: 379.00, originalPrice: 429.00, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 11 },
        { id: 27, name: 'Mizuno Wave Creation',               category: 'Asics & Mizuno',price: 349.00, originalPrice: 0,      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80', status: 'active', sales: 9 }
    ];

    const DEFAULT_REVIEWS = [
        { id: 1, author: 'Rafael C.', location: 'São Paulo, SP', initials: 'RC', stars: 5, text: 'Qualidade absurda! O TN 3 chegou idêntico ao da foto, acabamento impecável. Já uso há 3 semanas e ainda parece novo. Super recomendo!', product: 'Air Max Plus TN 3 "Triple Black"', date: '2026-05-20' },
        { id: 2, author: 'Mariana S.', location: 'Rio de Janeiro, RJ', initials: 'MS', stars: 5, text: 'Entrega super rápida e o atendimento pelo WhatsApp foi incrível. O Air Force 1 chegou perfeito, confortabilíssimo. Já quero outro!', product: 'Air Force 1 Low "Triple White"', date: '2026-05-15' },
        { id: 3, author: 'Lucas P.', location: 'Belo Horizonte, MG', initials: 'LP', stars: 4.5, text: 'Melhor custo-benefício que encontrei. Jordan 4 de verdade, material premium. Já comprei 2 pares e ambos vieram perfeitos!', product: 'Jordan 4 "Red Thunder"', date: '2026-05-10' }
    ];

    // ==========================================
    // LOAD DATA FROM LOCALSTORAGE
    // ==========================================
    function getProducts() {
        try {
            const version = localStorage.getItem('b10_dataVersion');
            const data = localStorage.getItem('b10_products');
            if (!version || version !== DATA_VERSION || !data) return DEFAULT_PRODUCTS.filter(p => p.status === 'active');
            return JSON.parse(data).filter(p => p.status === 'active');
        } catch { return DEFAULT_PRODUCTS.filter(p => p.status === 'active'); }
    }

    function getReviews() {
        try {
            const version = localStorage.getItem('b10_dataVersion');
            const data = localStorage.getItem('b10_reviews');
            if (!version || version !== DATA_VERSION || !data) return DEFAULT_REVIEWS;
            return JSON.parse(data);
        } catch { return DEFAULT_REVIEWS; }
    }

    // ==========================================
    // LOAD SETTINGS FROM ADMIN
    // ==========================================
    const siteSettings = (() => {
        try {
            const data = localStorage.getItem('b10_settings');
            return data ? JSON.parse(data) : {};
        } catch { return {}; }
    })();

    const pixDiscount = siteSettings.shipping?.pixDiscount ?? 5;
    const maxInstallments = siteSettings.shipping?.maxInstallments ?? 2;

    // ==========================================
    // HELPERS
    // ==========================================
    function formatPrice(value) {
        return 'R$ ' + Number(value).toFixed(2).replace('.', ',');
    }

    function calcPix(price) {
        return formatPrice(price * (1 - pixDiscount / 100));
    }

    function calcInstallment(price) {
        return formatPrice(price / maxInstallments);
    }

    function calcDiscount(original, current) {
        if (!original || original <= current) return 0;
        return Math.round(((original - current) / original) * 100);
    }

    function getCategoryFilter(cat) {
        if (!cat) return 'nike';
        const lower = cat.toLowerCase();
        if (lower.includes('jordan')) return 'jordan';
        if (lower.includes('air force')) return 'airforce';
        if (lower.includes('asics') || lower.includes('mizuno')) return 'outros';
        return 'nike';
    }

    function getCategoryLabel(cat) {
        if (!cat) return 'Tênis Nike';
        const lower = cat.toLowerCase();
        if (lower.includes('jordan')) return 'Jordan';
        if (lower.includes('air force')) return 'Air Force 1';
        if (lower.includes('asics') || lower.includes('mizuno')) return 'Outros';
        return 'Tênis Nike';
    }

    function getStarsHTML(rating) {
        let html = '';
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.25;
        for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
        if (half) html += '<i class="fas fa-star-half-alt"></i>';
        const empty = 5 - full - (half ? 1 : 0);
        for (let i = 0; i < empty; i++) html += '<i class="far fa-star"></i>';
        return html;
    }

    // ==========================================
    // CARD RENDERERS
    // ==========================================

    function renderCatalogCard(product, options = {}) {
        const discount = calcDiscount(product.originalPrice, product.price);
        const catFilter = getCategoryFilter(product.category);

        let badges = '';
        if (discount > 0) {
            badges = `<span class="product-badge badge-sale">-${discount}%</span>`;
        } else if (product.sales >= 40) {
            badges = '<span class="product-badge badge-fire">🔥 Hot</span>';
        } else if (product.sales <= 15) {
            badges = '<span class="product-badge badge-new">Novo</span>';
        }

        let priceHTML = '';
        if (product.originalPrice && product.originalPrice > product.price) {
            priceHTML = `<span class="price-old">${formatPrice(product.originalPrice)}</span>
                            <span class="price-current">${formatPrice(product.price)}</span>`;
        } else {
            priceHTML = `<span class="price-current">${formatPrice(product.price)}</span>`;
        }

        const dataAttrs = ` data-category="${catFilter}"`;

        return `
            <div class="product-card"${dataAttrs} data-price="${product.price}" data-name="${product.name}">
                <div class="product-img-wrap">
                    ${badges}
                    <a href="produto.html?id=${product.id}"><img src="${product.image}" alt="${product.name}" loading="lazy"></a>
                    <div class="product-actions">
                        <button class="action-btn" title="Visualização rápida"><i class="far fa-eye"></i></button>
                        <button class="action-btn" title="Favoritar"><i class="far fa-heart"></i></button>
                        <button class="action-btn" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${getCategoryLabel(product.category)}</span>
                    <h3 class="product-name"><a href="produto.html?id=${product.id}">${product.name}</a></h3>
                    <div class="product-rating">${getStarsHTML(4.5)} <span>(${product.sales || 0})</span></div>
                    <div class="product-prices">
                        ${priceHTML}
                    </div>
                    <span class="product-installment">ou ${maxInstallments}x de ${calcInstallment(product.price)}</span>
                    <a href="produto.html?id=${product.id}" class="btn-add-cart"><i class="fas fa-eye"></i> Ver Produto</a>
                </div>
            </div>`;
    }

    function renderHomeCard(product, options = {}) {
        const discount = calcDiscount(product.originalPrice, product.price);
        const catFilter = getCategoryFilter(product.category);

        let badge = '';
        if (options.badge) {
            badge = `<span class="product-badge ${options.badge}">${options.badgeText || ''}</span>`;
        } else if (discount > 0) {
            badge = `<span class="product-badge sale">-${discount}%</span>`;
        } else if (product.sales >= 40) {
            badge = '<span class="product-badge special">🔥 Hot</span>';
        } else {
            badge = '<span class="product-badge new">Novo</span>';
        }

        let priceHTML = '';
        if (product.originalPrice && product.originalPrice > product.price) {
            priceHTML = `<span class="price-old">${formatPrice(product.originalPrice)}</span><span class="price-current">${formatPrice(product.price)}</span>`;
        } else {
            priceHTML = `<span class="price-current">${formatPrice(product.price)}</span>`;
        }

        return `
                <div class="product-card" data-category="${catFilter}">
                    <div class="product-image-wrapper">
                        ${badge}
                        <button class="wishlist-btn" aria-label="Favoritar"><i class="far fa-heart"></i></button>
                        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                        <div class="product-overlay"><button class="quick-view-btn"><i class="far fa-eye"></i> Visualização rápida</button></div>
                        <div class="product-sizes"><span>38</span><span>39</span><span>40</span><span>41</span><span>42</span><span>43</span></div>
                    </div>
                    <div class="product-info">
                        <a href="produto.html?id=${product.id}" class="product-category-link">${getCategoryLabel(product.category)}</a>
                        <h3 class="product-name"><a href="produto.html?id=${product.id}">${product.name}</a></h3>
                        <div class="product-rating"><div class="stars">${getStarsHTML(4.5)}</div><span class="rating-count">(${product.sales || 0})</span></div>
                        <div class="product-prices">${priceHTML}</div>
                        <div class="product-payment-info">
                            <span class="product-installment"><i class="far fa-credit-card"></i> ${maxInstallments}x de ${calcInstallment(product.price)} s/ juros</span>
                            <span class="product-pix"><i class="fab fa-pix"></i> ${calcPix(product.price)} <em>no PIX (${pixDiscount}% OFF)</em></span>
                        </div>
                        <button class="add-to-cart-btn"><i class="fas fa-shopping-bag"></i> Adicionar à Sacola</button>
                    </div>
                </div>`;
    }

    // ==========================================
    // TESTIMONIAL RENDERER
    // ==========================================
    function renderTestimonial(review) {
        const starsHTML = getStarsHTML(review.stars || 5);
        const products = getProducts();
        const matchProduct = products.find(p => p.name === review.product);
        const productImg = matchProduct ? matchProduct.image : '';
        const days = Math.max(1, Math.floor((Date.now() - new Date(review.date).getTime()) / 86400000));
        const timeText = days === 1 ? 'há 1 dia' : days < 7 ? `há ${days} dias` : `há ${Math.floor(days / 7)} semana${Math.floor(days / 7) > 1 ? 's' : ''}`;

        return `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-stars">${starsHTML}</div>
                        <span class="verified-badge"><i class="fas fa-check-circle"></i> Compra verificada</span>
                    </div>
                    <p>"${review.text}"</p>
                    ${productImg ? `<div class="testimonial-product-tag"><img src="${productImg}" alt=""><span>${review.product}</span></div>` : ''}
                    <div class="testimonial-author">
                        <div class="author-avatar">${review.initials || review.author.charAt(0)}</div>
                        <div><strong>${review.author}</strong><span>${review.location || ''} • ${timeText}</span></div>
                    </div>
                </div>`;
    }

    // ==========================================
    // PAGE RENDERERS
    // ==========================================

    function renderTodosProdutos() {
        const grid = document.getElementById('catalogGrid');
        if (!grid || !document.querySelector('.page-title')?.textContent?.includes('Todos')) return;

        const products = getProducts();
        grid.innerHTML = products.map(p => renderCatalogCard(p)).join('');

        const countEl = document.getElementById('productCount');
        if (countEl) countEl.textContent = products.length;

        setupCatalogFilters(grid, countEl);
    }

    function renderLancamentos() {
        const grid = document.querySelector('[data-catalog="lancamentos"]');
        if (!grid) return;

        const products = getProducts();
        const sorted = [...products].sort((a, b) => b.id - a.id).slice(0, 8);
        grid.innerHTML = sorted.map(p => renderCatalogCard(p)).join('');

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = sorted.length;
    }

    // Nike Air Max page (formerly selecoes)
    function renderSelecoes() {
        const grid = document.querySelector('[data-catalog="selecoes"]');
        if (!grid) return;

        const products = getProducts().filter(p =>
            p.category === 'Tênis Nike' && p.name.toLowerCase().includes('tn')
        );
        const fallback = getProducts().filter(p => p.category === 'Tênis Nike');
        const show = products.length ? products : fallback;
        grid.innerHTML = show.map(p => renderCatalogCard(p)).join('');

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = show.length;

        setupRegionFilters(grid, countEl);
    }

    // Air Force 1 page (formerly jogador)
    function renderModeloJogador() {
        const grid = document.querySelector('[data-catalog="jogador"]');
        if (!grid) return;

        const products = getProducts().filter(p => p.category === 'Air Force 1');
        const show = products.length ? products : getProducts().slice(0, 8);
        grid.innerHTML = show.map(p => renderCatalogCard(p)).join('');

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = show.length;
    }

    // Jordan page (formerly torcedor)
    function renderModeloTorcedor() {
        const grid = document.querySelector('[data-catalog="torcedor"]');
        if (!grid) return;

        const products = getProducts().filter(p => p.category === 'Jordan');
        const show = products.length ? products : getProducts().slice(0, 8);
        grid.innerHTML = show.map(p => renderCatalogCard(p)).join('');

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = show.length;
    }

    function renderPromocoes() {
        const grid = document.querySelector('[data-catalog="promocoes"]');
        if (!grid) return;

        const products = getProducts().filter(p => p.originalPrice && p.originalPrice > p.price);
        grid.innerHTML = products.map(p => renderCatalogCard(p, { showSavings: true })).join('');

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = products.length;
    }

    function renderHomeDestaques() {
        const grid = document.getElementById('destaquesGrid');
        if (!grid) return;

        const products = getProducts();
        const top = [...products].sort((a, b) => (b.sales || 0) - (a.sales || 0)).slice(0, 4);
        grid.innerHTML = top.map(p => renderHomeCard(p)).join('');
    }

    function renderHomeNovidades() {
        const grid = document.getElementById('novidadesGrid');
        if (!grid) return;

        const products = getProducts();
        const sorted = [...products].sort((a, b) => b.id - a.id);
        grid.innerHTML = sorted.slice(0, 4).map(p => renderHomeCard(p, { badge: 'new', badgeText: 'Novo' })).join('');
    }

    function renderHomeNovidades2() {
        const grid = document.getElementById('novidadesGrid2');
        if (!grid) return;

        const products = getProducts();
        const sorted = [...products].sort((a, b) => b.id - a.id);
        grid.innerHTML = sorted.slice(4, 8).map(p => renderHomeCard(p, { badge: 'new', badgeText: 'Novo' })).join('');
    }

    function renderHomePromocoes() {
        const grid = document.getElementById('promocoesGrid');
        if (!grid) return;

        const products = getProducts().filter(p => p.originalPrice && p.originalPrice > p.price);
        grid.innerHTML = products.slice(0, 4).map(p => renderHomeCard(p)).join('');
    }

    function renderHomeTestimonials() {
        const grid = document.getElementById('testimonialsGrid');
        if (!grid) return;

        const reviews = getReviews();
        grid.innerHTML = reviews.slice(0, 3).map(r => renderTestimonial(r)).join('');
    }

    // ==========================================
    // FILTER & SORT HELPERS
    // ==========================================
    function setupCatalogFilters(grid, countEl) {
        const filterChips = document.querySelectorAll('.filter-chip');
        const sortSelect = document.getElementById('sortSelect');

        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const filter = chip.dataset.filter;
                let visible = 0;
                grid.querySelectorAll('.product-card').forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';
                        visible++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                if (countEl) countEl.textContent = visible;
            });
        });

        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                const cards = Array.from(grid.querySelectorAll('.product-card')).filter(c => c.style.display !== 'none');
                cards.sort((a, b) => {
                    switch (sortSelect.value) {
                        case 'menor-preco': return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
                        case 'maior-preco': return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
                        case 'nome-az': return a.dataset.name.localeCompare(b.dataset.name);
                        default: return 0;
                    }
                });
                cards.forEach(c => grid.appendChild(c));
            });
        }
    }

    function setupRegionFilters(grid, countEl) {
        const filterChips = grid.closest('.catalog-section')?.querySelectorAll('.filter-chip');
        if (!filterChips) return;

        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const filter = chip.dataset.filter;
                let visible = 0;
                grid.querySelectorAll('.product-card').forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';
                        visible++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                if (countEl) countEl.textContent = visible;
            });
        });
    }

    // ==========================================
    // INIT
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        renderTodosProdutos();
        renderLancamentos();
        renderSelecoes();
        renderModeloJogador();
        renderModeloTorcedor();
        renderPromocoes();
        renderHomeDestaques();
        renderHomeNovidades();
        renderHomeNovidades2();
        renderHomePromocoes();
        renderHomeTestimonials();
    });

})();
