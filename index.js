window.onload = (event) => {
    console.log("Page Loaded!");
    generateCopyrightDate();
}

function setTextContentOfClass(className, textContent) {
    [...document.getElementsByClassName(className)].forEach(element => {
        element.innerText = textContent;
    });

}

function generateCopyrightDate(targetClass = "copyright-date", startYear = 2021) {
    const now = new Date();
    const currentYear = now.getFullYear();
    setTextContentOfClass(targetClass, (currentYear === startYear) ? `${startYear}` : `${startYear} - ${currentYear}`);
}
