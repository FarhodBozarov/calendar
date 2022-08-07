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

let ikkinchi_center = document.getElementById("ikkinchi_center");
let grid = document.getElementById("grid");
let month = document.getElementById("month");
let year = document.getElementById("year");
let left = document.getElementById("left");
let right = document.getElementById("right");
let bugun = new Date().getDate();
let year1 = 2022;
let month1 = 8;

week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// let kunlar = [];
// function calendar(yil, oy) {
//   console.log("     ", yil, "   ", oylar[oy - 1]);
//   console.log(...week);
// let oyuzunlik = new Date(yil, oy, 1)
//   .toISOString()
//   .split("T")[0]
//   .toString()
//   .split("-")[2];
// let boshlangichkun = new Date(`${oylar[oy - 1]}, ${yil}`).getDay();
//   for (let i = 1; i <= oyuzunlik; i++) {
//     if (i < 10) {
//       if (boshlangichkun <= 7 && i == 1 && boshlangichkun !== 1)
//         kunlar.push("    ".repeat(boshlangichkun - 1));
//       if (i == 1 && boshlangichkun > 1) kunlar.push(`${i} `);
//       else kunlar.push(` ${i} `);
//     } else kunlar.push(` ${i}`);
//     if ((i + boshlangichkun - 1) % 7 == 0) {
//       console.log(...kunlar);
//       kunlar = [];
//     }
//   }
//   if (kunlar[0] !== undefined) console.log(...kunlar);
// }
// calendar(1996, 7);

for (let i = 0; i < week.length; i++) {
  let span = document.createElement("span");
  span.innerText = week[i];
  ikkinchi_center.appendChild(span);
}

function plusminus() {
  let oyuzunlik = new Date(year1, month1, 1)
    .toISOString()
    .split("T")[0]
    .toString()
    .split("-")[2];
  let boshlangichkun = new Date(`${oylar[month1 - 1]}, ${year1}`).getDay();
  let massiv = [];
  for (let i = 1; i <= parseFloat(oyuzunlik) + boshlangichkun - 1; i++) {
    let kun = document.createElement("span");
    kun.classList = "span";
    massiv.push(kun);
    kun.innerText = i - boshlangichkun + 1;
    massiv.forEach((e) => {
      e.addEventListener("click", () => {
        ochirish();
        e.classList.add("active");
      });
    });
    function ochirish() {
      massiv.forEach((e) => {
        e.classList.remove("active");
      });
    }
    if (parseInt(kun.innerText) < 1) {
      kun.innerText = " ";
    }
    grid.appendChild(kun);
  }
}

left.addEventListener("click", () => {
  month1--;
  month.innerText = oylar[month1 - 1];
  if (month1 == 0) {
    year1--;
    year.innerText = year1;
    month1 = 12;
    month.innerText = oylar[month1 - 1];
  }
  grid.innerText = "";
  plusminus();
});
right.addEventListener("click", () => {
  month1++;
  month.innerText = oylar[month1 - 1];
  if (month1 == 13) {
    year1++;
    year.innerText = year1;
    month1 = 1;
    month.innerText = oylar[month1 - 1];
  }
  grid.innerText = "";
  plusminus();
});

plusminus();
