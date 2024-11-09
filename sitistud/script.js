const sidebar = document.querySelector(".sidebar");
const iframe = document.getElementById("mainIframe");
//const url = "https://script.google.com/macros/s/AKfycbzpUVk3t742shuNKbhd77oPHjR94gkwqycavm_8xqajJFC_VTnjEexzPImpH58O79Fj3w/exec?k=9XXSTi3hE3CGHBskc5bu";
const url = "https://script.google.com/macros/s/AKfycbytqhT0vrxACZJdmdGRfd_YEa3sgZC4ctnWB8LKTDZbd9P_eoVjSfhJFkMmQFssu6Iy2w/exec?k=9XXSTi3hE3CGHBskc5bu";

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
            linkElement.textContent = lk.base.replace(/\b\w/g, (char) => char.toUpperCase());
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
