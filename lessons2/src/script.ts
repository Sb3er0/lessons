// Тестовый вариант, он ни на что не влияет, просто для проверки работоспособности TypeScript в проекте
let quantity = parseInt(prompt(`Введите количество товара`, `10`)!);
      let units = parseFloat(prompt(`Введите цену единицы товара`, `100`)!);
		const vat = 5;
      let sum = quantity * units;
      let vatValue = sum * vat / 100;
      document.write(`Сумма НДС(${vat}%) составляет: ${vatValue} грн.`);
		console.log(`Сумма НДС(${vat}%) составляет: ${vatValue} грн.`);