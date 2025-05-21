// Data singkat untuk 36 unsur pertama (bisa dilengkapi lagi)
const elements = [
    // Baris 1
    { number: 1, symbol: 'H', name: 'Hidrogen', category: 'nonmetal', x: 1, y: 1 },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', x: 18, y: 1 },
    // Baris 2
    { number: 3, symbol: 'Li', name: 'Litium', category: 'alkali-metal', x: 1, y: 2 },
    { number: 4, symbol: 'Be', name: 'Berilium', category: 'alkaline-earth-metal', x: 2, y: 2 },
    { number: 5, symbol: 'B', name: 'Bor', category: 'metalloid', x: 13, y: 2 },
    { number: 6, symbol: 'C', name: 'Karbon', category: 'nonmetal', x: 14, y: 2 },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', x: 15, y: 2 },
    { number: 8, symbol: 'O', name: 'Oksigen', category: 'nonmetal', x: 16, y: 2 },
    { number: 9, symbol: 'F', name: 'Fluorin', category: 'halogen', x: 17, y: 2 },
    { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', x: 18, y: 2 },
    // Baris 3
    { number: 11, symbol: 'Na', name: 'Natrium', category: 'alkali-metal', x: 1, y: 3 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth-metal', x: 2, y: 3 },
    { number: 13, symbol: 'Al', name: 'Aluminium', category: 'post-transition-metal', x: 13, y: 3 },
    { number: 14, symbol: 'Si', name: 'Silikon', category: 'metalloid', x: 14, y: 3 },
    { number: 15, symbol: 'P', name: 'Fosfor', category: 'nonmetal', x: 15, y: 3 },
    { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', x: 16, y: 3 },
    { number: 17, symbol: 'Cl', name: 'Klorin', category: 'halogen', x: 17, y: 3 },
    { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', x: 18, y: 3 },
    // Baris 4
    { number: 19, symbol: 'K', name: 'Kalium', category: 'alkali-metal', x: 1, y: 4 },
    { number: 20, symbol: 'Ca', name: 'Kalsium', category: 'alkaline-earth-metal', x: 2, y: 4 },
    { number: 21, symbol: 'Sc', name: 'Skandium', category: 'transition-metal', x: 3, y: 4 },
    { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', x: 4, y: 4 },
    { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', x: 5, y: 4 },
    { number: 24, symbol: 'Cr', name: 'Kromium', category: 'transition-metal', x: 6, y: 4 },
    { number: 25, symbol: 'Mn', name: 'Mangan', category: 'transition-metal', x: 7, y: 4 },
    { number: 26, symbol: 'Fe', name: 'Besi', category: 'transition-metal', x: 8, y: 4 },
    { number: 27, symbol: 'Co', name: 'Kobalt', category: 'transition-metal', x: 9, y: 4 },
    { number: 28, symbol: 'Ni', name: 'Nikel', category: 'transition-metal', x: 10, y: 4 },
    { number: 29, symbol: 'Cu', name: 'Tembaga', category: 'transition-metal', x: 11, y: 4 },
    { number: 30, symbol: 'Zn', name: 'Seng', category: 'transition-metal', x: 12, y: 4 },
    { number: 31, symbol: 'Ga', name: 'Galium', category: 'post-transition-metal', x: 13, y: 4 },
    { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', x: 14, y: 4 },
    { number: 33, symbol: 'As', name: 'Arsen', category: 'metalloid', x: 15, y: 4 },
    { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', x: 16, y: 4 },
    { number: 35, symbol: 'Br', name: 'Bromin', category: 'halogen', x: 17, y: 4 },
    { number: 36, symbol: 'Kr', name: 'Kripton', category: 'noble-gas', x: 18, y: 4 }
    // Data bisa ditambah untuk unsur lain.
  ];
  
  // Membuat grid
  function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    // Buat 7 baris x 18 kolom (period 1-7, group 1-18)
    for (let y = 1; y <= 7; y++) {
      for (let x = 1; x <= 18; x++) {
        const element = elements.find(el => el.x === x && el.y === y);
        const elDiv = document.createElement('div');
        elDiv.className = 'element' + (element ? ' ' + element.category : '');
        if (element) {
          elDiv.innerHTML = `
            <span class="number">${element.number}</span>
            <span class="symbol">${element.symbol}</span>
            <span class="name">${element.name}</span>
          `;
          // Tooltip info
          elDiv.title = `${element.name} (${element.symbol})\nNomor Atom: ${element.number}`;
        } else {
          elDiv.innerHTML = '';
          elDiv.style.background = 'none';
          elDiv.style.border = 'none';
          elDiv.style.cursor = 'default';
        }
        table.appendChild(elDiv);
      }
    }
  }
  createPeriodicTable();