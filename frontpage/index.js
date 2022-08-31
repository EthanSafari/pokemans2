window.addEventListener("DOMContentLoaded", () => {
    chooseRandomPokeman();
    topPanelToggle();
});

const chooseRandomPokeman = function () {
    const randomPkmButton = document.getElementById("random");
    randomPkmButton.addEventListener("click", (event) => {

    });
};

const topPanelToggle = function () {
    const topToggleButton = document.querySelector(".top-panel-toggle");
    topToggleButton.addEventListener("click", () => {
        const wrapper = document.querySelector(".wrapper");
        wrapper.classList.toggle("top-panel-open");
    });
};
