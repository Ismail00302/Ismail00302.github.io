// ==========================
// 1. ДАННЫЕ ТОВАРОВ
// ==========================

const products = [
    // SCHOOL
    { id: 1,  title: "Ручка синяя", category: "school",  price: 40,  desc: "Классическая гелевая ручка для школы.", image: "img/pen.jpg" },
    { id: 3,  title: "Тетрадь 48 листов", category: "school", price: 60,  desc: "Плотная бумага, подойдёт для уроков.", image: "img/notebook.jpg" },
    { id: 5,  title: "Дневник школьный", category: "school", price: 150, desc: "Стандартный дневник для учащихся.", image: "img/diary.jpg" },

    // STUDENT
    { id: 11, title: "Маркер текстовыделитель", category: "student", price: 90,  desc: "Выделение важной информации.", image: "img/highlighter1.jpg" },
    { id: 12, title: "Блокнот A5", category: "student", price: 130, desc: "Идеален для конспектов.", image: "img/notepad1.jpg" },
    { id: 13, title: "Ежедневник недатированный", category: "student", price: 320, desc: "Планирование и тайм-менеджмент.", image: "img/daily.jpg" },
    { id: 14, title: "Папка на кнопке", category: "student", price: 70,  desc: "Для хранения документов.", image: "img/folder1.jpg" },
    { id: 15, title: "Файлы A4 (100 шт)", category: "student", price: 180, desc: "Прозрачные файлы для бумаг.", image: "img/files.jpg" },
    { id: 16, title: "Скотч прозрачный", category: "student", price: 55,  desc: "Ширина 18 мм.", image: "img/tape.jpg" },
    { id: 17, title: "Клей-карандаш", category: "student", price: 50,  desc: "Удобный формат для учебы.", image: "img/glue.jpg" },
    { id: 18, title: "Корректор лента", category: "student", price: 70,  desc: "Исправление записей без следов.", image: "img/correct.jpg" },

    // OFFICE
    { id: 19, title: "Бумага А4 (500 листов)", category: "office", price: 430, desc: "Классическая офисная бумага.", image: "img/paper1.jpg" },
    { id: 20, title: "Папка-регистратор", category: "office", price: 160, desc: "Для документов и отчётов.", image: "img/binder.jpg" },
    { id: 21, title: "Степлер металлический", category: "office", price: 250, desc: "Надёжный корпус, №10.", image: "img/stapler.jpg" },
    { id: 22, title: "Скобы №10 (1000 шт)", category: "office", price: 60,  desc: "Для степлера.", image: "img/staples.jpg" },
    { id: 23, title: "Калькулятор офисный", category: "office", price: 380, desc: "Большой экран, удобные кнопки.", image: "img/calculator.jpg" },
    { id: 24, title: "Блок для записей 9×9×9", category: "office", price: 110, desc: "Белый бумажный блок.", image: "img/notes.jpg" },
    { id: 25, title: "Подставка для канцтоваров", category: "office", price: 240, desc: "Удобно для рабочего стола.", image: "img/organizer.jpg" },

    // ARTIST
    { id: 26, title: "Фломастеры (12 цветов)", category: "artist", price: 250, desc: "Яркие цвета.", image: "img/markers1.jpg" },
    { id: 27, title: "Альбом для рисования 32 л", category: "artist", price: 120, desc: "Плотные листы.", image: "img/album1.jpg" },
    { id: 28, title: "Краски акварельные", category: "artist", price: 180, desc: "12 цветов.", image: "img/watercolor.jpg" },
    { id: 29, title: "Гуашь художественная", category: "artist", price: 220, desc: "Для плотных штрихов.", image: "img/gouache.jpg" },
    { id: 30, title: "Кисточки набор 6 шт", category: "artist", price: 150, desc: "Разные размеры.", image: "img/brushes.jpg" },
    { id: 31, title: "Цветные карандаши 18 шт", category: "artist", price: 180, desc: "Насыщенные цвета.", image: "img/pencils.jpg" },

    // DESIGN
    { id: 32, title: "Скетчбук А5", category: "design", price: 260, desc: "Плотные листы для скетчей.", image: "img/sketchbook.jpg" },
    { id: 33, title: "Тонкий лайнер 0.3 мм", category: "design", price: 95,  desc: "Для чертежей и скетчей.", image: "img/liner.jpg" },
    { id: 34, title: "Маркер PRO чёрный", category: "design", price: 150, desc: "Толстое перо, глубокий цвет.", image: "img/promarker.jpg" },
    { id: 35, title: "Набор стикеров дизайнерских", category: "design", price: 180, desc: "Для декора и макетов.", image: "img/design_stickers.jpg" },
    { id: 36, title: "Планшет для рисования А4", category: "design", price: 350, desc: "Жёсткая поверхность.", image: "img/board.jpg" },

    // MATH
    { id: 37, title: "Транспортир прозрачный", category: "math", price: 35,  desc: "Для построений и измерений.", image: "img/protractor.jpg" },
    { id: 38, title: "Угольник 45°", category: "math", price: 55,  desc: "Прозрачный, антискользящий.", image: "img/set_square.jpg" },
    { id: 39, title: "Компас металлический", category: "math", price: 125, desc: "Для школьных и вузовских чертежей.", image: "img/compass.jpg" },
    { id: 40, title: "Линейка 30 см", category: "math", price: 55,  desc: "Удобна для большого формата.", image: "img/ruler_big.jpg" },

    // EXAM
    { id: 41, title: "Набор «Подготовка к ЕГЭ»", category: "exam", price: 350, desc: "Блокнот, маркер, стикеры.", image: "img/exam_set.jpg" },
    { id: 42, title: "Органайзер для карточек", category: "exam", price: 140, desc: "Удобно для терминов и дат.", image: "img/cards_box.jpg" },
    { id: 43, title: "Блок карточек (100 шт)", category: "exam", price: 130, desc: "Повторение информации.", image: "img/cards.jpg" },

    // PRO
    { id: 45, title: "Набор Pro Writer", category: "pro", price: 450, desc: "Мягкая гелевая ручка + блокнот.", image: "img/pro_writer.jpg" },
    { id: 46, title: "Премиум-органайзер", category: "pro", price: 550, desc: "Кожаный чехол, отделения под всё.", image: "img/pro_organizer.jpg" },
    { id: 47, title: "Набор «Офис PRO»", category: "pro", price: 750, desc: "Бумага, ручки, папки.", image: "img/pro_office.jpg" },
    { id: 48, title: "Набор художника PRO", category: "pro", price: 680, desc: "Для профессиональных работ.", image: "img/pro_artist.jpg" },
    { id: 49, title: "Набор дизайнера PRO", category: "pro", price: 840, desc: "Лайнеры, скетчбук, маркеры.", image: "img/pro_design.jpg" },
    { id: 50, title: "Набор архитектора", category: "pro", price: 920, desc: "Угольники, компас, лайнеры.", image: "img/pro_arch.jpg" },
    { id: 51, title: "Карандаш чёрнографитный HB", category: "school", price: 25, desc: "Твёрдо-мягкий карандаш.", image: "img/pencil_hb.jpg" },

    // Дополнительные
    { id: 52, title: "Набор гелевых ручек (6 шт)", category: "student", price: 180, desc: "Шесть ярких гелевых ручек.", image: "img/gel_pens.jpg" },
    { id: 53, title: "Таблица умножения", category: "school", price: 35, desc: "Плотная карточка.", image: "img/multiplication.jpg" },
    { id: 54, title: "Маркер перманентный", category: "office", price: 70, desc: "Для любых поверхностей.", image: "img/permanent_marker.jpg" },
    { id: 55, title: "Степлер большой (№24)", category: "office", price: 320, desc: "Усиленный степлер.", image: "img/stapler_big.jpg" },
    { id: 56, title: "Корректирующая жидкость", category: "student", price: 60, desc: "Классический корректор.", image: "img/liquid_corrector.jpg" },
    { id: 57, title: "Копировальная бумага (10 листов)", category: "office", price: 85, desc: "Для дублирования документов.", image: "img/carbon_paper.jpg" },
    { id: 58, title: "Папка-уголок (5 шт)", category: "office", price: 90, desc: "Прозрачные папки-уголки.", image: "img/folder_set.jpg" },
    { id: 59, title: "Цветная бумага, 16 листов", category: "artist", price: 70, desc: "Яркая бумага для творчества.", image: "img/color_paper.jpg" },
    { id: 60, title: "Клей ПВА 65 мл", category: "school", price: 55, desc: "Для аппликаций и бумаги.", image: "img/glue_pva.jpg" },
    { id: 61, title: "Набор стикеров для учёбы", category: "student", price: 95, desc: "Цветные метки и ярлыки.", image: "img/student_stickers.jpg" },
    { id: 62, title: "Ручка Premium", category: "pro", price: 260, desc: "Ручка с металлическим корпусом.", image: "img/premium_pen.jpg" },
    { id: 63, title: "Набор кистей PRO", category: "artist", price: 360, desc: "Кисти из качественного ворса.", image: "img/brush_set.jpg" },
    { id: 64, title: "Циркуль профессиональный", category: "math", price: 210, desc: "Точный металлический циркуль.", image: "img/pro_compass.jpg" },
    { id: 65, title: "Графический лайнер 0.1 мм", category: "design", price: 110, desc: "Для тончайших линий.", image: "img/liner01.jpg" },
    { id: 66, title: "Калька для черчения А4", category: "math", price: 130, desc: "Плотная калька для схем.", image: "img/tracing.jpg" },
    { id: 67, title: "Папка на резинке картонная", category: "office", price: 95, desc: "Для разноса документов.", image: "img/paper_folder.jpg" },
    { id: 68, title: "Набор текстовых маркеров (4 цвета)", category: "student", price: 180, desc: "Для выделения важного.", image: "img/highlighters4.jpg" },
    { id: 69, title: "Чёрная тетрадь в точку (dot-grid)", category: "design", price: 190, desc: "Для bullet journal.", image: "img/dot_notebook.jpg" },
    { id: 70, title: "Пакет подарочный", category: "office", price: 60, desc: "Пакет для подарка.", image: "img/giftbag.jpg" }
];


