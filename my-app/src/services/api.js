
async function getShoppingCart() {
  const data = await [
        {
          "name": "Toilet Roll",
          "SKU": 1298443,
          "price": 1.3,
          "currency": "£",
          "metadata": {
            "category": "toiletries"
          }
        },
        {
          "name": "Pasta",
          "SKU": 283791,
          "price": 0.58,
          "currency": "£",
          "metadata": {
            "category": "food"
          }
        },
        {
          "name": "Eggs",
          "SKU": 828823,
          "price": 0.21,
          "currency": "£",
          "metadata": {
            "category": "food"
          }
        }
      ]
    return data
}

export {
    getShoppingCart,
}