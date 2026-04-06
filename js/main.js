(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("SITE_CONFIG missing. Load config.js before main.js.");
    return;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---- Inject content from config ---- */
  $("#site-name").textContent = cfg.name;
  $("#site-name-footer").textContent = cfg.name;
  $("#hero-name").textContent = cfg.name;
  $("#hero-tagline").textContent = cfg.tagline;
  $("#hero-bio").textContent = cfg.shortBio;
  $("#contact-email-display").textContent = cfg.email;
  $("#contact-email-display").href = "mailto:" + encodeURIComponent(cfg.email);

  const linkedin = $("#nav-linkedin");
  const github = $("#nav-github");
  if (cfg.social?.linkedin) linkedin.href = cfg.social.linkedin;
  if (cfg.social?.github) github.href = cfg.social.github;

  $("#hero-location").textContent = cfg.location || "";

  /* Experience */
  const experienceSection = $("#experience");
  const experienceList = $("#experience-list");
  const expItems = cfg.experience || [];
  if (expItems.length) {
    experienceSection.hidden = false;
    experienceList.innerHTML = "";
    expItems.forEach((job) => {
      experienceList.appendChild(renderExperienceItem(job));
    });
  }

  /* Education */
  const educationSection = $("#education");
  const educationList = $("#education-list");
  const eduItems = cfg.education || [];
  if (eduItems.length) {
    educationSection.hidden = false;
    educationList.innerHTML = "";
    eduItems.forEach((edu) => {
      educationList.appendChild(renderEducationItem(edu));
    });
  }

  /* Projects */
  const grid = $("#projects-grid");
  grid.innerHTML = "";
  (cfg.projects || []).forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const thumbInner = p.image
      ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" />`
      : `<span>Project preview</span>`;
    const tags = (p.tags || [])
      .map((t) => `<span>${escapeHtml(t)}</span>`)
      .join("");
    card.innerHTML = `
      <div class="project-thumb">${thumbInner}</div>
      <div class="project-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-links">
          <a href="${escapeAttr(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Live site →</a>
          <a href="${escapeAttr(p.repoUrl)}" target="_blank" rel="noopener noreferrer">GitHub →</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  /* Skills*/
  const skillsBars = $("#skills-bars");
  skillsBars.innerHTML = "";
  (cfg.skillCategories || []).forEach((cat) => {
    const wrap = document.createElement("div");
    wrap.className = "skill-category";
    wrap.innerHTML = `<h3>${escapeHtml(cat.name)}</h3>`;
    (cat.skills || []).forEach((s) => {
      const row = document.createElement("div");
      row.className = "skill-row";
      row.innerHTML = `
        <div class="skill-label">
          <span>${escapeHtml(s.name)}</span>
          <span>${s.level}%</span>
        </div>
        <div class="skill-track">
          <div class="skill-fill" style="--target: ${Number(s.level)}%" data-level="${Number(s.level)}"></div>
        </div>
      `;
      wrap.appendChild(row);
    });
    skillsBars.appendChild(wrap);
  });

  /* Languages */
  const languagesSection = $("#languages");
  const languagesList = $("#languages-list");
  const langItems = cfg.languages || [];
  if (langItems.length) {
    languagesSection.hidden = false;
    languagesList.innerHTML = "";
    langItems.forEach((lang) => {
      languagesList.appendChild(renderLanguageItem(lang));
    });
  }

  /* Formspree form action */
  const form = $("#contact-form");
  if (cfg.formspreeEndpoint && !cfg.formspreeEndpoint.includes("YOUR_FORM_ID")) {
    form.action = cfg.formspreeEndpoint;
    form.removeAttribute("data-needs-setup");
  } else {
    form.setAttribute("data-needs-setup", "true");
  }

  form.addEventListener("submit", async (e) => {
    if (form.getAttribute("data-needs-setup") === "true") {
      e.preventDefault();
      setFormStatus(
        $("#form-status"),
        "error",
        "Set formspreeEndpoint in config.js to your Formspree URL, then reload."
      );
      return;
    }

    e.preventDefault();
    const status = $("#form-status");
    setFormStatus(status, "", "Sending…");

    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus(status, "success", "Thanks — your message was sent.");
        form.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setFormStatus(
          status,
          "error",
          err.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      setFormStatus(status, "error", "Network error. Check your connection and try again.");
    }
  });

  /* Animate skill bars on scroll */
  const fills = $$(".skill-fill");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  fills.forEach((el) => io.observe(el));

  function setFormStatus(el, cls, msg) {
    el.className = "form-status" + (cls ? " " + cls : "");
    el.textContent = msg;
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function formatDateRange(start, end) {
    const a = (start || "").trim();
    const b = (end || "").trim();
    if (!a && !b) return "";
    if (!a) return b;
    if (!b) return a;
    return a + " — " + b;
  }

  function renderHighlights(items) {
    if (!items || !items.length) return "";
    const lis = items.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
    return `<ul class="resume-highlights">${lis}</ul>`;
  }

  function renderExperienceItem(job) {
    const article = document.createElement("article");
    article.className = "resume-item";
    const range = formatDateRange(job.start, job.end);
    const loc = (job.location || "").trim();
    const locHtml = loc
      ? `<p class="resume-item-location">${escapeHtml(loc)}</p>`
      : "";
    const summary = (job.summary || "").trim();
    const summaryHtml = summary
      ? `<p class="resume-item-summary">${escapeHtml(summary)}</p>`
      : "";
    article.innerHTML = `
      <div class="resume-item-header">
        <div>
          <h3 class="resume-item-title">${escapeHtml(job.title || "")}</h3>
          <p class="resume-item-org"><strong>${escapeHtml(job.company || "")}</strong></p>
        </div>
        ${range ? `<p class="resume-item-dates">${escapeHtml(range)}</p>` : ""}
      </div>
      ${locHtml}
      ${summaryHtml}
      ${renderHighlights(job.highlights)}
    `;
    return article;
  }

  function renderEducationItem(edu) {
    const article = document.createElement("article");
    article.className = "resume-item";
    const range = formatDateRange(edu.start, edu.end);
    const loc = (edu.location || "").trim();
    const locHtml = loc
      ? `<p class="resume-item-location">${escapeHtml(loc)}</p>`
      : "";
    const details = (edu.details || "").trim();
    const detailsHtml = details
      ? `<p class="resume-item-details">${escapeHtml(details)}</p>`
      : "";
    article.innerHTML = `
      <div class="resume-item-header">
        <div>
          <h3 class="resume-item-title">${escapeHtml(edu.degree || "")}</h3>
          <p class="resume-item-org"><strong>${escapeHtml(edu.school || "")}</strong></p>
        </div>
        ${range ? `<p class="resume-item-dates">${escapeHtml(range)}</p>` : ""}
      </div>
      ${locHtml}
      ${detailsHtml}
      ${renderHighlights(edu.highlights)}
    `;
    return article;
  }

  function renderLanguageItem(lang) {
    const wrap = document.createElement("div");
    const level =
      typeof lang.level === "number" && !Number.isNaN(lang.level)
        ? Math.min(100, Math.max(0, lang.level))
        : null;

    if (level !== null) {
      wrap.className = "language-item language-item--bar";
      wrap.innerHTML = `
        <div class="skill-row">
          <div class="skill-label">
            <span>${escapeHtml(lang.name || "")}</span>
            <span>${level}%</span>
          </div>
          <div class="skill-track">
            <div class="skill-fill" style="--target: ${level}%" data-level="${level}"></div>
          </div>
        </div>
        ${
          (lang.proficiency || "").trim()
            ? `<p class="language-item-note">${escapeHtml(lang.proficiency.trim())}</p>`
            : ""
        }
      `;
      return wrap;
    }

    wrap.className = "language-item language-row-simple";
    wrap.innerHTML = `
      <span class="language-name">${escapeHtml(lang.name || "")}</span>
      <span class="language-proficiency">${escapeHtml(lang.proficiency || "")}</span>
    `;
    return wrap;
  }

  /* Scroll-triggered section reveals */
  (function initScrollMotion() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      document.querySelectorAll("main section.js-reveal-section").forEach((el) => {
        el.classList.add("is-inview");
      });
      return;
    }
    document.body.classList.add("motion-ok", "hero-ready");

    const sections = document.querySelectorAll("main section.js-reveal-section");
    const sectionIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-inview");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((s) => sectionIo.observe(s));
  })();
})();
