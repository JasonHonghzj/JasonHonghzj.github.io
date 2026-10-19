const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const reveals = document.querySelectorAll(".reveal");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const projectTriggers = document.querySelectorAll("[data-project-dialog]");
const projectDialogs = document.querySelectorAll(".project-dialog");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let hasThemeOverride = false;
try {
  hasThemeOverride = ["light", "dark"].includes(localStorage.getItem("portfolio-theme"));
} catch {
  // System appearance remains available without browser storage.
}

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.13 },
);

reveals.forEach((element) => {
  if (element.dataset.delay) element.style.setProperty("--delay", `${element.dataset.delay}ms`);
  revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-30% 0px -60%", threshold: [0, 0.2, 0.6] },
);

sections.forEach((section) => sectionObserver.observe(section));

const updateThemeControl = () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle?.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeColor?.setAttribute("content", isDark ? "#161c18" : "#f6f2e9");
};

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  hasThemeOverride = true;
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch {
    // The theme still applies for this visit when storage is unavailable.
  }
  updateThemeControl();
});

systemTheme.addEventListener("change", (event) => {
  if (hasThemeOverride) return;
  document.documentElement.dataset.theme = event.matches ? "dark" : "light";
  updateThemeControl();
});

updateThemeControl();

projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const dialog = document.getElementById(trigger.dataset.projectDialog);
    if (!(dialog instanceof HTMLDialogElement)) return;
    dialog.showModal();
    dialog.querySelector(".project-dialog__shell").scrollTop = 0;
    dialog.querySelector("[data-close-dialog]")?.focus();
  });
});

projectDialogs.forEach((dialog) => {
  dialog.querySelector("[data-close-dialog]")?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});
