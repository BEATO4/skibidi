ServerEvents.recipes(event => {
    event.remove({ output: 'galosphere:silver_block' }),
    event.remove({ output: 'galosphere:silver_panel' }),
    event.remove({ output: 'galosphere:silver_panel_slab' }),
    event.remove({ output: 'galosphere:silver_panel_stairs' }),
    event.remove({ output: 'galosphere:silver_tiles'}),
    event.remove({ output: 'galosphere:silver_tiles_slab' }),
    event.remove({ output: 'galosphere:silver_tiles_stairs'}),
    event.remove({ output: 'galosphere:silver_lattice' }),
    event.remove({ output: 'oreganized:silver_mirror' }),
    event.remove({ output: 'galosphere:silver_bomb' }),
    event.remove({ output: 'galosphere:silver_balance' }),
    event.remove({ output: 'galosphere:combustion_table' }),
    event.remove({ output: 'oreganized:gargoyle' }),
    event.remove({ output: 'oreganized:scribe' }),
    event.remove({ output: 'galosphere:spectre_flare' }),
    event.remove({ output: 'oreganized:electrum_ingot', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'oreganized:electrum_ingot', type: 'create:mixing' }),
    event.remove({ output: 'galosphere:chandelier' }),
    event.remove({ output: 'galosphere:combustion_table' }),
    event.remove({ output: 'galosphere:monstrometer' }),
    event.remove({ output: 'galosphere:warped_anchor' }),
    event.remove({ output: 'galosphere:barometer' }),
    event.remove({ output: 'galosphere:shadow_frame' }), 
    event.remove({ output: 'galosphere:sterling_horse_armor'}),
    event.remove({ output: 'galosphere:sterling_helmet'}),
    event.remove({ output: 'galosphere:sterling_chestplate'}),
    event.remove({ output: 'galosphere:sterling_leggings'}),
    event.remove({ output: 'galosphere:sterling_boots'}),
    event.remove({ output: 'galosphere:silver_upgrade_smithing_template'}),

//Adding Recipes
event.recipes.createMixing('2x oreganized:electrum_ingot', [
  'oreganized:silver_ingot',
  'minecraft:gold_ingot'
]).heated(),  
  event.shaped('16x galosphere:silver_lattice', [
    'AAA', 
    'AAA'
    ], 
    {
      A: 'oreganized:silver_ingot'
    }
  ),
    event.shaped('4x galosphere:silver_panel', [
      'AA ', 
      'AA '
      ], 
      {
        A: 'oreganized:silver_block'
      }
    ),
    event.stonecutting('2x galosphere:silver_panel', 'oreganized:silver_block'),
    event.shaped('6x galosphere:silver_panel_slab', [
      '   ', 
      'AAA',
      '   '
      ], 
      {
        A: 'galosphere:silver_panel'
      }
    ),
    event.stonecutting('2x galosphere:silver_panel_slab', 'galosphere:silver_panel'),
    event.shaped('4x galosphere:silver_panel_stairs', [
      'A  ', 
      'AA ',
      'AAA'
      ], 
      {
        A: 'galosphere:silver_panel'
      }
    ),
    event.stonecutting('2x galosphere:silver_panel_stairs', 'galosphere:silver_panel'),
    event.shaped('4x galosphere:silver_tiles', [
      'AB ', 
      'BA '
      ], 
      {
        A: 'galosphere:silver_panel',
        B: 'biomemakeover:crude_cladding'
      }
    ),
    event.shaped('4x galosphere:silver_tiles_stairs', [
      'A  ', 
      'AA ',
      'AAA'
      ], 
      {
        A: 'galosphere:silver_tiles'
      }
    ),
    event.stonecutting('2x galosphere:silver_tiles_stairs', 'galosphere:silver_tiles'),
    event.shaped('6x galosphere:silver_tiles_slab', [
      '   ', 
      'AAA',
      '   '
      ], 
      {
        A: 'galosphere:silver_tiles'
      }
    ),
    event.stonecutting('2x galosphere:silver_tiles_slab', 'galosphere:silver_tiles'),
    event.shaped('oreganized:silver_mirror', [
      'ABA', 
      'ABA',
      ' A '
      ], 
      {
        A: 'minecraft:gold_ingot',
        B: 'oreganized:silver_ingot'
      }
    ),
    event.shaped('galosphere:silver_balance', [
      'ABA', 
      ' A ',
      ' A '
      ], 
      {
        A: 'oreganized:silver_block',
        B: 'minecraft:redstone'
      }
    ),
    event.shaped('galosphere:combustion_table', [
      'AA ', 
      'BB ',
      'BB '
      ], 
      {
        A: 'oreganized:silver_ingot',
        B: '#minecraft:planks'
      }
    ),
    event.shaped('oreganized:gargoyle', [
      ' B ', 
      'ACA',
      'ADA'
      ], 
      {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:carved_pumpkin',
        C: 'oreganized:silver_ingot',
        D: 'biomemakeover:crude_cladding_block'
      }
    ),
    event.shaped('oreganized:scribe', [
      ' A ', 
      ' B ',
      ' B '
      ], 
      {
        A: 'minecraft:amethyst_shard',
        B: 'oreganized:silver_ingot'
      }
    ),
    event.shaped('galosphere:spectre_flare', [
      'A ', 
      'B '
      ], 
      {
        A: 'galosphere:bottle_of_spectre',
        B: 'oreganized:silver_ingot'
      }
    ),
    event.shaped('galosphere:chandelier', [
      ' A ', 
      ' B ',
      ' C '
      ], 
      {
        A: 'galosphere:bottle_of_spectre',
        B: 'minecraft:chain',
        C: 'minecraft:copper_ingot'
      }
    ),
    event.shaped('galosphere:monstrometer', [
      'AAA', 
      'BBB',
      'AAA'
      ], 
      {
        A: 'oreganized:silver_block',
        B: 'galosphere:lumiere_block'
      }
    ),
    event.shaped('galosphere:warped_anchor', [
      'AAA', 
      'BBB'
      ], 
      {
        A: 'galosphere:allurite_block',
        B: 'oreganized:silver_block'
      }
    ),
    event.shaped('galosphere:barometer', [
      ' A ', 
      'ABA',
      ' A '
      ], 
      {
        A: 'oreganized:silver_ingot',
        B: 'minecraft:redstone'
      }
    ),
    event.shaped('8x galosphere:shadow_frame', [
      'ABA', 
      'BAB',
      'ABA'
      ], 
      {
        A: 'oreganized:silver_ingot',
        B: 'galosphere:cured_membrane'
      }
    ),
    event.shaped('2x galosphere:silver_upgrade_smithing_template', [
      'ABA', 
      'ACA',
      'AAA'
      ], 
      {
        A: '#minecraft:planks',
        B: 'galosphere:silver_upgrade_smithing_template',
        C: 'oreganized:silver_ingot'
      }
    ),
    event.replaceInput(
      { input: 'galosphere:silver_ingot' },
      'galosphere:silver_ingot',           
      'oreganized:silver_ingot'        
    ),
    event.replaceOutput(
      { input: 'galosphere:silver_nugget' },
      'galosphere:silver_nugget',           
      'oreganized:silver_nugget'        
    ),
    event.replaceOutput(
      { input: 'iceandfire:silver_nugget' },
      'iceandfire:silver_nugget',           
      'oreganized:silver_nugget'        
    ),
    event.shaped('galosphere:sterling_horse_armor', [
      'AAA', 
      'AHA', 
      ], {
          A: 'oreganized:silver_ingot',
          H: 'minecraft:leather'
      }
    ),
    event.shaped('4x galosphere:silver_bomb', [
      ' S ', 
      'SBS',
      ' S ' 
      ], {
          S: 'oreganized:silver_ingot',
          B: 'supplementaries:bomb'
      }
    ),
    event.remove({ output: 'iceandfire:silver_nugget' }),
    event.remove({ output: 'galosphere:silver_nugget' }),
    event.remove({ output: 'iceandfire:silver_ingot' }),
    event.remove({ output: 'galosphere:silver_ingot' })
    event.remove({ output: 'caverns_and_chasms:silver_ingot' }),
    event.remove({ output: 'caverns_and_chasms:silver_nugget' })
  }
)