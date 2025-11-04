document.addEventListener("DOMContentLoaded", () => {
    
    // --- Tabbed Interface Logic ---
    const tabNavItems = document.querySelectorAll(".tab-nav-item");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabNavItems.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetId = tab.getAttribute("data-tab");
            const targetPane = document.getElementById(targetId);

            tabNavItems.forEach(item => item.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            tab.classList.add("active");
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });
});