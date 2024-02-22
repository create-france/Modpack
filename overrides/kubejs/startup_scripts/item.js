// Listen to item registry event
StartupEvents.registry('item', event => {

  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('os')
    .displayName('Dark Bone')
    .texture('createfrance:item/os')

  event.create('bar_of_black_chocolate')
    .displayName('bar of black chocolate')
    .texture('confectionary:items/bar_of_black_chocolate')

  event.create('gingerbread_man')
    .displayName('gingerbread man')
    .texture('confectionary:items/gingerbread_man')

  event.create('gingerdough')
    .displayName('gingerdough')
    .texture('confectionary:items/gingerdough')

  event.create('boule_de_noel')
    .displayName('boule de noël ')
    .texture('createfrance:item/boule_de_noel')

  event.create('createfoundry:experience_nugget_gem_mould')
    .displayName('Experience Nugget Gem Mould')
    .texture('createfoundry:item/experience_nugget_gem_mould')
    .maxStackSize(8)
})