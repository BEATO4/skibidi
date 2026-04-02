// Modify existing recipes
ServerEvents.recipes(event => {
    //Removal of Deepslate Manipulation Essence (Reworked)
    event.remove({ id: 'ars_nouveau:manipulation_essence_to_deepslate' }),

//Quark
event.shaped('8x quark:jasper', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'quark:limestone', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x quark:limestone', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'quark:shale', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x quark:shale', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'quark:jasper', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x quark:myalite', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:end_stone', 
  B: 'ars_nouveau:manipulation_essence',
}
),

//Create
event.shaped('8x create:asurine', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'create:veridium', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x create:veridium', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'create:crimsite', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x create:crimsite', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'create:asurine', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x create:ochrum', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'create:limestone', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x create:scoria', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'create:ochrum', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x create:limestone', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'create:scoria', 
  B: 'ars_nouveau:manipulation_essence',
}
),

//Minecraft
event.shaped('8x minecraft:dripstone_block', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:calcite', 
  B: 'ars_nouveau:manipulation_essence',
}
),

event.shaped('8x minecraft:deepslate', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dripstone_block', 
  B: 'ars_nouveau:manipulation_essence',
}
),

//Obsidian
event.shaped('8x minecraft:obsidian', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'regions_unexplored:cobalt_obsidian', 
  B: 'ars_nouveau:manipulation_essence',
}
),
event.shaped('8x regions_unexplored:cobalt_obsidian', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'betternether:blue_obsidian', 
  B: 'ars_nouveau:manipulation_essence',
}
),
event.shaped('8x betternether:blue_obsidian', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:obsidian', 
  B: 'ars_nouveau:manipulation_essence',
}
)
})