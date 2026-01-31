// logic.js
let items = JSON.parse(localStorage.getItem('db_items')) || {};
let batches = JSON.parse(localStorage.getItem('db_batches')) || {};

function sync() {
    localStorage.setItem('db_items', JSON.stringify(items));
    localStorage.setItem('db_batches', JSON.stringify(batches));
}

function downloadAsJS() {
    // This creates the actual text for your .js database file
    const fileContent = `var imported_items = ${JSON.stringify(items, null, 4)};\nvar imported_batches = ${JSON.stringify(batches, null, 4)};`;
    const blob = new Blob([fileContent], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "database.js";
    link.click();
}
