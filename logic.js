// Data Storage
let items = JSON.parse(localStorage.getItem('db_items')) || {};
let batches = JSON.parse(localStorage.getItem('db_batches')) || {};

// Settings Storage
let settings = JSON.parse(localStorage.getItem('db_settings')) || {
    style: 'modern',
    theme: 'blue',
    appearance: 'system'
};

function sync() {
    localStorage.setItem('db_items', JSON.stringify(items));
    localStorage.setItem('db_batches', JSON.stringify(batches));
}

function saveSettings() {
    localStorage.setItem('db_settings', JSON.stringify(settings));
    applyVisuals();
}

/**
 * applyVisuals: Applies CSS classes to documentElement.
 * This works in tandem with the Anti-Flash script in the HTML heads.
 */
function applyVisuals() {
    const html = document.documentElement;
    
    // Clean old classes
    html.className = html.className.split(' ').filter(c => 
        !c.startsWith('style-') && !c.startsWith('theme-') && !c.startsWith('mode-')
    ).join(' ');
    
    // Apply new classes
    html.classList.add(`style-${settings.style}`);
    html.classList.add(`theme-${settings.theme}`);
    
    let activeMode = settings.appearance;
    if (settings.style === 'terminal') {
        activeMode = 'dark';
    } else if (activeMode === 'system') {
        activeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    html.classList.add(`mode-${activeMode}`);

    const scanline = document.querySelector('.scanline');
    if (scanline) {
        scanline.style.display = settings.style === 'terminal' ? 'block' : 'none';
    }
}

// Ensure visuals are updated if system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (settings.appearance === 'system') applyVisuals();
});

function downloadAsJS() {
    const fileContent = `var imported_items = ${JSON.stringify(items, null, 4)};\nvar imported_batches = ${JSON.stringify(batches, null, 4)};`;
    const blob = new Blob([fileContent], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "database.js";
    link.click();
}

// Trigger visuals on DOM ready
window.addEventListener('DOMContentLoaded', applyVisuals);