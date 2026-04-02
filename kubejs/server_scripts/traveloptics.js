ServerEvents.recipes(event => {
    event.remove({ output: 'traveloptics:abyssal_upgrade_smithing_template' }), 
    event.remove({ output: 'traveloptics:tectonic_upgrade_smithing_template' }), 
    event.remove({ output: 'cataclysm:cursium_upgrade_smithing_template' }), 
    event.remove({ input: 'traveloptics:abyssal_upgrade_smithing_template' }), 
    event.remove({ input: 'traveloptics:tectonic_upgrade_smithing_template' }),
    event.remove({ input: 'traveloptics:witherite_upgrade_smithing_template' }),  
    event.remove({ output: 'traveloptics:witherite_upgrade_smithing_template' }),  
    event.remove({ output: 'traveloptics:darkness_upgrade_smithing_template' }),  
    event.remove({ input: 'traveloptics:darkness_upgrade_smithing_template' }) 
    event.remove({ input: 'cataclysm:cursium_upgrade_smithing_template' })
    event.remove({ output: 'traveloptics:dark_gem_of_the_living_void' }), 


    event.recipes.createMechanicalCrafting('traveloptics:mechanized_exoskeleton_helmet', [
      ' DWD ',
      'DSNSD',
      ' DPD ',
    ], {
      N: 'ice_and_fire_spellbooks:lightning_dragon_priest_helmet',
      W: 'cataclysm:witherite_ingot',
      P: 'ars_technica:calibrated_precision_mechanism',
      D: 'born_in_chaos_v1:dark_metal_ingot',
      S: 'create:sturdy_sheet'
    }),
    event.recipes.createMechanicalCrafting('traveloptics:mechanized_exoskeleton_chestplate', [
      ' DWD ',
      'DSNSD',
      ' DPD ',
    ], {
      N: 'ice_and_fire_spellbooks:lightning_dragon_priest_chestplate',
      W: 'traveloptics:elytra_jetpack_component',
      P: 'ars_technica:calibrated_precision_mechanism',
      D: 'born_in_chaos_v1:dark_metal_ingot',
      S: 'create:sturdy_sheet'
    }),
    event.recipes.createMechanicalCrafting('traveloptics:mechanized_exoskeleton_leggings', [
      ' DWD ',
      'DSNSD',
      ' DPD ',
    ], {
      N: 'ice_and_fire_spellbooks:lightning_dragon_priest_leggings',
      W: 'cataclysm:witherite_ingot',
      P: 'ars_technica:calibrated_precision_mechanism',
      D: 'born_in_chaos_v1:dark_metal_ingot',
      S: 'create:sturdy_sheet'
    }),
    event.recipes.createMechanicalCrafting('traveloptics:mechanized_exoskeleton_boots', [
      ' DWD ',
      'DSNSD',
      ' DPD ',
    ], {
      N: 'ice_and_fire_spellbooks:lightning_dragon_priest_boots',
      W: 'cataclysm:witherite_ingot',
      P: 'ars_technica:calibrated_precision_mechanism',
      D: 'born_in_chaos_v1:dark_metal_ingot',
      S: 'create:sturdy_sheet'
    })

  }
)
