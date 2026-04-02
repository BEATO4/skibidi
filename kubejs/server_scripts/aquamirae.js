ServerEvents.recipes(event => {
    event.remove({ output: 'aquamirae:terrible_boots' }),
    event.remove({ output: 'aquamirae:terrible_leggings' }),
    event.remove({ output: 'aquamirae:terrible_chestplate' }),
    event.remove({ output: 'aquamirae:terrible_helmet' }),
    event.remove({ output: 'aquamirae:abyssal_boots' }),
    event.remove({ output: 'aquamirae:abyssal_leggings' }),
    event.remove({ output: 'aquamirae:abyssal_brigantine' }),
    event.remove({ output: 'aquamirae:abyssal_heaume' }),
    event.remove({ output: 'aquamirae:sea_stew' }),
    event.remove({ output: 'aquamirae:poseidons_breakfast' }),
    event.remove({ output: 'minecraft:bone_meal', input: 'aquamirae:sharp_bones' }),
    event.remove({ output: 'aquamirae:terrible_sword' }),

    event.replaceInput(
      { input: 'aquamirae:sharp_bones' }, // Arg 1: the filter
      'aquamirae:sharp_bones',  // Arg 2: the item to replace
      'alexsmobs:fish_bones'         // Arg 3: the item to replace it with
    ),
    event.recipes.create.compacting(
      ['kubejs:abyssal_armor_plate'], 
      ['traveloptics:abyssal_spellweave_ingot', 'aquamirae:abyssal_amethyst', Fluid.of("spelunkery:portal_fluid", 500)]
    ).superheated(),
    event.recipes.create.compacting(
      ['kubejs:terrible_armor_plate'], 
      ['aquamirae:fin', 'aquamirae:anglers_fang', Fluid.water(500)]
    ).superheated(),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_helmet"
        },
        "addition": {
          "item": "kubejs:terrible_armor_plate"
        },
        "result": {
          "item": "aquamirae:terrible_helmet"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_chestplate"
        },
        "addition": {
          "item": "kubejs:terrible_armor_plate"
        },
        "result": {
          "item": "aquamirae:terrible_chestplate"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_leggings"
        },
        "addition": {
          "item": "kubejs:terrible_armor_plate"
        },
        "result": {
          "item": "aquamirae:terrible_leggings"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_boots"
        },
        "addition": {
          "item": "kubejs:terrible_armor_plate"
        },
        "result": {
          "item": "aquamirae:terrible_boots"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_helmet"
        },
        "addition": {
          "item": "kubejs:abyssal_armor_plate"
        },
        "result": {
          "item": "aquamirae:abyssal_heaume"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_chestplate"
        },
        "addition": {
          "item": "kubejs:abyssal_armor_plate"
        },
        "result": {
          "item": "aquamirae:abyssal_brigantine"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_leggings"
        },
        "addition": {
          "item": "kubejs:abyssal_armor_plate"
        },
        "result": {
          "item": "aquamirae:abyssal_leggings"
        }
    }),
    event.custom({
      "type": "cataclysm:weapon_fusion",
      "base": {
          "item": "iceandfire:dragonsteel_ice_boots"
        },
        "addition": {
          "item": "kubejs:abyssal_armor_plate"
        },
        "result": {
          "item": "aquamirae:abyssal_boots"
        }
    }),
    event.recipes.farmersdelight.cooking(
      ["minecraft:baked_potato",
        "aquamirae:esca",
        "aquamirae:cooked_spinefish",
        "aquamirae:fin",
        "minecraft:pufferfish",
        "aquamirae:oxygelium"
      ],
      "aquamirae:sea_stew",
      2.0,
      400,
      "minecraft:bowl",
    ),
    event.recipes.farmersdelight.cooking(
      ["minecraft:nautilus_shell",
        "minecraft:sea_pickle",
        "minecraft:enchanted_gold_apple",
        "iceandfire:pixie_dust",
        "alexscaves:sea_glass_shards",
        "alexscaves:pearl"
      ],
      "aquamirae:poseidons_breakfast",
      2.0,
      400,
      "aquamirae:sea_stew",
    )
  }
)
