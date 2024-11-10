const sidebar = document.querySelector(".sidebar");
const iframe = document.getElementById("mainIframe");
const url = "https://script.google.com/macros/s/AKfycbxhXfzRDIDmq_5YbdOwJhf8-FQCLNklg_rnfbgYSs1R6cTYGWmmSvNpM0z8XymoV8NYlg/exec?k=9XXSTi3hE3CGHBskc5bu";

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

function initializeSidebar(sections) {
    sections.forEach((section, sectionIndex) => {
        const titleElement = document.createElement("h3");
        titleElement.textContent = section.title;
        sidebar.appendChild(titleElement);

        section.links.forEach((lk, linkIndex) => {
            const linkElement = document.createElement("a");
            linkElement.textContent = lk.title;
            linkElement.href = '#';
            linkElement.addEventListener("click", (event) => {
                event.preventDefault();
                document.getElementById("sidebar").classList.remove("active");
                iframe.src = `https://${lk.base}.github.io/${lk.page}`;
            });
            sidebar.appendChild(linkElement);
        });
    });
}

fetch(url).then(async x => initializeSidebar(await x.json()));
