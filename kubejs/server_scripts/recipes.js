ServerEvents.recipes(event => {
    // event.remove({
    //   input: global.itemsToRemove
    // }),
     // Remove all recipes with an output of any item on the nuke list
    // event.remove({
    //   output: global.itemsToRemove
    // }),
    // Consolidate all ropes to Supplementaries rope
    event.replaceInput(
        { input: 'farmersdelight:rope' },
        'farmersdelight:rope',
        'supplementaries:rope'
    ),
    event.replaceOutput(
        { output: 'farmersdelight:rope' },
        'farmersdelight:rope',
        'supplementaries:rope'
    ),
    // Consolidate all doughs to Create dough
    event.replaceInput(
        { input: 'farmersdelight:wheat_dough' },
        'farmersdelight:wheat_dough',
        'create:dough'
    ),
    event.replaceOutput(
        { output: 'farmersdelight:wheat_dough' },
        'farmersdelight:wheat_dough',
        'create:dough'
    ),
    event.replaceInput(
        { output: 'ironshulkerbox:copper_to_iron_shulker_box_upgrade'},
        'minecraft:copper_ingot',
        'minecraft:shulker_shell'
    ),
    event.replaceOutput(
        { output: 'betternether:lapis_pile' },
        'betternether:lapis_pile',
        'spelunkery:rough_lazurite'
    ),
    // Consolidate all crates to Quark crates
    event.remove({ input: 'farmersdelight:carrot_crate' }),
    event.remove({ output: 'farmersdelight:carrot_crate' }),
    event.remove({ input: 'farmersdelight:potato_crate' }),
    event.remove({ output: 'farmersdelight:potato_crate' }),    
    event.remove({ input: 'farmersdelight:beetroot_crate' }),
    event.remove({ output: 'farmersdelight:beetroot_crate' }),
    event.remove({ output: 'fruitsdelight:apple_crate' }),
    event.remove({ input: 'fruitsdelight:apple_crate' }),

    //Integrated Sulfurs
    event.remove({ input: 'betterend:crystalline_sulphur' }), 
    event.remove({ id: 'alexscaves:gunpowder_from_sulfur' }),
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'alexscaves:sulfur_dust', 'spelunkery:sulfur'),
    event.remove({ input: 'alexscaves:sulfur_dust' }), 
    event.remove({ output: 'spelunkery:sulfur' }), 

    //REMOVE ARROWS (forcing player to use fletching table)
    event.remove({ output: 'quark:torch_arrow', type: 'minecraft:crafting_shapeless' }),
    event.remove({ output: 'alexsmobs:shark_tooth_arrow', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'iceandfire:dragonbone_arrow', type: 'minecraft:crafting_shapeless' }),
    event.remove({ output: 'iceandfire:stymphalian_arrow', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'iceandfire:amphithere_arrow', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'iceandfire:sea_serpent_arrow', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'iceandfire:hydra_arrow', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'alexscaves:seeking_arrow', type: 'minecraft:crafting_shaped' }),
    event.remove({ output: 'alexscaves:burrowing_arrow', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'minecraft:spectral_arrow', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'netherexp:phasmo_arrow', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'forbidden_arcanus:draco_arcanus_arrow', type: 'minecraft:crafting_shaped'}),

    //Removals Misc (Most Reworked)
    event.remove({ output: 'netherexp:soul_jack_o_lantern'}),
    event.remove({ output: 'autumnity:pancake'}),
    event.remove({ output: 'supplementaries:pancake'}),
    event.remove({ output: 'alexsmobs:sopa_de_macaco' }),
    event.remove({ output: 'create:crushed_raw_uranium' }),
    event.remove({ id: 'apotheosis:enchanted_golden_apple' }),
    event.remove({ output: 'bountiful:bountyboard' }),
    event.remove({ output: 'create_enchantment_industry:disenchanter' }),
    event.remove({ output: 'upgrade_aquatic:beachgrass_thatch' }),    
    event.remove({ id: 'biomemakeover:phantom_membrane' }),  
    event.remove({ output: 'biomemakeover:poltergeist' }),  
    event.remove({ output: 'betterarcheology:bomb' }),   
    event.remove({ output: 'alexscaves:primitive_club' }),  
    event.remove({ output: 'alexscaves:tremorzilla_egg' }),  
    event.remove({ output: 'farmersdelight:cooking_pot' }), 
    event.remove({ output: 'quark:rusty_iron_plate' }), 
    event.remove({ output: 'create:iron_sheet'}),
    event.remove({ output: 'spelunkery:rope_ladder' }), 
    event.remove({ output: 'spelunkery:parachute' }), 
    event.remove({ output: 'biomemakeover:crude_cladding'}),
    event.remove({ output: 'oreganized:electrum_upgrade_smithing_template' }),
    event.remove({ id: 'minecraft:map'}),
    event.remove({ mod: 'inventorio'}),
    event.remove({ output: 'quark:iron_plate'}),
    event.remove({ output: 'biomemakeover:crab_chowder'}),
    event.remove({ output: 'biomemakeover:reed_thatch'}),
    event.remove({ output: 'ftbfiltersystem:smart_filter'}),
    event.remove({ output: 'netherexp:ecto_soul_sand'}),
    event.remove({ output: 'netherexp:nether_pizza'}),
    event.remove({ output: 'minecraft:soul_torch'}),
    event.remove({ output: 'minecraft:soul_campfire'}),
    event.remove({ output: 'betternether:basalt_slab'}),
    event.remove({ output: 'galosphere:salted_jerky'}),
    event.remove({ output: 'iceandfire:graveyard_soil' }),
    event.remove({ output: 'mynethersdelight:boiled_egg' }),
    event.remove({ output: 'quarkdelight:cloud_latte' }),
    event.remove({ output: 'create:sturdy_sheet' }),
    event.remove({ output: 'create:rope_pulley' }),
    event.remove({ output: 'galosphere:saltbound_tablet'}),
    event.remove({ output: 'spelunkery:rock_salt', type: 'create:crushing'}),
    event.remove({ not: { type: 'minecraft:stonecutting' }, output: 'netherexp:polished_basalt_bricks', input: 'minecraft:polished_basalt'}),
    event.remove({ not: { type: 'minecraft:stonecutting' }, output: 'betternether:bone_wall'}),
    event.remove({ output: 'netherexp:netherite_plating', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'netherexp:necromium_plating', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'netherexp:wither_bone_block', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'minecraft:pumpkin_pie', input: 'born_in_chaos_v1:cultivated_pumpkin'}),
    event.remove({ output: 'galosphere:silver_upgrade_smithing_template' }),
    event.remove({ output: 'legendary_monsters:polished_diorite_pillar' }), 
    event.remove({ output: 'alexsmobs:transmutation_table', input: 'minecraft:nether_star' }), 

    //Remove Backpack Recipes (Reworked)
    event.remove({ id: 'sophisticatedbackpacks:diamond_backpack' }),
    event.remove({ id: 'sophisticatedbackpacks:gold_backpack' }),
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack' }),
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' }),
    event.remove({ id: 'sophisticatedbackpacks:copper_backpack' }),
    event.remove({ id: 'sophisticatedbackpacks:feeding_upgrade' }),
    event.remove({ id: 'sophisticatedbackpacks:advanced_feeding_upgrade' }),

    //Remove Waystone Recipes (Reworked)
    event.remove({ output: 'waystones:waystone' }),
    event.remove({ output: 'waystones:mossy_waystone' }),
    event.remove({ output: 'waystones:sandy_waystone' }),
    event.remove({ output: 'waystones:deepslate_waystone' }),
    event.remove({ output: 'waystones:blackstone_waystone' }),
    event.remove({ output: 'waystones:end_stone_waystone' }),
    event.remove({ output: 'waystones:warp_stone' }),
    event.remove({ output: 'waystones:warp_dust' }),
    event.remove({ output: 'waystones:return_scroll' }),
    event.remove({ output: 'waystones:bound_scroll' }),
    event.remove({ output: 'waystones:warp_scroll' }),
    event.remove({ id: 'ars_nouveau:warp_scroll' }),

    //Fix Recipe conflicts
    event.remove({ id: 'bclib:tag_stonecutter' }),
    event.remove({ id: 'bclib:tag_rail' }),
    event.remove({ id: 'bclib:tag_smith_table' }),
    event.remove({ id: 'bclib:tag_compass' }),
    event.remove({ id: 'bclib:tag_minecart' }),
    event.remove({ id: 'bclib:tag_piston' }),
    event.remove({ id: 'bclib:tag_shulker_box' }),
    event.remove({ id: 'bclib:tag_cauldron' }),
    event.remove({ id: 'bclib:tag_hopper' }),
    event.remove({ id: 'bclib:tag_bucket' }),
    event.remove({ id: 'bclib:tag_shield' }),
    event.remove({ id: 'displaydelight:small_food_plate' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/katana' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/greataxe' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/scythe' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/spear' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/halberd' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/glaive' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/warglaive' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/claymore' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/longsword' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/twinblade' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/rapier' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/cutlass' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/sai' }),
    event.remove({ id: 'knavesneeds:betternether/flaming_ruby/greathammer' }),
    event.remove({ id: 'betternether:piston' }),
    event.remove({ id: 'betternether:activator_rail' }),
    event.remove({ id: 'betternether:rail' }),
    event.remove({ id: 'betternether:detector_rail' }),
    event.remove({ id: 'minecraft:iron_bars' }),
    event.remove({ id: 'minecraft:iron_axe' }),
    event.remove({ id: 'minecraft:iron_pickaxe' }),
    event.remove({ id: 'minecraft:iron_shovel' }),
    event.remove({ id: 'minecraft:iron_sword' }),
    event.remove({ id: 'minecraft:iron_hoe' }),
    event.remove({ id: 'minecraft:iron_chestplate' }),
    event.remove({ id: 'minecraft:iron_helmet' }),
    event.remove({ id: 'minecraft:iron_boots' }),
    event.remove({ id: 'minecraft:iron_leggings' }),
    event.remove({ id: 'minecraft:shears' }),
    event.remove({ id: 'minecraft:iron_trapdoor' }),
    event.remove({ id: 'minecraft:iron_door' }),
    event.remove({ id: 'minecraft:heavy_weighted_pressure_plate' }),
    event.remove({ id: 'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye' }),
    event.remove({ id: 'quark:building/crafting/furnaces/cobblestone_furnace' }),
    event.remove({ id: 'regions_unexplored:blackstone_cluster' }),
    event.remove({ id: 'woodworks:trapped_chest' }),
    event.remove({ id: 'minecraft:blue_dye' }),
    event.remove({ id: 'iceandfire:copper_nuggets_to_ingot' }),
    event.remove({ id: 'betternether:stalagnate_log_stem' }),
    event.remove({ id: 'regions_unexplored:yellow_dye_from_tall_yellow_bioshroom' }),
    event.remove({ id: 'minecraft:cake' }),
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' }),
    event.remove({ id: 'farmersdelight:bread_from_smelting' }),
    event.remove({ id: 'farmersdelight:bread_from_smoking' }),
    event.remove({ id: 'createdeco:cracked_red_bricks_from_bricks_smelting' }),
    event.remove({ output: 'transmog:transmogrification_table' }),

    event.remove({ output: 'archeryexp:iron_arrow', input: 'minecraft:iron_ingot' }),
    event.remove({ output: 'archeryexp:gold_arrow', input: 'minecraft:gold_ingot' }),
    event.remove({ output: 'archeryexp:diamond_arrow', input: 'minecraft:diamond' }),
    event.remove({ output: 'archeryexp:netherite_arrow', input: 'minecraft:netherite_scrap' }),

    //remove redundant trial chamber blocks
    // event.remove({ output: 'trials:tuff_stairs' }),
    // event.remove({ output: 'trials:tuff_wall' }),
    // event.remove({ output: 'trials:tuff_slab' }),
    // event.remove({ output: 'trials:polished_tuff' }),
    // event.remove({ output: 'trials:polished_tuff_slab' }),
    // event.remove({ output: 'trials:polished_tuff_stairs' }),
    // event.remove({ output: 'trials:tuff_bricks' }),
    // event.remove({ output: 'trials:tuff_brick_wall' }),
    // event.remove({ output: 'trials:tuff_brick_stairs' }),
    // event.remove({ output: 'trials:tuff_brick_slab' }),

    event.remove({ output: Fluid.of('brewinandchewin:honey') }),

    //Fix recipe conflicts
    event.shaped('create:rope_pulley', [
      ' A ', 
      ' R ', 
      ' I '
    ], 
    {
      A: 'create:andesite_casing',
      R: 'supplementaries:rope',
      I: 'create:iron_sheet'
      }
    ),
    event.shaped('4x netherexp:polished_basalt_bricks', [
        'BB', 
        'BB',
      ], 
      {
         B: 'betternether:basalt_bricks'
      }
    ),
    event.shaped('6x ars_nouveau:archwood_slab', [
      'AAA'
      ], 
      {
        A: 'ars_nouveau:archwood_planks'
      }
    ),
    event.shaped('minecraft:furnace', [
      'AAA', 
      'A A', 
      'AAA'
      ], 
      {
        A: 'minecraft:cobblestone'
      }
    ),
    event.shaped('16x minecraft:iron_bars', [
      'AAA', 
      'AAA'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:iron_trapdoor', [
      'AA', 
      'AA'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('3x minecraft:iron_door', [
      'AA', 
      'AA', 
      'AA'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:shears', [
      ' A', 
      'A '
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:heavy_weighted_pressure_plate', [
      'AA'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shapeless(
      Item.of('upgrade_aquatic:tooth_block'),
      [
        '9x #integrations:shark_teeth',
      ]
    ),
    event.shapeless(
      Item.of('4x betternether:nether_mushroom_planks'),
      [
        'minecraft:mushroom_stem',
      ]
    ),
    event.shapeless(
      Item.of('4x regions_unexplored:blackstone_cluster'),
      [
        '2x minecraft:blackstone',
      ]
    ),
    event.shapeless(
      Item.of('9x spelunkery:sulfur'),
      [
        'spelunkery:sulfur_block',
      ]
    ),
    event.shaped('minecraft:iron_axe', [
      'AA ', 
      'AS ', 
      ' S '  
      ], 
      {
        A: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
      }
    ),
    event.shaped('minecraft:iron_pickaxe', [
      'AAA', 
      ' S ', 
      ' S '  
      ], 
      {
        A: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
      }
    ),
    event.shaped('minecraft:iron_hoe', [
      'AA ', 
      ' S ', 
      ' S '  
      ], 
      {
        A: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
      }
    ),
    event.shaped('minecraft:iron_shovel', [
      ' A ', 
      ' S ', 
      ' S '  
      ], 
      {
        A: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
      }
    ),
    event.shaped('minecraft:iron_sword', [
      ' A ', 
      ' A ', 
      ' S '  
      ], 
      {
        A: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
      }
    ),
    event.shaped('minecraft:iron_helmet', [
      'AAA', 
      'A A'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:iron_chestplate', [
      'A A', 
      'AAA',
      'AAA'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:iron_leggings', [
      'AAA', 
      'A A',
      'A A'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:iron_boots', [
      'A A',
      'A A'
      ], 
      {
        A: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('minecraft:blue_dye', [
      'AA',
      'AA'
      ], 
      {
        A: 'spelunkery:lapis_lazuli_shard'
      }
    ),
    event.shapeless(
      Item.of('minecraft:packed_mud'),
      [
        'regions_unexplored:peat_mud',
        'minecraft:wheat',
      ]
    ),


    //Making Paper and Maps easier to get to make Map Atlases easier to maintain
    event.shaped('8x minecraft:map', [
        'AAA', 
        'ABA', 
        'AAA'  
      ], 
      {
        A: 'minecraft:paper', 
        B: 'minecraft:compass'  
      }
    ),
    event.recipes.createCutting('3x minecraft:paper', [
      'farmersdelight:canvas'
    ]),

    //Making it not accept the iron tag, only actual iron, preventing a recipe conflict with Better End
    event.recipes.createPressing('create:iron_sheet', [
      'minecraft:iron_ingot'
    ]),

    //Sulfur Integration
    event.recipes.createCrushing([
        'spelunkery:sulfur',
        Item.of('spelunkery:sulfur').withChance(0.3)
      ], 'betterend:crystalline_sulphur'
    ),
    event.shaped('alexscaves:sulfur', [
        'AA', 
        'AA'
      ], 
      {
        A: 'betterend:crystalline_sulphur',
      }
    ),

    //Integrating Biome Makeover
    event.shaped('biomemakeover:poltergeist', [
      'AAA', 
      'BCB', 
      'BDB'  
    ], {
      A: 'iceandfire:ectoplasm', 
      B: 'minecraft:phantom_membrane',
      C: 'minecraft:soul_soil',
      D: 'minecraft:cauldron'  
    }
    ),
    event.shapeless(
      Item.of('minecraft:phantom_membrane'), // arg 1: output
      [
        'iceandfire:ectoplasm',
        '3x biomemakeover:moth_scales'
      ]
    ),
    event.recipes.createMixing('biomemakeover:crude_cladding', [
      '4x biomemakeover:crude_fragment',
      'oreganized:raw_silver'
    ]).heated(),

    //Dimensional Fluid Integration (Spelunkery)
    event.recipes.createFilling('betternether:weeping_obsidian', [
      'minecraft:crying_obsidian',
      Fluid.of('spelunkery:portal_fluid', 144)
    ]),
    event.recipes.createFilling('betternether:blue_weeping_obsidian', [
      'betternether:blue_crying_obsidian',
      Fluid.of('spelunkery:portal_fluid', 144)
    ]),
    event.recipes.createFilling('betternether:blue_crying_obsidian', [
      'betternether:blue_obsidian',
      Fluid.of('spelunkery:portal_fluid', 144)
    ]),
    event.custom({
      type: 'create:mixing',
      ingredients: [
        { 
          item: 'betternether:blue_crying_obsidian'
        },
        {
          item: 'minecraft:glowstone_dust'
         }
      ],
      results: [
        { 
          item: 'betternether:blue_obsidian'
        },
        { 
          fluid: 'spelunkery:portal_fluid',
          "amount": 144
        }
      ]
    }),
    event.custom({
      type: 'create:mixing',
      ingredients: [
        { 
          item: 'betternether:blue_weeping_obsidian'
        },
        {
          item: 'minecraft:glowstone_dust'
         }
      ],
      results: [
        { 
          item: 'betternether:blue_obsidian'
        },
        { 
          fluid: 'spelunkery:portal_fluid',
          "amount": 288
        }
      ]
    }),
    event.custom({
      type: 'create:mixing',
      ingredients: [
        { 
          item: 'betternether:weeping_obsidian'
        },
        {
          item: 'minecraft:glowstone_dust'
         }
      ],
      results: [
        { 
          item: 'betternether:blue_obsidian'
        },
        { 
          fluid: 'spelunkery:portal_fluid',
          "amount": 288
        }
      ]
    }),

    //Reworked Teleporting Recipes
    event.shaped('ars_nouveau:warp_scroll', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
      A: 'ars_nouveau:source_gem', 
      B: 'waystones:warp_dust',
      C: 'minecraft:lapis_lazuli',
      D: 'ars_nouveau:blank_parchment'  
    }
    ),
    event.recipes.ars_nouveau.enchanting_apparatus(
      [
          "#forge:ender_pearls",
          "spelunkery:portal_fluid_bottle",
          "#forge:ender_pearls",
          "spelunkery:portal_fluid_bottle",
          "#forge:ender_pearls",
          "spelunkery:portal_fluid_bottle",
          "#forge:ender_pearls",
          "spelunkery:portal_fluid_bottle",
      ], // input items
    "minecraft:end_crystal", // reagent
    "waystones:warp_stone", // output
    1000, // source cost
    ),
    event.recipes.createCrushing([
      '4x waystones:warp_dust',
      Item.of('2x waystones:warp_dust').withChance(0.5)
    ], 'waystones:warp_stone'),
    event.recipes.createMechanicalCrafting('waystones:waystone', [
      '  C  ',
      ' CBC ',
      ' CAC ',
      ' CBC ',
      ' CCC '
    ], {
      A: 'waystones:warp_stone',
      B: 'waystones:warp_dust',
      C: 'minecraft:stone_bricks'
    }),
    event.recipes.createMechanicalCrafting('waystones:sandy_waystone', [
      '  C  ',
      ' CBC ',
      ' CAC ',
      ' CBC ',
      ' CCC '
    ], {
      A: 'waystones:warp_stone',
      B: 'waystones:warp_dust',
      C: 'quark:sandstone_bricks'
    }),
    event.recipes.createMechanicalCrafting('waystones:mossy_waystone', [
      '  C  ',
      ' CBC ',
      ' CAC ',
      ' CBC ',
      ' CCC '
    ], {
      A: 'waystones:warp_stone',
      B: 'waystones:warp_dust',
      C: 'minecraft:mossy_stone_bricks'
    }),
    event.recipes.createMechanicalCrafting('waystones:deepslate_waystone', [
      '  C  ',
      ' CBC ',
      ' CAC ',
      ' CBC ',
      ' CCC '
    ], {
      A: 'waystones:warp_stone',
      B: 'waystones:warp_dust',
      C: 'minecraft:deepslate_bricks'
    }),
    event.recipes.createMechanicalCrafting('waystones:blackstone_waystone', [
      '  C  ',
      ' CBC ',
      ' CAC ',
      ' CBC ',
      ' CCC '
    ], {
      A: 'waystones:warp_stone',
      B: 'waystones:warp_dust',
      C: 'minecraft:blackstone'
    }),
    event.recipes.createMechanicalCrafting('waystones:end_stone_waystone', [
      '  C  ',
      ' CBC ',
      ' CAC ',
      ' CBC ',
      ' CCC '
    ], {
      A: 'waystones:warp_stone',
      B: 'waystones:warp_dust',
      C: 'minecraft:end_stone_bricks'
    }),

    //Adding Recipes (Misc)
    event.shaped('netherexp:wither_bone_block', [
      'WWW', 
      'WWW', 
      'WWW'  
      ], 
      {
       W: 'iceandfire:wither_shard'
    }
    ),
    event.recipes.create.compacting(
      ['64x netherexp:netherite_plating'], ['minecraft:gold_ingot', 'minecraft:netherite_scrap', '2x netherexp:stridite', Fluid.lava(10)
      ]
    ).superheated(),
    event.recipes.create.compacting(
      ['64x netherexp:necromium_plating'], ['oreganized:silver_ingot', 'minecraft:netherite_scrap', '2x netherexp:stridite', Fluid.lava(10)
      ]
    ).superheated(),
    event.recipes.createSequencedAssembly([
    Item.of('create:sturdy_sheet').withChance(100),
    Item.of('2x create:crushed_raw_lead').withChance(2.0),
    Item.of('5x oreganized:lead_nugget').withChance(2.0)
    ], 'oreganized:lead_ingot', [ 
     event.recipes.createFilling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.lava(500)]),
     event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'create:powdered_obsidian']),
     event.recipes.createPressing('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet'])   
    ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1),
    event.shaped('upgrade_aquatic:beachgrass_thatch', [
      'AA ', 
      'AA ', 
      '   '  
      ], {
          A: '#integrations:grass'
      }
    ),
    event.shapeless(
      Item.of('alexsmobs:cosmic_cod_bucket'),
      [
        'alexsmobs:cosmic_cod',
        "minecraft:bucket"
      ]
    ),
    event.shaped('2x minecraft:netherite_upgrade_smithing_template', [
      'ABA', 
      'ACA', 
      'AAA'  
    ], {
      A: 'minecraft:diamond', 
      B: 'minecraft:netherite_upgrade_smithing_template',
      C: 'minecraft:netherrack'
    }
    ),
    event.shaped('2x minecraft:netherite_upgrade_smithing_template', [
      'ABA', 
      'ACA', 
      'AAA'  
    ], {
      A: 'rubinated_nether:ruby', 
      B: 'minecraft:netherite_upgrade_smithing_template',
      C: 'minecraft:netherrack'
    }
    ),
    event.recipes.createCrushing([
      'create:powdered_obsidian',
      Item.of('betternether:blue_obsidian').withChance(0.75)
    ], 'betternether:blue_obsidian'),
    event.recipes.createCrushing([
      'create:powdered_obsidian',
      Item.of('regions_unexplored:cobalt_obsidian').withChance(0.75)
    ], 'regions_unexplored:cobalt_obsidian'),
    event.shaped('farmersdelight:cooking_pot', [
      'BAB', 
      'DCD', 
      'DDD'  
    ], {
      A: 'minecraft:wooden_shovel', 
      B: 'minecraft:brick',
      C: 'minecraft:water_bucket',
      D: 'create:iron_sheet'  
    }
    ),
    event.shaped('minecraft:bundle', [
      'ABA', 
      'B B', 
      'BBB'  
      ], {
          A: 'minecraft:string', 
          B: 'minecraft:rabbit_hide'  
      }
    ),
      event.shaped('minecraft:bundle', [
        'ABA', 
        'B B',
        'BBB'  
      ], {
        A: 'minecraft:string', 
        B: 'farmersdelight:canvas'
      }
    ),
    event.shaped('supplementaries:sack', [
      'BAB', 
      'B B',
      'BBB'  
    ], {
      A: 'minecraft:string', 
      B: 'farmersdelight:canvas'
    }
    ),
    event.shaped('minecraft:bundle', [
      ' A ', 
      ' B ', 
      '   '  
    ], {
      A: 'mowziesmobs:glowing_jelly', 
      B: 'minecraft:stick'  
    }
    ),
    event.shaped('bountiful:bountyboard', [
      'ABA', 
      'CDC', 
      'ABA'  
    ], {
      A: '#minecraft:planks', 
      B: '#minecraft:logs',
      C: 'create:clipboard',
      D: 'minecraft:diamond'  
      }
    ),
    event.shaped('create_enchantment_industry:disenchanter', [
      ' A ', 
      ' B ', 
      ' C '  
    ], {
      A: '#create:sandpaper', 
      B: 'spelunkery:nephrite_siphon',
      C: 'create:copper_casing'
    }
    ),
    event.recipes.createMixing('3x regions_unexplored:prismarite_cluster', [
      '3x #quark:corundum_cluster'
    ]),
      event.shaped('6x spelunkery:rope_ladder', [
        'A A', 
        'BBB', 
      'A A'  
      ], 
      {
        A: 'supplementaries:rope', 
        B: 'minecraft:stick'  
      }
    ),
    event.shaped('3x supplementaries:rope', [
        ' A ', 
        ' A ', 
      ' A '  
      ], 
      {
        A: 'spelunkery:tangle_roots'
      }
    ),
    event.shaped('spelunkery:parachute', [
        'AAA', 
        'B B', 
        ' B '  
      ], 
      {
        A: '#spelunkery:parachute_repair',
        B: 'supplementaries:rope'
      }
    ),
    event.shaped('24x quark:iron_plate', [
        'AAA', 
        'A A', 
        'AAA'  
      ], 
      {
        A: 'createdeco:industrial_iron_ingot'
      }
    ),
    event.replaceInput(
      { input: 'oreganized:electrum_upgrade_smithing_template' }, // Arg 1: the filter
      'oreganized:electrum_upgrade_smithing_template',            // Arg 2: the item to replace
      'minecraft:netherite_upgrade_smithing_template'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.remove({ output: 'betternether:nether_ruby' }),
    event.replaceInput(
      { input: 'betternether:nether_ruby' }, // Arg 1: the filter
      'betternether:nether_ruby',            // Arg 2: the item to replace
      'rubinated_nether:ruby'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.replaceInput(
      { input: 'betternether:nether_ruby_block' }, // Arg 1: the filter
      'betternether:nether_ruby_block',            // Arg 2: the item to replace
      'rubinated_nether:ruby_block'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.replaceInput(
      { input: 'galosphere:pink_salt_shard' }, // Arg 1: the filter
      'galosphere:pink_salt_shard',            // Arg 2: the item to replace
      'spelunkery:salt'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.replaceInput(
      { input: 'betterend:silk_fiber' }, // Arg 1: the filter
      'betterend:silk_fiber',            // Arg 2: the item to replace
      'crittersandcompanions:silk'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.replaceInput(
      { input: 'createdeco:copper_bars' }, // Arg 1: the filter
      'createdeco:copper_bars',            // Arg 2: the item to replace
      'caverns_and_chasms:copper_bars'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.replaceInput(
      { input: 'crittersandcompanions:pearl' }, // Arg 1: the filter
      'crittersandcompanions:pearl',            // Arg 2: the item to replace
      'alexscaves:pearl'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    ),
    event.shaped('8x galosphere:pink_salt', [
      'RRR', 
      'RPR', 
      'RRR'  
      ], 
      {
       R: 'spelunkery:rock_salt_block',
       P: 'minecraft:pink_dye'
    }),
    event.replaceInput(
      { input: 'galosphere:pink_salt_shard' },
      'galosphere:pink_salt_shard',           
      'spelunkery:rock_salt'        
    ),
    event.replaceOutput(
      { output: 'galosphere:pink_salt_shard' }, 
      'galosphere:pink_salt_shard',          
      'spelunkery:rock_salt'        
    ),
    event.recipes.createCrushing([
        '2x spelunkery:rock_salt',
        '2x spelunkery:salt',
        Item.of('#integrations:salt_blocks').withChance(0.15)
      ], '#integrations:salt_blocks'
    ),

    event.recipes.ars_nouveau.enchanting_apparatus([
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks",
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks",
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks",
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks"
          ], // input items
        "simplyswords:runic_tablet", // reagent
        "galosphere:saltbound_tablet", // output
        300
    ),
    event.shaped('4x rubinated_nether:ruby', [
      'AA', 
      'AA'
    ], 
    {
      A: 'betternether:nether_ruby'
    }
  ),
  event.shapeless(
    Item.of('netherexp:ectoplasm_bucket'),
    [
      'minecraft:bucket',
      'iceandfire:ectoplasm'
    ]
  ),
  event.recipes.create.filling('2x iceandfire:ectoplasm', [Fluid.of("netherexp:ectoplasm"), 'iceandfire:ectoplasm']),
  event.shapeless(
    Item.of('4x galosphere:salted_jerky'),
    [
      'spelunkery:salt_bucket',
      'minecraft:rotten_flesh',
      'minecraft:rotten_flesh',
      'minecraft:rotten_flesh',
      'minecraft:rotten_flesh'
    ]
  ),
  event.shapeless(
    Item.of('netherexp:wisp_bottle'),
    [
      'minecraft:glass_bottle',
      'iceandfire:ectoplasm'
    ]
  ),
  event.shaped('minecraft:soul_campfire', [
    ' A ', 
    'ABA',
    'CCC'
  ], 
  {
    A: 'minecraft:stick',
    B: 'iceandfire:ectoplasm',
    C: '#minecraft:logs' 
  }
),
event.shaped('netherexp:nether_pizza', [
  'ABA', 
  'CCC',
  'DED'
], 
{
  A: 'mynethersdelight:cooked_loin',
  B: 'minecraft:warped_roots',
  C: 'netherexp:glowcheese',
  D: 'minecraft:bread',
  E: 'minecraft:nether_wart' 
}
),
event.shaped('4x netherexp:will_o_wisp', [
  ' A ', 
  'ABA',
  ' A '
], 
{
  A: 'iceandfire:ectoplasm',
  B: 'minecraft:fire_charge'
  }
),
event.shaped('4x minecraft:soul_torch', [
  'A', 
  'B'
], 
{
  A: 'iceandfire:ectoplasm',
  B: 'minecraft:stick'
  }
),
event.shaped('2x netherexp:ecto_soul_sand', [
  'AB', 
  'BA'
], 
{
  A: 'iceandfire:ectoplasm',
  B: 'minecraft:soul_sand'
  }
),
  event.recipes.farmersdelight.cooking(
    ["minecraft:baked_potato",
      "quark:cooked_crab_leg",
      "minecraft:carrot",
      "farmersdelight:milk_bottle"
    ],
    "biomemakeover:crab_chowder",
    2.0,
    400,
    "minecraft:bowl",
  ),
  event.recipes.farmersdelight.cooking(
      ["minecraft:sugar",
        "minecraft:cocoa_beans",
        "#forge:milk",
        "quark:bottled_cloud"
      ],
      "quarkdelight:cloud_latte",
      5.0,
      400,
      "minecraft:bowl",
    ),
    event.recipes.farmersdelight.cooking(
      ["minecraft:water_bucket",
        "#forge:eggs",
        "#forge:eggs",
        "#forge:eggs",
        "#forge:eggs",
        "#forge:eggs"
      ],
      "5x mynethersdelight:boiled_egg",
      2.0,
      200
    ),
    event.shapeless(
      Item.of('supplementaries:pancake'),
      [
        'autumnity:syrup_bottle',
        '#forge:milk',
    'create:dough',
    '#forge:eggs',
      ]
    ),
    event.replaceInput(
      { input: 'regions_unexplored:salmonberry' }, 
      'regions_unexplored:salmonberry',          
      'delightful:salmonberries'        
    ),
    event.replaceInput(
      { output: 'oreganized:flint_and_pewter' }, 
      'oreganized:lead_ingot',          
      'eidolon:pewter_ingot'        
    ),
    event.replaceOutput(
      { output: 'regions_unexplored:salmonberry' }, 
      'regions_unexplored:salmonberry',          
      'delightful:salmonberries'        
    ),
    event.smelting('incubation:fried_egg', 'minecraft:egg').xp(0.35),
    event.smoking('incubation:fried_egg', 'minecraft:egg').xp(0.35),
    event.campfireCooking('incubation:fried_egg', 'minecraft:egg', 0.35, 600),
    event.recipes.create.sandpaper_polishing('rubinated_nether:ruby', 'rubinated_nether:rough_ruby'),
    event.shaped('transmog:transmogrification_table', [
      ' V ', 
      'GSG', 
      'AAA'
    ], 
    {
      A: 'minecraft:amethyst_block',
      G: 'minecraft:glass',
      S: 'caverns_and_chasms:spinel',
      V: 'transmog:void_fragment'
      }
    ),
    event.replaceInput(
      { output: 'quark:chiseled_tuff_bricks' }, 
      'quark:tuff_bricks_slab',          
      'create:cut_tuff_brick_slab'        
    )
  }
)