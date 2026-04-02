ServerEvents.recipes(event => {
		event.remove({ output: 'iceandfire:dragonforge_lightning_core_disabled'}),
		event.remove({ output: 'iceandfire:dragonforge_ice_core_disabled'}),
		event.remove({ output: 'iceandfire:dragonforge_fire_core_disabled'}),
		event.remove({ output: 'iceandfire:dragonforge_lightning_input'}),
		event.remove({ output: 'iceandfire:dragonforge_fire_input'}),
		event.remove({ output: 'iceandfire:dragonforge_ice_input'}),
		event.remove({ output: 'iceandfire:summoning_crystal_ice' }), 
		event.remove({ output: 'iceandfire:summoning_crystal_fire' }), 
		event.remove({ output: 'iceandfire:summoning_crystal_lightning' }), 
		event.remove({ output: 'iceandfire:ambrosia' }), 
		event.remove({ output: 'iceandfire:fire_stew' }), 
		event.remove({ output: 'iceandfire:frost_stew' }), 
		event.remove({ output: 'iceandfire:lightning_stew' }), 
		event.remove({ output: 'iceandfire:ghost_sword' }), 
		event.remove({ output: 'iceandfire:silver_sword' }), 
		event.remove({ output: 'iceandfire:silver_shovel' }), 
		event.remove({ output: 'iceandfire:silver_pickaxe' }), 
		event.remove({ output: 'iceandfire:silver_axe' }), 
		event.remove({ output: 'iceandfire:silver_hoe' }), 
		event.remove({ output: 'iceandfire:silver_helmet' }), 
		event.remove({ output: 'iceandfire:silver_chestplate' }), 
		event.remove({ output: 'iceandfire:silver_leggings' }), 
		event.remove({ output: 'iceandfire:silver_boots' }), 



		event.custom({
		  "type": "cataclysm:weapon_fusion",
		  "base": {
		      "item": "iceandfire:dragonbone_sword"
		    },
		    "addition": {
		      "item": "iceandfire:ghost_ingot"
		    },
		    "result": {
		      "item": "iceandfire:ghost_sword"
		    }
		}),
		event.recipes.createMechanicalCrafting('iceandfire:dragonforge_lightning_core_disabled', [
		  ' B B ',
		  'BSFSB',
		  ' AHA ',
		  'BSDSB',
		  ' B B '
		], {
		  H: 'iceandfire:lightning_dragon_heart',
		  B: 'iceandfire:dragonforge_lightning_brick',
		  F: 'alexscaves:fissile_core',
		  S: 'create:sturdy_sheet',
		  A: 'betterend:aeternium_forged_plate',
		  D: 'apotheosis:infused_breath'
		}),
		event.recipes.createMechanicalCrafting('iceandfire:dragonforge_ice_core_disabled', [
		  ' B B ',
		  'BSFSB',
		  ' AHA ',
		  'BSDSB',
		  ' B B '
		], {
		  H: 'iceandfire:ice_dragon_heart',
		  B: 'iceandfire:dragonforge_ice_brick',
		  F: 'alexscaves:fissile_core',
		  S: 'create:sturdy_sheet',
		  A: 'betterend:aeternium_forged_plate',
		  D: 'apotheosis:infused_breath'
		}),
		event.recipes.createMechanicalCrafting('iceandfire:dragonforge_fire_core_disabled', [
		  ' B B ',
		  'BSFSB',
		  ' AHA ',
		  'BSDSB',
		  ' B B '
		], {
		  H: 'iceandfire:fire_dragon_heart',
		  B: 'iceandfire:dragonforge_fire_brick',
		  F: 'alexscaves:fissile_core',
		  S: 'create:sturdy_sheet',
		  A: 'betterend:aeternium_forged_plate',
		  D: 'apotheosis:infused_breath'
		}),
		event.recipes.createMechanicalCrafting('iceandfire:dragonforge_lightning_input', [
		  ' I I ',
		  'IBSBI',
		  ' SPS ',
		  'IBSBI',
		  ' I I '
		], {
		  B: 'iceandfire:dragonforge_lightning_brick',
		  S: 'create:sturdy_sheet',
		  P: 'create:precision_mechanism',
		  I: 'createdeco:industrial_iron_ingot'
		}),
		event.recipes.createMechanicalCrafting('iceandfire:dragonforge_ice_input', [
		  ' I I ',
		  'IBSBI',
		  ' SPS ',
		  'IBSBI',
		  ' I I '
		], {
		  B: 'iceandfire:dragonforge_ice_brick',
		  S: 'create:sturdy_sheet',
		  P: 'create:precision_mechanism',
		  I: 'createdeco:industrial_iron_ingot'
		}),
		event.recipes.createMechanicalCrafting('iceandfire:dragonforge_fire_input', [
		  ' I I ',
		  'IBSBI',
		  ' SPS ',
		  'IBSBI',
		  ' I I '
		], {
		  B: 'iceandfire:dragonforge_fire_brick',
		  S: 'create:sturdy_sheet',
		  P: 'create:precision_mechanism',
		  I: 'createdeco:industrial_iron_ingot'
		}),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "iceandfire:fire_dragon_blood",
	            "#forge:ender_pearls",
	            "betterend:crystal_shards",
	            "minecraft:diamond"
	        ], // input items
		    "betterend:amber_gem", // reagent
		    "iceandfire:summoning_crystal_fire", // output
		    1000
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "iceandfire:ice_dragon_blood",
	            "#forge:ender_pearls",
	            "betterend:crystal_shards",
	            "minecraft:diamond"
	        ], // input items
		    "iceandfire:sapphire_gem", // reagent
		    "iceandfire:summoning_crystal_ice", // output
		    1000
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "iceandfire:lightning_dragon_blood",
	            "#forge:ender_pearls",
	            "betterend:crystal_shards",
	            "minecraft:diamond"
	        ], // input items
		    "minecraft:amethyst_shard", // reagent
		    "iceandfire:summoning_crystal_lightning", // output
		    1000
		),
		event.recipes.farmersdelight.cooking(
		  ["iceandfire:pixie_dust",
		    "betterend:ender_dust",
		    "forbidden_arcanus:arcane_crystal_dust"
		  ],
		  "iceandfire:ambrosia",
		  5.0,
		  400,
		  "minecraft:bowl",
		),
		event.recipes.farmersdelight.cooking(
		  ["iceandfire:fire_lily",
		    "minecraft:blaze_powder",
		    "forbidden_arcanus:arcane_crystal_dust"
		  ],
		  "iceandfire:fire_stew",
		  5.0,
		  400,
		  "minecraft:bowl",
		),
		event.recipes.farmersdelight.cooking(
		  ["iceandfire:frost_lily",
		    "netherexp:banshee_powder",
		    "forbidden_arcanus:arcane_crystal_dust"
		  ],
		  "iceandfire:frost_stew",
		  5.0,
		  400,
		  "minecraft:bowl",
		),
		event.recipes.farmersdelight.cooking(
		  ["iceandfire:lightning_lily",
		    "minecraft:chorus_fruit",
		    "forbidden_arcanus:arcane_crystal_dust"
		  ],
		  "iceandfire:lightning_stew",
		  5.0,
		  400,
		  "minecraft:bowl",
		)
	}
)