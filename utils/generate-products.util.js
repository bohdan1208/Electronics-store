const casual = require('casual');
const fs = require('fs');

// Генерація масиву фейкових продуктів
const products = [];

for (let i = 0; i < 100; i++) {
  products.push({
    id: i + 1,
    name: casual.word + " " + casual.word,
    price: casual.integer(100, 1000),
    rating: casual.integer(1, 5),
    image: `https://via.placeholder.com/150?text=Product+${i+1}`,
    type: casual.random_element(['TVs', 'Appliances', 'Phones', 'Video Games']),
    description: casual.sentence,
    c: [
      {
        reviewer: casual.name,
        comment: casual.sentence,
        rating: casual.integer(1, 5)
      }
    ]
  });
}

// Створення об'єкта з фейковими даними
const data = {
  products: products
};

// Записуємо фейкові дані у файл db.json
fs.writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf8');
