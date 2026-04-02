ItemEvents.tooltip(event => {
  event.add([global.itemsToRemove], Text.red('This item has been disabled')),
  event.add('sophisticatedbackpacks:feeding_upgrade', Text.red('This was disabled due to an item voiding bug.')),
  event.add('sophisticatedbackpacks:advanced_feeding_upgrade', Text.red('This was disabled due to an item voiding bug.')),
  event.add('create_enchantment_industry:disenchanter', Text.red('Pondering this will crash your game.'))
})