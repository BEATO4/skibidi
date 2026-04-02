// Modify existing recipes
ServerEvents.recipes(event => {
//Expanding Storage System Progression
//Removals
event.remove({ output: 'storagedrawers:iron_storage_upgrade' }),  
event.remove({ output: 'storagedrawers:gold_storage_upgrade' }),
event.remove({ output: 'storagedrawers:diamond_storage_upgrade' }),
event.remove({ output: 'storagedrawers:emerald_storage_upgrade' }),
//Readding Storage Drawers
event.recipes.createMechanicalCrafting('storagedrawers:iron_storage_upgrade', [
  ' CCC ',
  'CCBCC',
  'CBABC',
  'CCBCC',
  ' CCC '
], {
  A: 'storagedrawers:obsidian_storage_upgrade',
  B: '#c:iron_ingots',
  C: 'minecraft:stick'
}),
event.recipes.createMechanicalCrafting('storagedrawers:gold_storage_upgrade', [
  ' CCC ',
  'CCBCC',
  'CBABC',
  'CCBCC',
  ' CCC '
], {
  A: 'storagedrawers:iron_storage_upgrade',
  B: 'minecraft:gold_ingot',
  C: 'minecraft:stick'
}),
event.recipes.createMechanicalCrafting('storagedrawers:diamond_storage_upgrade', [
  ' CCC ',
  'CCBCC',
  'CBABC',
  'CCBCC',
  ' CCC '
], {
  A: 'storagedrawers:gold_storage_upgrade',
  B: 'minecraft:diamond',
  C: 'minecraft:stick'
}),
event.recipes.createMechanicalCrafting('storagedrawers:emerald_storage_upgrade', [
  ' CCC ',
  'CCBCC',
  'CBABC',
  'CCBCC',
  ' CCC '
], {
  A: 'storagedrawers:diamond_storage_upgrade',
  B: 'minecraft:emerald',
  C: 'minecraft:stick'
})

})