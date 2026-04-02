ServerEvents.recipes(event => {
	event.remove({ output: 'irons_spellbooks:arcane_salvage' }),
	event.remove({ output: 'irons_spellbooks:arcane_ingot' }),
	event.remove({ output: 'irons_spellbooks:alchemist_cauldron' }),
	event.remove({ output: 'irons_spellbooks:firefly_jar' }),
	event.remove({ output: 'irons_spellbooks:frosted_helve' }),
	event.remove({ output: 'irons_spellbooks:weapon_parts' }),
	event.remove({ output: 'irons_spellbooks:wandering_magician_helmet' }),
	event.remove({ output: 'irons_spellbooks:wandering_magician_chestplate' }),
	event.remove({ output: 'irons_spellbooks:wandering_magician_leggings' }),
	event.remove({ output: 'irons_spellbooks:wandering_magician_boots' }),
	event.remove({ output: 'irons_spellbooks:pumpkin_helmet' }),
	event.remove({ output: 'irons_spellbooks:pumpkin_chestplate' }),
	event.remove({ output: 'irons_spellbooks:pumpkin_leggings' }),
	event.remove({ output: 'irons_spellbooks:pumpkin_boots' }),
	event.remove({ output: 'irons_spellbooks:magic_cloth' }),
	event.remove({ output: 'irons_spellbooks:netherite_mage_helmet' }),
	event.remove({ output: 'irons_spellbooks:netherite_mage_chestplate' }),
	event.remove({ output: 'irons_spellbooks:netherite_mage_leggings' }),
	event.remove({ output: 'irons_spellbooks:netherite_mage_boots' }),
	event.remove({ output: 'irons_spellbooks:divine_pearl' }),
    event.remove({ output: 'irons_spellbooks:amethyst_resonance_charm' }),
    event.remove({ output: 'irons_spellbooks:cinderous_soulcaller' }),
    event.remove({ type: 'irons_spellbooks:divine_pearl' }),
    event.remove({ output: 'ice_and_fire_spellbooks:dragonmancers_oathbook', type: 'minecraft:crafting_shaped' }),
	
	event.replaceInput(
      { input: 'irons_spellbooks:arcane_salvage' }, // Arg 1: the filter
      'irons_spellbooks:arcane_salvage',  // Arg 2: the item to replace
      'forbidden_arcanus:arcane_crystal'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'irons_spellbooks:arcane_essence' }, // Arg 1: the filter
      'irons_spellbooks:arcane_essence',  // Arg 2: the item to replace
      'forbidden_arcanus:arcane_crystal_dust'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'irons_spellbooks:blood_vial' }, // Arg 1: the filter
      'irons_spellbooks:blood_vial',  // Arg 2: the item to replace
      'hexerei:blood_bottle'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'irons_spellbooks:hogskin' }, // Arg 1: the filter
      'irons_spellbooks:hogskin',  // Arg 2: the item to replace
      'mynethersdelight:hoglin_hide'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'irons_spellbooks:weapon_parts' }, // Arg 1: the filter
      'irons_spellbooks:weapon_parts',  // Arg 2: the item to replace
      'iceandfire:witherbone'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'irons_spellbooks:lightning_bottle' }, // Arg 1: the filter
      'irons_spellbooks:lightning_bottle',  // Arg 2: the item to replace
      'biomemakover:lightning_bottle'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'irons_spellbooks:bloody_vellum' }, // Arg 1: the filter
      'irons_spellbooks:bloody_vellum',  // Arg 2: the item to replace
      'born_in_chaos_v1:monster_skin'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'irons_spellbooks:permafrost_shard' }, // Arg 1: the filter
      'irons_spellbooks:permafrost_shard',  // Arg 2: the item to replace
      'kubejs:ice_essence'         // Arg 3: the item to replace it with
    ),
    event.recipes.createMixing('3x irons_spellbooks:cinder_essence', [
      '3x minecraft:coal',
      '3x eidolon:crimson_essence',
      'forbidden_arcanus:arcane_crystal_dust'
    ]),
	event.recipes.createMixing('irons_spellbooks:arcane_ingot', [
      'oreganized:silver_ingot',
      'forbidden_arcanus:arcane_crystal_dust',
	  'forbidden_arcanus:arcane_crystal_dust',
	  'forbidden_arcanus:arcane_crystal_dust',
	  'forbidden_arcanus:arcane_crystal_dust'
    ]).heated(),
	event.recipes.createPressing('irons_spellbooks:blank_rune', [
      'forbidden_arcanus:dark_rune_block'
    ]),
	event.smithing(
      'irons_spellbooks:netherite_mage_helmet',                     
      'minecraft:netherite_upgrade_smithing_template', 
      'ars_nouveau:battlemage_hood',                          
      'minecraft:netherite_ingot'                            
    ),
	event.smithing(
      'irons_spellbooks:netherite_mage_chestplate',                     
      'minecraft:netherite_upgrade_smithing_template', 
      'ars_nouveau:battlemage_robes',                          
      'minecraft:netherite_ingot'                            
    ),
	event.smithing(
      'irons_spellbooks:netherite_mage_leggings',                     
      'minecraft:netherite_upgrade_smithing_template', 
      'ars_nouveau:battlemage_leggings',                          
      'minecraft:netherite_ingot'                            
    ),
	event.smithing(
      'irons_spellbooks:netherite_mage_boots',                     
      'minecraft:netherite_upgrade_smithing_template', 
      'ars_nouveau:battlemage_boots',                          
      'minecraft:netherite_ingot'                            
    ),
    event.shaped('irons_spellbooks:alchemist_cauldron', [
      'I I', 
      'ICI', 
      'ABA'
    ], 
    {
      A: 'forbidden_arcanus:arcane_crystal_dust',
      I: 'create:iron_sheet',
      C: 'minecraft:cauldron',
      B: 'irons_spellbooks:cinder_essence'
      }
    ),
	event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "minecraft:oak_log"
            },
            {
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:healing\"}"
            },
            {
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:healing\"}"
            }
        ],
        "output": {
            "item": "irons_spellbooks:oakskin_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "minecraft:amethyst_shard"
            },
            {
				"item": "irons_spellbooks:oakskin_elixir"
            },
            {
				"item": "irons_spellbooks:oakskin_elixir"
            }
        ],
        "output": {
            "item": "irons_spellbooks:greater_oakskin_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "minecraft:amethyst_shard"
            },
            {
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:healing\"}"
            },
            {
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:healing\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:healing\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:healing\"}"
            }
        ],
        "output": {
            "item": "irons_spellbooks:greater_healing_potion",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "minecraft:amethyst_shard"
            },
            {
				"item": "irons_spellbooks:oakskin_elixir"
            },
            {
				"item": "irons_spellbooks:oakskin_elixir"
            }
        ],
        "output": {
            "item": "irons_spellbooks:greater_oakskin_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "irons_spellbooks:shriving_stone"
            },
            {
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:invisibility\"}"
            },
            {
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:invisibility\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:invisibility\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:invisibility\"}"
            }
        ],
        "output": {
            "item": "irons_spellbooks:invisibility_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "minecraft:amethyst_cluster"
            },
            {
				"item": "irons_spellbooks:invisibility_elixir"
            }
        ],
        "output": {
            "item": "irons_spellbooks:greater_invisibility_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "betterend:ender_shard"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:speed\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:speed\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:speed\"}"
            },
			{
                "type": "forge:partial_nbt",
				"item": "minecraft:potion",
				"nbt": "{Potion:\"minecraft:speed\"}"
            }
        ],
        "output": {
            "item": "irons_spellbooks:evasion_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "item": "minecraft:dragon_breath"
            },
            {
				"item": "irons_spellbooks:evasion_elixir"
            }
        ],
        "output": {
            "item": "irons_spellbooks:greater_evasion_elixir",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
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
                "tag": "redeco:upholstery"
            },
            {
				"item": "caverns_and_chasms:spinel"
            },
			{
                "tag": "redeco:upholstery"
            },
			{
				"item": "forbidden_arcanus:arcane_crystal_dust"
            },
			{
				"item": "caverns_and_chasms:spinel"
            },
			{
				"item": "forbidden_arcanus:arcane_crystal_dust"
            },
			{
                "tag": "redeco:upholstery"
            },
			{
				"item": "caverns_and_chasms:spinel"
            }
        ],
        "output": {
            "item": "irons_spellbooks:magic_cloth",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 0
        },
        "fluidLevelsConsumed": 500
    }),
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "item": "minecraft:netherite_scrap"
            },
            {
                "item": "irons_spellbooks:cinder_essence"
            },
            {
                "item": "irons_spellbooks:cinder_essence"
            },
            {
                "item": "born_in_chaos_v1:dark_metal_ingot"
            },
            {
                "item": "minecraft:echo_shard"
            },
            {
                "item": "born_in_chaos_v1:dark_metal_ingot"
            },
            {
                "item": "irons_spellbooks:cinder_essence"
            },
            {
                "item": "irons_spellbooks:cinder_essence"
            }
        ],
        "output": {
            "item": "irons_spellbooks:cinderous_soulcaller",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 0
        },
        "fluidLevelsConsumed": 1000
    })
}
)