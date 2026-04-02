// Modify existing recipes
ServerEvents.recipes(event => {
//Adding in QOL Dirt Recipes
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'iceandfire:chared_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'iceandfire:crackled_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'iceandfire:frozen_dirt'
  ]
),

event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:ashen_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:peat_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:coarse_dirt'), // arg 1: output
  [
    'regions_unexplored:peat_coarse_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:silt_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:coarse_dirt'), // arg 1: output
  [
    'regions_unexplored:silt_coarse_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:argillite'
  ]
),

event.shaped('8x iceandfire:crackled_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'biomemakeover:lightning_bottle'
}),
event.shaped('8x iceandfire:chared_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'minecraft:magma_block'
}),
event.shaped('8x iceandfire:frozen_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'minecraft:blue_ice'
}),

event.shaped('8x regions_unexplored:silt_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'regions_unexplored:barley'
}),
event.shaped('8x regions_unexplored:peat_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'regions_unexplored:blackwood_sapling'
}),
event.shaped('8x regions_unexplored:argillite', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'regions_unexplored:dropleaf'
})
})