oylar = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
son = [" 6 ", " 7 ", " 8 ", " 9 ", " 10", " 11", " 12"];
let kunlar = [];
function calendar(yil, oy) {
  console.log("     ", yil, "   ", oylar[oy - 1]);
  console.log(...week);
  let oyuzunlik = new Date(yil, oy, 1)
    .toISOString()
    .split("T")[0]
    .toString()
    .split("-")[2];
  let boshlangichkun = new Date(`${oylar[oy - 1]}, ${yil}`).getDay();
  for (let i = 1; i <= oyuzunlik; i++) {
    if (i < 10) {
      if (boshlangichkun <= 7 && i == 1 && boshlangichkun !== 1)
        kunlar.push("    ".repeat(boshlangichkun - 1));
      if (i == 1 && boshlangichkun > 1) kunlar.push(`${i} `);
      else kunlar.push(` ${i} `);
    } else kunlar.push(` ${i}`);
    if ((i + boshlangichkun - 1) % 7 == 0) {
      console.log(...kunlar);
      kunlar = [];
    }
  }
  if (kunlar[0] !== undefined) console.log(...kunlar);
}
calendar(2021, 1);
