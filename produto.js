/* ========================================
   Filho e Pai - PRODUCT DETAIL PAGE JS
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Load admin settings
    const siteSettings = (() => {
        try {
            const data = localStorage.getItem('b10_settings');
            return data ? JSON.parse(data) : {};
        } catch { return {}; }
    })();

    const pixDiscount = siteSettings.shipping?.pixDiscount ?? 5;
    const maxInstallments = siteSettings.shipping?.maxInstallments ?? 2;
    const waNumber = (siteSettings.store?.whatsapp || '5511984270638').replace(/\D/g, '');

    const DATA_VERSION = 'fp_v2';
    const hasNewData = localStorage.getItem('b10_dataVersion') === DATA_VERSION;

    const DEFAULT_PRODUCTS = [
        { id: 1, name: "Air Max Plus TN 1 \"Venom\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-venom.jpg", status: "active", sales: 69 },
        { id: 2, name: "Air Max Plus TN 1 \"Grey/Red\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-grey-red.jpg", status: "active", sales: 68 },
        { id: 3, name: "Air Max Plus TN 1 \"Mica Green\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-mica-green.jpg", status: "active", sales: 67 },
        { id: 4, name: "Air Max Plus TN 1 \"Pink Rise\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-pink-rise.jpg", status: "active", sales: 66 },
        { id: 5, name: "Air Max Plus Tn 1 \"Triple Black\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-triple-black.jpg", status: "active", sales: 65 },
        { id: 6, name: "Air Max Plus TN 1 \"Hyper Blue\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-hyper-blue.jpg", status: "active", sales: 64 },
        { id: 7, name: "Air Max Plus TN 1 \"Blue Gradient\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-blue-gradient.jpg", status: "active", sales: 63 },
        { id: 8, name: "Air Max Plus TN 1 \"FC\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-fc.jpg", status: "active", sales: 62 },
        { id: 9, name: "Air Max Plus TN 1 \"Pimento\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-pimento.png", status: "active", sales: 61 },
        { id: 10, name: "Air Max Plus TN1 \"Black Metallic\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-black-metallic.jpg", status: "active", sales: 60 },
        { id: 11, name: "Air Max Plus TN 1 \"Icons\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-icons.jpg", status: "active", sales: 59 },
        { id: 12, name: "Air Max Plus TN1 \"Purple Dragon\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-purple-dragon.jpg", status: "active", sales: 58 },
        { id: 13, name: "Air Max Plus TN1 \"Black White\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-black-white.jpg", status: "active", sales: 57 },
        { id: 14, name: "Air Max Plus Tn 1 'Triple White'", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-triple-white.webp", status: "active", sales: 56 },
        { id: 15, name: "Air Max Plus TN1 \"Black University Blue\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-black-university-blue.jpg", status: "active", sales: 55 },
        { id: 16, name: "Air Max Plus TN 1 \"Tour Yellow\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-tour-yellow.jpg", status: "active", sales: 54 },
        { id: 17, name: "Air Max Plus Tn 1 \"Oreo\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-oreo.jpg", status: "active", sales: 53 },
        { id: 18, name: "Air Max Plus TN 1 \"Bone Olive\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-bone-olive.jpg", status: "active", sales: 52 },
        { id: 19, name: "Air Max Plus TN1 \"Deadpool\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-deadpool.jpg", status: "active", sales: 51 },
        { id: 20, name: "Air Max Plus TN1 \"Aquarius Blue\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-aquarius-blue.webp", status: "active", sales: 50 },
        { id: 21, name: "Air Max Tn 1 'Dracula'", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-tn-1-dracula.webp", status: "active", sales: 49 },
        { id: 22, name: "Air Max Plus TN 1 \"Baltic Blue\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-baltic-blue.png", status: "active", sales: 48 },
        { id: 23, name: "Air Max Plus TN 1 \"Bright Cactus\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-bright-cactus.jpg", status: "active", sales: 47 },
        { id: 24, name: "Air Max Tn 1 'Killer Whale'", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-tn-1-killer-whale.jpg", status: "active", sales: 46 },
        { id: 25, name: "Air Max Plus TN 1 \"PSG\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-psg.jpg", status: "active", sales: 45 },
        { id: 26, name: "Air Max Plus TN1 \"Voltage Purple\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-voltage-purple.jpg", status: "active", sales: 44 },
        { id: 27, name: "Air Max Plus Tn 1 \"Nature Blue\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-nature-blue.jpg", status: "active", sales: 43 },
        { id: 28, name: "Air Max Plus TN 1 \"Atlanta\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-atlanta.jpg", status: "active", sales: 42 },
        { id: 29, name: "Air Max Plus TN1 \"Neon Pink\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-neon-pink.jpg", status: "active", sales: 41 },
        { id: 30, name: "Air Max Plus TN1 \"Dusk\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-dusk.jpg", status: "active", sales: 40 },
        { id: 31, name: "Air Max Plus TN 1 \"Black Sundial\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-black-sundial.jpg", status: "active", sales: 39 },
        { id: 32, name: "Air Max Plus TN1 \"Seafoan\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-seafoan.jpg", status: "active", sales: 38 },
        { id: 33, name: "Air Max Plus TN1 \"Barcelona\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn1-barcelona.webp", status: "active", sales: 37 },
        { id: 34, name: "Air Max Plus TN 1 \"Celestine Blue\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-celestine-blue.jpg", status: "active", sales: 36 },
        { id: 35, name: "Air Max Plus TN 1 \"Wild Grape\"", category: "T\u00eanis Nike", price: 309.00, originalPrice: 349.00, image: "Produtos/Importados/air-max-plus-tn-1-wild-grape.jpg", status: "active", sales: 35 },
        { id: 36, name: "Air Max Plus TN 3 \"Triple Black\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/air-max-plus-tn-3-triple-black.jpg", status: "active", sales: 34 },
        { id: 37, name: "Air Max Plus TN 3 \"Obsidian\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/air-max-plus-tn-3-obsidian.jpg", status: "active", sales: 33 },
        { id: 38, name: "Air Max Plus TN 3 \"Laser Blue\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/air-max-plus-tn-3-laser-blue.jpg", status: "active", sales: 32 },
        { id: 39, name: "Air Max Plus TN 3 \"White Black\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/air-max-plus-tn-3-white-black.jpg", status: "active", sales: 31 },
        { id: 40, name: "Air Max Plus TN 3 \"Track Red\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/air-max-plus-tn-3-track-red.jpg", status: "active", sales: 30 },
        { id: 41, name: "Air Max TN3 \"Triple White\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/air-max-tn3-triple-white.jpg", status: "active", sales: 29 },
        { id: 42, name: "Air Max 95 \"Triple Black\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-triple-black.jpg", status: "active", sales: 28 },
        { id: 43, name: "Corteiz x Air Max 95 \"Tour Yellow\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/corteiz-x-air-max-95-tour-yellow.jpg", status: "active", sales: 27 },
        { id: 44, name: "Air Max 95 \"Triple White\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-triple-white.jpg", status: "active", sales: 26 },
        { id: 45, name: "Corteiz x Air Max 95 \"Aegean Storm\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/corteiz-x-air-max-95-aegean-storm.jpg", status: "active", sales: 25 },
        { id: 46, name: "Air Max 95 'Neon'", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-neon.jpg", status: "active", sales: 24 },
        { id: 47, name: "Corteiz x Nike Air Max 95 \"Pink Beam\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/corteiz-x-nike-air-max-95-pink-beam.jpg", status: "active", sales: 23 },
        { id: 48, name: "Air Max 95 \"Dark Grey\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-dark-grey.png", status: "active", sales: 22 },
        { id: 49, name: "Corteiz x Air Max 95 \"Sequoia\"", category: "T\u00eanis Nike", price: 349.00, originalPrice: 389.00, image: "Produtos/Importados/corteiz-x-air-max-95-sequoia.jpg", status: "active", sales: 21 },
        { id: 50, name: "Air Max 95 \"Pink Foam\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-pink-foam.png", status: "active", sales: 20 },
        { id: 51, name: "Air Max 95 \"Grey Red\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-grey-red.jpg", status: "active", sales: 19 },
        { id: 52, name: "Air Max 95 \"Crystal Blue\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-95-crystal-blue.jpg", status: "active", sales: 18 },
        { id: 53, name: "Asics Gel NYC \"Beige/White/Grey\"", category: "Asics & Mizuno", price: 399.00, originalPrice: 0.00, image: "Produtos/Importados/asics-gel-nyc-beige-white-grey.jpg", status: "active", sales: 17 },
        { id: 54, name: "Asics Gel NYC \"Black/Grey\"", category: "Asics & Mizuno", price: 399.00, originalPrice: 0.00, image: "Produtos/Importados/asics-gel-nyc-black-grey.jpg", status: "active", sales: 16 },
        { id: 55, name: "Asics Gel NYC \"White/Blue\"", category: "Asics & Mizuno", price: 399.00, originalPrice: 0.00, image: "Produtos/Importados/asics-gel-nyc-white-blue.jpg", status: "active", sales: 15 },
        { id: 56, name: "Asics Gel NYC \"White/Silver\"", category: "Asics & Mizuno", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/asics-gel-nyc-white-silver.jpg", status: "active", sales: 14 },
        { id: 57, name: "Asics Gel NYC \"Blue/White\"", category: "Asics & Mizuno", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/asics-gel-nyc-blue-white.jpg", status: "active", sales: 13 },
        { id: 58, name: "Air Max DN \"ALL NIGHT\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-dn-all-night.jpg", status: "active", sales: 12 },
        { id: 59, name: "Air Max DN \"Triple Black\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-dn-triple-black.jpg", status: "active", sales: 11 },
        { id: 60, name: "Air Max DN \"WHITE\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-dn-white.jpg", status: "active", sales: 10 },
        { id: 61, name: "Air Max DN \"Black/White\"", category: "T\u00eanis Nike", price: 379.00, originalPrice: 0.00, image: "Produtos/Importados/air-max-dn-black-white.jpg", status: "active", sales: 9 },
        { id: 62, name: "Air Force 1 Low \"Triple White\"", category: "Air Force 1", price: 369.00, originalPrice: 409.00, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80", status: "active", sales: 56 },
        { id: 63, name: "Air Force 1 Low \"Triple Black\"", category: "Air Force 1", price: 369.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80", status: "active", sales: 47 },
        { id: 64, name: "Air Force 1 Mid \"White\"", category: "Air Force 1", price: 389.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80", status: "active", sales: 34 },
        { id: 65, name: "Jordan 4 \"Red Thunder\"", category: "Jordan", price: 399.00, originalPrice: 449.00, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80", status: "active", sales: 48 },
        { id: 66, name: "Jordan 4 \"Military Blue\"", category: "Jordan", price: 399.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80", status: "active", sales: 39 },
        { id: 67, name: "Jordan 11 \"Bred\"", category: "Jordan", price: 449.00, originalPrice: 499.00, image: "https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80", status: "active", sales: 62 },
        { id: 68, name: "Jordan 1 Low \"Grey Toe\"", category: "Jordan", price: 379.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80", status: "active", sales: 29 },
        { id: 69, name: "Mizuno Wave Prophecy", category: "Asics & Mizuno", price: 379.00, originalPrice: 429.00, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80", status: "active", sales: 11 },
        { id: 70, name: "Mizuno Wave Creation", category: "Asics & Mizuno", price: 349.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80", status: "active", sales: 9 },
        { id: 71, name: "Air Max 90 \"Triple White\"", category: "T\u00eanis Nike", price: 319.00, originalPrice: 359.00, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80", status: "active", sales: 43 },
        { id: 72, name: "Air Max 90 \"Triple Black\"", category: "T\u00eanis Nike", price: 319.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80", status: "active", sales: 37 },
        { id: 73, name: "Air Max 90 \"Infrared\"", category: "T\u00eanis Nike", price: 319.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", status: "active", sales: 29 },
        { id: 74, name: "Air Max DN8 \"Triple Black\"", category: "T\u00eanis Nike", price: 329.00, originalPrice: 369.00, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80", status: "active", sales: 26 },
        { id: 75, name: "Air Max DN8 \"Light Blue\"", category: "T\u00eanis Nike", price: 329.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80", status: "active", sales: 18 },
        { id: 76, name: "Jordan 3 \"Black Cement\"", category: "Jordan", price: 399.00, originalPrice: 449.00, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80", status: "active", sales: 35 },
        { id: 77, name: "Jordan 3 \"Fire Red\"", category: "Jordan", price: 399.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", status: "active", sales: 28 },
        { id: 78, name: "Jordan 11 \"Space Jam\"", category: "Jordan", price: 449.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80", status: "active", sales: 57 },
        { id: 79, name: "Jordan 1 Low \"Black Toe\"", category: "Jordan", price: 379.00, originalPrice: 419.00, image: "https://images.unsplash.com/photo-1556906781-9a414961a183?auto=format&fit=crop&w=800&q=80", status: "active", sales: 32 },
        { id: 80, name: "Nocta x Nike Glide \"Black\"", category: "Colabs", price: 349.00, originalPrice: 389.00, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80", status: "active", sales: 24 },
        { id: 81, name: "Skepta x Nike Tailwind V", category: "Colabs", price: 349.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80", status: "active", sales: 16 }
    ];

    const storedProducts = (() => { try { const d = localStorage.getItem('b10_products'); return d ? JSON.parse(d) : null; } catch { return null; } })();
    const PRODUCTS = (hasNewData && storedProducts) ? storedProducts : DEFAULT_PRODUCTS;

    const DEFAULT_REVIEWS = [
        { id: 1, author: 'Rafael C.',  location: 'São Paulo, SP',       initials: 'RC', stars: 5,   text: 'Qualidade absurda! O TN 3 chegou idêntico, acabamento impecável. Super recomendo!',       product: 'Air Max Plus TN 3 "Triple Black"', date: '2026-05-20' },
        { id: 2, author: 'Mariana S.', location: 'Rio de Janeiro, RJ',  initials: 'MS', stars: 5,   text: 'Entrega super rápida e o atendimento pelo WhatsApp foi incrível. O AF1 chegou perfeito!', product: 'Air Force 1 Low "Triple White"',    date: '2026-05-15' },
        { id: 3, author: 'Lucas P.',   location: 'Belo Horizonte, MG',  initials: 'LP', stars: 4.5, text: 'Melhor custo-benefício. Jordan 4 material premium, já comprei 2 pares!',                 product: 'Jordan 4 "Red Thunder"',           date: '2026-05-10' }
    ];
    const storedReviews = (() => { try { const d = localStorage.getItem('b10_reviews'); return d ? JSON.parse(d) : null; } catch { return null; } })();
    const REVIEWS = (hasNewData && storedReviews) ? storedReviews : DEFAULT_REVIEWS;

    // Get product from URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) {
        document.querySelector('.pdp-section').innerHTML = '<div class="container" style="padding:80px 0;text-align:center"><h2>Produto não encontrado</h2><p>O produto que você procura não existe ou foi removido.</p><a href="todos-produtos.html" class="btn btn-primary" style="margin-top:20px">Ver Todos os Produtos</a></div>';
        return;
    }

    let selectedSize = '41';
    let quantity = 1;

    // Fill page
    document.title = `Filho e Pai | Store: ${product.name}`;
    const productPageTitle = document.title;
    const setStoreTitle = (name) => {
        document.title = `Filho e Pai | Store: ${name}`;
    };
    const productType = 'Tênis importado premium';
    document.querySelector('meta[name="description"]')?.setAttribute('content', `${product.name} - ${productType}. R$ ${product.price.toFixed(2).replace('.', ',')}. Compre na Filho e Pai.`);

    const fmt = (v) => `R$ ${v.toFixed(2).replace('.', ',')}`;
    const pdpName = document.getElementById('pdpName');
    const pdpCategory = document.getElementById('pdpCategory');
    const pdpMainImage = document.getElementById('pdpMainImage');
    const pdpPriceCurrent = document.getElementById('pdpPriceCurrent');
    const pdpPriceOld = document.getElementById('pdpPriceOld');
    const pdpDiscount = document.getElementById('pdpDiscount');
    const pdpPixPrice = document.getElementById('pdpPixPrice');
    const pdpInstallment = document.getElementById('pdpInstallment');
    const pdpBadge = document.getElementById('pdpBadge');
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');

    pdpName.textContent = product.name;
    pdpCategory.textContent = product.category;
    pdpMainImage.src = product.image;
    pdpMainImage.alt = product.name;
    breadcrumbCurrent.textContent = product.name;

    pdpPriceCurrent.textContent = fmt(product.price);
    pdpPixPrice.textContent = fmt(product.price * (1 - pixDiscount / 100));
    pdpInstallment.textContent = `${maxInstallments}x de ${fmt(product.price / maxInstallments)}`;

    if (product.originalPrice > 0) {
        pdpPriceOld.textContent = fmt(product.originalPrice);
        pdpPriceOld.style.display = '';
        const disc = Math.round((1 - product.price / product.originalPrice) * 100);
        pdpDiscount.textContent = `-${disc}%`;
        pdpDiscount.style.display = '';
        pdpBadge.textContent = `-${disc}%`;
        pdpBadge.className = 'pdp-badge sale';
    } else {
        pdpPriceOld.style.display = 'none';
        pdpDiscount.style.display = 'none';
        pdpBadge.textContent = 'Novo';
        pdpBadge.className = 'pdp-badge new';
    }

    // Thumbs — usa images[] quando disponível
    const thumbs = document.getElementById('pdpThumbs');
    const imgList = (product.images && product.images.length > 1)
        ? product.images
        : [product.image, product.image, product.image];
    thumbs.innerHTML = imgList.map((src, i) =>
        `<div class="pdp-thumb${i === 0 ? ' active' : ''}"><img src="${src}" alt="${product.name} - foto ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}"></div>`
    ).join('');
    thumbs.querySelectorAll('.pdp-thumb').forEach(t => {
        t.addEventListener('click', () => {
            thumbs.querySelectorAll('.pdp-thumb').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            pdpMainImage.src = t.querySelector('img').src;
        });
    });

    // Size selector
    document.querySelectorAll('.pdp-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
            updateWhatsAppLink();
        });
    });

    // Quantity
    const qtyInput = document.getElementById('pdpQty');
    document.getElementById('qtyMinus')?.addEventListener('click', () => {
        quantity = Math.max(1, quantity - 1);
        qtyInput.value = quantity;
        updateWhatsAppLink();
    });
    document.getElementById('qtyPlus')?.addEventListener('click', () => {
        quantity = Math.min(10, quantity + 1);
        qtyInput.value = quantity;
        updateWhatsAppLink();
    });

    // Shipping calculator
    const cepInput = document.getElementById('cepInput');
    cepInput?.addEventListener('input', () => {
        let v = cepInput.value.replace(/\D/g, '');
        if (v.length > 5) v = v.substring(0, 5) + '-' + v.substring(5, 8);
        cepInput.value = v;
        updateWhatsAppLink();
    });

    document.getElementById('calcShipping')?.addEventListener('click', () => {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length < 8) { alert('CEP inválido'); return; }

        const result = document.getElementById('shippingResult');
        result.style.display = 'block';

        // Simulate shipping based on region
        const region = parseInt(cep.charAt(0));
        const basePac = 19.90 + (region > 3 ? 10 : 0);
        const baseSedex = 34.90 + (region > 3 ? 15 : 0);

        document.getElementById('shippingPac').textContent = fmt(basePac);
        document.getElementById('shippingSedex').textContent = fmt(baseSedex);

        if (product.price * quantity >= 299.90) {
            document.getElementById('shippingFree').style.display = 'flex';
        }
    });

    // Add to cart
    document.getElementById('pdpAddCart')?.addEventListener('click', () => {
        let cartItems = JSON.parse(localStorage.getItem('b10_cart') || '[]');

        // Check if same product+size already in cart
        const existing = cartItems.find(item => item.id === product.id && item.size === selectedSize);
        if (existing) {
            existing.qty = Math.min(10, existing.qty + quantity);
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.image,
                image: product.image,
                size: selectedSize,
                qty: quantity
            });
        }

        localStorage.setItem('b10_cart', JSON.stringify(cartItems));

        // Update badge
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);

        // Feedback
        const btn = document.getElementById('pdpAddCart');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        btn.style.background = '#10b981';
        setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 2000);
    });

    // WhatsApp link (dynamic - updates with size & quantity)
    function updateWhatsAppLink() {
        const whatsBtn = document.getElementById('pdpWhatsApp');
        if (!whatsBtn) return;
        const cepVal = document.getElementById('cepInput')?.value || '';
        let msg = `Olá! 😊 Tenho interesse em:\n\n`;
        msg += `⚽ *${product.name}*\n`;
        msg += `📏 Tamanho: *${selectedSize}*\n`;
        msg += `🔢 Quantidade: *${quantity}*\n`;
        msg += `💰 Valor unitário: ${fmt(product.price)}\n`;
        if (quantity > 1) msg += `💵 Total: ${fmt(product.price * quantity)}\n`;
        msg += `💚 Total no PIX (${pixDiscount}% OFF): ${fmt(product.price * quantity * (1 - pixDiscount / 100))}\n`;
        if (cepVal.replace(/\D/g, '').length >= 5) msg += `📍 CEP: ${cepVal}\n`;
        msg += `\nPodem me ajudar a finalizar?`;
        whatsBtn.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    }
    updateWhatsAppLink();

    // Zoom
    document.getElementById('pdpZoom')?.addEventListener('click', () => {
        const modal = document.getElementById('zoomModal');
        document.getElementById('zoomImage').src = pdpMainImage.src;
        setStoreTitle('Zoom do Produto');
        modal.classList.add('active');
    });
    function closeZoomModal() {
        document.getElementById('zoomModal').classList.remove('active');
        document.title = productPageTitle;
    }
    document.getElementById('zoomClose')?.addEventListener('click', closeZoomModal);
    document.getElementById('zoomOverlay')?.addEventListener('click', closeZoomModal);

    // Tabs
    document.querySelectorAll('.pdp-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pdp-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.pdp-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab)?.classList.add('active');
        });
    });

    // Reviews for this product
    const productReviews = REVIEWS.filter(r => r.product === product.name);
    const tabCount = document.getElementById('tabReviewCount');
    if (tabCount) tabCount.textContent = productReviews.length;

    const reviewAvg = document.getElementById('reviewAvg');
    const reviewTotal = document.getElementById('reviewTotalText');
    if (productReviews.length > 0) {
        const avg = (productReviews.reduce((s, r) => s + r.stars, 0) / productReviews.length).toFixed(1);
        if (reviewAvg) reviewAvg.textContent = avg;
        if (reviewTotal) reviewTotal.textContent = `${productReviews.length} avaliação(ões)`;
    }

    const reviewsList = document.getElementById('pdpReviewsList');
    if (reviewsList) {
        if (productReviews.length === 0) {
            reviewsList.innerHTML = '<p class="no-reviews">Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>';
        } else {
            reviewsList.innerHTML = productReviews.map(r => `
                <div class="pdp-review-item">
                    <div class="review-item-header">
                        <div class="review-item-avatar">${r.initials}</div>
                        <div>
                            <strong>${r.author}</strong>
                            <span>${r.location} • ${new Date(r.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <span class="verified-badge"><i class="fas fa-check-circle"></i> Verificado</span>
                    </div>
                    <div class="review-item-stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(r.stars))}${r.stars % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}</div>
                    <p>${r.text}</p>
                </div>
            `).join('');
        }
    }

    // Write review modal
    document.getElementById('writeReviewBtn')?.addEventListener('click', () => {
        setStoreTitle('Escrever Avaliação');
        document.getElementById('reviewFormModal').style.display = 'flex';
    });
    function closeReviewModal() {
        document.getElementById('reviewFormModal').style.display = 'none';
        document.title = productPageTitle;
    }
    document.getElementById('rfmClose')?.addEventListener('click', closeReviewModal);
    document.getElementById('rfmOverlay')?.addEventListener('click', closeReviewModal);

    // Star rating in review form
    let rfRating = 5;
    document.querySelectorAll('#rfStars i').forEach(star => {
        star.addEventListener('click', () => {
            rfRating = parseInt(star.dataset.val);
            document.querySelectorAll('#rfStars i').forEach((s, i) => {
                s.classList.toggle('active', i < rfRating);
            });
        });
    });

    document.getElementById('reviewForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('rfName').value;
        const city = document.getElementById('rfCity').value;
        const text = document.getElementById('rfText').value;
        const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

        let reviews = JSON.parse(localStorage.getItem('b10_reviews') || '[]');
        const newId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1;

        reviews.push({
            id: newId, author: name, location: city, initials, stars: rfRating,
            text, product: product.name, date: new Date().toISOString().split('T')[0]
        });
        localStorage.setItem('b10_reviews', JSON.stringify(reviews));

        closeReviewModal();
        alert('Avaliação enviada com sucesso! Obrigado pelo seu feedback.');
        location.reload();
    });

    // Related products
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
    const relGrid = document.getElementById('relatedProducts');
    if (relGrid && related.length > 0) {
        relGrid.innerHTML = related.map(p => `
            <div class="product-card">
                <div class="product-image-wrapper">
                    ${p.originalPrice > 0 ? `<span class="product-badge sale">-${Math.round((1 - p.price / p.originalPrice) * 100)}%</span>` : '<span class="product-badge new">Novo</span>'}
                    <a href="produto.html?id=${p.id}"><img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy"></a>
                    <div class="product-sizes"><span>38</span><span>39</span><span>40</span><span>41</span><span>42</span><span>43</span></div>
                </div>
                <div class="product-info">
                    <a href="#" class="product-category-link">${p.category}</a>
                    <h3 class="product-name"><a href="produto.html?id=${p.id}">${p.name}</a></h3>
                    <div class="product-prices">
                        ${p.originalPrice > 0 ? `<span class="price-old">${fmt(p.originalPrice)}</span>` : ''}
                        <span class="price-current">${fmt(p.price)}</span>
                    </div>
                    <div class="product-payment-info">
                        <span class="product-pix"><i class="fab fa-pix"></i> ${fmt(p.price * (1 - pixDiscount / 100))} <em>no PIX (${pixDiscount}% OFF)</em></span>
                    </div>
                    <a href="produto.html?id=${p.id}" class="add-to-cart-btn"><i class="fas fa-eye"></i> Ver Produto</a>
                </div>
            </div>
        `).join('');
    }

    // Cookie consent
    if (!localStorage.getItem('b10_cookie_consent')) {
        document.getElementById('cookieConsent')?.classList.add('show');
    }
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
        localStorage.setItem('b10_cookie_consent', 'accepted');
        document.getElementById('cookieConsent')?.classList.remove('show');
    });
    document.getElementById('cookieReject')?.addEventListener('click', () => {
        localStorage.setItem('b10_cookie_consent', 'rejected');
        document.getElementById('cookieConsent')?.classList.remove('show');
    });
});
