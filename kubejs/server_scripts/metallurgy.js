ServerEvents.recipes(event => {
  // Metallurgy extra metals removal
    event.remove({ output: 'createmetallurgy:tungsten_wire_spool' }),
    event.remove({ output: 'createmetallurgy:raw_wolframite_block' }),
    event.remove({ output: 'createmetallurgy:raw_wolframite' }),
    event.remove({ output: 'createmetallurgy:wolframite_ore' }),
    event.remove({ output: 'createmetallurgy:wolframite_dust' }),
    event.remove({ output: 'createmetallurgy:dirty_wolframite_dust' }),
    event.remove({ output: 'createmetallurgy:crushed_raw_wolframite' }),
    event.remove({ output: 'createmetallurgy:tungsten_wire_spool' }),
    event.remove({ output: 'createmetallurgy:tungsten_ingot' }),
    event.remove({ output: 'createmetallurgy:tungsten_sheet' }),
    event.remove({ output: 'createmetallurgy:tungsten_nugget' }),
    event.remove({ output: 'createmetallurgy:tungsten_wire' }),
    event.remove({ output: 'createmetallurgy:tungsten_block' }),
    event.remove({ output: 'createmetallurgy:graphite_gear_mold' }),
    event.remove({ output: 'createmetallurgy:graphite_rod_mold' }),
    event.remove({ output: 'createmetallurgy:steel_ingot' }),
    event.remove({ output: 'createmetallurgy:steel_block' }),
    event.remove({ output: 'createmetallurgy:coke' }),
    event.remove({ output: 'createmetallurgy:coke_block' }),
    event.remove({ output: 'createmetallurgy:molten_tungsten_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_steel_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_aluminum_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_nickel_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_lead_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_tin_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_invar_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_constantan_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_bronze_bucket' }),
    event.remove({ output: 'createmetallurgy:molten_osmium_bucket' }),
    event.remove({ output: 'createmetallurgy:refractory_mortar' }),
    event.remove({ output: 'createmetallurgy:industrial_crucible' }),
    event.remove({ output: 'createmetallurgy:sturdy_whisk' }),
    event.remove({ output: 'createmetallurgy:foundry_unit' }),
    event.remove({ output: 'createmetallurgy:obdurium_ingot' }),
    event.remove({ output: 'createmetallurgy:obdurium_block' }),
    event.remove({ output: 'createmetallurgy:obdurium_sheet' }),
    event.remove({ output: 'createmetallurgy:molten_obdurium_bucket' }),

    event.replaceInput(
      { input: 'createmetallurgy:tungsten_wire_spool' },
      'createmetallurgy:tungsten_wire_spool',
      'redeco:glowstone_light_bulb'
    ),
    event.replaceInput(
      { input: 'createmetallurgy:refractory_mortar' },
      'createmetallurgy:refractory_mortar',
      'supplementaries:daub'
    ),

    //Reworked Metallurgy recipes
    event.shaped('createmetallurgy:sturdy_whisk', [
      ' A ',
      'SAS',
      'ISI'
    ], {
      A: 'create:andesite_alloy',
      S: 'create:sturdy_sheet',
      I: 'createdeco:industrial_iron_sheet',
    }
    ),
    event.shaped('createmetallurgy:foundry_unit', [
      '   ',
      'ICI',
      '   '
    ], {
      C: 'minecraft:compass',
      I: 'createdeco:industrial_iron_sheet',
    }
    ),
    event.recipes.createSequencedAssembly([
      Item.of('createmetallurgy:industrial_crucible').withChance(100),
    ], 'minecraft:deepslate_bricks', [
      event.recipes.createDeploying('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', 'supplementaries:daub']),
      event.recipes.createDeploying('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', 'createdeco:andesite_sheet']),
      event.recipes.createmetallurgy.grinding('createmetallurgy:incomplete_industrial_crucible', 'createmetallurgy:incomplete_industrial_crucible'),
      event.recipes.createFilling('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', Fluid.of('createmetallurgy:molten_iron', 500)]),
    ]).transitionalItem('createmetallurgy:incomplete_industrial_crucible').loops(1),


  // Metalwork extra metals removal
    event.remove({ output: 'createmetalwork:dirty_nickel_dust' }),
    event.remove({ output: 'createmetalwork:nickel_dust' }),
    event.remove({ output: 'createmetalwork:dirty_ostrum_dust' }),
    event.remove({ output: 'createmetalwork:ostrum_dust' }),
    event.remove({ output: 'createmetalwork:dirty_tungsten_dust' }),
    event.remove({ output: 'createmetalwork:tungsten_dust' }),
    event.remove({ output: 'createmetalwork:dirty_lithium_dust' }),
    event.remove({ output: 'createmetalwork:lithium_dust' }),
    event.remove({ output: 'createmetalwork:dirty_tin_dust' }),
    event.remove({ output: 'createmetalwork:tin_dust' }),
    event.remove({ output: 'createmetalwork:dirty_calorite_dust' }),
    event.remove({ output: 'createmetalwork:calorite_dust' }),
    event.remove({ output: 'createmetalwork:dirty_cobalt_dust' }),
    event.remove({ output: 'createmetalwork:cobalt_dust' }),
    event.remove({ output: 'createmetalwork:dirty_desh_dust' }),
    event.remove({ output: 'createmetalwork:desh_dust' }),
    event.remove({ output: 'createmetalwork:dirty_enderium_shard_dust' }),
    event.remove({ output: 'createmetalwork:enderium_shard_dust' }),
    event.remove({ output: 'minecraft:netherite_ingot', type: 'create:compacting' }),
    event.remove({ input: 'create:crushed_raw_lead', type: 'create:splashing' }),
    event.remove({ input: 'createmetalwork:dirty_lead_dust', type: 'create:splashing' }),

    //Compatability between Create: Metallurgy, Metalwork, and Deco
    event.recipes.createmetallurgy.casting_in_table('createdeco:andesite_sheet', [Fluid.of('createmetalwork:molten_andesite_alloy', 90), 'createmetallurgy:graphite_plate_mold'], 60, false),
    event.recipes.createmetallurgy.casting_in_table('create:andesite_alloy', [Fluid.of('createmetalwork:molten_andesite_alloy', 90), 'createmetallurgy:graphite_ingot_mold'], 60, false),
    event.recipes.createmetallurgy.melting(Fluid.of('createmetalwork:molten_andesite_alloy', 90), 'create:andesite_alloy', 40, 'heated'),
    event.recipes.createmetallurgy.melting(Fluid.of('createmetalwork:molten_andesite_alloy', 90), 'createdeco:andesite_sheet', 40, 'heated'),

    event.recipes.createmetallurgy.casting_in_table('createdeco:zinc_sheet', [Fluid.of('createmetallurgy:molten_zinc', 90), 'createmetallurgy:graphite_plate_mold'], 60, false),
    event.recipes.createmetallurgy.melting(Fluid.of('createmetallurgy:molten_zinc', 90), 'createdeco:zinc_sheet', 40, 'heated'),

    event.recipes.createmetallurgy.melting(Fluid.of('createmetallurgy:molten_netherite', 22), '#forge:dusts/netherite_scrap', 40, 'superheated'),
    event.recipes.createmetallurgy.melting(Fluid.of('createmetallurgy:molten_netherite', 90), 'createdeco:netherite_sheet', 40, 'superheated'),
    event.recipes.createmetallurgy.melting(Fluid.of('createmetallurgy:molten_netherite', 10), 'createdeco:netherite_nugget', 4, 'superheated'),
    event.recipes.createmetallurgy.casting_in_table('createdeco:netherite_sheet', [Fluid.of('createmetallurgy:molten_netherite', 90), 'createmetallurgy:graphite_plate_mold'], 60, false),
    event.recipes.createmetallurgy.casting_in_table('createdeco:netherite_nugget', [Fluid.of('createmetallurgy:molten_netherite', 10), 'createmetallurgy:graphite_nugget_mold'], 10, false),

    event.recipes.createSplashing([
      '9x oreganized:lead_nugget',
      Item.of('oreganized:silver_nugget').withChance(0.5)
    ], 'create:crushed_raw_lead'
    ),
    event.recipes.createSplashing([
        'createmetalwork:lead_dust',
        Item.of('2x oreganized:silver_nugget').withChance(0.5)
      ], 'createmetalwork:dirty_lead_dust'
    )
}
)