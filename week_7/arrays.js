/* All arrays begin from zero
To read values from an array we use `data`
console.log(data[indexhere]. variablenamehere);

*/
//Question: Write a for loop to read through a list 
let data = [
    {district:"Malaba", rainfall: 343},
    {district:"Gulu", rainfall: 123},
    {district: "Jinja" , rainfall: 434}
];

                //////SCENARIO 1///////
//Malaba
console.log(data[0].district);
console.log(data[0].rainfall);
//Gulu
console.log(data[1].district);
console.log(data[1].rainfall);
//Jinja
console.log(data[2].district);
console.log(data[2].rainfall);

            //////SCENARIO 2 USING A FOR LOOP /////
for (let z=0; z< 3; z++){
    console.log(data[z].district);
}