// ==========================
// 2. ГЛОБАЛЬНОЕ СОСТОЯНИЕ
// ==========================

let cart = [];
let favorites = JSON.parse(localStorage.getItem("tetrabum_favorites") || "[]");

let currentCategory = "all";
let filteredProducts = [...products];

let currentPage = 1;
const ITEMS_PER_PAGE = 12;

let priceMin = null;
let priceMax = null;

let pmProduct = null;     // текущий товар в модалке
let viewHistory = [];     // история просмотров для персональных рекомендаций


// ==========================
// 3. УТИЛИТЫ
// ==========================

function getProductById(id) {
    return products.find(p => p.id === id);
}

function formatPrice(num) {
    return num + " ₽";
}

function translateCategory(cat) {
    switch (cat) {
        case "school":  return "Школа";
        case "student": return "Студенты";
        case "office":  return "Офис";
        case "artist":  return "Творчество";
        case "design":  return "Дизайн";
        case "math":    return "Чертёж и математика";
        case "exam":    return "Экзамены";
        case "pro":     return "Профессиональные наборы";
        default:        return "Разное";
    }
}

function generateAutoDescription(product) {
    const name = product.title.toLowerCase();

    if (name.includes("ручка"))      return "Удобная ручка с мягким письмом, подходит для длительной работы.";
    if (name.includes("тетрад"))     return "Тетрадь с плотной бумагой, подходит для школы и вуза.";
    if (name.includes("блокнот"))    return "Компактный блокнот для заметок и задач.";
    if (name.includes("альбом"))     return "Альбом с плотными листами для рисования.";
    if (name.includes("карандаш"))   return "Карандаши для рисунков и набросков.";
    if (name.includes("маркер"))     return "Подходит для выделения ключевой информации.";
    if (name.includes("папка"))      return "Папка помогает систематизировать документы.";
    if (name.includes("бумага"))     return "Классическая офисная бумага для печати и копирования.";
    if (name.includes("степлер"))    return "Степлер для быстрой сборки бумажных документов.";
    if (name.includes("линейка"))    return "Удобная линейка для точных измерений.";

    return "Качественный и удобный товар для повседневных задач.";
}


// ==========================
// 4. ИИ-ТЕГИ + ПОДБОР ПО ТЕГАМ
// ==========================

function generateTagsForProduct(p) {
    const t = [];
    const name = p.title.toLowerCase();
    const desc = p.desc.toLowerCase();

    if (name.includes("ручк") || name.includes("карандаш") || name.includes("лайнер"))
        t.push("письмо", "конспекты");

    if (name.includes("тетрад") || name.includes("блокнот") || name.includes("бумага"))
        t.push("записи", "конспекты");

    if (name.includes("альбом") || name.includes("рисован") || name.includes("краск") || name.includes("гуашь"))
        t.push("рисование", "творчество");

    if (name.includes("папка") || name.includes("файл") || name.includes("органайзер"))
        t.push("документы", "офис");

    if (name.includes("маркер") || name.includes("стикер"))
        t.push("подготовка", "выделение");

    if (name.includes("транспортир") || name.includes("угольник") || name.includes("компас"))
        t.push("чертёж", "математика");

    if (name.includes("набор"))
        t.push("подарок", "комплект");

    const cat = p.category;
    if (cat === "school")  t.push("школа");
    if (cat === "student") t.push("учёба");
    if (cat === "office")  t.push("офис");
    if (cat === "artist")  t.push("творчество");
    if (cat === "design")  t.push("дизайн");
    if (cat === "math")    t.push("математика", "чертёж");
    if (cat === "exam")    t.push("экзамены", "подготовка");
    if (cat === "pro")     t.push("премиум", "комплект");

    return Array.from(new Set(t));
}

function getSimilarProducts(product, limit = 6) {
    const productTags = generateTagsForProduct(product);

    const scored = products
        .map(p => {
            if (p.id === product.id) return null;
            const tags = generateTagsForProduct(p);
            const score = tags.filter(tag => productTags.includes(tag)).length;
            return { product: p, score };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score);

    return scored.filter(s => s.score > 0).slice(0, limit).map(s => s.product);
}

function getBoughtTogether(product, limit = 4) {
    const t = generateTagsForProduct(product);

    if (t.includes("рисование")) {
        return products.filter(p =>
            generateTagsForProduct(p).includes("рисование") ||
            generateTagsForProduct(p).includes("записи")
        ).slice(0, limit);
    }

    if (t.includes("школа")) {
        return products.filter(p =>
            generateTagsForProduct(p).includes("записи") ||
            generateTagsForProduct(p).includes("конспекты") ||
            generateTagsForProduct(p).includes("подготовка")
        ).slice(0, limit);
    }

    if (t.includes("офис")) {
        return products.filter(p =>
            generateTagsForProduct(p).includes("документы") ||
            generateTagsForProduct(p).includes("письмо")
        ).slice(0, limit);
    }

    return products.slice(0, limit);
}

function addToViewHistory(productId) {
    if (!viewHistory.includes(productId)) {
        viewHistory.push(productId);
        if (viewHistory.length > 20) viewHistory.shift();
    }
}

function getAIRecommendedProducts(baseProduct) {
    if (!baseProduct) return [];

    let sameCategory = products.filter(p =>
        p.category === baseProduct.category && p.id !== baseProduct.id
    );

    let similarPrice = products.filter(p =>
        Math.abs(p.price - baseProduct.price) <= 50 && p.id !== baseProduct.id
    );

    const map = {
        "ручка": ["тетрадь", "блокнот"],
        "маркер": ["тетрадь", "блокнот"],
        "альбом": ["карандаш", "кисть", "гуашь", "акварель"],
        "карандаш": ["альбом", "линер"],
        "гуашь": ["кисть", "альбом"],
        "клей": ["бумага", "картон"]
    };

    let logic = [];
    const title = baseProduct.title.toLowerCase();
    for (const key in map) {
        if (title.includes(key)) {
            logic = products.filter(p =>
                map[key].some(w => p.title.toLowerCase().includes(w))
            );
        }
    }

    const combined = [...sameCategory, ...similarPrice, ...logic];
    const unique = [];
    const ids = new Set();

    for (const p of combined) {
        if (!ids.has(p.id) && p.id !== baseProduct.id) {
            unique.push(p);
            ids.add(p.id);
        }
    }

    return unique.slice(0, 6);
}

function getAIPersonalFeed() {
    let result = [];

    for (const id of viewHistory) {
        const p = getProductById(id);
        if (!p) continue;
        const sameCategory = products.filter(x => x.category === p.category && x.id !== p.id);
        result.push(...sameCategory);
    }

    for (const favId of favorites) {
        const p = getProductById(favId);
        if (!p) continue;
        const similar = products.filter(x =>
            Math.abs(x.price - p.price) < 80 && x.category === p.category
        );
        result.push(...similar);
    }

    for (const item of cart) {
        const p = getProductById(item.id);
        if (!p) continue;
        const logic = getAIRecommendedProducts(p);
        result.push(...logic);
    }

    const unique = [];
    const seen = new Set();
    for (const p of result) {
        if (!seen.has(p.id)) {
            seen.add(p.id);
            unique.push(p);
        }
    }

    return unique.slice(0, 10);
}


// ==========================
// 5. ПЕРЕКЛЮЧЕНИЕ РАЗДЕЛОВ
// ==========================

function showSection(id) {
    document.querySelectorAll(".page-section, .hero-section")
        .forEach(sec => sec.classList.remove("active"));

    const section = document.getElementById(id);
    if (section) section.classList.add("active");

    document.querySelectorAll("header nav a")
        .forEach(a => a.classList.remove("active-link"));

    const link = document.querySelector(`header nav a[onclick="showSection('${id}')"]`);
    if (link) link.classList.add("active-link");

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (id === "favorites") renderFavorites();

    if (id === "catalog") {
        const feedBox = document.getElementById("ai-personal-feed");
        const itemsBox = document.getElementById("ai-feed-items");

        if (feedBox && itemsBox) {
            const items = getAIPersonalFeed();
            if (items.length > 0) {
                feedBox.style.display = "block";
                itemsBox.innerHTML = items.map(p => `
                    <div class="ai-feed-item" onclick="openProductModal(${p.id})">
                        <img src="${p.image}">
                        <div class="ai-feed-title">${p.title}</div>
                        <div class="ai-feed-price">${formatPrice(p.price)}</div>
                    </div>
                `).join("");
            } else {
                feedBox.style.display = "none";
            }
        }
    }
}


// ==========================
// 6. ФИЛЬТРАЦИЯ + ПОИСК + ЦЕНА
// ==========================

function setCategory(cat) {
    currentCategory = cat;

    document.querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    const activeBtn = Array.from(document.querySelectorAll(".filter-btn"))
        .find(btn => btn.getAttribute("onclick")?.includes(cat));
    if (activeBtn) activeBtn.classList.add("active");

    applyFilters();
}

function searchProduct() {
    applyFilters();
}

function applyFilters() {
    const query = (document.getElementById("searchInput")?.value || "").toLowerCase();

    const minVal = parseFloat(document.getElementById("priceMin")?.value);
    const maxVal = parseFloat(document.getElementById("priceMax")?.value);
    priceMin = isNaN(minVal) ? null : minVal;
    priceMax = isNaN(maxVal) ? null : maxVal;

    filteredProducts = products.filter(p => {
        if (currentCategory !== "all" && p.category !== currentCategory) return false;

        if (query &&
            !p.title.toLowerCase().includes(query) &&
            !p.desc.toLowerCase().includes(query)) {
            return false;
        }

        if (priceMin !== null && p.price < priceMin) return false;
        if (priceMax !== null && p.price > priceMax) return false;

        return true;
    });

    currentPage = 1;
    renderProducts();
}


// ==========================
// 7. УМНЫЕ ПОДСКАЗКИ ПО ПОИСКУ
// ==========================

function handleSearchInput() {
    const input = document.getElementById("searchInput");
    const box   = document.getElementById("search-suggestions");
    if (!input || !box) return;

    const query = input.value.toLowerCase().trim();

    if (!query) {
        box.innerHTML = "";
        box.classList.remove("visible");
        applyFilters();
        return;
    }

    const variants = products
        .filter(p => p.title.toLowerCase().includes(query))
        .slice(0, 7);

    if (!variants.length) {
        box.innerHTML = "";
        box.classList.remove("visible");
    } else {
        box.innerHTML = variants
            .map(p =>
                `<div class="search-suggestion-item"
                      onclick="selectSuggestion('${p.title.replace(/'/g, "\\'")}')">
                    ${p.title}
                 </div>`
            )
            .join("");
        box.classList.add("visible");
    }

    applyFilters();
}

function selectSuggestion(text) {
    const input = document.getElementById("searchInput");
    const box   = document.getElementById("search-suggestions");
    if (!input || !box) return;

    input.value = text;
    box.innerHTML = "";
    box.classList.remove("visible");
    applyFilters();
}


// ==========================
// 8. КАТАЛОГ + ПАГИНАЦИЯ
// ==========================

function renderProducts(list = filteredProducts) {
    const productList   = document.getElementById("productList");
    const paginationEl  = document.getElementById("pagination");
    if (!productList) return;

    if (!list) list = [];

    const totalPages = Math.max(1, Math.ceil(list.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = list.slice(start, start + ITEMS_PER_PAGE);

    productList.innerHTML = "";

    if (!pageItems.length) {
        productList.innerHTML = "<p>Товары по заданным условиям не найдены…</p>";
    } else {
        pageItems.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.dataset.id = p.id;

            const isFav = favorites.includes(p.id);

            card.innerHTML = `
                <img src="${p.image}" alt="${p.title}" onclick="openProductModal(${p.id})">
                <h3>${p.title}</h3>
                <div class="category">Категория: ${translateCategory(p.category)}</div>
                <div class="desc">${p.desc || generateAutoDescription(p)}</div>
                <div class="bottom-row">
                    <span class="price">${formatPrice(p.price)}</span>
                    <div class="bottom-actions">
                        <button class="favorite-btn ${isFav ? "active" : ""}"
                                onclick="toggleFavorite(${p.id})"
                                aria-label="В избранное">
                            ❤
                        </button>
                        <button onclick="addToCart(${p.id})">В корзину</button>
                    </div>
                </div>
            `;

            productList.appendChild(card);
        });
    }

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const paginationEl = document.getElementById("pagination");
    if (!paginationEl) return;

    if (totalPages <= 1) {
        paginationEl.innerHTML = "";
        return;
    }

    let html = "";

    html += `
        <button class="arrow-btn"
                ${currentPage === 1 ? "disabled" : ""}
                onclick="goToPage(${currentPage - 1})">
            «
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button class="${i === currentPage ? "active" : ""}"
                    onclick="goToPage(${i})">
                ${i}
            </button>
        `;
    }

    html += `
        <button class="arrow-btn"
                ${currentPage === totalPages ? "disabled" : ""}
                onclick="goToPage(${currentPage + 1})">
            »
        </button>
    `;

    paginationEl.innerHTML = html;
}

function goToPage(page) {
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderProducts();

    const catBlock = document.getElementById("catalog");
    if (catBlock) {
        window.scrollTo({
            top: catBlock.offsetTop - 80,
            behavior: "smooth"
        });
    }
}


// ==========================
// 9. ИЗБРАННОЕ
// ==========================

function toggleFavorite(id) {
    const index = favorites.indexOf(id);

    if (index === -1) favorites.push(id);
    else favorites.splice(index, 1);

    localStorage.setItem("tetrabum_favorites", JSON.stringify(favorites));

    renderProducts();
    renderFavorites();
}

function renderFavorites() {
    const favContainer = document.getElementById("favoritesList");
    if (!favContainer) return;

    if (!favorites.length) {
        favContainer.innerHTML =
            "<p>Избранных товаров пока нет. Нажмите на сердечко на карточке товара в каталоге.</p>";
        return;
    }

    const favItems = products.filter(p => favorites.includes(p.id));
    favContainer.innerHTML = "";

    favItems.forEach(p => {
        const div = document.createElement("div");
        div.className = "product-card";

        const isFav = favorites.includes(p.id);

        div.innerHTML = `
            <img src="${p.image}" alt="${p.title}" onclick="openProductModal(${p.id})">
            <h3>${p.title}</h3>
            <div class="category">Категория: ${translateCategory(p.category)}</div>
            <div class="desc">${p.desc || generateAutoDescription(p)}</div>
            <div class="bottom-row">
                <span class="price">${formatPrice(p.price)}</span>
                <div class="bottom-actions">
                    <button class="favorite-btn ${isFav ? "active" : ""}"
                            onclick="toggleFavorite(${p.id})">❤</button>
                    <button onclick="addToCart(${p.id})">В корзину</button>
                </div>
            </div>
        `;

        favContainer.appendChild(div);
    });
}
// ==========================
// 10. МОДАЛЬНОЕ ОКНО ТОВАРА
// ==========================

function openProductModal(id) {
    const p = getProductById(id);
    if (!p) return;

    pmProduct = p;

    const modal    = document.getElementById("productModal");
    const titleEl  = document.getElementById("pm-title");
    const imgEl    = document.getElementById("pm-image");
    const priceEl  = document.getElementById("pm-price");
    const descEl   = document.getElementById("pm-desc");
    const catEl    = document.getElementById("pm-category");

    if (titleEl) titleEl.textContent = p.title;
    if (imgEl)   imgEl.src = p.image;
    if (priceEl) priceEl.textContent = formatPrice(p.price);
    if (descEl)  descEl.textContent = p.desc || generateAutoDescription(p);
    if (catEl)   catEl.textContent = "Категория: " + translateCategory(p.category);

    // Похожие товары
   // Похожие товары
const sim = getSimilarProducts(p);
document.getElementById("pm-similar").innerHTML =
    sim.length
        ? sim.map(item =>
            `<div class="pm-item" onclick="openProductModal(${item.id})">
                <img src="${item.image}">
                <div class="pm-item-title">${item.title}</div>
                <div class="pm-item-price">${formatPrice(item.price)}</div>
            </div>`
        ).join("")
        : "<p>Нет похожих товаров</p>";

// Часто покупают вместе
const bt = getBoughtTogether(p);
document.getElementById("pm-together").innerHTML =
    bt.map(item =>
        `<div class="pm-item" onclick="openProductModal(${item.id})">
            <img src="${item.image}">
            <div class="pm-item-title">${item.title}</div>
            <div class="pm-item-price">${formatPrice(item.price)}</div>
        </div>`
    ).join("");

// ИИ рекомендует
const rec = getAIRecommendedProducts(p);
document.getElementById("pm-ai-items").innerHTML =
    rec.map(item =>
        `<div class="pm-item" onclick="openProductModal(${item.id})">
            <img src="${item.image}">
            <div class="pm-item-title">${item.title}</div>
            <div class="pm-item-price">${formatPrice(item.price)}</div>
        </div>`
    ).join("");


    addToViewHistory(id);

    if (modal) modal.classList.remove("hidden");
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    if (!modal) return;
    modal.classList.add("hidden");
}

function addPMtoCart() {
    if (!pmProduct) return;
    addToCart(pmProduct.id);
    closeProductModal();
}


// ==========================
// 11. КОРЗИНА — СОХРАНЕНИЕ
// ==========================

function saveCart() {
    localStorage.setItem("tetrabum_cart", JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem("tetrabum_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved) || [];
        } catch {
            cart = [];
        }
    }
}

function updateCart() {
    const countEl = document.getElementById("cart-count");
    const totalEl = document.getElementById("cart-total");

    let count = 0;
    let total = 0;

    cart.forEach(i => {
        const p = getProductById(i.id);
        if (!p) return;
        count += i.qty;
        total += p.price * i.qty;
    });

    if (countEl) countEl.textContent = count;
    if (totalEl) totalEl.textContent = formatPrice(total);

    renderCartModal();
}


// ==========================
// 12. КОРЗИНА — ОПЕРАЦИИ
// ==========================

function addToCart(id) {
    const product = getProductById(id);
    if (!product) return;

    animateAddToCart(id);

    const item = cart.find(i => i.id === id);
    if (item) item.qty++;
    else cart.push({ id, qty: 1 });

    saveCart();
    updateCart();
    showToast("Товар добавлен в корзину 🛒");
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart();
    updateCart();
}

function clearCart() {
    if (!cart.length) {
        showToast("Корзина уже пуста");
        return;
    }
    cart = [];
    saveCart();
    updateCart();
    showToast("Корзина очищена");
}


// ==========================
// 13. КОРЗИНА — МОДАЛЬНОЕ ОКНО
// ==========================

function openCart() {
    const backdrop = document.getElementById("cart-backdrop");
    if (backdrop) backdrop.classList.remove("hidden");
}

function closeCart() {
    const backdrop = document.getElementById("cart-backdrop");
    if (backdrop) backdrop.classList.add("hidden");
}

function renderCartModal() {
    const box     = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    if (!box || !totalEl) return;

    if (!cart.length) {
        box.innerHTML = "<p>Корзина пуста</p>";
        totalEl.textContent = formatPrice(0);
        return;
    }

    box.innerHTML = "";
    let total = 0;

    cart.forEach(i => {
        const p = getProductById(i.id);
        if (!p) return;

        const sum = p.price * i.qty;
        total += sum;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <div class="cart-item-title">${p.title}</div>
            <div class="cart-qty-controls">
                <button onclick="changeQty(${p.id}, -1)">−</button>
                <span>${i.qty}</span>
                <button onclick="changeQty(${p.id}, 1)">+</button>
            </div>
            <div>${formatPrice(sum)}</div>
        `;

        box.appendChild(div);
    });

    totalEl.textContent = formatPrice(total);
}

function goToOrderFromCart() {
    closeCart();
    showSection("order");
    const orderSection = document.getElementById("order");
    if (orderSection) {
        window.scrollTo({
            top: orderSection.offsetTop - 80,
            behavior: "smooth"
        });
    }
}

function goToOrderPage() {
    closeCart();
    showSection("order");
}


// ==========================
// 14. АНИМАЦИЯ ДОБАВЛЕНИЯ В КОРЗИНУ
// ==========================

function animateAddToCart(productId) {
    const img = document.querySelector(`.product-card[data-id="${productId}"] img`);
    const cartIcon = document.querySelector(".cart-info");
    if (!img || !cartIcon) return;

    const imgRect  = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const flyImg = img.cloneNode(true);
    flyImg.classList.add("fly-image");
    flyImg.style.left   = imgRect.left + "px";
    flyImg.style.top    = imgRect.top  + "px";
    flyImg.style.width  = imgRect.width  + "px";
    flyImg.style.height = imgRect.height + "px";
    flyImg.style.opacity = "1";
    document.body.appendChild(flyImg);

    const translateX =
        cartRect.left + cartRect.width / 2 -
        (imgRect.left + imgRect.width / 2);

    const translateY =
        cartRect.top + cartRect.height / 2 -
        (imgRect.top + imgRect.height / 2);

    requestAnimationFrame(() => {
        flyImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.2)`;
        flyImg.style.opacity = "0";
    });

    flyImg.addEventListener("transitionend", () => {
        flyImg.remove();
    }, { once: true });
}


