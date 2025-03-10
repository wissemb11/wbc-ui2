import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  setup() {
    document.addEventListener("DOMContentLoaded", () => {
      const sidebarLinks = document.querySelectorAll(".sidebar-link");
      sidebarLinks.forEach((link) => {
        link.style.fontSize = "18px"; // Change font size
        link.style.fontWeight = "bold"; // Make it bold
        link.style.color = "#ff5733"; // Custom color
      });
    });
  },
});
