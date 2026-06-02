(function () {
  const FILTERS = [
    { id: "all", label: "Все" },
    { id: "wine", label: "Вино" },
    { id: "date", label: "Свидание" },
    { id: "terrace", label: "Терраса" },
    { id: "chef", label: "Шеф" },
  ];

  const RESTAURANTS = [
    {
      id: "oita",
      name: "OITA Soho",
      cuisine: "Японская идзакая",
      area: "Троицкое предместье",
      hours: "до 23:00",
      rating: 4.8,
      reviews: 836,
      distance: "420 м",
      distanceKm: 0.42,
      price: "$$$",
      neighborhood: "trinity",
      cuisineId: "japanese",
      features: [],
      tags: ["date", "wine"],
      tone: "green",
      pin: { x: 37, y: 31 },
      slots: [
        { time: "16:30", available: true },
        { time: "18:00", available: true },
        { time: "19:30", available: true },
      ],
    },
    {
      id: "riviera",
      name: "Riviera Wine Hall",
      cuisine: "Современная европейская",
      area: "Немига",
      hours: "до 01:00",
      rating: 4.9,
      reviews: 1204,
      distance: "650 м",
      distanceKm: 0.65,
      price: "$$$$",
      neighborhood: "nemiga",
      cuisineId: "chef",
      features: ["outdoor"],
      tags: ["wine", "chef"],
      tone: "dark",
      pin: { x: 62, y: 38 },
      slots: [
        { time: "18:45", available: false },
        { time: "19:15", available: true },
        { time: "20:45", available: true },
      ],
    },
    {
      id: "sol",
      name: "Sol y Brasa",
      cuisine: "Испанский гриль",
      area: "Верхний город",
      hours: "до 00:00",
      rating: 4.7,
      reviews: 612,
      distance: "810 м",
      distanceKm: 0.81,
      price: "$$",
      neighborhood: "upper-city",
      cuisineId: "spanish",
      features: ["outdoor", "smoking"],
      tags: ["terrace", "date"],
      tone: "amber",
      pin: { x: 47, y: 54 },
      slots: [
        { time: "17:30", available: true },
        { time: "19:00", available: true },
        { time: "21:00", available: false },
      ],
    },
    {
      id: "atelier",
      name: "Atelier 17",
      cuisine: "Авторская кухня",
      area: "Ленина",
      hours: "до 23:30",
      rating: 4.8,
      reviews: 943,
      distance: "1.2 км",
      distanceKm: 1.2,
      price: "$$$",
      neighborhood: "independence",
      cuisineId: "chef",
      features: [],
      tags: ["chef", "wine"],
      tone: "wine",
      pin: { x: 72, y: 62 },
      slots: [
        { time: "18:15", available: false },
        { time: "20:00", available: true },
        { time: "21:15", available: true },
      ],
    },
    {
      id: "gusto",
      name: "Gusto Italiano",
      cuisine: "Итальянская траттория",
      area: "Немига",
      hours: "до 22:30",
      rating: 4.6,
      reviews: 512,
      distance: "900 м",
      distanceKm: 0.9,
      price: "$$",
      neighborhood: "nemiga",
      cuisineId: "italian",
      features: ["outdoor"],
      tags: ["date", "terrace"],
      tone: "amber",
      pin: { x: 29, y: 48 },
      slots: [
        { time: "18:30", available: true },
        { time: "20:00", available: true },
        { time: "21:30", available: false },
      ],
    },
    {
      id: "kuchmistr",
      name: "Кухмистр",
      cuisine: "Беларуская классика",
      area: "Проспект Независимости",
      hours: "до 23:00",
      rating: 4.7,
      reviews: 734,
      distance: "1.5 км",
      distanceKm: 1.5,
      price: "$$",
      neighborhood: "independence",
      cuisineId: "belarusian",
      features: [],
      tags: ["chef"],
      tone: "green",
      pin: { x: 54, y: 70 },
      slots: [
        { time: "17:45", available: true },
        { time: "19:30", available: true },
        { time: "20:30", available: true },
      ],
    },
    {
      id: "tbilisi",
      name: "Tbilisi Room",
      cuisine: "Грузинская кухня",
      area: "Зыбицкая",
      hours: "до 02:00",
      rating: 4.5,
      reviews: 398,
      distance: "1.8 км",
      distanceKm: 1.8,
      price: "$$",
      neighborhood: "zybitskaya",
      cuisineId: "georgian",
      features: ["smoking"],
      tags: ["date"],
      tone: "dark",
      pin: { x: 78, y: 46 },
      slots: [
        { time: "18:00", available: true },
        { time: "19:45", available: false },
        { time: "21:00", available: true },
      ],
    },
    {
      id: "lido",
      name: "Lido Bistro",
      cuisine: "Беларуская кухня",
      area: "Проспект Независимости",
      hours: "до 22:00",
      rating: 4.4,
      reviews: 590,
      distance: "1.1 км",
      distanceKm: 1.1,
      price: "$$",
      neighborhood: "independence",
      cuisineId: "belarusian",
      features: [],
      tags: ["chef"],
      tone: "green",
      pin: { x: 66, y: 74 },
      slots: [
        { time: "18:20", available: true },
        { time: "19:20", available: true },
        { time: "20:20", available: false },
      ],
    },
    {
      id: "porta",
      name: "Porta Rossa",
      cuisine: "Итальянская кухня",
      area: "Верхний город",
      hours: "до 23:30",
      rating: 4.6,
      reviews: 431,
      distance: "760 м",
      distanceKm: 0.76,
      price: "$$$",
      neighborhood: "upper-city",
      cuisineId: "italian",
      features: ["outdoor"],
      tags: ["terrace", "date"],
      tone: "amber",
      pin: { x: 40, y: 43 },
      slots: [
        { time: "18:40", available: true },
        { time: "19:40", available: true },
        { time: "21:10", available: true },
      ],
    },
    {
      id: "sakura",
      name: "Sakura Room",
      cuisine: "Японская кухня",
      area: "Зыбицкая",
      hours: "до 00:30",
      rating: 4.8,
      reviews: 678,
      distance: "1.6 км",
      distanceKm: 1.6,
      price: "$$$",
      neighborhood: "zybitskaya",
      cuisineId: "japanese",
      features: ["smoking"],
      tags: ["wine", "date"],
      tone: "dark",
      pin: { x: 84, y: 57 },
      slots: [
        { time: "18:50", available: true },
        { time: "20:10", available: true },
        { time: "21:40", available: false },
      ],
    },
  ];

  const DEFAULT_ADVANCED_FILTERS = {
    sort: "auto",
    distance: "auto",
    price: [],
    neighborhood: [],
    cuisine: [],
    feature: [],
  };

  let activeFilter = "all";
  let selectedId = "oita";
  let previewRestaurantId = null;
  let advancedFilters = cloneFilters(DEFAULT_ADVANCED_FILTERS);
  let selectedBooking = {
    restaurant: "OITA Soho",
    guests: 2,
    dateLabel: "Сегодня",
    time: "16:30",
  };

  const filtersEl = document.getElementById("filters");
  const homeDinnerCarousel = document.getElementById("homeDinnerCarousel");
  const pinsEl = document.getElementById("pins");
  const listEl = document.getElementById("restaurantList");
  const searchInput = document.getElementById("searchInput");
  const partyButton = document.getElementById("partyButton");
  const homePartyButton = document.getElementById("homePartyButton");
  const homeLocationButton = document.getElementById("homeLocationButton");
  const sortButton = document.getElementById("sortButton");
  const mapSheet = document.querySelector(".map-sheet");
  const filterPanel = document.getElementById("filterPanel");
  const filterOpenButton = document.getElementById("filterOpenButton");
  const filterCount = document.getElementById("filterCount");
  const filterCancel = document.getElementById("filterCancel");
  const filterClear = document.getElementById("filterClear");
  const filterApply = document.getElementById("filterApply");
  const mapPreviewCard = document.getElementById("mapPreviewCard");
  const mapPreviewClose = document.getElementById("mapPreviewClose");
  const mapPreviewPhoto = document.getElementById("mapPreviewPhoto");
  const mapPreviewName = document.getElementById("mapPreviewName");
  const mapPreviewRating = document.getElementById("mapPreviewRating");
  const mapPreviewMeta = document.getElementById("mapPreviewMeta");
  const mapPreviewSlots = document.getElementById("mapPreviewSlots");
  const drawer = document.getElementById("bookingDrawer");
  const drawerRestaurant = document.getElementById("drawerRestaurant");
  const drawerDetails = document.getElementById("drawerDetails");
  const confirmBooking = document.getElementById("confirmBooking");
  const toast = document.getElementById("toast");
  const sheetState = {
    offset: 0,
    startOffset: 0,
    startY: 0,
    maxOffset: 0,
    snapPoints: [0],
  };
  let draftFilters = cloneFilters(advancedFilters);
  let previousScreen = "search";

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function restaurantById(id) {
    return RESTAURANTS.find((restaurant) => restaurant.id === id);
  }

  function bindClick(selector, handler) {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("click", () => handler(element));
    });
  }

  function slotButton(restaurantId, slot, baseClass, unavailableClass = "closed", availableClass = "") {
    const stateClass = slot.available ? availableClass : unavailableClass;
    const disabled = slot.available ? "" : "disabled";
    return `<button class="${baseClass}${stateClass ? ` ${stateClass}` : ""}" type="button" data-id="${restaurantId}" data-time="${slot.time}" ${disabled}>${slot.time}</button>`;
  }

  function calculateSheetSnapPoints() {
    const sheetHeight = mapSheet.offsetHeight;
    if (sheetHeight === 0) return false;
    const collapsedPeek = 116;
    const maxOffset = Math.max(0, sheetHeight - collapsedPeek);
    sheetState.maxOffset = maxOffset;
    sheetState.snapPoints = [0, Math.round(maxOffset * 0.48), maxOffset];
    return true;
  }

  function setSheetOffset(offset, shouldAnimate) {
    const nextOffset = Math.min(Math.max(offset, 0), sheetState.maxOffset);
    sheetState.offset = nextOffset;
    mapSheet.classList.toggle("dragging", !shouldAnimate);
    mapSheet.style.setProperty("--sheet-offset", `${nextOffset}px`);
  }

  function snapSheetToNearest() {
    const nearest = sheetState.snapPoints.reduce((closest, point) => {
      return Math.abs(point - sheetState.offset) < Math.abs(closest - sheetState.offset) ? point : closest;
    }, sheetState.snapPoints[0]);
    setSheetOffset(nearest, true);
  }

  function initMapSheetDrag() {
    if (calculateSheetSnapPoints()) {
      setSheetOffset(sheetState.snapPoints[1], true);
    }

    const dragTargets = [mapSheet.querySelector(".sheet-handle"), mapSheet.querySelector(".sheet-title")];

    function onPointerMove(event) {
      const deltaY = event.clientY - sheetState.startY;
      setSheetOffset(sheetState.startOffset + deltaY, false);
    }

    function onPointerUp(event) {
      mapSheet.releasePointerCapture(event.pointerId);
      mapSheet.removeEventListener("pointermove", onPointerMove);
      mapSheet.removeEventListener("pointerup", onPointerUp);
      mapSheet.removeEventListener("pointercancel", onPointerUp);
      snapSheetToNearest();
    }

    dragTargets.forEach((target) => {
      target.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        calculateSheetSnapPoints();
        sheetState.startY = event.clientY;
        sheetState.startOffset = sheetState.offset;
        mapSheet.setPointerCapture(event.pointerId);
        mapSheet.classList.add("dragging");
        mapSheet.addEventListener("pointermove", onPointerMove);
        mapSheet.addEventListener("pointerup", onPointerUp);
        mapSheet.addEventListener("pointercancel", onPointerUp);
      });
    });

    window.addEventListener("resize", () => {
      if (!document.querySelector('.screen-map.active') || !calculateSheetSnapPoints()) return;
      setSheetOffset(Math.min(sheetState.offset, sheetState.maxOffset), true);
    });
  }

  function currentRestaurants() {
    const query = searchInput.value.trim().toLowerCase();
    const distanceLimit = advancedFilters.distance === "auto" ? null : Number(advancedFilters.distance);
    const filtered = RESTAURANTS.filter((restaurant) => {
      const filterMatch = activeFilter === "all" || restaurant.tags.includes(activeFilter);
      const queryMatch =
        !query ||
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.cuisine.toLowerCase().includes(query) ||
        restaurant.area.toLowerCase().includes(query);
      const distanceMatch = distanceLimit === null || restaurant.distanceKm <= distanceLimit;
      const priceMatch = advancedFilters.price.length === 0 || advancedFilters.price.includes(restaurant.price);
      const neighborhoodMatch =
        advancedFilters.neighborhood.length === 0 || advancedFilters.neighborhood.includes(restaurant.neighborhood);
      const cuisineMatch = advancedFilters.cuisine.length === 0 || advancedFilters.cuisine.includes(restaurant.cuisineId);
      const featureMatch =
        advancedFilters.feature.length === 0 ||
        advancedFilters.feature.every((feature) => restaurant.features.includes(feature));
      return filterMatch && queryMatch && distanceMatch && priceMatch && neighborhoodMatch && cuisineMatch && featureMatch;
    });

    return filtered.sort((a, b) => {
      if (advancedFilters.sort === "distance") return a.distanceKm - b.distanceKm;
      if (advancedFilters.sort === "rating") return b.rating - a.rating;
      if (advancedFilters.sort === "newest") return b.reviews - a.reviews;
      return a.distanceKm - b.distanceKm;
    });
  }

  function renderHomeDinnerCarousel() {
    homeDinnerCarousel.innerHTML = RESTAURANTS.slice(0, 10).map((restaurant) => {
      const slots = restaurant.slots
        .filter((slot) => slot.available)
        .slice(0, 3)
        .map((slot) => `<button type="button" data-home-slot="${restaurant.id}" data-time="${slot.time}">${slot.time}</button>`)
        .join("");

      return `<article class="home-restaurant-card">
        <div class="home-card-photo" data-tone="${restaurant.tone}"></div>
        <div class="home-card-body">
          <h4>${restaurant.name}</h4>
          <p>${priceLabel(restaurant.price)} · ${restaurant.cuisine} · ★ ${restaurant.rating} (${restaurant.reviews})</p>
          <div>${slots}</div>
        </div>
      </article>`;
    }).join("");

    homeDinnerCarousel.querySelectorAll("[data-home-slot]").forEach((button) => {
      button.addEventListener("click", () => {
        showSearchScreen();
        selectSlot(restaurantById(button.dataset.homeSlot), button.dataset.time);
      });
    });
  }

  function renderFilters() {
    const count = activeAdvancedFilterCount();
    filterOpenButton.classList.toggle("active", count > 0);
    filterOpenButton.setAttribute("aria-label", count > 0 ? `Открыть фильтры, выбрано ${count}` : "Открыть фильтры");
    filterCount.hidden = count === 0;
    filterCount.textContent = count > 0 ? String(count) : "";
    sortButton.textContent = sortLabel();

    filtersEl.innerHTML = FILTERS.map((filter) => {
      const active = filter.id === activeFilter ? " active" : "";
      return `<button class="filter-chip${active}" type="button" data-filter="${filter.id}">${filter.label}</button>`;
    }).join("");

    filtersEl.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        renderAll();
      });
    });
  }

  function activeAdvancedFilterCount() {
    const sortCount = advancedFilters.sort === "auto" ? 0 : 1;
    return ["price", "neighborhood", "cuisine", "feature"].reduce((total, key) => {
      return total + advancedFilters[key].length;
    }, sortCount + (advancedFilters.distance === "auto" ? 0 : 1));
  }

  function sortLabel() {
    if (advancedFilters.sort === "rating") return "Сначала рейтинг";
    if (advancedFilters.sort === "newest") return "Сначала популярные";
    if (advancedFilters.sort === "distance") return "Сначала рядом";
    return "Авто";
  }

  function renderPins() {
    const visible = currentRestaurants();
    const detailedMarkers = hasCategoryContext();
    pinsEl.innerHTML = visible.map((restaurant) => {
      const selected = restaurant.id === selectedId ? " selected" : "";
      const markerContent = detailedMarkers
        ? `<span class="pin-label"><span class="pin-dot labeled"></span><span><strong>${restaurant.name}</strong><span>${restaurant.hours}</span></span></span>`
        : `<span class="pin-dot"></span><span class="pin-name">${restaurant.name}</span>`;
      return `<button class="map-pin${selected}" type="button" style="left:${restaurant.pin.x}%;top:${restaurant.pin.y}%;" data-id="${restaurant.id}" aria-label="${restaurant.name}">${markerContent}</button>`;
    }).join("");

    pinsEl.querySelectorAll(".map-pin").forEach((pin) => {
      pin.addEventListener("click", () => {
        const restaurant = restaurantById(pin.dataset.id);
        if (!restaurant) return;
        selectedId = restaurant.id;
        hideDrawer();
        renderAll();
        showMapPreview(restaurant);
      });
    });
  }

  function hasCategoryContext() {
    return activeFilter !== "all" || advancedFilters.cuisine.length > 0 || advancedFilters.feature.length > 0;
  }

  function renderList() {
    const restaurants = currentRestaurants();
    if (!restaurants.some((restaurant) => restaurant.id === selectedId) && restaurants[0]) {
      selectedId = restaurants[0].id;
    }

    if (restaurants.length === 0) {
      listEl.innerHTML = `<div class="empty-results">
        <h3>Ничего не найдено</h3>
        <p>Попробуйте снять часть фильтров или выбрать другой район Минска.</p>
      </div>`;
      return;
    }

    listEl.innerHTML = restaurants.map((restaurant) => {
      const selected = restaurant.id === selectedId ? " selected" : "";
      const slots = restaurant.slots.map((slot) => {
        return slotButton(restaurant.id, slot, "slot", "closed", "available");
      }).join("");
      const tags = restaurant.tags.map((tag) => `<span>${labelForFilter(tag)}</span>`).join("");

      return `<article class="restaurant-card${selected}" data-id="${restaurant.id}">
        <div>
          <h3>${restaurant.name}</h3>
          <p>${restaurant.rating} (${restaurant.reviews} отзывов) · ${restaurant.distance} · ${priceLabel(restaurant.price)} · ${restaurant.cuisine}</p>
          <div class="restaurant-tags">${tags}</div>
          <div class="slots">${slots}</div>
        </div>
        <button class="restaurant-photo" type="button" data-id="${restaurant.id}" data-tone="${restaurant.tone}" aria-label="Открыть ${restaurant.name}"></button>
      </article>`;
    }).join("");

    listEl.querySelectorAll(".restaurant-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest(".slot")) return;
        selectedId = card.dataset.id;
        hideDrawer();
        hideMapPreview();
        renderAll();
      });
    });

    listEl.querySelectorAll(".slot.available").forEach((slot) => {
      slot.addEventListener("click", (event) => {
        event.stopPropagation();
        selectSlot(restaurantById(slot.dataset.id), slot.dataset.time);
      });
    });
  }

  function labelForFilter(filterId) {
    const filter = FILTERS.find((item) => item.id === filterId);
    return filter ? filter.label : filterId;
  }

  function priceLabel(price) {
    return price.replaceAll("$", "₽");
  }

  function guestLabel(count) {
    if (count === 1) return "1 гость";
    if (count >= 2 && count <= 4) return `${count} гостя`;
    return `${count} гостей`;
  }

  function showDrawer() {
    drawerRestaurant.textContent = selectedBooking.restaurant;
    drawerDetails.textContent = `${guestLabel(selectedBooking.guests)} · ${selectedBooking.dateLabel.toLowerCase()} · ${selectedBooking.time}`;
    drawer.setAttribute("aria-hidden", "false");
    confirmBooking.disabled = false;
    confirmBooking.tabIndex = 0;
    drawer.classList.add("visible");
  }

  function hideDrawer(focusTarget = null) {
    drawer.classList.remove("visible");
    drawer.setAttribute("aria-hidden", "true");
    confirmBooking.disabled = true;
    confirmBooking.tabIndex = -1;
    if (drawer.contains(document.activeElement)) {
      focusTarget?.focus();
    }
  }

  function selectSlot(restaurant, time) {
    if (!restaurant) return;
    selectedId = restaurant.id;
    selectedBooking = {
      restaurant: restaurant.name,
      guests: selectedBooking.guests,
      dateLabel: "Сегодня",
      time,
    };
    hideMapPreview();
    renderAll();
    showDrawer();
  }

  function showMapPreview(restaurant) {
    previewRestaurantId = restaurant.id;
    calculateSheetSnapPoints();
    setSheetOffset(sheetState.maxOffset, true);
    mapPreviewPhoto.dataset.tone = restaurant.tone;
    mapPreviewName.textContent = restaurant.name;
    mapPreviewRating.textContent = `★ ${restaurant.rating} (${restaurant.reviews}) · ${priceLabel(restaurant.price)} · ${restaurant.cuisine}`;
    mapPreviewMeta.textContent = `${restaurant.area} · ${restaurant.distance} · открыто ${restaurant.hours}`;
    mapPreviewSlots.innerHTML = restaurant.slots.map((slot) => {
      return slotButton(restaurant.id, slot, "preview-slot");
    }).join("");
    mapPreviewCard.hidden = false;

    mapPreviewSlots.querySelectorAll(".preview-slot:not(.closed)").forEach((slot) => {
      slot.addEventListener("click", () => {
        selectSlot(restaurant, slot.dataset.time);
      });
    });
  }

  function hideMapPreview() {
    previewRestaurantId = null;
    mapPreviewCard.hidden = true;
  }

  function syncMapPreview() {
    if (!previewRestaurantId) return;
    const restaurant = currentRestaurants().find((item) => item.id === previewRestaurantId);
    if (restaurant) {
      showMapPreview(restaurant);
    } else {
      hideMapPreview();
    }
  }

  function cloneFilters(filters) {
    return {
      sort: filters.sort,
      distance: filters.distance,
      price: [...filters.price],
      neighborhood: [...filters.neighborhood],
      cuisine: [...filters.cuisine],
      feature: [...filters.feature],
    };
  }

  function openFilterPanel() {
    draftFilters = cloneFilters(advancedFilters);
    syncFilterControls();
    hideDrawer();
    hideMapPreview();
    filterPanel.classList.add("visible");
    filterPanel.setAttribute("aria-hidden", "false");
    filterOpenButton.classList.add("active");
  }

  function closeFilterPanel() {
    filterPanel.classList.remove("visible");
    filterPanel.setAttribute("aria-hidden", "true");
    filterOpenButton.classList.toggle("active", activeAdvancedFilterCount() > 0);
  }

  function syncFilterControls() {
    filterPanel.querySelectorAll("[data-filter-group]").forEach((group) => {
      const key = group.dataset.filterGroup;
      group.querySelectorAll("button").forEach((button) => {
        button.classList.toggle("active", draftFilters[key] === button.dataset.value);
      });
    });

    filterPanel.querySelectorAll("input[type='checkbox']").forEach((input) => {
      input.checked = draftFilters[input.name].includes(input.value);
    });
  }

  function setDraftSegment(group, value) {
    draftFilters[group] = value;
    syncFilterControls();
  }

  function setDraftCheckbox(input) {
    const values = new Set(draftFilters[input.name]);
    if (input.checked) {
      values.add(input.value);
    } else {
      values.delete(input.value);
    }
    draftFilters[input.name] = [...values];
  }

  function initFilterPanel() {
    filterOpenButton.addEventListener("click", openFilterPanel);
    filterCancel.addEventListener("click", closeFilterPanel);
    filterPanel.querySelector(".filter-scrim").addEventListener("click", closeFilterPanel);

    filterClear.addEventListener("click", () => {
      draftFilters = cloneFilters(DEFAULT_ADVANCED_FILTERS);
      syncFilterControls();
    });

    filterApply.addEventListener("click", () => {
      advancedFilters = cloneFilters(draftFilters);
      renderAll();
      closeFilterPanel();
      showToast("Фильтры применены");
    });

    filterPanel.querySelectorAll("[data-filter-group] button").forEach((button) => {
      button.addEventListener("click", () => {
        setDraftSegment(button.parentElement.dataset.filterGroup, button.dataset.value);
      });
    });

    filterPanel.querySelectorAll("input[type='checkbox']").forEach((input) => {
      input.addEventListener("change", () => setDraftCheckbox(input));
    });
  }

  function updateReservation() {
    document.getElementById("reservationName").textContent = selectedBooking.restaurant;
    document.getElementById("reservationGuests").textContent = selectedBooking.guests;
    document.getElementById("reservationTime").textContent = `${selectedBooking.dateLabel} в ${selectedBooking.time}`;
    document.getElementById("reservationCount").textContent = "1";
    document.getElementById("profileReservations").textContent = "1";
  }

  function setScreen(screenName) {
    const currentScreen = document.querySelector(".screen.active")?.dataset.screen;
    if (currentScreen && currentScreen !== "profile" && screenName !== currentScreen) {
      previousScreen = currentScreen;
    }

    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.toggle("active", screen.dataset.screen === screenName);
    });
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.tab === screenName);
    });

    if (screenName !== "search") {
      hideDrawer(document.querySelector(`.tab[data-tab="${screenName}"]`));
      hideMapPreview();
    } else {
      calculateSheetSnapPoints();
    }
  }

  function showSearchScreen() {
    setScreen("search");
  }

  function updatePartyLabels() {
    const label = `${guestLabel(selectedBooking.guests)} · ${selectedBooking.dateLabel.toLowerCase()} · ${selectedBooking.time}`;
    partyButton.textContent = label;
    homePartyButton.querySelector("span").textContent = `${selectedBooking.guests} · ${selectedBooking.dateLabel.toLowerCase()} в ${selectedBooking.time}`;
  }

  function openSearchWithFilter(filterPatch) {
    activeFilter = filterPatch.activeFilter || "all";
    advancedFilters = cloneFilters(DEFAULT_ADVANCED_FILTERS);

    if (filterPatch.cuisine) advancedFilters.cuisine = [filterPatch.cuisine];
    if (filterPatch.neighborhood) advancedFilters.neighborhood = [filterPatch.neighborhood];

    showSearchScreen();
    renderAll();

    if (filterPatch.restaurantId) {
      const restaurant = restaurantById(filterPatch.restaurantId);
      if (restaurant) {
        selectedId = restaurant.id;
        renderAll();
        showMapPreview(restaurant);
      }
    }
  }

  function renderAll() {
    renderFilters();
    renderPins();
    renderList();
    syncMapPreview();
    updateReservation();
  }

  searchInput.addEventListener("input", () => {
    hideDrawer();
    renderAll();
  });

  partyButton.addEventListener("click", () => {
    selectedBooking.guests = selectedBooking.guests >= 6 ? 2 : selectedBooking.guests + 1;
    updatePartyLabels();
    if (drawer.classList.contains("visible")) showDrawer();
  });

  homePartyButton.addEventListener("click", () => {
    selectedBooking.guests = selectedBooking.guests >= 6 ? 2 : selectedBooking.guests + 1;
    updatePartyLabels();
  });

  homeLocationButton.addEventListener("click", () => {
    openSearchWithFilter({ neighborhood: "nemiga" });
  });

  sortButton.addEventListener("click", () => {
    openFilterPanel();
  });

  mapPreviewClose.addEventListener("click", hideMapPreview);

  confirmBooking.addEventListener("click", () => {
    updateReservation();
    showToast(`Бронь подтверждена: ${selectedBooking.restaurant}, ${selectedBooking.time}`);
    setScreen("reservations");
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => setScreen(tab.dataset.tab));
  });

  bindClick("[data-home-search]", (button) => openSearchWithFilter({ activeFilter: button.dataset.homeSearch }));
  bindClick("[data-cuisine-jump]", (button) => openSearchWithFilter({ cuisine: button.dataset.cuisineJump }));
  bindClick("[data-area-jump]", (button) => openSearchWithFilter({ neighborhood: button.dataset.areaJump }));
  bindClick("[data-home-restaurant]", (button) => openSearchWithFilter({ restaurantId: button.dataset.homeRestaurant }));

  document.querySelector(".back-button").addEventListener("click", () => setScreen(previousScreen));

  initMapSheetDrag();
  initFilterPanel();
  hideDrawer();
  updatePartyLabels();
  renderHomeDinnerCarousel();
  renderAll();
  updateReservation();
})();
