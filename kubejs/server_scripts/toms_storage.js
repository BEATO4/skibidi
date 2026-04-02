ServerEvents.recipes(event => {
    event.remove({ output: 'toms_storage:ts.inventory_hopper_basic' }), 
	
    event.recipes.createSequencedAssembly([
    Item.of('toms_storage:ts.wireless_terminal').withChance(100),
    ], 'create:brass_sheet', [ 
     event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'create:precision_mechanism']),
     event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'oreganized:electrum_nugget']),
     event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'create:redstone_link']),
     event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'create:electron_tube']),
     event.recipes.createPressing('create:brass_sheet', ['create:brass_sheet'])   
    ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(2),
    event.recipes.createSequencedAssembly([
    Item.of('toms_storage:ts.adv_wireless_terminal').withChance(100),
    ], 'toms_storage:ts.wireless_terminal', [ 
     event.recipes.createDeploying('toms_storage:ts.wireless_terminal', ['toms_storage:ts.wireless_terminal', 'create:sturdy_sheet']),
     event.recipes.createFilling('toms_storage:ts.wireless_terminal', ['toms_storage:ts.wireless_terminal', Fluid.of("spelunkery:portal_fluid", 500)]),
     event.recipes.createPressing('toms_storage:ts.wireless_terminal', ['toms_storage:ts.wireless_terminal'])   
    ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(2),

    event.shaped('toms_storage:ts.inventory_hopper_basic', [
      'BIB', 
      ' H '
      ], 
      {
       B: 'create:brass_sheet',
       I: 'toms_storage:ts.inventory_cable',
       H: 'minecraft:hopper'
    })
  }
)