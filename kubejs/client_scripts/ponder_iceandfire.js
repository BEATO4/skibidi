Ponder.registry(
    (event) => {
        event.create('iceandfire:dragonforge_lightning_core_disabled')
        .scene(
            "lightning_dragonforge",
            "A Forge Fueled by a Dragon of Lightning",
            "kubejs:dragonforge_lightning",
            (scene, util) => {
                //Loads and shows the full Structure of the forge
                scene.showStructure();
                scene.idle(30)
                scene.text(100, "A forge powered by Dragons used to create Dragonsteel.", [5.5, 2, 5.5])
                    .independent();
                scene.idleSeconds(5);

                //only hides the multiblock
                scene.world.hideSection([2, 1, 2,   7, 4, 7], Direction.up);
                scene.world.hideSection([4,1,1,  6,1,7], Direction.up);
                scene.world.hideSection([1,1,4,  7,1,6], Direction.up);
                scene.idle(10);
                scene.text(35, "Here is the §9blueprint §rfor the forge, it's a 3x3 multiblock!", [5.5, 2, 5.5])
                    .independent()
                    .attachKeyFrame();
                scene.text(45, "Start by placing blocks of §9Dragon Bones§r and §9Lightning Dragonforge Bricks§r in this pattern", [5, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 1, 2,   7, 1, 7], Direction.EAST);
                scene.idle(40);
                scene.text(45, "Then, place the §9Dragonforge Core§r in the center, a §9Dragonforge Aperture§r on one side, and §9Lightning Dragonforge Bricks§r on the rest.", [4, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 2, 2,   7, 2, 7], Direction.EAST);
                scene.idle(45);
                //Reveals the rest of the blocks in a cascading way
                scene.text(35, "Lastly, repeat the first layer", [0, 1.5, 5])
                    .independent();
                scene.idle(15)
                scene.world.showSection([2, 3, 2,   7, 4, 7], Direction.EAST);
                scene.idle(45);
                scene.text(30, "Tame a dragon and bring it near to fuel the forge!", [0, 1.5, 5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(30);
            }
        );

        event.create('iceandfire:dragonforge_fire_core_disabled')
        .scene(
            "fire_dragonforge",
            "A Forge Fueled by a Dragon of Fire",
            "kubejs:dragonforge_fire",
            (scene, util) => {
                //Loads and shows the full Structure of the forge
                scene.showStructure();
                scene.idle(30)
                scene.text(100, "A forge powered by Dragons used to create Dragonsteel.", [5.5, 2, 5.5])
                    .independent();
                scene.idleSeconds(5);

                //only hides the multiblock
                scene.world.hideSection([2, 1, 2,   7, 4, 7], Direction.up);
                scene.world.hideSection([4,1,1,  6,1,7], Direction.up);
                scene.world.hideSection([1,1,4,  7,1,6], Direction.up);
                scene.idle(10);
                scene.text(35, "Here is the §9blueprint §rfor the forge, it's a 3x3 multiblock!", [5.5, 2, 5.5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(15);
                scene.text(45, "Start by placing blocks of §9Dragon Bones§r and §9Fire Dragonforge Bricks§r in this pattern", [5, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 1, 2,   7, 1, 7], Direction.EAST);
                scene.idle(40);
                scene.text(45, "Then, place the §9Dragonforge Core§r in the center, a §9Dragonforge Aperture§r on one side, and §9Fire Dragonforge Bricks§r on the rest.", [4, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 2, 2,   7, 2, 7], Direction.EAST);
                scene.idle(45);
                //Reveals the rest of the blocks in a cascading way
                scene.text(35, "Lastly, repeat the first layer", [0, 1.5, 5])
                    .independent();
                scene.idle(15)
                scene.world.showSection([2, 3, 2,   7, 4, 7], Direction.EAST);
                scene.idle(45);
                scene.text(30, "Tame a dragon and bring it near to fuel the forge!", [0, 1.5, 5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(30);
            }
        );

        event.create('iceandfire:dragonforge_ice_core_disabled')
        .scene(
            "ice_dragonforge",
            "A Forge Fueled by a Dragon of Ice",
            "kubejs:dragonforge_ice",
            (scene, util) => {
                //Loads and shows the full Structure of the forge
                scene.showStructure();
                scene.idle(30)
                scene.text(100, "A forge powered by Dragons used to create Dragonsteel.", [5.5, 2, 5.5])
                    .independent();
                scene.idleSeconds(5);

                //only hides the multiblock
                scene.world.hideSection([2, 1, 2,   7, 4, 7], Direction.up);
                scene.world.hideSection([4,1,1,  6,1,7], Direction.up);
                scene.world.hideSection([1,1,4,  7,1,6], Direction.up);
                scene.idle(10);
                scene.text(35, "Here is the §9blueprint §rfor the forge, it's a 3x3 multiblock!", [5.5, 2, 5.5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(15);
                scene.text(45, "Start by placing blocks of §9Dragon Bones§r and §9Ice Dragonforge Bricks§r in this pattern", [5, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 1, 2,   7, 1, 7], Direction.EAST);
                scene.idle(40);
                scene.text(45, "Then, place the §9Dragonforge Core§r in the center, a §9Dragonforge Aperture§r on one side, and §9Ice Dragonforge Bricks§r on the rest.", [4, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 2, 2,   7, 2, 7], Direction.EAST);
                scene.idle(45);
                //Reveals the rest of the blocks in a cascading way
                scene.text(35, "Lastly, repeat the first layer", [0, 1.5, 5])
                    .independent();
                scene.idle(15)
                scene.world.showSection([2, 3, 2,   7, 4, 7], Direction.EAST);
                scene.idle(45);
                scene.text(30, "Tame a dragon and bring it near to fuel the forge!", [0, 1.5, 5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(30);
            }
        );
    }
)

