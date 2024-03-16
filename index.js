import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_bCyWptZgtyPZ8pN5TVqTw0JalzeDMVfacDYN8EBY"
);

convertCurrency("INR", "USD", 1);
async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  return multiplier*units;
}
export default convertCurrency;
