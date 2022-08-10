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
let yillaryillar = document.getElementById("yillaryillar");
let gold = document.getElementById("gold");
let yillar = document.getElementById("yillar");
let yillar1 = document.getElementById("yillar1");
let grid = document.getElementById("grid");
let month = document.getElementById("month");
let monthmonth = document.getElementById("monthmonth");
let yearyear = document.getElementById("yearyear");
let year = document.getElementById("year");
let left = document.getElementById("left");
let right = document.getElementById("right");
let hafta_kuni = document.getElementById("hafta_kuni");
let yil_oyi = document.getElementById("yil_oyi");
let oy_kuni = document.getElementById("oy_kuni");
let bugun = new Date().getDate();
let year1 = new Date().getFullYear();
let month1 = new Date().getMonth() + 1;
let yil = year1;

week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
month.innerText = oylar[month1 - 1];
oy_kuni.innerText = bugun;
yil_oyi.innerText = oylar[month1 - 1].slice(0, 3);
hafta_kuni.innerText = week[new Date().getDay() - 1] + ",";
year.innerText = year1;
monthmonth.innerText = month.innerText;
yearyear.innerText = year.innerText;

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
  if (boshlangichkun == 0) {
    boshlangichkun = 7;
  }
  for (let i = 1; i <= parseFloat(oyuzunlik) + boshlangichkun - 1; i++) {
    let kun = document.createElement("span");
    kun.classList = "span";
    massiv.push(kun);
    kun.innerText = i - boshlangichkun + 1;
    if (parseInt(kun.innerText) < 1) {
      kun.innerText = " ";
    }
    massiv.forEach((e) => {
      e.addEventListener("click", () => {
        if (parseInt(e.innerText) >= 1) {
          let num =
            parseInt(e.innerText) -
            7 * Math.floor((parseInt(e.innerText) + boshlangichkun - 2) / 7) +
            boshlangichkun -
            1;
          hafta_kuni.innerText = week[num - 1] + ", ";
          yil_oyi.innerText = oylar[month1 - 1].slice(0, 3);
          oy_kuni.innerText = e.innerText;
          yil = year.innerText;
          ochirish();
          e.classList.add("active");
          // console.log(e.classList);
          // localStorage.setItem("sana", e.classList);
        }
      });
    });
    if (
      yil_oyi.innerText == month.innerText.slice(0, 3) &&
      oy_kuni.innerText == kun.innerText &&
      yil == year.innerText
    ) {
      kun.classList.add("active");
    }
    function ochirish() {
      massiv.forEach((e) => {
        e.classList.remove("active");
      });
    }
    grid.appendChild(kun);
  }
}
let date = new Date().getFullYear();
let currentSpan = undefined;
let currentYear = date;
for (let i = date - 100; i < new Date().getFullYear() + 1; i++) {
  let span = document.createElement("span");
  span.innerText = i;
  span.addEventListener("click", () => {
    if (currentSpan) currentSpan.classList.remove("active");
    currentYear = i;
    currentSpan = i;
    year.innerText = i;
    yearyear.innerText = i;
    year1 = i;
    span.classList.add("active");
    // console.log(span.classList);
    currentSpan = span;
    yillar.style.display = "none";
    grid.innerText = "";
    plusminus();
  });
  yillar1.appendChild(span);
  if (currentYear == i) {
    currentSpan = span;
    currentSpan.classList.add("active");
  }
}

gold.addEventListener("click", () => {
  yillar.style.display = "none";
});

yillaryillar.addEventListener("click", () => {
  yillar.style.display = "block";
});

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
