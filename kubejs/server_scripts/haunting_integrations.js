// Modify existing recipes
ServerEvents.recipes(event => {
//Create Haunting Compat
//Alexs Mobs
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'alexsmobs:maggot' }
  ],
  results: [
    { item: 'alexsmobs:mosquito_larva'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'apotheosis:warden_tendril' }
  ],
  results: [
    { item: 'alexsmobs:skreecher_soul'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'alexsmobs:skreecher_soul' }
  ],
  results: [
    { item: 'minecraft:sculk_shrieker'}
  ]
}),

//Ars
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'ars_additions:archwood_lantern' }
  ],
  results: [
    { item: 'ars_additions:soul_magelight_lantern'}
  ]
}),

//Better Archeology
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:mud_bricks' }
  ],
  results: [
    { item: 'betterarcheology:infested_mud_bricks'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { tag: 'minecraft:logs' }
  ],
  results: [
    { item: 'betterarcheology:rotten_log'}
  ]
}),

//Better Nether
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'spelunkery:button_mushroom' }
  ],
  results: [
    { item: 'betternether:orange_mushroom'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'spelunkery:inkcap_mushroom' }
  ],
  results: [
    { item: 'betternether:jellyfish_mushroom_sapling'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'spelunkery:white_inkcap_mushroom' }
  ],
  results: [
    { item: 'betternether:hook_mushroom'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'spelunkery:phosphor_fungus' }
  ],
  results: [
    { item: 'betternether:giant_mold_sapling'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'spelunkery:mushgloom' }
  ],
  results: [
    { item: 'betternether:mushroom_fir_sapling'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:apple' }
  ],
  results: [
    { item: 'betternether:black_apple'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:mycelium' }
  ],
  results: [
    { item: 'betternether:nether_mycelium'}
  ]
}),

//Biome Makeover
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:amethyst_shard' }
  ],
  results: [
    { item: 'biomemakeover:illunite_shard'}
  ]
}),

//Domestication Innovation
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:golden_apple' }
  ],
  results: [
    { item: 'domesticationinnovation:rotten_apple'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:golden_carrot' }
  ],
  results: [
    { item: 'domesticationinnovation:sinister_carrot'}
  ]
}),

//Galosphere
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'galosphere:pink_salt' }
  ],
  results: [
    { item: 'galosphere:rose_pink_salt'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'galosphere:rose_pink_salt' }
  ],
  results: [
    { item: 'galosphere:pastel_pink_salt'}
  ]
}),

//Ice and Fire
event.custom({
  type: 'create:haunting',
  ingredients: [
    { tag: 'iceandfire:dragon_hearts' }
  ],
  results: [
    { item: 'alexsmobs:soul_heart'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'iceandfire:hydra_heart' }
  ],
  results: [
    { item: 'alexsmobs:soul_heart'}
  ]
}),

//Jaden's Nether Expansion
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:cobbled_deepslate' }
  ],
  results: [
    { item: 'netherexp:soul_slate'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:rotten_flesh' }
  ],
  results: [
    { item: 'netherexp:wraithing_flesh',
      "chance": 0.50
    }
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:pumpkin' }
  ],
  results: [
    { item: 'netherexp:sorrowsquash'}
  ]
}),

//My Nethers Delight
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'farmersdelight:organic_compost' }
  ],
  results: [
    { item: 'mynethersdelight:letios_compost'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:bamboo' }
  ],
  results: [
    { item: 'mynethersdelight:powder_cannon'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:bamboo_block' }
  ],
  results: [
    { item: 'mynethersdelight:powdery_block'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:stripped_bamboo_block' }
  ],
  results: [
    { item: 'mynethersdelight:stripped_powdery_block'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'farmersdelight:brown_mushroom_colony' }
  ],
  results: [
    { item: 'mynethersdelight:warped_fungus_colony'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'farmersdelight:red_mushroom_colony' }
  ],
  results: [
    { item: 'mynethersdelight:crimson_fungus_colony'}
  ]
}),

event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'farmersdelight:stove' }
  ],
  results: [
    { item: 'mynethersdelight:nether_bricks_stove'}
  ]
}),

//Quark
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:furnace' }
  ],
  results: [
    { item: 'quark:blackstone_furnace'}
  ]
}),

//Regions Unexplored
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:melon_slice' }
  ],
  results: [
    { item: 'regions_unexplored:duskmelon_slice'}
  ]
}),

//Rubinated Nether
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:diamond' }
  ],
  results: [
    { item: 'rubinated_nether:ruby',
      "chance": 0.80}
  ]
}),
//Spelunkery
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'create:experience_block' }
  ],
  results: [
    { item: 'spelunkery:nephrite'}
  ]
}),

//Supplementaries
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'supplementaries:stone_lamp' }
  ],
  results: [
    { item: 'supplementaries:blackstone_lamp'}
  ]
}),

//Forbidden and Arcanus
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'forbidden_arcanus:rune' }
  ],
  results: [
    { item: 'forbidden_arcanus:dark_rune'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'forbidden_arcanus:rune_block' }
  ],
  results: [
    { item: 'forbidden_arcanus:dark_rune_block'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'forbidden_arcanus:arcane_crystal' }
  ],
  results: [
    { item: 'forbidden_arcanus:corrupted_arcane_crystal'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'forbidden_arcanus:arcane_crystal_block' }
  ],
  results: [
    { item: 'forbidden_arcanus:corrupted_arcane_crystal_block'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'forbidden_arcanus:soul' }
  ],
  results: [
    { item: 'forbidden_arcanus:corrupt_soul'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'forbidden_arcanus:arcane_crystal_obelisk' }
  ],
  results: [
    { item: 'forbidden_arcanus:corrupted_arcane_crystal_obelisk'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'alexsmobs:straddlite' }
  ],
  results: [
    { item: 'netherexp:stridite'}
  ]
}),
event.custom({
  type: 'create:haunting',
  ingredients: [
    { item: 'minecraft:torchflower' }
  ],
  results: [
    { item: 'netherexp:soul_torchflower'}
  ]
})
})