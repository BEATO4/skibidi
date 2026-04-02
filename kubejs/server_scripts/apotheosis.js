ServerEvents.recipes(event => {
		event.remove({ output: 'apotheosis:soul_touched_deepshelf'}),
		event.remove({ output: 'apotheosis:rectifier'}),
		event.remove({ output: 'apotheosis:rectifier_t2'}),
		event.remove({ output: 'apotheosis:rectifier_t3'}),
		event.remove({ output: 'apotheosis:treasure_shelf'}),
		event.remove({ output: 'apotheosis:library'}),
		event.remove({ output: 'biomemakeover:altar'}),
		event.remove({ output: 'apotheosis:scrap_tome'}),


		event.shaped('4x apotheosis:scrap_tome', [
		  'IBI', 
		  'BAB', 
		  'IBI'  
		  ], {
		      B: 'minecraft:book',
		      I: 'biomemakeover:illunite_shard', 
     		  A: 'minecraft:anvil'
		  }
		),
		event.recipes.createMechanicalCrafting('apotheosis:library', [
		  ' IDI ',
		  'IECEI',
		  'DCTCD',
		  'IECEI',
		  ' IDI '
		], {
		  I: '#apotheosis:infused_shelves',
		  D: 'forbidden_arcanus:deorum_block',
		  E: 'minecraft:ender_chest',
		  C: 'betterend:eternal_crystal',
		  T: 'minecraft:enchanting_table'
		}),
		event.shaped('apotheosis:soul_touched_deepshelf', [
		  ' L ', 
		  'EDE', 
		  'SSS'  
		  ], {
		      D: 'apotheosis:deepshelf',
		      E: 'forbidden_arcanus:soul', 
     		  S: 'minecraft:sculk',
     		  L: 'minecraft:soul_lantern'
		  }
		),
		event.shaped('apotheosis:rectifier', [
		  'LEL', 
		  'EDE', 
		  'LEL'  
		  ], {
		      D: 'apotheosis:infused_seashelf',
		      E: '#integrations:shark_teeth', 
     		  L: 'alexscaves:sea_glass_shards'
		  }
		),
		event.shaped('apotheosis:rectifier_t2', [
		  'LEL', 
		  'EDE', 
		  'LEL'  
		  ], {
		      D: 'apotheosis:rectifier',
		      E: 'irons_spellbooks:cinder_essence',
     		  L: 'minecraft:blackstone', 
		  }
		),
		event.shaped('apotheosis:rectifier_t3', [
		  'LEL', 
		  'EDE', 
		  'LEL'  
		  ], {
		      D: 'apotheosis:rectifier_t2',
		      E: 'betterend:ender_shard', 
     		  L: 'minecraft:purpur_block'
		  }
		),
		event.shaped('apotheosis:treasure_shelf', [
		  'EDE', 
		  'GAG', 
		  'EDE'  
		  ], {
		      D: 'apotheosis:rectifier_t2',
		      E: 'forbidden_arcanus:arcane_crystal_block', 
     		  G: 'minecraft:diamond', 
     		  A: 'rubinated_nether:ruby_block'
		  }
		)
	}
)