const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");
const result = document.getElementById("result");
const button = document.getElementById("spinButton");

let nbr_items = 16;

let epitet_array = [
'Vis',
'Modig',
'Stark',
'Listig',
'Godhjärtad',
'Skarpsinnig',
'Mäktig',
'Rättvis',
'Långsamm',
'Vacker',
'Tystlåtnen',
'Eldig',
'Klok',
'Grym',
'Glad',
'Envis',
'Ödmjuk',
'Rastlös',
'Slug',
'Trogen',
'Stolt',
'Hederlig',
'Snabb',
'Tankfull',
'Gåtfull',
'Fruktad',
'Svartsjuk',
'Naive',
'Förförisk',
'Hänsynslös',
'Syndig',
'Maktkåt',
'Obarmhärtig',
'Sensuell',
'Förtrollande',
'Lättsinnig',
'Vällustig',
'Demonisk',
'Besatt',
'Opålitlig',
'Skamlös',
'Kallsinnig',
'Förtvivlad',
'Hämndlysten',
'Moraliskt skev',
]

let empower_array = [
'Väldigt',
'Otroligt',
'Extremt',
'Enormt',
'Fullkomligt',
'Helt',
'Totalt',
'Absolut',
'Riktigt',
'Fruktansvärt',
'Djävulskt',
'Oerhört',
'Djupt',
'Rått',
'Vansinnigt',
'Förbaskat',
'Jävligt',
'Helvetiskt',
'Rent ut',
'Maximalt',
'Minimalt',
'Smått',
]

function pickRandomItems(arr, count) {
  // Create a shallow copy and shuffle it using Fisher-Yates
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Return first 'count' items
  return shuffled.slice(0, count);
}

let rotation1 = 0;
let rotation2 = 0;

button.addEventListener("click", () => {
  const segmentAngle = 360 / nbr_items; // ✅ 16 segments

  const randomIndex1 = Math.floor(Math.random() * nbr_items);
  const randomIndex2 = Math.floor(Math.random() * nbr_items);

  // ✅ Adjust rotation to align with bottom pointer
  const offset = 90; // Because pointer is at bottom (180° away from top)

  rotation1 += 360 * 5 + (randomIndex1 * segmentAngle) + offset;
  rotation2 -= 360 * 5 + (randomIndex2 * segmentAngle) + offset;

  wheel1.style.transform = `rotate(${rotation1}deg)`;
  wheel2.style.transform = `rotate(${rotation2}deg)`;

  let array1 = pickRandomItems(empower_array, 16);
  let array2 = pickRandomItems(epitet_array, 16);

  setTimeout(() => {
    result.textContent = array1[randomIndex1] + ' ' + array2[randomIndex2];
  }, 8000);
});
