async function fetchAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(targetDiv, page) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText(page);
}

importPage('header', "../common/header_admin.html");
importPage('nav', "../common/nav_admin.html");


// 삭제 모달창
const lists = document.querySelectorAll(".list-item");
const modal = document.querySelector(".modal");
const modalTitle = modal.querySelector(".modal-item-title");
const modalCancel = modal.querySelector(".modal-cancel");
const modalDelete = modal.querySelector(".modal-delete");

lists.forEach(list => {

    const listTitle = list.querySelector(".list-title");
    const btn = list.querySelector(".delete-button");

    btn.addEventListener("click", () => {
        modal.classList.add("active");
        modalTitle.innerHTML = "'" + listTitle.innerHTML + "'";
    })
})



function closeModal(button) {
    button.addEventListener("click", () => {
        modal.classList.remove("active");
    })
}

closeModal(modalCancel);
closeModal(modalDelete);



