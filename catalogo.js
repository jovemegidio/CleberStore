/* ========================================
   CLEBER STORE - CATÁLOGO DINÂMICO
   Carrega produtos do localStorage (admin)
   e renderiza nas páginas de catálogo
   ======================================== */

(function () {
    'use strict';

    const DATA_VERSION = 'fp_v2';

    // ==========================================
    // DEFAULT PRODUCTS — Tênis importados
    // ==========================================
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
        { id: 81, name: "Skepta x Nike Tailwind V", category: "Colabs", price: 349.00, originalPrice: 0.00, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80", status: "active", sales: 16 },
        { id: 82, name: "Adidas ADI2000", category: "Adidas", price: 190.00, originalPrice: 0.00, image: "Produtos/ADI2000/1.jpg", images: ["Produtos/ADI2000/1.jpg", "Produtos/ADI2000/2.jpg", "Produtos/ADI2000/3.jpg", "Produtos/ADI2000/4.jpg", "Produtos/ADI2000/5.jpg", "Produtos/ADI2000/6.jpg", "Produtos/ADI2000/7.jpg", "Produtos/ADI2000/8.jpg"], status: "active", sales: 8 },
        { id: 83, name: "Mizuno Pro 8", category: "Asics & Mizuno", price: 330.00, originalPrice: 0.00, image: "Produtos/PRO8/1.jpg", images: ["Produtos/PRO8/1.jpg", "Produtos/PRO8/2.jpg", "Produtos/PRO8/3.jpg", "Produtos/PRO8/4.jpg"], status: "active", sales: 7 },
        { id: 84, name: "Mizuno Pro 7", category: "Asics & Mizuno", price: 360.00, originalPrice: 0.00, image: "Produtos/PRO%207/4.jpg", status: "active", sales: 6 },
        { id: 85, name: "Mizuno Pro 6", category: "Asics & Mizuno", price: 360.00, originalPrice: 0.00, image: "Produtos/PRO6/1.jpg", status: "active", sales: 5 }
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
            if (!version || version !== DATA_VERSION || !data) return DEFAULT_PRODUCTS.filter(p => p.status !== 'inactive');
            const parsed = JSON.parse(data);
            if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_PRODUCTS.filter(p => p.status !== 'inactive');
            return parsed.filter(p => p.status !== 'inactive');
        } catch { return DEFAULT_PRODUCTS.filter(p => p.status !== 'inactive'); }
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

    function normalizeText(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }

    function getProductSearchText(product) {
        const values = [
            product?.name,
            product?.category,
            product?.type,
            product?.collection,
            Array.isArray(product?.tags) ? product.tags.join(' ') : product?.tags
        ];
        return normalizeText(values.filter(Boolean).join(' '));
    }

    function getProductKind(product) {
        const text = getProductSearchText(product);

        if (/(selecao|selecoes|camisa de selecao|brasil|argentina|portugal|italia|alemanha|franca|espanha|mexico|japao|coreia|uruguai|colombia|chile|peru|inglaterra|croacia|holanda|marrocos)/.test(text)) {
            return 'selecoes';
        }

        if (/(camisa|camisas|clube|clubes|time|times|nacional|nacionais|internacional|internacionais|flamengo|palmeiras|corinthians|sao paulo|santos|gremio|vasco|fluminense|botafogo|cruzeiro|atletico|barcelona|real madrid|psg|manchester|liverpool|chelsea|arsenal|bayern|milan|juventus|borussia|benfica|porto|sporting)/.test(text)) {
            return 'clubes';
        }

        return 'tenis';
    }

    function getProductGroup(product) {
        const text = getProductSearchText(product);
        const kind = getProductKind(product);

        if (kind === 'selecoes') return 'selecoes';
        if (kind !== 'clubes') return 'tenis';

        if (/(nacional|nacionais|brasileirao|brasileiro|flamengo|palmeiras|corinthians|sao paulo|santos|gremio|vasco|fluminense|botafogo|cruzeiro|atletico mineiro|internacional)/.test(text)) {
            return 'nacionais';
        }

        return 'internacionais';
    }

    function getProductRegion(product) {
        const text = getProductSearchText(product);

        if (/(brasil|argentina|mexico|uruguai|colombia|chile|peru|eua|usa|canada|america|americas)/.test(text)) {
            return 'americas';
        }

        if (/(portugal|italia|alemanha|franca|espanha|inglaterra|croacia|holanda|belgica|suica|europa)/.test(text)) {
            return 'europa';
        }

        if (/(japao|coreia|china|asia)/.test(text)) {
            return 'asia';
        }

        return '';
    }

    function getCategoryFilter(cat) {
        if (!cat) return 'nike';
        const lower = normalizeText(cat);
        if (lower.includes('adidas')) return 'adidas';
        if (lower.includes('jordan')) return 'jordan';
        if (lower.includes('air force')) return 'airforce';
        if (lower.includes('asics') || lower.includes('mizuno')) return 'outros';
        if (lower.includes('colab')) return 'colabs';
        if (lower.includes('camisa') || lower.includes('clube')) return 'camisas';
        if (lower.includes('selecao')) return 'selecoes';
        return 'nike';
    }

    function getCategoryLabel(cat) {
        if (!cat) return 'Tênis Nike';
        const lower = cat.toLowerCase();
        if (lower.includes('adidas')) return 'Adidas';
        if (lower.includes('jordan')) return 'Jordan';
        if (lower.includes('air force')) return 'Air Force 1';
        if (lower.includes('asics') || lower.includes('mizuno')) return 'Asics & Mizuno';
        if (lower.includes('colab')) return 'Colabs';
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
        const kindFilter = getProductKind(product);
        const groupFilter = getProductGroup(product);
        const regionFilter = getProductRegion(product);

        const isSoldOut = product.status === 'sold_out';
        let badges = '';
        if (isSoldOut) {
            badges = '<span class="product-badge badge-soldout">Esgotado</span>';
        } else if (discount > 0) {
            badges = `<span class="product-badge badge-sale">-${discount}%</span>`;
        } else if (product.isNew) {
            badges = '<span class="product-badge badge-new">Novo</span>';
        } else if (product.sales >= 40) {
            badges = '<span class="product-badge badge-fire"><i class="fas fa-fire"></i> Hot</span>';
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

        const dataAttrs = ` data-category="${catFilter}" data-kind="${kindFilter}" data-group="${groupFilter}" data-region="${regionFilter}"`;

        return `
            <div class="product-card${isSoldOut ? ' sold-out' : ''}"${dataAttrs} data-price="${product.price}" data-name="${product.name}">
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
                    <span class="product-installment">2x sem juros · até 5x c/ taxa</span>
                    ${isSoldOut
                        ? `<span class="btn-add-cart btn-soldout" style="pointer-events:none;opacity:0.6;background:#94a3b8"><i class="fas fa-ban"></i> Esgotado</span>`
                        : `<a href="produto.html?id=${product.id}" class="btn-add-cart"><i class="fas fa-eye"></i> Ver Produto</a>`}
                </div>
            </div>`;
    }

    function renderHomeCard(product, options = {}) {
        const discount = calcDiscount(product.originalPrice, product.price);
        const catFilter = getCategoryFilter(product.category);
        const kindFilter = getProductKind(product);
        const groupFilter = getProductGroup(product);
        const regionFilter = getProductRegion(product);

        const isSoldOut = product.status === 'sold_out';
        let badge = '';
        if (isSoldOut) {
            badge = '<span class="product-badge soldout">Esgotado</span>';
        } else if (options.badge) {
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
                <div class="product-card${isSoldOut ? ' sold-out' : ''}" data-category="${catFilter}" data-kind="${kindFilter}" data-group="${groupFilter}" data-region="${regionFilter}">
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
                            <span class="product-installment"><i class="far fa-credit-card"></i> 2x sem juros · até 5x c/ taxa</span>
                            <span class="product-pix"><i class="fab fa-pix"></i> ${calcPix(product.price)} <em>no PIX (${pixDiscount}% OFF)</em></span>
                        </div>
                        ${isSoldOut
                            ? `<button class="add-to-cart-btn" disabled style="opacity:0.6;background:#94a3b8;cursor:not-allowed"><i class="fas fa-ban"></i> Esgotado</button>`
                            : `<button class="add-to-cart-btn"><i class="fas fa-shopping-bag"></i> Adicionar à Sacola</button>`}
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

    function renderSelecoes() {
        const grid = document.querySelector('[data-catalog="selecoes"]');
        if (!grid) return;

        const products = getProducts().filter(p => getProductKind(p) === 'selecoes');
        grid.innerHTML = products.length
            ? products.map(p => renderCatalogCard(p)).join('')
            : '<div class="empty-state">Nenhuma camisa de seleção encontrada.</div>';

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = products.length;

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

    function renderTodosTenis() {
        const grid = document.getElementById('tenisCatalogGrid');
        if (!grid) return;

        const products = getProducts().filter(p => getProductKind(p) === 'tenis');
        grid.innerHTML = products.map(p => renderCatalogCard(p)).join('');

        const countEl = document.getElementById('tenisCount');
        if (countEl) countEl.textContent = products.length;

        const quickNavItems = document.querySelectorAll('.quick-nav-item[data-filter]');
        quickNavItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                quickNavItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                applyGridFilter(grid, countEl, item.dataset.filter);
            });
        });

        const sortSelect = document.getElementById('tenisSort');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                const cards = Array.from(grid.querySelectorAll('.product-card')).filter(c => c.style.display !== 'none');
                cards.sort((a, b) => {
                    switch (sortSelect.value) {
                        case 'menor-preco': return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
                        case 'maior-preco': return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
                        case 'nome-az': return a.dataset.name?.localeCompare(b.dataset.name);
                        default: return 0;
                    }
                });
                cards.forEach(c => grid.appendChild(c));
            });
        }
    }

    function renderCamisasInternacionais() {
        renderCamisasPorGrupo('camisas-internacionais', 'internacionais');
    }

    function renderCamisasNacionais() {
        renderCamisasPorGrupo('camisas-nacionais', 'nacionais');
    }

    function renderCamisasPorGrupo(catalogName, group) {
        const grid = document.querySelector(`[data-catalog="${catalogName}"]`);
        if (!grid) return;

        const products = getProducts().filter(p => getProductGroup(p) === group);
        grid.innerHTML = products.length
            ? products.map(p => renderCatalogCard(p)).join('')
            : '<div class="empty-state">Nenhum produto encontrado nesta categoria.</div>';

        const countEl = grid.closest('.catalog-section')?.querySelector('.catalog-count span');
        if (countEl) countEl.textContent = products.length;

        setupRegionFilters(grid, countEl);
    }

    function renderHomeDestaques() {
        const grid = document.getElementById('destaquesGrid');
        if (!grid) return;

        const products = getProducts();
        const activeFilter = document.querySelector('.section-tabs .tab-btn.active')?.dataset.filter || 'all';
        renderHomeDestaquesByFilter(grid, products, activeFilter);
        setupHomeDestaquesTabs(grid, products);
    }

    function renderHomeDestaquesByFilter(grid, products, filter) {
        const filtered = filter === 'all'
            ? products
            : products.filter(product => getProductKind(product) === filter || getProductGroup(product) === filter);
        const top = [...filtered].sort((a, b) => (b.sales || 0) - (a.sales || 0)).slice(0, 4);

        grid.innerHTML = top.length
            ? top.map(p => renderHomeCard(p)).join('')
            : '<div class="empty-state">Nenhum produto encontrado nesta categoria.</div>';

        const seeAll = document.querySelector('#destaques .see-all-btn');
        if (seeAll) {
            const links = {
                all: 'todos-produtos.html',
                clubes: 'todos-produtos.html?filter=clubes',
                selecoes: 'camisas-selecao.html',
                tenis: 'todos-tenis.html'
            };
            seeAll.href = links[filter] || links.all;
        }
    }

    function setupHomeDestaquesTabs(grid, products) {
        const tabs = document.querySelectorAll('#destaques .tab-btn');
        if (!tabs.length || grid.dataset.tabsReady === 'true') return;
        grid.dataset.tabsReady = 'true';

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderHomeDestaquesByFilter(grid, products, tab.dataset.filter || 'all');
            });
        });
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
                applyGridFilter(grid, countEl, chip.dataset.filter || 'all');
            });
        });

        applyInitialUrlFilter(filterChips, grid, countEl);

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
                applyGridFilter(grid, countEl, chip.dataset.filter || 'all');
            });
        });

        applyInitialUrlFilter(filterChips, grid, countEl);
    }

    function applyInitialUrlFilter(filterChips, grid, countEl) {
        const params = new URLSearchParams(window.location.search);
        const initialFilter = params.get('filter');
        if (!initialFilter) return;

        const chip = Array.from(filterChips).find(c => c.dataset.filter === initialFilter);
        if (!chip) return;

        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        applyGridFilter(grid, countEl, initialFilter);
    }

    function applyGridFilter(grid, countEl, filter) {
        let visible = 0;
        grid.querySelectorAll('.product-card').forEach(card => {
            if (cardMatchesFilter(card, filter)) {
                card.style.display = '';
                visible++;
            } else {
                card.style.display = 'none';
            }
        });
        if (countEl) countEl.textContent = visible;
    }

    function cardMatchesFilter(card, filter) {
        return filter === 'all'
            || card.dataset.category === filter
            || card.dataset.kind === filter
            || card.dataset.group === filter
            || card.dataset.region === filter;
    }

    // ==========================================
    // INIT
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        renderTodosTenis();
        renderTodosProdutos();
        renderLancamentos();
        renderSelecoes();
        renderModeloJogador();
        renderModeloTorcedor();
        renderPromocoes();
        renderCamisasInternacionais();
        renderCamisasNacionais();
        renderHomeDestaques();
        renderHomeNovidades();
        renderHomeNovidades2();
        renderHomePromocoes();
        renderHomeTestimonials();
    });

})();
