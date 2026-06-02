(function () {
  const STORAGE_KEY = "vecharBookingTheme";
  const CHANNEL_NAME = "vechar-booking-theme";
  const DEFAULT_THEME = {
    wine600: "#8f2638",
    wine700: "#741d2c",
    cream100: "#fbf6f1",
    ink900: "#21191b",
    fontScale: "1",
    radiusScale: "1",
    cardWidth: "290",
    slotScale: "1",
  };

  const CSS_VARS = {
    wine600: "--wine-600",
    wine700: "--wine-700",
    cream100: "--cream-100",
    ink900: "--ink-900",
  };

  const channel = "BroadcastChannel" in window ? new BroadcastChannel(CHANNEL_NAME) : null;

  function clampNumber(value, fallback, min, max) {
    const number = Number(value);
    if (!Number.isFinite(number)) return fallback;
    return Math.min(Math.max(number, min), max);
  }

  function normalizeTheme(theme) {
    return {
      ...DEFAULT_THEME,
      ...theme,
      fontScale: String(clampNumber(theme.fontScale, Number(DEFAULT_THEME.fontScale), 0.9, 1.14)),
      radiusScale: String(clampNumber(theme.radiusScale, Number(DEFAULT_THEME.radiusScale), 0.75, 1.45)),
      cardWidth: String(clampNumber(theme.cardWidth, Number(DEFAULT_THEME.cardWidth), 250, 330)),
      slotScale: String(clampNumber(theme.slotScale, Number(DEFAULT_THEME.slotScale), 0.85, 1.24)),
    };
  }

  function readTheme() {
    try {
      return normalizeTheme(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
    } catch {
      return normalizeTheme(DEFAULT_THEME);
    }
  }

  function applyTheme(theme) {
    const safeTheme = normalizeTheme(theme);
    Object.entries(CSS_VARS).forEach(([key, cssVar]) => {
      document.documentElement.style.setProperty(cssVar, safeTheme[key]);
    });

    const radiusScale = Number(safeTheme.radiusScale);
    const slotScale = Number(safeTheme.slotScale);
    const fontScale = Number(safeTheme.fontScale);
    document.documentElement.style.setProperty("--editor-font-size", `${16 * fontScale}px`);
    document.documentElement.style.setProperty("--editor-radius-8", `${8 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-9", `${9 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-10", `${10 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-13", `${13 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-14", `${14 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-15", `${15 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-16", `${16 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-20", `${20 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-radius-26", `${26 * radiusScale}px`);
    document.documentElement.style.setProperty("--editor-slot-pad-sm", `${7 * slotScale}px ${9 * slotScale}px`);
    document.documentElement.style.setProperty("--editor-slot-pad-md", `${8 * slotScale}px ${13 * slotScale}px`);
    document.documentElement.style.setProperty("--editor-slot-pad-lg", `${9 * slotScale}px ${12 * slotScale}px`);
    document.documentElement.style.setProperty("--editor-button-pad", `${12 * slotScale}px ${16 * slotScale}px`);
    document.documentElement.style.setProperty("--editor-card-width-px", `${Number(safeTheme.cardWidth)}px`);
  }

  function saveTheme(theme) {
    const nextTheme = normalizeTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTheme));
    } catch {
      // Theme still applies in this tab when storage is unavailable.
    }
    applyTheme(nextTheme);
    if (channel) channel.postMessage(nextTheme);
  }

  function resetTheme() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore blocked storage; reset can still update the current page.
    }
    applyTheme(DEFAULT_THEME);
    if (channel) channel.postMessage(DEFAULT_THEME);
  }

  window.VecharThemeEditor = {
    defaults: DEFAULT_THEME,
    read: readTheme,
    apply: applyTheme,
    save: saveTheme,
    reset: resetTheme,
  };

  applyTheme(readTheme());

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) applyTheme(readTheme());
  });

  if (channel) {
    channel.addEventListener("message", (event) => {
      applyTheme(normalizeTheme(event.data || {}));
    });
  }
})();
