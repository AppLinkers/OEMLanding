async function fetchAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(targetDiv, page) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText(page);
}

importPage('header', "../common/header.html");
importPage('nav', "../common/nav.html");
importPage('login_div', "../common/login_div.html");
importPage('footer', "../common/footer.html");