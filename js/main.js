function init() {
  const navbar = document.querySelector(".navbar");
  const nav_toggle = document.querySelector(".navbar__toggle");
  const click_to_close = document.querySelector(".click-to-close");
  const to_top = document.querySelector(".to-top");

  function toggleNav() {
    navbar.classList.toggle("open");
    click_to_close.classList.toggle("open");
  }

  nav_toggle && nav_toggle.addEventListener("click", toggleNav);
  click_to_close && click_to_close.addEventListener("click", toggleNav);

  const dashboard_sidebar = document.querySelector(".dashboard__sidebar");
  const dashboard_expander = document.querySelector(".dashboard__expander");

  function toggleDashboardSidebar() {
    dashboard_sidebar.classList.toggle("open");
  }

  dashboard_expander &&
    dashboard_expander.addEventListener("click", toggleDashboardSidebar);

  function handleToTop() {
    if (window.scrollY > 50) {
      to_top.classList.add("visible");
    } else {
      to_top.classList.remove("visible");
    }
  }

  handleToTop();

  to_top && window.addEventListener("scroll", handleToTop);
}

document.addEventListener("DOMContentLoaded", init);
