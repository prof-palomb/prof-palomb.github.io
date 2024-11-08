/*const urlSections = [
    {
        title: "2A Arredo",
        links: [
            "adarkar",
            "prof-palomb"
        ]
    },
    {
        title: "2B Moda",
        links: [
        ]
    },
    {
        title: "2C Moda",
        links: [
        ]
    }
];*/

const sidebar = document.querySelector(".sidebar");
const iframe = document.getElementById("mainIframe");

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

fetch("https://script.google.com/macros/s/AKfycbwmqs4QbJXPiVSpwBL0FFzAXCosSxbz6ndY4yPbYlwdEGJpj5KKYGl1yB-5_RlmBkCp0A/exec?x=sitistud").then(async x => {
    initializeSidebar(await x.json());
});