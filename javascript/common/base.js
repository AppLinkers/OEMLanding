async function fetchAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(targetDiv, page) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText(page);
}

importPage('header', "/html/common/header.html");
importPage('nav', "/html/common/nav.html");
importPage('login_div', "/html/common/login_div.html");
importPage('footer', "/html/common/footer.html");