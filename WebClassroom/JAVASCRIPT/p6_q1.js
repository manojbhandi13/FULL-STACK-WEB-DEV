let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
// ["Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(1, 1, "Ola");
console.log(companies);
// ["Microsoft", "Ola", "Google", "IBM", "Netflix"];
companies.splice(5, 0, "Amazon");
console.log(companies);
// ['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon']