ServerEvents.recipes(event => {
	event.remove({ output: 'delightful:silver_knife' }),
	event.remove({ output: 'fruitsdelight:orange_crate' }),
	event.remove({ output: 'atmospheric:candied_orange_slices' }),
	event.remove({ output: 'regions_unexplored:pine_sapling' }),
	event.remove({ output: 'regions_unexplored:pine_shrub' }),
	event.remove({ output: 'caverns_and_chasms:cobblestone_bricks' }),
  event.remove({ output: 'caverns_and_chasms:mossy_cobblestone_bricks' }),
	event.remove({ output: 'caverns_and_chasms:calcite_stairs' }),
	event.remove({ output: 'caverns_and_chasms:calcite_wall' }),
	event.remove({ output: 'caverns_and_chasms:calcite_slab' }),
	event.remove({ output: 'caverns_and_chasms:polished_calcite' }),
	event.remove({ output: 'caverns_and_chasms:polished_calcite_stairs' }),
	event.remove({ output: 'caverns_and_chasms:polished_calcite_slab' }),
	event.remove({ output: 'caverns_and_chasms:tuff_stairs' }),
	event.remove({ output: 'caverns_and_chasms:tuff_wall' }),
	event.remove({ output: 'caverns_and_chasms:tuff_slab' }),
	event.remove({ output: 'caverns_and_chasms:polished_tuff' }),
	event.remove({ output: 'caverns_and_chasms:polished_tuff_stairs' }),
	event.remove({ output: 'caverns_and_chasms:polished_tuff_slab' }),
	event.remove({ output: 'caverns_and_chasms:dripstone_shingles' }),
	event.remove({ output: 'caverns_and_chasms:lapis_bricks' }),
	event.remove({ output: 'caverns_and_chasms:lapis_brick_stairs' }),
	event.remove({ output: 'caverns_and_chasms:lapis_brick_slab' }),
	event.remove({ output: 'caverns_and_chasms:lapis_brick_wall' }),
	event.remove({ output: 'caverns_and_chasms:lapis_brick_slab' }),
	event.remove({ output: 'caverns_and_chasms:lapis_pillar' }),
	event.remove({ output: 'caverns_and_chasms:cut_amethyst' }),
	event.remove({ output: 'quark:gold_bars' }),
	event.remove({ output: 'createdeco:copper_bars' }),
	event.remove({ output: 'create:copper_bars' }),
	event.remove({ output: 'caverns_and_chasms:toolbox' }),
	event.remove({ output: 'caverns_and_chasms:barometer' }),
	event.remove({ output: 'caverns_and_chasms:depth_gauge' }),
	event.remove({ output: 'caverns_and_chasms:copper_nugget' }),
	event.remove({ output: 'caverns_and_chasms:silver_nugget' }),
	event.remove({ output: 'caverns_and_chasms:netherite_nugget' }),
	event.remove({ output: 'oreganized:netherite_nugget' }),
  event.remove({ output: 'environmental:dirt_bricks' }),
  event.remove({ output: 'caverns_and_chasms:large_arrow', type: 'minecraft:crafting_shaped' }),
  event.remove({ output: 'caverns_and_chasms:blunt_arrow', type: 'minecraft:crafting_shapeless' }),
	
	event.replaceInput(
      { input: '#forge:fruits/orange' }, // Arg 1: the filter
      '#forge:fruits/orange',  // Arg 2: the item to replace
      'atmospheric:orange'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: '#forge:nuggets/silver' }, // Arg 1: the filter
      '#forge:nuggets/silver',  // Arg 2: the item to replace
      'oreganized:silver_nugget'         // Arg 3: the item to replace it with
    ),
	
	event.shapeless(
    Item.of('4x atmospheric:candied_orange_slices'),
    [
      'fruitsdelight:orange_slice',
      'fruitsdelight:orange_slice',
      'fruitsdelight:orange_slice',
      'fruitsdelight:orange_slice',
      'minecraft:sugar',
	  'minecraft:sugar'
    ]
  ),
  event.shapeless(
    Item.of('2x environmental:pine_sapling'),
    [
      'regions_unexplored:pine_shrub'
    ]
  ),
  event.shapeless(
    Item.of('2x autumnity:maple_sapling'),
    [
      'regions_unexplored:maple_shrub'
    ]
  ),
  event.shapeless(
    Item.of('2x autumnity:red_maple_sapling'),
    [
      'regions_unexplored:red_maple_shrub'
    ]
  ),
  event.shapeless(
    Item.of('2x autumnity:orange_maple_sapling'),
    [
      'regions_unexplored:orange_maple_shrub'
    ]
  ),
  
    event.shaped('regions_unexplored:pine_shrub', [
      ' A ', 
      ' A ', 
      '   '  
      ], 
      {
       A: 'environmental:pine_sapling'
    }),
	event.shaped('regions_unexplored:maple_shrub', [
      ' A ', 
      ' A ', 
      '   '  
      ], 
      {
       A: 'autumnity:maple_sapling'
    }),
	event.shaped('regions_unexplored:orange_maple_shrub', [
      ' A ', 
      ' A ', 
      '   '  
      ], 
      {
       A: 'autumnity:orange_maple_sapling'
    }),
	event.shaped('regions_unexplored:red_maple_shrub', [
      ' A ', 
      ' A ', 
      '   '  
      ], 
      {
       A: 'autumnity:red_maple_sapling'
    }),
	event.shaped('4x environmental:cattail_thatch', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'biomemakeover:cattail'
    }),
	event.shaped('4x environmental:cattail_thatch', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'regions_unexplored:cattail'
    }),
  event.shaped('4x environmental:dirt_bricks', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'quark:dirt_bricks'
    }),
	event.shaped('4x caverns_and_chasms:cobblestone_bricks', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'quark:cobblestone_bricks'
    }),
  event.shaped('4x caverns_and_chasms:mossy_cobblestone_bricks', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'quark:mossy_cobblestone_bricks'
    }),
	event.shaped('4x caverns_and_chasms:dripstone_shingles', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'quark:polished_dripstone'
    }),
	event.shaped('2x caverns_and_chasms:lapis_pillar', [
      ' A ', 
      ' A ', 
      '   '  
      ], 
      {
       A: 'minecraft:lapis_block'
    }),
	event.shaped('4x caverns_and_chasms:cut_amethyst', [
      'AA ', 
      'AA ', 
      '   '  
      ], 
      {
       A: 'galosphere:polished_amethyst'
    })
}
)