// ==========================
// 15. ГОТОВЫЕ НАБОРЫ
// ==========================

const productSets = {
    schoolJunior: [1, 3, 51, 53, 60],
    schoolSenior: [1, 3, 12, 68, 53],
    student:      [12, 11, 14, 15, 18, 24],
    officePro:    [19, 20, 21, 22, 23, 24, 25],
    artistBasic:  [26, 27, 30, 31],
    artistPro:    [27, 28, 29, 30, 32, 33, 34],
    exams:        [12, 18, 24, 41, 43]
};

function addSetToCart(setName) {
    const ids = productSets[setName];
    if (!ids) return;

    ids.forEach(id => {
        const item = cart.find(i => i.id === id);
        if (item) item.qty++;
        else cart.push({ id, qty: 1 });
    });

    saveCart();
    updateCart();
    showToast("Набор добавлен в корзину ✔");
}


// ==========================
// 16. ОФОРМЛЕНИЕ ЗАКАЗА
// ==========================

function submitOrder() {
    const msg = document.getElementById("orderMessage");

    if (!cart.length) {
        if (msg) {
            msg.innerHTML = "<span style='color:red'>Корзина пуста! Добавьте хотя бы один товар.</span>";
        }
        return false;
    }

    const total = cart.reduce((s, i) => {
        const p = getProductById(i.id);
        return s + (p ? p.price * i.qty : 0);
    }, 0);

    if (msg) {
        msg.innerHTML = `
            <p><b>Заказ оформлен (демонстрационный режим)!</b></p>
            <p>Сумма: ${formatPrice(total)}</p>
            <p style="font-size: 12px; color:#666;">
                В реальном магазине на этом шаге данные были бы отправлены менеджеру.
            </p>
        `;
    }

    cart = [];
    saveCart();
    updateCart();

    return false;
}
// ==========================
// 17. ИИ-ПОДБОР НАБОРОВ (ПРОФИЛИ)
// ==========================

const aiProfileLabels = {
    school:  "школьника",
    student: "студента",
    office:  "офисного сотрудника",
    artist:  "творческого человека"
};

const aiLevelLabels = {
    beginner: "начинающий",
    advanced: "продвинутый",
    pro:      "уровень PRO"
};

function selectProductsForProfile(profile) {
    return products.filter(p => {
        if (profile === "school")  return p.category === "school" || p.category === "math";
        if (profile === "student") return p.category === "student" || p.category === "exam";
        if (profile === "office")  return p.category === "office"  || p.category === "pro";
        if (profile === "artist")  return p.category === "artist"  || p.category === "design";
        return true;
    });
}

function getAIrecommendation() {
    const profile = document.getElementById("userType")?.value || "school";
    const level   = document.getElementById("aiLevel")?.value || "beginner";

    const resultBox = document.getElementById("recommendation");
    if (!resultBox) return;

    let items = selectProductsForProfile(profile).slice();
    items.sort((a, b) => a.price - b.price);

    let count =
        level === "beginner" ? 5 :
        level === "advanced" ? 7 :
        10;

    let selected;
    if (level === "pro") {
        selected = items.slice(-count);
    } else if (level === "advanced") {
        selected = items.slice(
            Math.max(0, Math.floor(items.length / 3) - 1),
            Math.max(0, Math.floor(items.length / 3) - 1) + count
        );
    } else {
        selected = items.slice(0, count);
    }

    const unique = [];
    const seen = new Set();
    for (const p of selected) {
        if (!seen.has(p.id)) {
            seen.add(p.id);
            unique.push(p);
        }
    }

    let html = `<p><b>Профиль:</b> ${aiProfileLabels[profile]} (${aiLevelLabels[level]}).</p>`;
    html += `<p><b>Рекомендуемый набор:</b></p><ol>`;

    unique.forEach(p => {
        html += `<li>${p.title} — ${formatPrice(p.price)}.</li>`;
    });

    html += `</ol>`;

    if (profile === "school") {
        html += `<p>Совет: добавьте запас тетрадей и ручек — они заканчиваются быстрее всего.</p>`;
    } else if (profile === "student") {
        html += `<p>Совет: для конспектов полезны текстовые маркеры и блокнот формата A5 или A4.</p>`;
    } else if (profile === "office") {
        html += `<p>Совет: обратите внимание на бумагу А4 и папки — основа любого офиса.</p>`;
    } else if (profile === "artist") {
        html += `<p>Совет: получите максимум от набора, комбинируя кисти, бумагу и цветные материалы.</p>`;
    }

    resultBox.innerHTML = html;
}


// ==========================
// 18. ИИ – БЫСТРЫЙ ВОПРОС / СУПЕР-ИИ
// ==========================

function superAIlogic(text) {
    return `
📌 Анализ вопроса:
• ${text}

📦 Что подойдёт:
— Ручки, тетради, блокнот, маркеры
— Папка, стикеры, линейка
— Пара универсальных офисных принадлежностей
`.trim();
}

function classicAIassistant(text) {
    const t = text.toLowerCase();
    if (t.includes("студент")) {
        return "🎓 Набор студента: блокнот, маркер, папка, ручки, стикеры.";
    }
    if (t.includes("школ")) {
        return "📚 Набор школьника: ручка, тетрадь, линейка, маркеры.";
    }
    return "Готов сформировать набор по вашему запросу!";
}


// ==========================
// 19. ИИ – АНАЛИЗ КОРЗИНЫ (ВСПОМОГАТЕЛЬНЫЕ)
// ==========================

function getDominantCategoryInCart() {
    const stat = {};

    cart.forEach(i => {
        const p = getProductById(i.id);
        if (!p) return;
        stat[p.category] = (stat[p.category] || 0) + i.qty;
    });

    let best = null;
    let max = 0;

    for (let cat in stat) {
        if (stat[cat] > max) {
            max = stat[cat];
            best = cat;
        }
    }
    return best;
}

function detectCartGoal() {
    const categories = cart.map(i => {
        const p = getProductById(i.id);
        return p ? p.category : null;
    }).filter(Boolean);

    if (categories.length === 0) return "универсальный набор";

    const freq = {};
    categories.forEach(cat => freq[cat] = (freq[cat] || 0) + 1);

    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    const main = sorted[0][0];

    if (main === "school")  return "школьный набор";
    if (main === "student") return "набор студента";
    if (main === "office")  return "офисный комплект";
    if (main === "artist")  return "набор для творчества";
    if (main === "design")  return "набор дизайнера";
    if (main === "math")    return "комплект для черчения";
    if (main === "exam")    return "подготовка к экзаменам";
    if (main === "pro")     return "профессиональный набор";

    return "универсальный набор";
}

