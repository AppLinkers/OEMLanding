const tabItem = document.querySelectorAll(".label-list a");
const tabDiv = document.querySelectorAll(".home-target-div");

tabItem.forEach((tab, idx) => {

    tab.addEventListener("click", function () {
        tabDiv.forEach(div => {
            div.classList.remove("active");
        })
        tabItem.forEach(item => {
            item.classList.remove("active")
        })

        tabItem[idx].classList.add("active");
        tabDiv[idx].classList.add("active");

    })

})