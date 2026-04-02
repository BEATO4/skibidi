ServerEvents.recipes(event => {
  event.remove({ output: 'born_in_chaos_v1:infernal_evil_pumpkin' }),
	event.remove({ output: 'born_in_chaos_v1:flaming_evil_pumpkin' }),
	event.remove({ output: 'born_in_chaos_v1:hound_trap' }),
	event.remove({ output: 'born_in_chaos_v1:eternal_candy' }),
	event.remove({ output: 'born_in_chaos_v1:spiritual_dust' }),
	event.remove({ output: 'born_in_chaos_v1:phantom_bomb' }),
  event.remove({ output: 'born_in_chaos_v1:darkwarblade', input: 'born_in_chaos_v1:bone_handle' }),
  event.remove({ output: 'born_in_chaos_v1:great_reaper_axe', input: 'born_in_chaos_v1:bone_handle' }),
  event.remove({ output: 'born_in_chaos_v1:spider_bite_sword', input: 'born_in_chaos_v1:bone_handle' }),
  event.remove({ output: 'born_in_chaos_v1:transformative_flower' }),
  event.remove({ output: 'born_in_chaos_v1:bundle_of_bones' }),
  event.remove({ output: 'born_in_chaos_v1:armor_plate_from_dark_metal' }),
  event.remove({ output: 'born_in_chaos_v1:dark_upgrade' }),
  event.remove({ output: 'born_in_chaos_v1:pileof_dark_metal' }),
  event.remove({ output: 'born_in_chaos_v1:pieceof_dark_metal' }),
  event.remove({ input: 'born_in_chaos_v1:pileof_dark_metal' }),
  event.remove({ input: 'born_in_chaos_v1:pieceof_dark_metal' }),
  event.remove({ output: 'born_in_chaos_v1:intoxicating_dagger' }),
  event.remove({ output: 'born_in_chaos_v1:transmuting_elixir' }),
  event.remove({ output: 'born_in_chaos_v1:bone_heart' }),
  event.remove({ output: 'born_in_chaos_v1:dark_atrium' }),
  event.remove({ output: 'born_in_chaos_v1:smoked_flesh' }),
  event.remove({ output: 'born_in_chaos_v1:bone_handle' }),
  event.remove({ output: 'born_in_chaos_v1:dark_charge' }),
  event.remove({ output: 'born_in_chaos_v1:dark_rod' }),
  event.remove({ output: 'born_in_chaos_v1:dark_metal_armor_helmet' }),
  event.remove({ output: 'born_in_chaos_v1:dark_metal_armor_chestplate' }),
  event.remove({ output: 'born_in_chaos_v1:dark_metal_armor_leggings' }),
  event.remove({ output: 'born_in_chaos_v1:dark_metal_armor_boots' }),

	event.replaceInput(
      { input: 'alexsmobs:maggot' }, // Arg 1: the filter
      'alexsmobs:maggot',  // Arg 2: the item to replace
      'born_in_chaos_v1:fried_maggot'         // Arg 3: the item to replace it with
    ),

  event.replaceInput(
      { input: 'born_in_chaos_v1:bone_handle' }, // Arg 1: the filter
      'born_in_chaos_v1:bone_handle',  // Arg 2: the item to replace
      'iceandfire:witherbone'         // Arg 3: the item to replace it with
    ),

  event.replaceInput(
      { input: 'born_in_chaos_v1:fire_dust' }, // Arg 1: the filter
      'born_in_chaos_v1:fire_dust',  // Arg 2: the item to replace
      'irons_spellbooks:cinder_essence'         // Arg 3: the item to replace it with
    ),


	event.recipes.ars_nouveau.enchanting_apparatus([
	            "born_in_chaos_v1:smoldering_infernal_ember",
	            "born_in_chaos_v1:seedof_chaos",
	            "born_in_chaos_v1:smoldering_infernal_ember",
	            "netherexp:banshee_powder",
	            "born_in_chaos_v1:smoldering_infernal_ember",
	            "born_in_chaos_v1:ethereal_spirit",
	            "born_in_chaos_v1:smoldering_infernal_ember",
	            "irons_spellbooks:cinder_essence"
	        ], // input items
		    "born_in_chaos_v1:cultivated_pumpkin", // reagent
		    "born_in_chaos_v1:infernal_evil_pumpkin", // output
		    5000
		),
		
    event.shaped('born_in_chaos_v1:hound_trap', [
      'ABA', 
      'ACA', 
      '   '  
      ], 
      {
       C: 'oreganized:silver_ingot',
       A: '#integrations:claws',
       B: 'oreganized:lead_nugget'
      }
    ),
    
    event.shaped('born_in_chaos_v1:fused_bone', [
      '  B', 
      'BS '
      ], 
      {
       B: 'minecraft:bone',
       S: '#forge:slimeballs'
      }
    ),
    event.shaped('3x born_in_chaos_v1:mesh_door', [
      'BB ', 
      'BB ', 
      'BB '  
      ], 
      {
       B: 'minecraft:iron_bars'
      }
    ),
    event.shaped('born_in_chaos_v1:wood_splitter_axe', [
      'III', 
      'IS ', 
      ' S '  
      ], 
      {
       S: 'minecraft:stick',
       I: 'minecraft:iron_ingot'
      }
    ),
    event.shaped('born_in_chaos_v1:trident_hayfork', [
      'NIN', 
      ' S ', 
      ' S '  
      ], 
      {
       S: 'minecraft:stick',
       N: 'minecraft:iron_nugget',
       I: 'minecraft:iron_ingot'
      }
    ),
	
	event.shapeless(
      Item.of('6x crittersandcompanions:silk'),
      [
        'born_in_chaos_v1:spider_mandible',
      ]
    ),
	
	event.smelting('born_in_chaos_v1:fried_maggot', 'alexsmobs:maggot'),
	event.smoking('born_in_chaos_v1:fried_maggot', 'alexsmobs:maggot'),
	event.campfireCooking('born_in_chaos_v1:fried_maggot', 'alexsmobs:maggot')
	
	event.recipes.createMixing('born_in_chaos_v1:dark_metal_ingot', [
      'oreganized:silver_ingot',
      'forbidden_arcanus:dark_matter'
    ]).heated(),
	
	event.recipes.farmersdelight.cooking(
    ["#alexscaves:gummy_items",
    "alexscaves:peppermint_powder",
    "alexscaves:gumball_pile",
    "alexscaves:caramel",
	  "alexscaves:sweet_tooth",
	  "alexscaves:radiant_essence",
    ],
    "born_in_chaos_v1:eternal_candy",
    1.0,
    400,
    "minecraft:stick",
  ),
  
  event.recipes.createCrushing([
      '16x irons_spellbooks:cinder_essence',
      '8x forbidden_arcanus:mundabitur_dust',
    ], 'netherexp:treacherous_flame'),
	
	event.recipes.createCrushing([
      '6x born_in_chaos_v1:spiritual_dust'
    ], 'born_in_chaos_v1:ethereal_spirit'),
  
  event.shapeless(
    Item.of('born_in_chaos_v1:phantom_bomb'),
    [
      'supplementaries:bomb',
      'born_in_chaos_v1:phantom_powder'
    ]
  ),
  event.recipes.create.compacting(
    ['born_in_chaos_v1:armor_plate_from_dark_metal'], 
    ['4x born_in_chaos_v1:monster_skin', '5x born_in_chaos_v1:dark_metal_ingot', Fluid.lava(10)]
  ).superheated(),

  event.custom({
      "type": "hexerei:mixingcauldron",
      "liquid": {
          "fluid": "minecraft:lava"
      },
      "ingredients": [
          {
              "item": "born_in_chaos_v1:intoxicating_decoction"
          },
          {
              "item": "born_in_chaos_v1:intoxicating_decoction"
          },
          {
              "item": "born_in_chaos_v1:intoxicating_decoction"
          },
          {
              "item": "born_in_chaos_v1:dark_metal_ingot"
          },
          {
              "item": "iceandfire:witherbone"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:intoxicating_dagger",
          "count": 1
      },
      "liquidOutput": {
          "fluid": "minecraft:lava",
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
              "item": "born_in_chaos_v1:seedof_chaos"
          },
          {
              "item": "alexscaves:uranium"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:intoxicating_decoction",
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
              "item": "born_in_chaos_v1:seedof_chaos"
          },
          {
              "item": "forbidden_arcanus:arcane_crystal_dust"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:stimulating_decoction",
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
          "fluid": "minecraft:lava"
      },
      "ingredients": [
          {
              "tag": "c:seeds"
          },
          {
              "item": "forbidden_arcanus:corrupti_dust"
          },
          {
              "item": "irons_spellbooks:cinder_essence"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:seedof_chaos",
          "count": 1
      },
      "liquidOutput": {
          "fluid": "minecraft:lava",
          "amount": 1000
      },
      "fluidLevelsConsumed": 1000
  }),
  event.custom({
      "type": "hexerei:mixingcauldron",
      "liquid": {
          "fluid": "minecraft:lava"
      },
      "ingredients": [
          {
              "item": "hexerei:blood_bottle"
          },
          {
              "item": "alexscaves:darkened_apple"
          },
          {
              "item": "iceandfire:pixie_dust"
          },
          {
              "item": "betterend:ender_dust"
          },
          {
              "item": "spelunkery:portal_fluid_bottle"
          },
          {
              "item": "hexerei:dried_mandrake_flowers"
          },
          {
              "item": "irons_spellbooks:cinder_essence"
          },
          {
              "item": "netherexp:banshee_powder"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:transmuting_elixir",
          "count": 1
      },
      "liquidOutput": {
          "fluid": "minecraft:lava",
          "amount": 1000
      },
      "fluidLevelsConsumed": 1000
  }),
  event.recipes.createPressing('born_in_chaos_v1:shattered_skull', [
      'minecraft:skeleton_skull'
  ]),
  event.custom({
      "type": "hexerei:mixingcauldron",
      "liquid": {
          "fluid": "minecraft:water"
      },
      "ingredients": [
          {
              "item": "born_in_chaos_v1:fused_bone"
          },
          {
              "item": "eidolon:zombie_heart"
          },
          {
              "item": "minecraft:bone"
          },
          {
              "item": "minecraft:bone"
          },
          {
              "item": "minecraft:bone"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:bone_heart",
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
          "fluid": "minecraft:lava"
      },
      "ingredients": [
          {
              "item": "born_in_chaos_v1:bone_heart"
          },
          {
              "item": "born_in_chaos_v1:lifestealer_bone"
          },
          {
              "item": "born_in_chaos_v1:lifestealer_bone"
          },
          {
              "item": "born_in_chaos_v1:lifestealer_bone"
          },
          {
              "item": "born_in_chaos_v1:lifestealer_bone"
          }
      ],
      "output": {
          "item": "born_in_chaos_v1:dark_atrium",
          "count": 1
      },
      "liquidOutput": {
          "fluid": "minecraft:lava",
          "amount": 1000
      },
      "fluidLevelsConsumed": 1000
  }),
  event.custom({
    "type": "cataclysm:weapon_fusion",
    "base": {
        "item": "iceandfire:dragonsteel_fire_boots"
      },
      "addition": {
        "item": "born_in_chaos_v1:armor_plate_from_dark_metal"
      },
      "result": {
        "item": "born_in_chaos_v1:dark_metal_armor_boots"
        }
  }),
  event.custom({
    "type": "cataclysm:weapon_fusion",
    "base": {
        "item": "iceandfire:dragonsteel_fire_leggings"
      },
      "addition": {
        "item": "born_in_chaos_v1:armor_plate_from_dark_metal"
      },
      "result": {
        "item": "born_in_chaos_v1:dark_metal_armor_leggings"
        }
  }),
  event.custom({
    "type": "cataclysm:weapon_fusion",
    "base": {
        "item": "iceandfire:dragonsteel_fire_chestplate"
      },
      "addition": {
        "item": "born_in_chaos_v1:armor_plate_from_dark_metal"
      },
      "result": {
        "item": "born_in_chaos_v1:dark_metal_armor_chestplate"
        }
  }),
  event.custom({
    "type": "cataclysm:weapon_fusion",
    "base": {
        "item": "iceandfire:dragonsteel_fire_helmet"
      },
      "addition": {
        "item": "born_in_chaos_v1:armor_plate_from_dark_metal"
      },
      "result": {
        "item": "born_in_chaos_v1:dark_metal_armor_helmet"
      }
  })
  }
)
