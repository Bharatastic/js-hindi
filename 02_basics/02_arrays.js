const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros[2]);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

// console.log(Array.isArray("Cheems"));
// console.log(Array.from("Cheems"));
// console.log(Array.from({name: "Cheems"}));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));