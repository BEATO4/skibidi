ServerEvents.recipes(event => {
    event.remove({ output: 'alexscaves:dinosaur_nugget' }),
    event.remove({ output: 'alexscaves:seething_stew' }),
    event.remove({ output: 'alexscaves:primordial_soup' }),
    event.remove({ output: 'alexscaves:vesper_stew' }),
    event.remove({ output: 'alexscaves:azure_neodymium_ingot' }), 
    event.remove({ output: 'alexscaves:scarlet_neodymium_ingot' }), 
    event.remove({ output: 'alexscaves:quarry_smasher' }), 
    event.remove({ output: 'alexscaves:nuclear_bomb' }), 
    event.remove({ output: 'alexscaves:raygun' }), 
    event.remove({ output: 'alexscaves:nuclear_furnace_component' }), 
    event.remove({ output: 'alexscaves:uranium_rod' }),
    event.remove({ output: 'alexscaves:nuclear_siren' }),
    event.remove({ output: 'alexscaves:metal_barrel' }), 
    event.remove({ output: 'alexscaves:polymer_plate'}),
    event.remove({ output: 'alexscaves:dreadbow'}),
    event.remove({ output: 'spelunkery:handheld_compactor' }), 
    event.remove({ output: 'spelunkery:item_magnet' }),  
    event.remove({ output: 'spelunkery:compression_blast_miner' }), 
    event.remove({ output: 'alexscaves:darkened_apple' }), 
    event.remove({ output: 'alexscaves:shadow_silk' }), 

    event.recipes.createCompacting('alexscaves:polymer_plate', [
      'createdeco:industrial_iron_ingot',
      'spelunkery:sulfur',
      'alexscaves:toxic_paste',
      'alexscaves:radon_bottle'
    ]).heated(),
  	event.recipes.farmersdelight.cutting(
      "alexscaves:cooked_dinosaur_chop",
      "#forge:tools/knives", // tool
      [ // results
          "12x alexscaves:dinosaur_nugget"
      ],
  	),
    event.recipes.farmersdelight.cooking(
      ["alexscaves:cooked_dinosaur_chop",
        "alexscaves:flytrap",
        "alexscaves:heavy_bone"
      ],
      "alexscaves:seething_stew", // output
      50, // exp
      400, // cookTime
      "minecraft:bowl", // container
    ),
    event.recipes.farmersdelight.cooking(
      ["alexscaves:cooked_trilocaris_tail",
      "alexscaves:cooked_trilocaris_tail",
        "alexscaves:tree_star"
      ],
      "alexscaves:primordial_soup", // output
      50, // exp
      300, // cookTime
      "minecraft:bowl", // container
    ),
    event.recipes.farmersdelight.cooking(
      ["alexscaves:vesper_wing",
      "alexscaves:thornwood_branch",
        "#forge:mushrooms"
      ],
      "alexscaves:vesper_stew", // output
      50, // exp
      200, // cookTime
      "minecraft:bowl", // container
    ),
    event.recipes.createMechanicalCrafting('alexscaves:ambersol', [
      ' CCC ',
      'CCCCC',
      'CCACC',
      'CCCCC',
      ' CCC '
    ], {
      A: 'alexscaves:amber',
      C: 'minecraft:glowstone_dust'
    }),
    event.recipes.createMechanicalCrafting('alexscaves:primitive_club', [
      ' CCC ',
      ' CBC ',
      ' CBC ',
      '  A  ',
      '  A  '
    ], {
      A: 'alexscaves:heavy_bone',
      B: 'alexscaves:cycad',
      C: '#minecraft:logs'
    }),
    event.recipes.createMechanicalCrafting('alexscaves:tremorzilla_egg', [
      '  D  ',
      ' DCD ',
      'DCACD',
      'DCBCD',
      ' DDD '
    ], {
      A: 'alexscaves:immortal_embryo',
      B: 'alexscaves:tremorsaurus_egg',
      C: 'alexscaves:tectonic_shard',
      D: 'alexscaves:uranium'
    }),

    //Create Deco Industrial Iron Integration
    event.recipes.createCompacting('alexscaves:metal_barrel', [
      'minecraft:barrel',
      '8x createdeco:industrial_iron_sheet'
    ]),
    event.recipes.createCompacting('alexscaves:metal_barrel', [
      'minecraft:barrel',
      '4x alexscaves:scrap_metal'
    ]),

    //Acid Integration
    event.recipes.createFilling('alexscaves:rusty_scrap_metal', [
      'alexscaves:scrap_metal',
      Fluid.of('alexscaves:acid', 250)
    ]),
    event.recipes.createFilling('alexscaves:rusty_scrap_metal_plate', [
      'alexscaves:scrap_metal_plate',
      Fluid.of('alexscaves:acid', 250)
    ]),
    event.recipes.createFilling('alexscaves:rusty_rebar', [
      'alexscaves:metal_rebar',
      Fluid.of('alexscaves:acid', 250)
    ]),
    event.recipes.createFilling('alexscaves:rusty_scaffolding', [
      'alexscaves:metal_scaffolding',
      Fluid.of('alexscaves:acid', 250)
    ]),
    event.recipes.createFilling('alexscaves:rusty_barrel', [
      'alexscaves:metal_barrel',
      Fluid.of('alexscaves:acid', 250)
    ]),
    event.recipes.createFilling('quark:rusty_iron_plate', [
      'quark:iron_plate',
      Fluid.of('alexscaves:acid', 250)
    ]),
    event.recipes.createFilling('betterarcheology:bomb', [
      'supplementaries:bomb',
      Fluid.of('alexscaves:acid', 100)
    ]),

    //Spelunkery and Alex's Caves Magnet Integration

    event.recipes.createMixing('alexscaves:azure_neodymium_ingot', [
      'spelunkery:raw_magnetite',
      'minecraft:lapis_lazuli',
      'alexscaves:raw_azure_neodymium'
    ]).heated(),
    event.recipes.createMixing('alexscaves:scarlet_neodymium_ingot', [
      'spelunkery:raw_magnetite',
      'spelunkery:cinnabar',
      'alexscaves:raw_scarlet_neodymium'
    ]).heated(),
    event.shaped('spelunkery:item_magnet', [
        'S A', 
        'B B', 
      'BBB'  
      ], 
      {
       B: 'spelunkery:raw_magnetite',
       A: 'alexscaves:azure_neodymium_ingot',
       S: 'alexscaves:scarlet_neodymium_ingot'
    }),
    event.recipes.createMechanicalCrafting('spelunkery:compression_blast_miner', [
      'SOIOS',
      'SNDNS',
      'SOCOS'
    ], {
      D: 'minecraft:dispenser',
      S: 'create:sturdy_sheet',
      O: 'minecraft:obsidian',
      I: 'minecraft:iron_block',
      N: 'minecraft:netherite_ingot',
      C: 'spelunkery:cinnabar_block'
    }),
    event.shaped('alexscaves:quarry_smasher', [
        'AAA', 
        'NCN', 
      'SHS'  
      ], 
      {
       C: 'spelunkery:compression_blast_miner',
       A: 'alexscaves:azure_neodymium_ingot',
       S: 'alexscaves:scarlet_neodymium_ingot',
       N: 'minecraft:chain',
       H: 'alexscaves:heavyweight'
      }
    ),

    //ALEXS CAVES NUCLEAR NONSENSE
    event.recipes.createSequencedAssembly([ // start the recipe
     Item.of('alexscaves:nuclear_bomb').withChance(100)
    ], 'alexscaves:block_of_uranium', [ 
     event.recipes.createDeploying('alexscaves:block_of_uranium', ['alexscaves:block_of_uranium', 'create:industrial_iron_block']),
     event.recipes.createDeploying('alexscaves:block_of_uranium', ['alexscaves:block_of_uranium', 'create:sturdy_sheet']),
     event.recipes.createDeploying('alexscaves:block_of_uranium', ['alexscaves:block_of_uranium', 'alexscaves:fissile_core']),
     event.recipes.createDeploying('alexscaves:block_of_uranium', ['alexscaves:block_of_uranium', 'alexscaves:uranium_rod']),
     event.recipes.createPressing('alexscaves:block_of_uranium', ['alexscaves:block_of_uranium'])   
    ]).transitionalItem('alexscaves:block_of_uranium').loops(2),

    event.recipes.createSequencedAssembly([ // start the recipe
     Item.of('alexscaves:nuclear_furnace_component').withChance(100)
    ], 'minecraft:blast_furnace', [ 
     event.recipes.createDeploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'alexscaves:charred_remnant']),
     event.recipes.createDeploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'alexscaves:uranium']),
     event.recipes.createDeploying('minecraft:blast_furnace', ['minecraft:blast_furnace', 'create:sturdy_sheet']),
     event.recipes.createPressing('minecraft:blast_furnace', ['minecraft:blast_furnace'])   
    ]).transitionalItem('minecraft:blast_furnace').loops(4),

    event.recipes.createMechanicalCrafting('alexscaves:raygun', [
      'PMRPPP',
      'FUU   '
    ], {
      F: 'alexscaves:fissile_core',
      U: 'alexscaves:uranium_rod',
      P: 'alexscaves:polymer_plate',
      M: 'create:precision_mechanism',
      R: 'create:propeller'
    }),
    
    event.shaped('alexscaves:uranium_rod', [
      'ULU', 
      'UBU', 
      'ULU'  
      ], 
      {
       U: 'alexscaves:uranium',
       B: 'minecraft:blaze_rod',
       L: 'oreganized:lead_ingot'
    }),

    event.shaped('alexscaves:nuclear_siren', [
      'CUC', 
      ' L ', 
      ' L '  
      ], 
      {
       U: 'alexscaves:uranium',
       C: 'alexscaves:charred_remnant',
       L: 'oreganized:lead_ingot'
    }),

    //ALEXS CAVES DREAD STUFF
    event.recipes.ars_nouveau.enchanting_apparatus([
              "alexscaves:pure_darkness",
              "alexscaves:shadow_silk",
              "alexscaves:vesper_wing",
              "iceandfire:dread_shard",
              "alexscaves:shadow_silk",
              "iceandfire:dread_shard",
              "alexscaves:vesper_wing",
              "alexscaves:shadow_silk"
          ], // input items
        "iceandfire:dragonbone_bow", // reagent
        "alexscaves:dreadbow", // output
        666,
        true
    ),
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "minecraft:apple"
            },
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "alexscaves:pure_darkness"
            }
        ],
        "output": {
            "item": "alexscaves:darkened_apple",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 1000
        },
        "fluidLevelsConsumed": 1000
    }),
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "alexscaves:dark_tatters"
            },
            {
                "item": "alexscaves:moth_dust"
            },
            {
                "item": "alexscaves:dark_tatters"
            },
            {
                "item": "alexscaves:moth_dust"
            },
            {
                "item": "alexscaves:dark_tatters"
            },
            {
                "item": "alexscaves:moth_dust"
            },
            {
                "item": "alexscaves:dark_tatters"
            }
        ],
        "output": {
            "item": "alexscaves:shadow_silk",
            "count": 4
        },
        "liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 1000
        },
        "fluidLevelsConsumed": 1000
    })
  }
)