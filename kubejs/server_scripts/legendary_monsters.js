ServerEvents.recipes(event => {
  //Disabled
    event.remove({ output: 'legendary_monsters:ancient_sandstone_shard' }),
    event.remove({ output: 'legendary_monsters:eye_of_bones' }),
    event.remove({ output: 'legendary_monsters:eye_of_moss' }),
    event.remove({ output: 'legendary_monsters:eye_of_frost' }),
  //Recipe Changes
    event.remove({ output: 'legendary_monsters:eye_of_chorus' }),
    event.remove({ output: 'legendary_monsters:eye_of_shulker' }),
    event.remove({ output: 'legendary_monsters:eye_of_soul' }),
    event.remove({ output: 'legendary_monsters:eye_of_magma' }),
    event.remove({ output: 'legendary_monsters:eye_of_air' }),
    event.remove({ output: 'legendary_monsters:eye_of_many_ribs' }),
    event.remove({ output: 'legendary_monsters:eye_of_ghost' }),
    event.remove({ output: 'legendary_monsters:eye_of_sandstorm' }),

    event.shaped('legendary_monsters:eye_of_chorus', [
      'BBB', 
      'BDB',
      'BBB'
    ], 
      {
        B: 'minecraft:chorus_fruit',
        D: 'kubejs:dormant_locator_eye'
      }
    ),    
    event.shaped('legendary_monsters:eye_of_shulker', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'minecraft:shulker_shell',
        A: 'minecraft:end_stone',
        D: 'kubejs:dormant_locator_eye'
      }
    ),    
    event.shaped('legendary_monsters:eye_of_soul', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'iceandfire:ectoplasm',
        A: 'minecraft:soul_sand',
        D: 'kubejs:dormant_locator_eye'
      }
    ),
    event.shaped('legendary_monsters:eye_of_magma', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'minecraft:blaze_powder',
        A: 'minecraft:magma_block',
        D: 'kubejs:dormant_locator_eye'
      }
    ),
    event.shaped('legendary_monsters:eye_of_air', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'ars_nouveau:air_essence',
        A: 'quark:bottled_cloud',
        D: 'kubejs:dormant_locator_eye'
      }
    ),
    event.shaped('legendary_monsters:eye_of_many_ribs', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'alexsmobs:moose_ribs',
        A: 'minecraft:dripstone_block',
        D: 'kubejs:dormant_locator_eye'
      }
    ),
    event.shaped('legendary_monsters:eye_of_ghost', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'iceandfire:ectoplasm',
        A: 'netherexp:wraithing_flesh',
        D: 'kubejs:dormant_locator_eye'
      }
    ),
    event.shaped('legendary_monsters:eye_of_sandstorm', [
      'ABA', 
      'BDB',
      'ABA'
    ], 
      {
        B: 'create:sand_paper',
        A: 'minecraft:sandstone',
        D: 'kubejs:dormant_locator_eye'
      }
    ),
    
  	event.replaceInput(
      { input: 'legendary_monsters:ancient_sandstone_shard' }, 
      'legendary_monsters:ancient_sandstone_shard', 
      'cataclysm:ancient_metal_ingot'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:dinosaur_bone' }, 
      'legendary_monsters:dinosaur_bone', 
      'alexscaves:heavy_bone'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:withered_bone' }, 
      'legendary_monsters:withered_bone', 
      'iceandfire:witherbone'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:frozen_rune' }, 
      'legendary_monsters:frozen_rune', 
      'irons_spellbooks:ice_rune'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:air_rune' }, 
      'legendary_monsters:air_rune', 
      'irons_spellbooks:lightning_rune'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:molten_metal_ingot' }, 
      'legendary_monsters:molten_metal_ingot', 
      'oreganized:silver_ingot'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:corrupted_soul' }, 
      'legendary_monsters:corrupted_soul', 
      'iceandfire:ectoplasm'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:deactivated_guard_summoner' }, 
      'minecraft:iron_ingot', 
      'iceandfire:ectoplasm'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:deactivated_knight_summoner' }, 
      'minecraft:iron_ingot', 
      'iceandfire:ectoplasm'       
    ),
    event.replaceInput(
      { input: 'legendary_monsters:long_stick_half' }, 
      'legendary_monsters:long_stick_half', 
      'minecraft:stick'       
    ),
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "spelunkery:portal_fluid"
        },
        "ingredients": [
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "forbidden_arcanus:dark_matter"
            },
            {
                "item": "alexscaves:vesper_wing"
            },
            {
                "item": "alexscaves:occult_gem"
            },
            {
                "item": "hexerei:blood_bottle"
            },
            {
                "item": "alexscaves:shadow_silk"
            },
            {
                "item": "betterend:amber_gem"
            },
            {
                "item": "forbidden_arcanus:dark_matter"
            }
        ],
        "output": {
            "item": "traveloptics:dark_gem_of_the_living_void",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "spelunkery:portal_fluid",
            "amount": 0
        },
        "fluidLevelsConsumed": 1000
    })
  }
)
