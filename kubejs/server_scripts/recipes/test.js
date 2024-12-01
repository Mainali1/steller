ServerEvents.recipes(event => {
event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
      Ingredient.of('#forge:salad_ingredients').toJson(),
      Ingredient.of('farmersdelight:tomato').toJson(),
      // etc
    ],
    result: Item.of('alexsdelight:bison_burger').toResultJson(),
    container: Item.of('minecraft:bread').toJson(),
    experience: 20,
    cookingtime: 300,
    recipe_book_tab: 'misc'
 })
}); 