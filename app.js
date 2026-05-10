(function () {
  const root = document.documentElement;
  const htmlLang = root.getAttribute("lang") || "ru";
  const storageKey = "resume_prefs_v1";
  const prefs = loadPrefs();

  // Language: default RU, remember user choice
  const initLang = prefs.lang || "ru";
  applyLang(initLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyLang(lang);
      savePrefs({ lang });
    });
  });

  // Theme
  const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initTheme = prefs.theme || (systemDark ? "dark" : "light");
  applyTheme(initTheme);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    savePrefs({ theme: next });
  });

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☼" : "◐";
  }

  function applyLang(lang) {
    if (!window.I18N || !window.I18N[lang]) return;
    const t = window.I18N[lang];

    document.documentElement.setAttribute("lang", lang);
    document.title = lang === "ru"
      ? "Галкин Никита Владимирович — Системный аналитик"
      : "Nikita Galkin — Systems Analyst";

    // text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] === undefined) return;
      if (key.endsWith("_body") || key === "about_body") {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });

    // lists
    document.querySelectorAll("[data-i18n-list]").forEach(ul => {
      const key = ul.dataset.i18nList;
      const items = t[key];
      if (!Array.isArray(items)) return;
      ul.innerHTML = items.map(li => `<li>${escapeHtml(li)}</li>`).join("");
    });

    // active button
    document.querySelectorAll(".lang-btn").forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active);
    });
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function loadPrefs() {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; }
    catch (e) { return {}; }
  }

  function savePrefs(patch) {
    const cur = loadPrefs();
    const next = Object.assign({}, cur, patch);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch (e) {}
  }
})();
