ServerEvents.recipes(event => {
    event.remove({ output: 'eidolon:enchanted_ash' }),
	event.remove({ output: 'eidolon:lead_ingot' }),
	event.remove({ output: 'eidolon:lead_nugget' }),
	event.remove({ output: 'eidolon:lead_block' }),
	event.remove({ output: 'eidolon:silver_ingot' }),
	event.remove({ output: 'eidolon:silver_nugget' }),
	event.remove({ output: 'eidolon:silver_block' }),
	event.remove({ output: 'eidolon:pewter_blend' }),
	event.remove({ output: 'eidolon:pewter_ingot' }),
	event.remove({ output: 'eidolon:tallow' }),
	event.remove({ output: 'eidolon:candle' }),
	event.remove({ output: 'eidolon:candlestick' }),
	event.remove({ output: 'eidolon:silver_helmet' }),
	event.remove({ output: 'eidolon:silver_chestplate' }),
	event.remove({ output: 'eidolon:silver_leggings' }),
	event.remove({ output: 'eidolon:silver_boots' }),
	event.remove({ output: 'eidolon:silver_sword' }),
	event.remove({ output: 'eidolon:silver_pickaxe' }),
	event.remove({ output: 'eidolon:silver_axe' }),
	event.remove({ output: 'eidolon:silver_shovel' }),
	event.remove({ output: 'eidolon:silver_hoe' }),
	event.remove({ output: 'eidolon:crucible' }),
	event.remove({ output: 'eidolon:wooden_brewing_stand' }),
	event.remove({ output: 'eidolon:bone_pile' }),
	event.remove({ type: 'eidolon:crucible' }),
    event.remove({ output: 'eidolon:arcane_gold_ingot' }),
    event.remove({ output: 'eidolon:arcane_gold_nugget' }),
    event.remove({ output: 'eidolon:bone_pile' }),
    event.remove({ output: 'eidolon:arcane_gold_block' }),
    event.remove({ output: 'eidolon:codex' }),
    event.remove({ output: 'eidolon:polished_planks' }),
    event.remove({ output: 'eidolon:athame' }),
    event.remove({ output: 'eidolon:notetaking_tools' }),
    event.remove({ output: 'eidolon:research_table' }),
    event.remove({ output: 'eidolon:basic_ring' }),
    event.remove({ output: 'eidolon:basic_amulet' }),
	
    event.replaceInput(
      { input: 'eidolon:arcane_gold_block' }, // Arg 1: the filter
      'eidolon:arcane_gold_block',  // Arg 2: the item to replacerruurrr
      'forbidden_arcanus:deorum_block'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'eidolon:arcane_gold_nugget' }, // Arg 1: the filter
      'eidolon:arcane_gold_nugget',  // Arg 2: the item to replacerruurrr
      'forbidden_arcanus:deorum_nugget'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'eidolon:fungus_sprouts' }, // Arg 1: the filter
      'eidolon:fungus_sprouts',  // Arg 2: the item to replacerruurrr
      'spelunkery:conk_fungus'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'eidolon:enchanted_ash' }, // Arg 1: the filter
      'eidolon:enchanted_ash',  // Arg 2: the item to replace
      'forbidden_arcanus:arcane_crystal_dust'         // Arg 3: the item to replace it with
    ),
	event.replaceInput(
      { input: 'eidolon:parchment' }, // Arg 1: the filter
      'eidolon:parchment',  // Arg 2: the item to replace
      'ars_nouveau:blank_parchment'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'ars_nouveau:ring_of_potential' }, // Arg 1: the filter
      'ars_nouveau:ring_of_potential',  // Arg 2: the item to replace
      'eidolon:basic_ring'   // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'ars_nouveau:dull_trinket' }, // Arg 1: the filter
      'ars_nouveau:dull_trinket',  // Arg 2: the item to replace
      'eidolon:basic_amulet'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'ars_nouveau:mundane_belt' }, // Arg 1: the filter
      'ars_nouveau:mundane_belt',  // Arg 2: the item to replace
      'eidolon:basic_belt'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'eidolon:tattered_cloth' }, // Arg 1: the filter
      'eidolon:tattered_cloth',  // Arg 2: the item to replace
      'hexerei:infused_fabric'         // Arg 3: the item to replace it with
    ),
    event.replaceInput(
      { input: 'eidolon:wraith_heart' }, // Arg 1: the filter
      'eidolon:wraith_heart',  // Arg 2: the item to replace
      'netherexp:wraithing_flesh'         // Arg 3: the item to replace it with
    ),
	event.recipes.createMixing('2x eidolon:pewter_ingot', [
      'oreganized:lead_ingot',
      '#c:iron_ingots'
    ]).heated(),
	
    event.shapeless(
      Item.of('9x eidolon:pewter_ingot'),
      [
        'eidolon:pewter_block'
      ]
    ),
    event.shaped('eidolon:basic_ring', [
      ' B ', 
      'A A', 
      ' A '  
      ], 
      {
       A: 'forbidden_arcanus:deorum_ingot',
       B: 'eidolon:soul_shard'
      }
    ),
    event.shaped('eidolon:basic_amulet', [
      ' B ', 
      'B B', 
      ' A '  
      ], 
      {
       A: 'forbidden_arcanus:deorum_ingot',
       B: 'minecraft:string'
      }
    ),
	event.shaped('eidolon:candlestick', [
        ' A ', 
        ' B ', 
      ' A '  
      ], 
      {
       A: 'forbidden_arcanus:deorum_nugget',
       B: 'hexerei:candle'
      }
    ),
	
	  event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "minecraft:packed_mud"
            },
            {
                "item": "minecraft:packed_mud"
            },
            {
                "item": "minecraft:packed_mud"
            },
			{
                "item": "minecraft:packed_mud"
            },
			{
                "item": "forbidden_arcanus:arcane_crystal_dust"
            },
			{
                "item": "eidolon:soul_shard"
            }
        ],
        "output": {
            "item": "eidolon:elder_brick",
            "count": 16
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
                "item": "eidolon:zombie_heart"
            },
            {
                "item": "domesticationinnovation:rotten_apple"
            },
            {
                "item": "minecraft:bone_meal"
            },
			{
                "item": "minecraft:bone_meal"
            },
			{
                "item": "supplementaries:ash"
            }
        ],
        "output": {
            "item": "eidolon:death_essence",
            "count": 4
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
                "item": "minecraft:crimson_fungus"
            },
            {
                "item": "minecraft:nether_wart"
            },
            {
                "item": "spelunkery:sulfur"
            }
        ],
        "output": {
            "item": "eidolon:crimson_essence",
            "count": 4
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
                "tag": "forge:ender_pearls"
            },
            {
                "item": "forbidden_arcanus:arcane_crystal_dust"
            }
        ],
        "output": {
            "item": "eidolon:ender_calx",
            "count": 2
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
                "item": "netherexp:warped_wart"
            },
            {
                "item": "eidolon:ender_calx"
            },
            {
                "item": "minecraft:nether_wart"
            }
        ],
        "output": {
            "item": "eidolon:warped_sprouts",
            "count": 2
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
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "item": "eidolon:ender_calx"
            },
            {
                "item": "spelunkery:cinnabar"
            },
            {
                "item": "spelunkery:cinnabar"
            },
			{
                "item": "hexerei:wax_blend"
            }
        ],
        "output": {
            "item": "eidolon:magicians_wax",
            "count": 4
        },
		"liquidOutput": {
            "fluid": "minecraft:lava",
            "amount": 0
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
                "item": "forbidden_arcanus:arcane_crystal_dust"
            },
            {
                "item": "create:rose_quartz"
            },
            {
                "item": "eidolon:soul_shard"
            },
			{
                "item": "eidolon:soul_shard"
            },
			{
                "item": "eidolon:soul_shard"
            },
			{
                "item": "eidolon:soul_shard"
            }
        ],
        "output": {
            "item": "eidolon:lesser_soul_gem",
            "count": 4
        },
		"liquidOutput": {
            "fluid": "minecraft:lava",
            "amount": 0
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
                "item": "forbidden_arcanus:dark_matter"
            },
			{
                "item": "eidolon:death_essence"
            },
			{
                "item": "eidolon:death_essence"
            },
			{
                "item": "eidolon:soul_shard"
            },
			{
                "item": "eidolon:soul_shard"
            },
			{
                "item": "rubinated_nether:ruby"
            }
        ],
        "output": {
            "item": "eidolon:shadow_gem",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:lava",
            "amount": 0
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
                "item": "forbidden_arcanus:mundabitur_dust"
            },
			{
                "item": "eidolon:crimson_essence"
            },
			{
                "item": "eidolon:crimson_essence"
            },
			{
                "item": "eidolon:soul_shard"
            },
			{
                "item": "eidolon:soul_shard"
            },
			{
                "item": "rubinated_nether:ruby"
            }
        ],
        "output": {
            "item": "eidolon:crimson_gem",
            "count": 1
        },
		"liquidOutput": {
            "fluid": "minecraft:lava",
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
                "item": "ars_nouveau:magebloom"
            },
			{
                "item": "forbidden_arcanus:arcane_crystal_dust"
            },
			{
                "item": "minecraft:black_dye"
            },
			{
                "item": "minecraft:glow_ink_sac"
            },
			{
                "item": "hexerei:blood_bottle"
            }
        ],
        "output": {
            "item": "eidolon:magic_ink",
            "count": 2
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
                "item": "forbidden_arcanus:arcane_crystal_dust"
            },
            {
                "item": "eidolon:soul_shard"
            },
            {
                "item": "born_in_chaos_v1:fused_bone"
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
            "item": "eidolon:imbued_bones",
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
                "item": "forbidden_arcanus:arcane_crystal_dust"
            },
            {
                "item": "eidolon:soul_shard"
            },
            {
                "tag": "minecraft:logs"
            },
            {
                "tag": "minecraft:logs"
            },
            {
                "tag": "minecraft:logs"
            },
            {
                "tag": "minecraft:logs"
            }
        ],
        "output": {
            "item": "eidolon:polished_planks",
            "count": 16
        },
        "liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 0
        },
        "fluidLevelsConsumed": 1000
    })
  }
)