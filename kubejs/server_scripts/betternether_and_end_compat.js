// Modify existing recipes
ServerEvents.recipes(event => {
    event.remove({ type: 'betterend:infusion' }),
    event.remove({ type: 'bclib:alloying' }),
    event.remove({ type: 'betternether:forge' }),
    event.remove({ output: 'betterend:guidebook' }),
    //Removal of Deepslate Manipulation Essence (Reworked)
    event.remove({ id: 'ars_nouveau:manipulation_essence_to_deepslate' }),

    // Remove Fireruby Gear (Reworked)
    event.remove({ output: 'betternether:flaming_ruby_helmet' }),
    event.remove({ output: 'betternether:flaming_ruby_chestplate' }),
    event.remove({ output: 'betternether:flaming_ruby_leggings' }),
    event.remove({ output: 'betternether:flaming_ruby_boots' }),
    event.remove({ output: 'betternether:flaming_ruby_axe' }),
    event.remove({ output: 'betternether:flaming_ruby_pickaxe' }),
    event.remove({ output: 'betternether:flaming_ruby_shovel' }),
    event.remove({ output: 'betternether:flaming_ruby_hoe' }),
    event.remove({ output: 'betternether:flaming_ruby_sword' }),

    event.remove({ output: 'betternether:soul_sandstone'}),
    event.remove({ output: 'betternether:soul_sandstone_cut'}),
    event.remove({ output: 'betternether:soul_sandstone_cut_stairs'}),
    event.remove({ output: 'betternether:soul_sandstone_cut_slab'}),
    event.remove({ output: 'betternether:soul_sandstone_wall'}),
    event.remove({ output: 'betternether:soul_sandstone_smooth'}),
    event.remove({ output: 'betternether:soul_sandstone_chiseled'}),
    event.remove({ output: 'betternether:soul_sandstone_stairs'}),
    event.remove({ output: 'betternether:soul_sandstone_smooth_stairs'}),
    event.remove({ output: 'betternether:soul_sandstone_slab'}),
    event.remove({ output: 'betternether:soul_sandstone_smooth_slab'}),
    event.remove({ output: 'betternether:bone_block'}),
    event.remove({ output: 'betternether:bone_stairs'}),
    event.remove({ output: 'betternether:bone_slab'}),
    event.remove({ not: { type: 'minecraft:stonecutting' }, output: 'betternether:bone_button'}),

    event.remove({ output: 'betterend:charcoal_block' }), 
    event.remove({ output: 'betterend:amber_gem' }), 
    event.remove({ output: 'betterend:elytra_armored' }), 
    event.remove({ output: 'betterend:thallasium_sword_handle' }), 
    event.remove({ output: 'betterend:terminite_sword_handle' }), 
    event.remove({ output: 'betterend:aeternium_sword_handle' }), 
    event.remove({ output: 'betterend:aeternium_upgrade_smithing_template' }), 
    event.remove({ output: 'betterend:terminite_upgrade_smithing_template' }), 
    event.remove({ output: 'betterend:thallasium_upgrade_smithing_template' }), 
    event.remove({ output: 'betterend:infusion_pedestal' }), 
    event.remove({ output: 'betterend:enchanted_membrane' }), 
    event.remove({ output: 'betterend:thallasium_anvil' }), 
    event.remove({ output: 'betterend:terminite_anvil' }), 
    event.remove({ output: 'betterend:aeternium_anvil' }), 
    event.remove({ output: 'betterend:end_stone_smelter' }), 
    event.remove({ output: 'betterend:handle_attachment_smithing_template' }), 
    event.remove({ output: 'betterend:leather_handle_attachment_smithing_template' }), 
    event.remove({ output: 'betterend:tool_assembly_smithing_template' }), 
    event.remove({ output: 'betterend:netherite_upgrade_smithing_template' }), 
    event.remove({ output: 'betterend:iron_hammer' }), 
    event.remove({ output: 'betterend:golden_hammer' }), 
    event.remove({ output: 'betterend:diamond_hammer' }), 
    event.remove({ output: 'betterend:aeternium_hammer' }), 
    event.remove({ output: 'betterend:netherite_hammer' }), 
    event.remove({ output: 'betterend:thallasium_hammer' }), 
    event.remove({ output: 'betterend:terminite_hammer' }), 
    event.remove({ output: 'betterend:leather_stripe' }), 
    event.remove({ input: 'betterend:leather_stripe' }), 
    event.remove({ output: 'betterend:leather_wrapped_stick' }), 

    event.remove({ output: 'betterend:ender_dust' }), 

    event.remove({ output: 'betternether:cincinnasite_block' }), 
    event.remove({ input: 'betternether:cincinnasite_forged',  output: 'betternether:cincinnasite_ingot' }), 
    event.remove({ output: 'betternether:cincinnasite_forged' }), 
    event.remove({ output: 'betternether:nether_brewing_stand' }), 


    //Quark
    event.shaped('8x minecraft:iron_ingot', [
      'AAA', 
      'ABA', 
      'AAA'  
    ], {
      A: 'betternether:cincinnasite_ingot', 
      B: 'ars_nouveau:manipulation_essence',
    }
    ),
    event.shaped('8x minecraft:iron_ingot', [
      'AAA', 
      'ABA', 
      'AAA'  
    ], {
      A: 'betterend:thallasium_ingot', 
      B: 'ars_nouveau:manipulation_essence',
    }
    ),
    event.shaped('8x minecraft:diamond', [
      'AAA', 
      'ABA', 
      'AAA'  
    ], {
      A: 'rubinated_nether:ruby', 
      B: 'ars_nouveau:manipulation_essence',
    }
    ),
    event.custom({
      type: 'create:haunting',
      ingredients: [
        { item: 'minecraft:iron_ingot' }
      ],
      results: [
        { item: 'betternether:cincinnasite_ingot'}
      ]
    }),
    event.recipes.createSandpaperPolishing('betterend:amber_gem', [
      'betterend:raw_amber'
    ]),
    event.recipes.createPressing('betterend:terminite_forged_plate', [
      'betterend:terminite_ingot'
    ]),
    event.recipes.createPressing('betterend:aeternium_forged_plate', [
      'betterend:aeternium_ingot'
    ]),
    event.recipes.createPressing('betterend:thallasium_forged_plate', [
      'betterend:thallasium_ingot'
    ]),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "apotheosis:infused_breath",
              "betterend:ender_shard",
              "betterend:crystal_shards",
              "iceandfire:pixie_dust",
              "betterend:crystal_shards",
              "iceandfire:pixie_dust",
              "betterend:crystal_shards",
              "betterend:ender_shard"
          ], // input items
        "minecraft:end_crystal", // reagent
        "betterend:eternal_crystal", // output
        5000
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "betterend:amber_gem",
              "betterend:eternal_crystal",
              "minecraft:phantom_membrane",
              "betterend:eternal_crystal",
              "spelunkery:portal_fluid_bottle",
              "betterend:eternal_crystal",
              "minecraft:phantom_membrane",
              "betterend:eternal_crystal"
          ], // input items
        "minecraft:elytra", // reagent
        "betterend:elytra_crystalite", // output
        5000,
        true
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "betterend:amber_gem",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal",
              "spelunkery:portal_fluid_bottle",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal"
          ], // input items
        "betterend:terminite_boots", // reagent
        "betterend:crystalite_boots", // output
        5000,
        true
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "betterend:amber_gem",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal",
              "spelunkery:portal_fluid_bottle",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal"
          ], // input items
        "betterend:terminite_leggings", // reagent
        "betterend:crystalite_leggings", // output
        5000,
        true
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "betterend:amber_gem",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal",
              "spelunkery:portal_fluid_bottle",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal"
          ], // input items
        "betterend:terminite_chestplate", // reagent
        "betterend:crystalite_chestplate", // output
        5000,
        true
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "betterend:amber_gem",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal",
              "spelunkery:portal_fluid_bottle",
              "betterend:eternal_crystal",
              "ars_nouveau:source_gem",
              "betterend:eternal_crystal"
          ], // input items
        "betterend:terminite_helmet", // reagent
        "betterend:crystalite_helmet", // output
        5000,
        true
    ),
    event.recipes.createCrushing([
        'betterend:ender_dust',
        Item.of('betterend:ender_dust').withChance(0.3)
      ], 'betterend:ender_shard'
    ),
    event.recipes.createMixing('betterend:terminite_ingot', [
      'betterend:ender_dust',
      'betterend:thallasium_ingot'
    ]).superheated(),
    event.recipes.createMixing('betterend:aeternium_ingot', [
      'betterend:terminite_ingot',
      'minecraft:netherite_ingot',
      'alexscaves:polymer_plate'
    ]).superheated(),
    event.recipes.createMixing('betterend:crystal_shards', [
      'betterend:ender_dust',
      'iceandfire:pixie_dust',
      '#regions_unexplored:prismarite_crystals'
    ]).superheated(),
    event.recipes.createMechanicalCrafting('betterend:elytra_armored', [
      'RPPPR',
      'CAAAC',
      'RSESR'
    ], {
      A: 'betterend:aeternium_forged_plate',
      S: 'create:sturdy_sheet',
      P: 'alexscaves:polymer_plate',
      C: 'alexsmobs:crocodile_scute',
      R: 'quark:ravager_hide',
      E: 'minecraft:elytra'
    }),
    event.shapeless(
      Item.of('alexscaves:amber'), // arg 1: output
      [
        '4x betterend:raw_amber'
      ]
    ),
    event.shapeless(
      Item.of('9x betternether:cincinnasite_ingot'), // arg 1: output
      [
        'betternether:cincinnasite_forged'
      ]
    ),
    event.smithing(
      'betternether:netherite_fire_bowl',                     
      'minecraft:netherite_upgrade_smithing_template', 
      'betternether:cincinnasite_fire_bowl',                          
      'minecraft:netherite_ingot'                            
    ),

    //REWORKED FIRE RUBY SMITHING
    event.smithing(
      'betternether:flaming_ruby_helmet',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_helmet',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_chestplate',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_chestplate',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_leggings',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_leggings',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_boots',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_boots',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_axe',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_axe',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_pickaxe',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_pickaxe',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_shovel',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_shovel',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_hoe',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_hoe',                          
      'iceandfire:fire_dragon_blood'                            
    ),
    event.smithing(
      'betternether:flaming_ruby_sword',                     
      'betternether:flaming_ruby_upgrade_smithing_template', 
      'betternether:nether_ruby_sword',                          
      'iceandfire:fire_dragon_blood'                            
    ),

    event.replaceInput(
      { input: 'betternether:bone_block' },
      'betternether:bone_block',           
      'alexscaves:smooth_bone'        
    ),
    event.replaceInput(
      { input: 'betternether:bone_slab' },
      'betternether:bone_slab',           
      'alexscaves:smooth_bone_slab'        
    ),
    event.shaped('betternether:bone_wall', [
        'WWW', 
        'WWW'
        ], 
        {
         W: 'betternether:bone_tile'
      }
    ),
    event.shaped('betternether:bone_button', [
        'W', 
        ], 
        {
         W: 'betternether:bone_tile'
      }
    ),
    event.shaped('betternether:cincinnasite_block', [
      'AAA', 
      'AAA', 
      'AAA'  
    ], {
      A: 'betternether:cincinnasite'
    }
    ),
    event.shaped('betternether:cincinnasite_forged', [
      'AAA', 
      'AAA', 
      'AAA'  
    ], {
      A: 'betternether:cincinnasite_ingot'
    }
    )
  }
)