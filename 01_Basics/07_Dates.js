// Dates

const myDate = new Date();
//console.log(myDate.toString());   // Mon Jun 23 2025 10:21:18 GMT+0000
//console.log(myDate.toDateString()); // Mon Jun 23 2025
//console.log(myDate.toLocaleString()); //6/23/2025, 10:28:15 AM
//console.log(myDate.toISOString()); // 2025-06-23T10:23:05.914Z
//console.log(typeof myDate); // object

const newDate = new Date("2025-06-25");
//console.log(newDate.toLocaleString()) //  6/25/2025, 12:00:00 AM

const date1 = new Date("2025-06-25");
console.log(date1.getFullYear()); // 2025
console.log(date1.getMonth()); // 5 (June, months are 0-indexed)
console.log(date1.getDate()); // 25
console.log(date1.getDay()); // 3 (Wednesday, days are 0-indexed, 0=Sunday)
console.log(date1.getHours()); // 0
console.log(date1.getMinutes()); // 0
console.log(date1.getSeconds()); // 0

const longDay = date1.toLocaleString("default", { weekday: "long" }); // "Wednesday"
console.log(longDay); // Wednesday
