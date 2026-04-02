ServerEvents.recipes(event => {
	event.remove({ output: 'constructionwand:stone_wand' }),
	event.remove({ output: 'constructionwand:iron_wand' }),
	event.remove({ output: 'constructionwand:diamond_wand' }),
	event.remove({ output: 'constructionwand:infinity_wand' }),
	event.remove({ output: 'constructionwand:core_angel' }),
	event.remove({ output: 'constructionwand:core_destruction' }),
	
	event.shaped('constructionwand:stone_wand', [
      '  A  ',
      ' ABA ',
      '  C  '
    ], {
      A: '#forge:glass',
      B: 'minecraft:stone',
      C: 'minecraft:copper_ingot'
    }),
	event.shaped('constructionwand:iron_wand', [
      '  A  ',
      ' ABA ',
      '  E  '
    ], {
      A: 'quark:framed_glass',
      B: 'minecraft:iron_ingot',
	    E: '#forge:obsidian'
    }),
	event.recipes.createMechanicalCrafting('constructionwand:diamond_wand', [
      '  A  ',
      ' ABA ',
      '  C  ',
      '  D  ',
      '  E  '
    ], {
      A: '#rubinated_nether:ruby_glass_tag',
      B: 'minecraft:diamond',
	  C: 'create:precision_mechanism',
      D: 'oreganized:electrum_ingot',
	  E: '#forge:obsidian'
    }),
	event.recipes.createMechanicalCrafting('constructionwand:infinity_wand', [
      '  A  ',
      ' ABA ',
      '  C  ',
      '  D  ',
      '  E  '
    ], {
      A: 'betterend:aurora_crystal',
      B: 'forbidden_arcanus:dark_nether_star',
	  C: 'quark:diamond_heart',
      D: 'born_in_chaos_v1:dark_metal_ingot',
	  E: '#forge:obsidian'
    })
}
)