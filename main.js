


const cdnBase = "https://knightgamesdev.github.io/static/";

const USE_CDN = true; //local -> false, online -> true

document.addEventListener("DOMContentLoaded", () => {
    if (USE_CDN) {
      document.querySelectorAll('[src], [href]').forEach(el => {
        const attr = el.hasAttribute('src') ? 'src' : 'href';
        const value = el.getAttribute(attr);
  
        if (value && value.includes("static/")) {
          const staticIndex = value.indexOf("static/");
          const relativePath = value.slice(staticIndex + "static/".length);
          el.setAttribute(attr, cdnBase + relativePath);
        }
      });
    }
  });