const sidebar = document.querySelector(".sidebar");
const iframe = document.getElementById("mainIframe");
const url = "https://script.google.com/macros/s/AKfycbzpUVk3t742shuNKbhd77oPHjR94gkwqycavm_8xqajJFC_VTnjEexzPImpH58O79Fj3w/exec?k=9XXSTi3hE3CGHBskc5bu";

function initializeSidebar(sections) {
    sections.forEach((section, sectionIndex) => {
        const titleElement = document.createElement("h3");
        titleElement.textContent = section.title;
        sidebar.appendChild(titleElement);

        section.links.forEach((name, linkIndex) => {
            const linkElement = document.createElement("a");
            linkElement.textContent = name.replace(/\b\w/g, (char) => char.toUpperCase());
            linkElement.href = '#';
            linkElement.addEventListener("click", (event) => {
                event.preventDefault();
                iframe.src = `https://${name}.github.io`;
            });
            sidebar.appendChild(linkElement);
        });
    });
}

fetch(url).then(async x => initializeSidebar(await x.json()));