function getMissingElements() {
    const cartTitles = cart.map(i => {
        const p = getProductById(i.id);
        return p ? p.title.toLowerCase() : "";
    });

    const missing = [];

    function notIncluded(keywords) {
        return !cartTitles.some(t => keywords.some(k => t.includes(k)));
    }

    if (notIncluded(["тетрад", "блокнот"])) missing.push("тетрадей или блокнота");
    if (notIncluded(["ручка"])) missing.push("запасных ручек");
    if (notIncluded(["корректор", "исправ", "correct"])) missing.push("корректора");

    if (notIncluded(["линейка"]) || notIncluded(["транспортир", "угольник"]))
        missing.push("набора для геометрии (линейка, транспортир, угольник)");

    if (notIncluded(["маркер"])) missing.push("текстовых маркеров");
    if (notIncluded(["стикер", "заклад"])) missing.push("закладок и цветных стикеров");

    if (notIncluded(["бумага"])) missing.push("пачки бумаги А4");
    if (notIncluded(["папка"])) missing.push("папок для документов");
    if (notIncluded(["степлер"])) missing.push("степлера и скоб");

    if (notIncluded(["альбом"])) missing.push("альбома для рисования");
    if (notIncluded(["кисти"])) missing.push("набора кистей");
    if (notIncluded(["акварель", "гуашь"])) missing.push("красок");

    if (notIncluded(["карточ"]) && notIncluded(["exam"])) {
        // отдельный акцент на экзамены
    }

    return missing;
}

function getAISuggestions(goal, missingList) {
    const tips = [];

    if (goal.includes("школь"))
        tips.push("Добавьте тетрадей и ручек — они заканчиваются быстрее всего.");

    if (goal.includes("студ"))
        tips.push("Для конспектов полезны маркеры и блокнот A5/A4.");

    if (goal.includes("офис"))
        tips.push("Бумага, папки и степлер — основа любого офиса.");

    if (goal.includes("творч"))
        tips.push("Кисти, альбом и цветные материалы усилят набор художника.");

    if (goal.includes("экзам"))
        tips.push("Для подготовки к экзаменам нужны карточки и маркеры.");

    if (missingList.length > 3)
        tips.push("Ваш набор выглядит неполным — добавьте недостающие элементы выше.");

    if (!tips.length)
        tips.push("Ваш набор хорошо сформирован. Можно дополнить аксессуарами и запасом расходников.");

    return tips;
}

function getCartComplementProducts() {
    const allCats = new Set(
        cart.map(i => getProductById(i.id)?.category)
    );

    const result = [];
    products.forEach(p => {
        if (allCats.has(p.category)) {
            const inCart = cart.some(i => i.id === p.id);
            if (!inCart) result.push(p);
        }
    });

    return result.slice(0, 5);
}


// ==========================
// 20. ИИ – АНАЛИЗ КОРЗИНЫ (ЕДИНАЯ ФУНКЦИЯ)
// ==========================
//
// Используется и в ИИ-секции, и в чат-боте:
// analyzeCartForAI()        — пишет в блок #ai-cart-analysis
// analyzeCartForAI(true)    — вернёт строку (для ответа в чате)
// ==========================

function analyzeCartForAI(returnText = false) {
    if (!cart.length) {
        if (returnText) return "Корзина пустая.";
        const boxEmpty = document.getElementById("ai-cart-analysis");
        if (boxEmpty) boxEmpty.innerHTML = "<p>Корзина пуста.</p>";
        return;
    }

    const goal = detectCartGoal();
    const missing = getMissingElements();
    const tips = getAISuggestions(goal, missing);

    let textResult = `Основная цель корзины: ${goal}.\n\n`;

    if (missing.length) {
        textResult += "Чего не хватает:\n" + missing.map(x => "• " + x).join("\n") + "\n\n";
    } else {
        textResult += "Набор выглядит полным.\n\n";
    }

    textResult += "Советы ИИ:\n" + tips.map(t => "• " + t).join("\n");

    if (returnText) {
        return textResult;
    }

    const box = document.getElementById("ai-cart-analysis");
    if (!box) return;

    let html = `<p><b>Основная цель корзины:</b> ${goal}</p>`;

    html += "<p><b>Чего не хватает:</b></p>";
    if (missing.length) {
        html += "<ul>" + missing.map(x => `<li>${x}</li>`).join("") + "</ul>";
    } else {
        html += "<p>Набор выглядит полным.</p>";
    }

    html += "<p><b>Советы ИИ:</b></p><ul>";
    tips.forEach(t => html += `<li>${t}</li>`);
    html += "</ul>";

    box.innerHTML = html;
}


// ==========================
// 21. ИИ – МОЗГ ДЛЯ ЧАТА / СЕКЦИЙ
// ==========================

function aiBrain(question) {
    const q = question.toLowerCase();

    if (q.includes("что нужно") || q.includes("подскажи") || q.includes("какие товары")) {
        return superAIlogic(question);
    }

    if (q.includes("набор") || q.includes("купить") || q.includes("выбрать")) {
        return classicAIassistant(question);
    }

    if (q.includes("анализ") || q.includes("корзин")) {
        return analyzeCartForAI(true);
    }

    return "Я не до конца понял запрос. Уточните, для кого вы собираете набор и какие задачи важны.";
}


// ==========================
// 22. ИИ – ВОПРОС ИЗ СЕКЦИИ (ai-free / ai-super)
// ==========================

