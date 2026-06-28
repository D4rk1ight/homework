// export const tabs = () => {
//   const allTabsButton = document.querySelectorAll('[data-tabs="button"]');
//   const tabPanel = document.querySelector('[data-tabs="list"]');

//   const handleSizeClick = event => {
//     const target = event.target;
//     if (!target.classList.contains("about__tab")) return;

//     allTabsButton.forEach(button =>
//       button.classList.remove("about__tab--active"),
//     );

//     tabPanel.classList.add("about__panel--active");
//   };

//   tabPanel.addEventListener("click", handleSizeClick);
// };

const tabList = document.querySelector(".about__tabs-list");
const tabButton = document.querySelectorAll(".about__tab");
const tabPanels = document.querySelectorAll(".about__panel");

tabList.addEventListener("click", event => {
  const clickedTab = event.target.closest(".about__tab");

  const activeTab = ;


  if (!clickedTab) return;

  tabButton.forEach(button => {
    button.classList.remove("about__tab--active");
  });

  tabPanels.forEach(panel => {
    if ((panel.id = tabPanels.id)) {
      panel.classList.remove("about__panel--active");
      panel.hidden = true;
    }
  });

  clickedTab.classList.add("about__tab--active");
});
console.log("test-test-test");
