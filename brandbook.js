(function () {
  const toast = document.getElementById("toast");
  const editor = window.VecharThemeEditor;
  const controls = document.querySelectorAll("[data-theme-field]");
  const resetButton = document.getElementById("resetTheme");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1600);
  }

  document.querySelectorAll("[data-hex]").forEach((button) => {
    button.addEventListener("click", async () => {
      const hex = button.dataset.hex;
      try {
        await navigator.clipboard.writeText(hex);
        showToast(`Скопировано ${hex}`);
      } catch {
        showToast(hex);
      }
    });
  });

  document.querySelectorAll(".demo-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".demo-chip").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  function formatValue(field, value) {
    if (field === "cardWidth") return `${value}px`;
    if (field.includes("Scale")) return `${Math.round(Number(value) * 100)}%`;
    return value;
  }

  function syncControls(theme) {
    controls.forEach((control) => {
      const field = control.dataset.themeField;
      control.value = theme[field];
      const output = document.querySelector(`[data-theme-output="${field}"]`);
      if (output) output.textContent = formatValue(field, theme[field]);
    });
  }

  function currentThemeFromControls() {
    const theme = editor.read();
    controls.forEach((control) => {
      theme[control.dataset.themeField] = control.value;
    });
    return theme;
  }

  if (editor) {
    syncControls(editor.read());

    controls.forEach((control) => {
      control.addEventListener("input", () => {
        const theme = currentThemeFromControls();
        editor.save(theme);
        syncControls(theme);
      });
    });

    resetButton.addEventListener("click", () => {
      editor.reset();
      syncControls(editor.read());
      showToast("Настройки сброшены");
    });
  }
})();
