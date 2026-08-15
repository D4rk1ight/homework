export const tabs = () => {
  const tabsRoot = document.querySelector(".about__tabs");

  if (!tabsRoot) return;

  const tabList = tabsRoot.querySelector(".about__tabs-list");
  const tabButtons = tabsRoot.querySelectorAll(".about__tab[data-tab-panel]");
  const tabPanels = tabsRoot.querySelectorAll(".about__panel[data-tab-panel]");

  if (!tabList || !tabButtons.length || !tabPanels.length) return;

  const showPanel = targetPanelName => {
    tabButtons.forEach(button => {
      const isActive = button.dataset.tabPanel === targetPanelName;

      button.classList.toggle("about__tab--active", isActive);
      button.setAttribute("aria-selected", isActive.toString());
    });

    tabPanels.forEach(panel => {
      const isActive = panel.dataset.tabPanel === targetPanelName;

      panel.classList.toggle("about__panel--active", isActive);
      panel.hidden = !isActive;
    });
  };

  tabButtons.forEach(button => {
    const panel = [...tabPanels].find(
      item => item.dataset.tabPanel === button.dataset.tabPanel,
    );

    if (!panel) return;

    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", panel.id);
    panel.setAttribute("role", "tabpanel");
  });

  tabList.setAttribute("role", "tablist");

  tabList.addEventListener("click", event => {
    const clickedTab = event.target.closest(".about__tab[data-tab-panel]");

    if (!clickedTab || !tabList.contains(clickedTab)) return;

    showPanel(clickedTab.dataset.tabPanel);
  });

  const activeTab =
    tabsRoot.querySelector(".about__tab--active[data-tab-panel]") ||
    tabButtons[0];

  showPanel(activeTab.dataset.tabPanel);
};
