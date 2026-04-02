ServerEvents.recipes(event => {
    event.remove({ output: 'redeco:jar' }),
    event.remove({ output: 'redeco:white_paper_lantern' }),
    event.remove({ output: 'redeco:white_upholstery' }),
    event.remove({ output: 'redeco:black_upholstery' }),
    event.remove({ output: 'redeco:gray_upholstery' }),
    event.remove({ output: 'redeco:light_gray_upholstery' }),
    event.remove({ output: 'redeco:orange_upholstery' }),
    event.remove({ output: 'redeco:magenta_upholstery' }),
    event.remove({ output: 'redeco:purple_upholstery' }),
    event.remove({ output: 'redeco:pink_upholstery' }),
    event.remove({ output: 'redeco:red_upholstery' }),
    event.remove({ output: 'redeco:yellow_upholstery' }),
    event.remove({ output: 'redeco:green_upholstery' }),
    event.remove({ output: 'redeco:lime_upholstery' }),
    event.remove({ output: 'redeco:cyan_upholstery' }),
    event.remove({ output: 'redeco:blue_upholstery' }),
    event.remove({ output: 'redeco:light_blue_upholstery' }),
    event.remove({ output: 'redeco:brown_upholstery' }),
    event.remove({ output: 'redeco:black_upholstery' }),
    event.remove({ output: 'redeco:white_pet_bed' }),
    event.remove({ output: 'redeco:black_pet_bed' }),
    event.remove({ output: 'redeco:gray_pet_bed' }),
    event.remove({ output: 'redeco:light_gray_pet_bed' }),
    event.remove({ output: 'redeco:orange_pet_bed' }),
    event.remove({ output: 'redeco:magenta_pet_bed' }),
    event.remove({ output: 'redeco:purple_pet_bed' }),
    event.remove({ output: 'redeco:pink_pet_bed' }),
    event.remove({ output: 'redeco:red_pet_bed' }),
    event.remove({ output: 'redeco:yellow_pet_bed' }),
    event.remove({ output: 'redeco:green_pet_bed' }),
    event.remove({ output: 'redeco:lime_pet_bed' }),
    event.remove({ output: 'redeco:cyan_pet_bed' }),
    event.remove({ output: 'redeco:blue_pet_bed' }),
    event.remove({ output: 'redeco:light_blue_pet_bed' }),
    event.remove({ output: 'redeco:brown_pet_bed' }),
    event.remove({ output: 'redeco:black_pet_bed' }),
    event.remove({ output: 'redeco:oak_cabinet' }),
    event.remove({ output: 'redeco:dark_oak_cabinet' }),
    event.remove({ output: 'redeco:spruce_cabinet' }),
    event.remove({ output: 'redeco:mangrove_cabinet' }),
    event.remove({ output: 'redeco:cherry_cabinet' }),
    event.remove({ output: 'redeco:crimson_cabinet' }),
    event.remove({ output: 'redeco:warped_cabinet' }),
    event.remove({ output: 'redeco:bamboo_cabinet' }),
    event.remove({ output: 'redeco:acacia_cabinet' }),
    event.remove({ output: 'redeco:jungle_cabinet' }),
    event.remove({ output: 'redeco:birch_cabinet' }),
    event.remove({ output: 'minecraft:stick', input: '#minecraft:logs' }),
    event.remove({ output: 'everycomp:rd/iceandfire/polished_dreadwood_planks'}),

    event.replaceInput(
      { input: 'redeco:jar' },
      'redeco:jar',           
      'supplementaries:jar'        
    ),
    event.replaceInput(
      { input: 'redeco:jar' },
      'redeco:jar',           
      'supplementaries:jar'        
    ),
    event.replaceInput(
      { input: 'redeco:white_paper_lantern' },
      'redeco:white_paper_lantern',           
      'quark:paper_lantern'        
    ),
    event.shapeless(
      Item.of('redeco:white_paper_lantern'),
      [
        'quark:paper_lantern',
        "minecraft:white_dye"
      ]
    ),
    event.shapeless(
      Item.of('2x everycomp:rd/iceandfire/polished_dreadwood_planks'),
      [
        '2x iceandfire:dreadwood_planks'
      ]
    ),
    event.recipes.create.compacting(
      ['4x redeco:orange_upholstery'], 
      ['minecraft:orange_wool', 'minecraft:orange_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:red_upholstery'], 
      ['minecraft:red_wool', 'minecraft:red_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:yellow_upholstery'], 
      ['minecraft:yellow_wool', 'minecraft:yellow_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:magenta_upholstery'], 
      ['minecraft:magenta_wool', 'minecraft:magenta_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:green_upholstery'], 
      ['minecraft:green_wool', 'minecraft:green_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:lime_upholstery'], 
      ['minecraft:lime_wool', 'minecraft:lime_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:cyan_upholstery'], 
      ['minecraft:cyan_wool', 'minecraft:cyan_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:blue_upholstery'], 
      ['minecraft:blue_wool', 'minecraft:blue_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:light_blue_upholstery'], 
      ['minecraft:light_blue_wool', 'minecraft:light_blue_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:purple_upholstery'], 
      ['minecraft:purple_wool', 'minecraft:purple_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:pink_upholstery'], 
      ['minecraft:pink_wool', 'minecraft:pink_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:brown_upholstery'], 
      ['minecraft:brown_wool', 'minecraft:brown_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:black_upholstery'], 
      ['minecraft:black_wool', 'minecraft:black_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:gray_upholstery'], 
      ['minecraft:gray_wool', 'minecraft:gray_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:light_gray_upholstery'], 
      ['minecraft:light_gray_wool', 'minecraft:light_gray_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated(),
    event.recipes.create.compacting(
      ['4x redeco:white_upholstery'], 
      ['minecraft:white_wool', 'minecraft:white_wool', 'minecraft:string', Fluid.water(10)
      ]
    ).heated()
  }
)