function askAIFromSection() {
    const input = document.getElementById("ai-free-input");
    const box   = document.getElementById("ai-free-answer");
    if (!input || !box) return;

    const text = input.value.trim();
    if (!text) {
        box.innerHTML = "<span style='color:#999;'>Введите вопрос.</span>";
        return;
    }

    const q = text.toLowerCase();
    let profile = null;

    if (q.includes("школьник") || q.includes("класс")) profile = "school";
    else if (q.includes("студент") || q.includes("университет")) profile = "student";
    else if (q.includes("офис") || q.includes("работ")) profile = "office";
    else if (q.includes("художник") || q.includes("рисован") || q.includes("творч")) profile = "artist";

    if (!profile) {
        box.innerHTML = `
            <p><b>Общий ответ ИИ-помощника:</b></p>
            <p>Опишите, для кого вы подбираете набор (школьник, студент, офис, художник),
            и я предложу конкретный список товаров из каталога.</p>
        `;
        return;
    }

    const items = selectProductsForProfile(profile).slice().sort((a, b) => a.price - b.price);
    const baseCount = q.includes("экзамен") || q.includes("егэ") ? 7 : 5;

    let selected;
    if (q.includes("экзамен") || q.includes("егэ")) {
        selected = items.filter(p =>
            p.title.toLowerCase().includes("маркер") ||
            p.title.toLowerCase().includes("блокнот") ||
            p.title.toLowerCase().includes("карточ")
        );
        if (!selected.length) selected = items;
    } else {
        selected = items;
    }

    selected = selected.slice(0, baseCount);

    let titleProfile = aiProfileLabels[profile] || "покупателя";
    box.innerHTML = `
        <p><b>Подбор для ${titleProfile}:</b></p>
        <ul>
            ${selected.map(p => `<li>${p.title} — ${formatPrice(p.price)}</li>`).join("")}
        </ul>
        <p style="margin-top:6px;font-size:12px;color:#666;">
            Эти товары можно быстро найти в каталоге через поиск или фильтры по категориям.
        </p>
    `;
}

function askAISuper() {
    const input = document.getElementById("ai-super-input");
    const box = document.getElementById("ai-super-answer");
    if (!input || !box) return;

    const q = input.value.trim().toLowerCase();
    if (!q) {
        box.innerHTML = "<span style='color:#999;'>Введите вопрос…</span>";
        return;
    }

    let profile = null;
    if (q.includes("школ") || q.includes("класс")) profile = "school";
    if (q.includes("студ") || q.includes("универ") || q.includes("пары")) profile = "student";
    if (q.includes("офис") || q.includes("работ")) profile = "office";
    if (q.includes("рисован") || q.includes("творч") || q.includes("худож")) profile = "artist";
    if (q.includes("диза")) profile = "design";
    if (q.includes("чертеж") || q.includes("матем")) profile = "math";
    if (q.includes("егэ") || q.includes("экзам")) profile = "exam";

    if (!profile) {
        const cartGoal = detectCartGoal();
        if (cartGoal.includes("школь")) profile = "school";
        else if (cartGoal.includes("студ")) profile = "student";
        else if (cartGoal.includes("офис")) profile = "office";
        else if (cartGoal.includes("творч")) profile = "artist";
        else if (cartGoal.includes("экзам")) profile = "exam";
        else profile = "universal";
    }

    let items = selectProductsForProfile(profile);

    if (q.includes("начин") || q.includes("новичок") || q.includes("впервые")) {
        items = items.sort((a, b) => a.price - b.price).slice(0, 6);
    }

    if (q.includes("егэ") || q.includes("экзам")) {
        items = products.filter(p =>
            p.title.toLowerCase().includes("маркер") ||
            p.title.toLowerCase().includes("карточ") ||
            p.title.toLowerCase().includes("блокнот")
        ).slice(0, 7);
    }

    const includesCart = q.includes("корзин") || q.includes("чего не хватает") || q.includes("добавить");
    let missing = [];
    if (includesCart) {
        missing = getMissingElements();
    }

    let html = `<p><b>Определённый профиль:</b> ${translateCategory(profile) || "Универсальный"}</p>`;

    if (includesCart) {
        html += `<p><b>В вашей корзине не хватает:</b></p>`;
        if (missing.length) {
            html += "<ul>" + missing.map(x => `<li>${x}</li>`).join("") + "</ul>";
        } else html += "<p>Набор выглядит полным.</p>";
    }

    html += `<p><b>Подходящие товары:</b></p><ul>`;
    items.slice(0, 8).forEach(p => {
        html += `<li>${p.title} — ${formatPrice(p.price)}</li>`;
    });
    html += "</ul>";

    box.innerHTML = html;
}
// ==========================
// 23. ЧАТ-БОТ
// ==========================

function toggleChatbot() {
    const wnd = document.getElementById("chatbot");
    if (!wnd) return;
    wnd.classList.toggle("chatbot-hidden");
}

function addChatMsg(text, type) {
    const box = document.getElementById("chatbot-messages");
    if (!box) return;

    const msg = document.createElement("div");
    msg.className = "chatbot-message " + type;
    msg.innerHTML = `<span>${text.replace(/\n/g, "<br>")}</span>`;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
}

function botReply(text) {
    if (typeof ai_process === "function") {
        return ai_process(text);
    }
    return "ИИ сейчас недоступен (ai.js не загружен).";
}



function handleBotSend() {
    const input = document.getElementById("chatbot-input");
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addChatMsg(text, "user");
    input.value = "";

    setTimeout(() => {
        const reply = botReply(text);
        addChatMsg(reply, "bot");
    }, 200);
}

function sendChatMessage(event) {
    if (event) event.preventDefault();
    handleBotSend();
}


// ==========================
// 24. TOAST – уведомления
// ==========================

function showToast(text) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = text;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2000);
}


// ==========================
// 25. ТЁМНАЯ ТЕМА
// ==========================

function applyTheme() {
    const theme = localStorage.getItem("tetrabum_theme") || "light";
    document.body.classList.toggle("dark", theme === "dark");

    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
    const theme = localStorage.getItem("tetrabum_theme") === "dark" ? "light" : "dark";
    localStorage.setItem("tetrabum_theme", theme);
    applyTheme();
}


// ==========================
// 26. ИНИЦИАЛИЗАЦИЯ
// ==========================

window.addEventListener("load", () => {
    applyTheme();
    loadCart();
    applyFilters();
    renderProducts();
    renderFavorites();
    updateCart();
    getAIrecommendation();

    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            submitOrder();
        });
    }

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", handleSearchInput);
    }

    const chatbotForm = document.getElementById("chatbot-form");
    if (chatbotForm) {
        chatbotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            handleBotSend();
        });
    }

    const closeBtn = document.getElementById("cart-close");
    const backdrop = document.getElementById("cart-backdrop");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeCart);
    }
    if (backdrop) {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeCart();
        });
    }

    const pmCloseBtn = document.querySelector(".pm-close");
    if (pmCloseBtn) {
        pmCloseBtn.addEventListener("click", () => closeProductModal());
    }
});
