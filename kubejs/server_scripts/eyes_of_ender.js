// Modify existing recipes
ServerEvents.recipes(event => {
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "forbidden_arcanus:soul"
            },
            {
                "item": "alexsmobs:elastic_tendon"
            },
            {
                "item": "alexsmobs:soul_heart"
            },
            {
                "item": "iceandfire:ectoplasm"
            },
            {
                "item": 'minecraft:rotten_flesh'
            },
            {
                "item": 'minecraft:bone'
            },
            {
                "item": 'netherexp:banshee_powder'
            },
            {
                "item": 'hexerei:blood_bottle'
            }
        ],
        "output": {
            "item": "endrem:undead_eye",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "minecraft:water",
            "amount": 1000
        },
        "fluidLevelsConsumed": 1000
    }),

    event.shapeless(
        Item.of('endrem:guardian_eye'), // arg 1: output
        [
          'minecraft:ender_eye',
          'upgrade_aquatic:elder_eye'
        ]
      )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:fire_essence",
            "ars_nouveau:earth_essence",
            "ars_nouveau:abjuration_essence",
            "ars_nouveau:conjuration_essence",
            "ars_nouveau:air_essence",
            "minecraft:lapis_block",
            "ars_nouveau:source_gem_block"
        ], // input items
	    "minecraft:ender_eye", // reagent
	    "endrem:magical_eye", // output
	    8000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	),

  event.shapeless(
      Item.of('endrem:exotic_eye'), // arg 1: output
      [
        '#quark:corundum_cluster',
        '#quark:trumpet_saplings',
        '#integrations:cave_material',
        'minecraft:amethyst_shard',
        'minecraft:ender_eye',
        'biomemakeover:illunite_shard',
        '#integrations:coral',
        '#integrations:ars_saplings',
        '#regions_unexplored:prismarite_crystals'
      ]
    )
})