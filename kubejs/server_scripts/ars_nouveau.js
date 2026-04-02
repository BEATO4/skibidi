ServerEvents.recipes(event => {
  
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' }), 
    event.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade' }), 
    event.remove({ output: 'ars_nouveau:novice_spell_book', input: 'minecraft:iron_sword' }), 
    event.remove({ output: 'ars_elemental:glyph_charm' }), 
    event.remove({ output: 'ars_nouveau:ritual_flight' }), 
    event.remove({ output: 'ars_nouveau:ritual_challenge' }), 
    event.remove({ output: 'ars_nouveau:source_berry_pie' }), 
    event.remove({ output: 'ars_additions:ritual_locate_structure' }),
    event.remove({ type: 'ars_nouveau:imbuement', mod: 'ars_elemental' }), 
    event.remove({ input: 'ars_nouveau:source_gem_block', output: 'ars_elemental:spell_mirror' }), 
    event.remove({ input: 'ars_nouveau:bone_meal', output: 'ars_elemental:anima_essence' }), 
    event.remove({ input: 'ars_nouveau:wilden_tribute', output: 'ars_elemental:mark_of_mastery' }), 
    event.remove({ output: 'ars_nouveau:arcane_core', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:arcane_pedestal', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:enchanting_apparatus', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:imbuement_chamber', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:basic_spell_turret', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:volcanic_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:vitalic_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:alchemical_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:mycelial_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:ritual_moonfall' }), 
    event.remove({ output: 'ars_nouveau:ritual_sunrise' }), 
    event.remove({ output: 'ars_nouveau:ritual_repulsion' }), 
    event.remove({ output: 'ars_nouveau:dull_trinket' }), 
    event.remove({ output: 'ars_nouveau:ring_of_potential' }), 
    event.remove({ output: 'ars_nouveau:mundane_belt' }), 
    event.remove({ output: 'ars_nouveau:source_gem', type: 'ars_nouveau:imbuement' }), 


    event.replaceInput(
        { output: 'ars_nouveau:thread_chilling' },
        'ars_nouveau:water_essence',
        'kubejs:ice_essence'
    ),
    event.recipes.createCrushing([
        '2x ars_nouveau:water_essence',
        Item.of('ars_nouveau:water_essence').withChance(0.50)
      ], 'alexscaves:pearl'
    ),
    event.recipes.createCrushing([
        '2x kubejs:ice_essence',
        Item.of('kubejs:ice_essence').withChance(0.50)
      ], 'irons_spellbooks:frozen_bone'
    ),
    event.recipes.createCrushing([
        '2x ars_nouveau:fire_essence',
        Item.of('ars_nouveau:fire_essence').withChance(0.50)
      ], 'irons_spellbooks:cinder_essence'
    ),
    event.recipes.createCrushing([
        '2x ars_nouveau:air_essence',
        Item.of('ars_nouveau:air_essence').withChance(0.50),
        Item.of('quark:clear_shard').withChance(0.75)
      ], 'quark:bottled_cloud'
    ),
    event.recipes.createCrushing([
        '2x ars_nouveau:earth_essence',
        Item.of('ars_nouveau:earth_essence').withChance(0.50)
      ], 'alexscaves:ferrouslime_ball'
    ),
   
    //Ars Nouveau Spellbooks 
    //many recipes in data/ars_nouveau/recipes
    event.recipes.ars_nouveau.enchanting_apparatus([
              "eidolon:shadow_gem",
              "forbidden_arcanus:dark_matter",
              "eidolon:crimson_gem",
              "minecraft:netherite_ingot",
              "eidolon:shadow_gem",
              "minecraft:netherite_ingot",
              "eidolon:crimson_gem",
              "forbidden_arcanus:dark_matter",
          ], // input itemsr
        "ars_nouveau:novice_spell_book", // reagent
        "ars_nouveau:apprentice_spell_book", // output
        3000,
        true
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "ars_elemental:mark_of_mastery",
              "apotheosis:warden_tendril",
              "forbidden_arcanus:golden_dragon_scale",
              "ars_elemental:mark_of_mastery",
              "ars_nouveau:wilden_tribute",
              "ars_elemental:mark_of_mastery",
              "forbidden_arcanus:golden_dragon_scale",
              "apotheosis:warden_tendril",
          ], // input items
        "ars_nouveau:apprentice_spell_book", // reagent
        "ars_nouveau:archmage_spell_book", // output
        10000,
        true
    ),
    event.recipes.farmersdelight.cooking(
      ["minecraft:egg",
        "minecraft:sugar",
        "ars_nouveau:magebloom",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush"
      ],
      "ars_nouveau:source_berry_pie",
      5.0,
      400,
      "farmersdelight:pie_crust",
    ),
    event.recipes.ars_nouveau.imbuement(
        '#integrations:source_gem_gemstones', // input item
        'ars_nouveau:source_gem', // output
        500, // source cost
        []
    ),
    event.shapeless(
      Item.of('ars_nouveau:runic_chalk'),
      [
        'ars_nouveau:manipulation_essence',
        'minecraft:bone_meal',
        'forbidden_arcanus:rune'
      ]
    ),
    event.shaped('ars_nouveau:ritual_flight', [
      'AGE', 
      'B  ', 
      '   '
    ], 
    {
      A: 'ars_nouveau:purple_archwood_log',
      G: 'eidolon:gravity_belt',
      E: 'betterend:eternal_crystal',
      B: 'ars_nouveau:air_essence'
      }
    ),
    event.remove({ output: 'ars_elemental:air_leggings' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:air_essence',
            'ars_nouveau:air_essence'
        ],
        '#ars_nouveau:legs',
        'ars_elemental:air_leggings',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:air_hat' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:air_essence',
            'ars_nouveau:air_essence'
        ],
        '#ars_nouveau:hood',
        'ars_elemental:air_hat',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:air_robes' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:air_essence',
            'ars_nouveau:air_essence'
        ],
        '#ars_nouveau:robe',
        'ars_elemental:air_robes',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:air_boots' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:air_essence',
            'ars_nouveau:air_essence'
        ],
        '#ars_nouveau:boot',
        'ars_elemental:air_boots',
        7000,
        true
    ),
    event.remove({ output: 'ars_elemental:aqua_leggings' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:water_essence',
            'ars_nouveau:water_essence'
        ],
        '#ars_nouveau:legs',
        'ars_elemental:aqua_leggings',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:aqua_hat' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:water_essence',
            'ars_nouveau:water_essence'
        ],
        '#ars_nouveau:hood',
        'ars_elemental:aqua_hat',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:aqua_robes' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:water_essence',
            'ars_nouveau:water_essence'
        ],
        '#ars_nouveau:robe',
        'ars_elemental:aqua_robes',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:aqua_boots' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:water_essence',
            'ars_nouveau:water_essence'
        ],
        '#ars_nouveau:boot',
        'ars_elemental:aqua_boots',
        7000,
        true
    ),
    event.remove({ output: 'ars_elemental:fire_leggings' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:fire_essence',
            'ars_nouveau:fire_essence'
        ],
        '#ars_nouveau:legs',
        'ars_elemental:fire_leggings',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:fire_hat' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:fire_essence',
            'ars_nouveau:fire_essence'
        ],
        '#ars_nouveau:hood',
        'ars_elemental:fire_hat',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:fire_robes' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:fire_essence',
            'ars_nouveau:fire_essence'
        ],
        '#ars_nouveau:robe',
        'ars_elemental:fire_robes',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:fire_boots' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:fire_essence',
            'ars_nouveau:fire_essence'
        ],
        '#ars_nouveau:boot',
        'ars_elemental:fire_boots',
        7000,
        true
    ),
    event.remove({ output: 'ars_elemental:earth_leggings' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:earth_essence',
            'ars_nouveau:earth_essence'
        ],
        '#ars_nouveau:legs',
        'ars_elemental:earth_leggings',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:earth_hat' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:earth_essence',
            'ars_nouveau:earth_essence'
        ],
        '#ars_nouveau:hood',
        'ars_elemental:earth_hat',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:earth_robes' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:earth_essence',
            'ars_nouveau:earth_essence'
        ],
        '#ars_nouveau:robe',
        'ars_elemental:earth_robes',
        7000,
        true
    ),

    event.remove({ output: 'ars_elemental:earth_boots' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'ars_nouveau:earth_essence',
            'ars_nouveau:earth_essence'
        ],
        '#ars_nouveau:boot',
        'ars_elemental:earth_boots',
        7000,
        true
    ),
     event.remove({ output: 'ars_technia:technomancer_boots' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'create:brass_ingot',
            'create:brass_ingot'
        ],
        '#ars_nouveau:boot',
        'ars_technica:technomancer_boots',
        7000,
        true
    ),

    event.remove({ output: 'ars_technia:technomancer_chestplate' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'create:brass_ingot',
            'create:brass_ingot'
        ],
        '#ars_nouveau:robe',
        'ars_technica:technomancer_chestplate',
        7000,
        true
    ),

    event.remove({ output: 'ars_technia:technomancer_helmet' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'create:brass_ingot',
            'create:brass_ingot'
        ],
        '#ars_nouveau:hood',
        'ars_technica:technomancer_helmet',
        7000,
        true
    ),

    event.remove({ output: 'ars_technia:technomancer_leggings' }),
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'ars_elemental:mark_of_mastery',
            'create:brass_ingot',
            'create:brass_ingot'
        ],
        '#ars_nouveau:legs',
        'ars_technica:technomancer_leggings',
        7000,
        true
    )
  }
)