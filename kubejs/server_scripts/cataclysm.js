ServerEvents.recipes(event => {
    event.remove({ output: 'cataclysm:black_steel_ingot' }),
    event.remove({ output: 'cataclysm:black_steel_nugget' }),
    event.remove({ output: 'cataclysm:black_steel_block' }),
    event.remove({ output: 'cataclysm:black_steel_sword' }),
    event.remove({ output: 'cataclysm:ignitium_upgrade_smithing_template' }),
    event.remove({ output: 'eyesoficeandfire:eye_of_fire_dragon' }),
    event.remove({ output: 'eyesoficeandfire:eye_of_ice_dragon' }),
    event.remove({ output: 'eyesoficeandfire:eye_of_lightning_dragon' }),
    event.remove({ output: 'mowzies_cataclysm:wrought_eye' }),
    event.remove({ output: 'cataclysm:flame_eye' }),
    event.remove({ output: 'cataclysm:mech_eye' }),
    event.remove({ output: 'cataclysm:abyss_eye' }),
    event.remove({ output: 'cataclysm:desert_eye' }),
    event.remove({ output: 'cataclysm:cursed_eye' }),
    event.remove({ output: 'cataclysm:abyssal_sacrifice' }),
    event.remove({ output: 'cataclysm:void_scatter_arrow' }),
    event.remove({ output: 'cataclysm:ignitium_boots' }),
    event.remove({ output: 'cataclysm:ignitium_leggings' }),
    event.remove({ output: 'cataclysm:ignitium_chestplate' }),
    event.remove({ output: 'cataclysm:ignitium_helmet' }),
    event.remove({ output: 'cataclysm:cursium_boots' }),
    event.remove({ output: 'cataclysm:cursium_leggings' }),
    event.remove({ output: 'cataclysm:cursium_chestplate' }),
    event.remove({ output: 'cataclysm:cursium_helmet' }),
    event.remove({ output: 'betternether:obsidian_bricks' }),
    event.remove({ output: 'betternether:obsidian_brick_stairs' }),
    event.remove({ output: 'betternether:obsidian_brick_slab' }),
    event.remove({ output: 'cataclysm:obsidian_bricks' }),
    event.remove({ output: 'cataclysm:pointed_icicle' }),

  	event.replaceInput(
      { input: 'cataclysm:black_steel_ingot' }, 
      'cataclysm:black_steel_ingot', 
      'born_in_chaos_v1:dark_metal_ingot'       
    ),
    event.replaceInput(
      { mod: 'cataclysm', input: 'born_in_chaos_v1:dark_metal_ingot' }, 
      'minecraft:stick', 
      'iceandfire:witherbone'       
    ),
    event.replaceInput(
      { input: 'cataclysm:black_steel_nugget' }, 
      'cataclysm:black_steel_nugget', 
      'born_in_chaos_v1:dark_metal_nugget'       
    ),
    event.replaceInput(
      { mod: 'mowzies_cataclysm' }, 
      'minecraft:ender_eye', 
      'kubejs:dormant_locator_eye'       
    ),
    event.replaceInput(
      { mod: 'cataclysm' }, 
      'minecraft:ender_eye', 
      'kubejs:dormant_locator_eye'       
    ),
    event.replaceInput(
      { input: 'betternether:obsidian_bricks' }, 
      'betternether:obsidian_bricks', 
      'cataclysm:obsidian_bricks'       
    ),
    event.shaped('cataclysm:obsidian_bricks', [
      'AA', 
      'AA'
    ], 
      {
        A: 'betternether:obsidian_tile'
      }
    ),
    event.shaped('kubejs:dormant_locator_eye', [
      'EME', 
      'MYM',
      'EME'
    ], 
      {
        E: 'betterend:ender_dust',
        M: 'spelunkery:raw_magnetite',
        Y: '#forge:ender_pearls'
      }
    ),
    event.shaped('cataclysm:flame_eye', [
      'BNS', 
      'BDS',
      'BNS'
    ], 
      {
        B: 'minecraft:blaze_powder',
        D: 'kubejs:dormant_locator_eye',
        S: 'netherexp:banshee_powder',
        N: 'minecraft:netherite_scrap'
      }
    ),
    event.shaped('cataclysm:desert_eye', [
      'IGE', 
      'BDC',
      'RSO'
    ], 
      {
        I: 'minecraft:gold_ingot',
        G: 'alexsmobs:guster_eye',
        E: 'minecraft:emerald',
        B: 'minecraft:dead_bush',
        D: 'kubejs:dormant_locator_eye',
        C: 'minecraft:cactus',
        R: 'minecraft:rotten_flesh',
        S: 'minecraft:chiseled_sandstone',
        O: 'minecraft:bone'
      }
    ),
    event.shaped('cataclysm:cursed_eye', [
      'GBG', 
      'RDR',
      'GFG'
    ], 
      {
        G: 'minecraft:gold_ingot',
        D: 'kubejs:dormant_locator_eye',
        R: 'forbidden_arcanus:dark_rune',
        B: 'minecraft:bone',
        F: 'rubinated_nether:frosted_ice'
      }
    ),
    event.recipes.createSequencedAssembly([
    Item.of('cataclysm:mech_eye').withChance(100),
    ], 'kubejs:dormant_locator_eye', [ 
     event.recipes.createDeploying('kubejs:dormant_locator_eye', ['kubejs:dormant_locator_eye', 'create:precision_mechanism']),
     event.recipes.createFilling('kubejs:dormant_locator_eye', ['kubejs:dormant_locator_eye', Fluid.lava(500)]),
     event.recipes.createDeploying('kubejs:dormant_locator_eye', ['kubejs:dormant_locator_eye', 'forbidden_arcanus:mundabitur_dust']),
     event.recipes.createPressing('kubejs:dormant_locator_eye', ['kubejs:dormant_locator_eye'])   
    ]).transitionalItem('kubejs:dormant_locator_eye').loops(1),
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "spelunkery:portal_fluid"
        },
        "ingredients": [
            {
                "item": "kubejs:dormant_locator_eye"
            },
            {
                "item": "forbidden_arcanus:dark_matter"
            },
            {
                "item": "minecraft:obsidian"
            },
            {
                "item": "minecraft:obsidian"
            },
            {
                "item": "minecraft:obsidian"
            }
        ],
        "output": {
            "item": "cataclysm:abyss_eye",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "minecraft:portal_fluid",
            "amount": 0
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
                "item": "minecraft:heart_of_the_sea"
            },
            {
                "item": "minecraft:nautilus_shell"
            },
            {
                "item": "minecraft:amethyst_block"
            },
            {
                "item": "minecraft:gold_block"
            },
            {
                "item": "cataclysm:athame"
            },
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "rubinated_nether:ruby_block"
            },
            {
                "tag": "integrations:coral_pieces"
            }
        ],
        "output": {
            "item": "cataclysm:abyssal_sacrifice",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 0
        },
        "fluidLevelsConsumed": 1000
    }),
    event.shapeless(
      Item.of('eyesoficeandfire:eye_of_fire_dragon'),
      [
        'kubejs:dormant_locator_eye',
        'iceandfire:fire_dragon_blood'
      ]
    ),
    event.shapeless(
      Item.of('eyesoficeandfire:eye_of_ice_dragon'),
      [
        'kubejs:dormant_locator_eye',
        'iceandfire:ice_dragon_blood'
      ]
    ),
    event.shapeless(
      Item.of('eyesoficeandfire:eye_of_lightning_dragon'),
      [
        'kubejs:dormant_locator_eye',
        'iceandfire:lightning_dragon_blood'
      ]
    ),
    event.recipes.create.compacting(
      ['kubejs:ignitium_armor_plate'], 
      ['cataclysm:ignitium_ingot', 'alexscaves:tectonic_shard', Fluid.lava(500)]
    ).superheated(),
    event.recipes.create.compacting(
      ['kubejs:cursium_armor_plate'], 
      ['cataclysm:cursium_ingot', 'alexsmobs:soul_heart', Fluid.of("netherexp:ectoplasm", 500)]
    ).superheated(),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_fire_helmet"
        },
        "addition": {
          "item": "kubejs:ignitium_armor_plate"
        },
        "result": {
          "item": "cataclysm:ignitium_helmet"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_fire_chestplate"
        },
        "addition": {
          "item": "kubejs:ignitium_armor_plate"
        },
        "result": {
          "item": "cataclysm:ignitium_chestplate"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_fire_leggings"
        },
        "addition": {
          "item": "kubejs:ignitium_armor_plate"
        },
        "result": {
          "item": "cataclysm:ignitium_leggings"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_fire_boots"
        },
        "addition": {
          "item": "kubejs:ignitium_armor_plate"
        },
        "result": {
          "item": "cataclysm:ignitium_boots"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_helmet"
        },
        "addition": {
          "item": "kubejs:cursium_armor_plate"
        },
        "result": {
          "item": "cataclysm:cursium_helmet"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_chestplate"
        },
        "addition": {
          "item": "kubejs:cursium_armor_plate"
        },
        "result": {
          "item": "cataclysm:cursium_chestplate"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_leggings"
        },
        "addition": {
          "item": "kubejs:cursium_armor_plate"
        },
        "result": {
          "item": "cataclysm:cursium_leggings"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_boots"
        },
        "addition": {
          "item": "kubejs:cursium_armor_plate"
        },
        "result": {
          "item": "cataclysm:cursium_boots"
        }
    })
  }
)
