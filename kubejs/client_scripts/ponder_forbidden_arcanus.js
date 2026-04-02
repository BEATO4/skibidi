Ponder.registry(
    (event) => {
        event.create('forbidden_arcanus:hephaestus_forge')
        .scene(
            "hephaestus",
            "The great forge of Hephaestus",
            "kubejs:hephaestus_forge",
            (scene, util) => {
                //Loads and shows the full Structure of the forge
                scene.showStructure();
                scene.idle(30)
                scene.text(100, "The Forge from the §6Greek God Hephaestus §rhas given §lyou the rights §rto use his knowledge, to harness the mythical §n§6Hephaestus Forge§r.", [5.5, 2, 5.5])
                    .independent();
                scene.idleSeconds(5);

                //only hides the multiblock
                scene.world.hideSection([2, 1, 2,   8, 4, 8], Direction.up);
                scene.world.hideSection([4,1,1,  6,1,9], Direction.up);
                scene.world.hideSection([1,1,4,  9,1,6], Direction.up);
                scene.idle(10);
                scene.text(35, "Here is the §9blueprint §rfor the Forge, it's a 9x9 multiblock!", [5.5, 2, 5.5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(35);

				scene.text(45, "Start by placing §9Hephaestus Forge Conduits§r on the highlighted spots", [5, 1.5, 5])
					.placeNearTarget();
				scene.idle(15)
                scene.world.showSection([5,1,5], Direction.down);
				scene.world.showSection([5,1,2], Direction.down);
				scene.world.showSection([3,1,3], Direction.down);
				scene.world.showSection([2,1,5], Direction.down);
				scene.world.showSection([3,1,7], Direction.down);
				scene.world.showSection([5,1,8], Direction.down);
				scene.world.showSection([7,1,7], Direction.down);
				scene.world.showSection([8,1,5], Direction.down);
				scene.world.showSection([7,1,3], Direction.down);
				scene.idle(40);
				scene.text(35, "Then, surround the center block with §9Hephaestus Forge Core§9", [4, 1.5, 5])
					.placeNearTarget();
				scene.idle(5)
                //Reveals the 4 blocks around the Center
				scene.world.showSection([4,1,5,  6,1,5], Direction.up);
				scene.world.showSection([5,1,4,  5,1,6], Direction.up);
				scene.idle(45);
                //Reveals the rest of the blocks in a cascading way
				scene.text(35, "To finish the first layer, surround all blocks with §9Polished Darkstone", [0, 1.5, 5])
					.independent();
				scene.idle(5)
                scene.world.showSection([6,1,1, 5,1,1], Direction.down);
                scene.idle(3);
                scene.world.showSection([4,1,1, 4,1,2], Direction.down);
                scene.idle(3);
                scene.world.showSection([3,1,2, 2,1,2], Direction.down);
                scene.idle(3);
                scene.world.showSection([2,1,3, 2,1,4], Direction.down);
                scene.idle(3);
                scene.world.showSection([1,1,4, 1,1,5], Direction.down);
                scene.idle(2);
                scene.world.showSection([1,1,6, 2,1,6], Direction.down);
                scene.idle(2);
                scene.world.showSection([2,1,7, 2,1,8], Direction.down);
                scene.idle(2);
                scene.world.showSection([3,1,8, 4,1,8], Direction.down);
                scene.idle(2);
                scene.world.showSection([4,1,9, 5,1,9], Direction.down);
                scene.idle(1);
                scene.world.showSection([6,1,9, 6,1,8], Direction.down);
                scene.idle(1);
                scene.world.showSection([7,1,8, 8,1,8], Direction.down);
                scene.idle(1);
                scene.world.showSection([8,1,7, 8,1,6], Direction.down);
                scene.idle(1);
                scene.world.showSection([9,1,8, 9,1,5], Direction.down);
                scene.idle(1);
                scene.world.showSection([9,1,4, 8,1,4], Direction.down);
                scene.idle(1);
                scene.world.showSection([8,1,3, 8,1,2], Direction.down);
                scene.idle(1);
                scene.world.showSection([7,1,2, 6,1,2], Direction.down);
                scene.idle(1);
                scene.world.showSection([6,1,3, 5,1,3], Direction.down);
                scene.world.showSection([4,1,3, 4,1,4], Direction.down);
                scene.world.showSection([3,1,4, 3,1,5], Direction.down);
                scene.world.showSection([3,1,6, 4,1,6], Direction.down);
                scene.world.showSection([4,1,7, 5,1,7], Direction.down);
                scene.world.showSection([6,1,7, 6,1,6], Direction.down);
                scene.world.showSection([7,1,6, 7,1,5], Direction.down);
                scene.world.showSection([7,1,4, 6,1,4], Direction.down);
				scene.idle(45);
				scene.text(30, "Finally, place a §9Smithing Table §rin the middle...", [0, 1.5, 5])
					.independent()
					.attachKeyFrame();
				scene.world.setBlock([5,2,5], "minecraft:smithing_table", false);
				scene.idle(5);
				scene.world.showSection([5,2,5], Direction.down);
				scene.idle(35)
				scene.text(30, "...and right-click it with §4Mundabitur Dust", [0, 1.5, 5])
					.independent();
				scene.idle(5);
				scene.showControls(30, [5, 3.5, 4], "right")
					.rightClick()
					.withItem("forbidden_arcanus:mundabitur_dust");
				scene.idle(20)
				scene.world.createEntity("forbidden_arcanus:crimson_lightning_bolt", [5, 3, 5]);
				scene.idle(5);
				scene.world.setBlock([5,2,5], "forbidden_arcanus:hephaestus_forge", true);
				scene.idle(10);
				scene.text(30, "And your §9Hephaestus Forge §rhas been Created!", [0, 1.5, 5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(30);
            }
        );

        event.create('forbidden_arcanus:clibano_core')
        .scene(
            "clibano",
            "A Supernatural Furnace",
            "kubejs:clibano_furnace",
            (scene, util) => {
                //Loads and shows the full Structure of the forge
                scene.showStructure();
                scene.idle(30)
                scene.text(100, "A supernatural furnace that uses souls to speed up smelting.", [5.5, 2, 5.5])
                    .independent();
                scene.idleSeconds(5);

                //only hides the multiblock
                scene.world.hideSection([2, 1, 2,   7, 4, 7], Direction.up);
                scene.world.hideSection([4,1,1,  6,1,7], Direction.up);
                scene.world.hideSection([1,1,4,  7,1,6], Direction.up);
                scene.idle(10);
                scene.text(35, "Here is the §9blueprint §rfor the furnace, it's a 3x3 multiblock!", [5.5, 2, 5.5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(15);
                scene.text(45, "Start by placing blocks of §9Polished Darkstone§r and §9Polished Darkstone Bricks§r in this pattern", [5, 1.5, 5])
                    .placeNearTarget();
                scene.idle(15)
                scene.world.showSection([2, 1, 2,   7, 1, 7], Direction.EAST);
                scene.idle(40);
                scene.text(35, "Then, leaving air in the middle place §9Polished Darkstone Bricks§r and the §9Clibano Core§r", [4, 1.5, 5])
                    .placeNearTarget();
                scene.idle(5)
                scene.world.showSection([2, 2, 2,   7, 2, 7], Direction.EAST);
                scene.idle(45);
                //Reveals the rest of the blocks in a cascading way
                scene.text(35, "Lastly, repeat the first layer", [0, 1.5, 5])
                    .independent();
                scene.idle(15)
                scene.world.showSection([2, 3, 2,   7, 4, 7], Direction.EAST);
                scene.idle(45);
                scene.text(30, "...and right-click it with §4Mundabitur Dust", [0, 1.5, 5])
                    .independent();
                scene.idle(5);
                scene.showControls(30, [4, 3, 4], "right")
                    .rightClick()
                    .withItem("forbidden_arcanus:mundabitur_dust");
                scene.idle(20)
                scene.text(30, "And your §9Clibano Furnace §rhas been Created!", [0, 1.5, 5])
                    .independent()
                    .attachKeyFrame();
                scene.idle(30);
            }
        );

        event.create(
            [
                'forbidden_arcanus:arcane_crystal_dust_speck',
                'forbidden_arcanus:arcane_crystal_obelisk'
            ]
        )
        .scene(
            "obelisk",
            "Farming Arcane Crystals from Arcane Crystal Obilisks",
            "kubejs:arcane_crystal_obelisk",
            (scene, util) => {
                //Showing the full Obelisk with decoration
			    scene.world.showSection([0,0,0,  8,3,8], Direction.up);
                scene.text(50, "§bArcane Crystal Obelisks§r can be excellent §bAureal §rgatherers for your §bAureal §rneeds.", [4, 2.5, 4.5]).placeNearTarget();
                scene.idle(50);
                //Removing only the Obelisk
                scene.world.hideSection([3,1,3,  3,3,3], Direction.up);
                scene.idle(4);
                //Because the scene itself has the full Obelisk, i need to replace the obelisk with air, for the animation to work the way I intend
                //So the 3 blocks get replaced while still hidden in the Scene
                scene.world.replaceBlocks([3,1,3,  3,3,3], "minecraft:air", false);
                scene.idle(1);
                //Because those 3 Blocks are now air, I can show the area again
                scene.world.showSection([3,1,3,  3,3,3], Direction.down)
                scene.idle(15);
                //Proceed to place the Arcane Polished Darkstone
                scene.world.setBlocks([3,1,3,  3,1,3], 'forbidden_arcanus:arcane_polished_darkstone', true);
                scene.idle(10);
                scene.text(35, "First, place an Arcane Polished Darkstone Block.", [4, 1.5, 4.5])
			    	.placeNearTarget()
			    	.attachKeyFrame();
		        scene.idle(35);
                //Followed by quickly placing the two Arcane Crystal blocks
                scene.world.setBlocks([3,2,3,  3,2,3], 'forbidden_arcanus:arcane_crystal_block', true);
                scene.idle(10);
                scene.world.setBlocks([3,3,3,  3,3,3], 'forbidden_arcanus:arcane_crystal_block', true);
                scene.idle(4);
			    scene.text(40, "Then, place two §pArcane Crystal Blocks§r above it.", [4, 3, 4.5])
			    	.placeNearTarget();
			    scene.idle(45);
                scene.text(50, "This is the §bArcane Crystal Obelisk§r Multiblock ", [4, 2.5, 4.5])
         	    	.placeNearTarget()
                	.attachKeyFrame();
                scene.idle(60);
			    scene.text(70, "Rightclick it with a §4Mundabitur Dust §rto assemble it (This can also be done with deployers)", [4.0, 2.5, 4.5])
			    	.attachKeyFrame();
			    scene.idle(10);
                //Here it's done the same way as with the Hephaestus Forge scene above, this part was also very much possible, thanks to PigTurtle's scripts.
                //first The interaction gets shown
                scene.showControls(30, [4.5, 3, 3], "right")
                	.rightClick()
                	.withItem("forbidden_arcanus:mundabitur_dust");
                scene.idle(20);
                //Summoning the Lightning Bolt as a fake dramatic effect
                scene.world.createEntity("forbidden_arcanus:crimson_lightning_bolt", [4, 3, 4]);
				scene.idle(5);
                //Quickly modify the 3 Blocks that make up the Arcane Crystal Obelisk
                scene.world.modifyBlock([3, 1, 3], () => Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "lower"), true);
                scene.world.modifyBlock([3, 2, 3], () => Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "middle"), true);
                scene.world.modifyBlock([3, 3, 3], () => Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "upper"), true);
                scene.idle(60);
                scene.text(30, "You can now mine it for the obelisk item! ", [4.5, 2.5, 4.5])
			    	.placeNearTarget()
			    	.attachKeyFrame();
			    scene.idle(40);
			    scene.showControls(20, [4.5, 3, 3], "right")
			    	.leftClick()
			    	.withItem("iron_pickaxe");
			    scene.idle(10);
                //Simulate a mined block action
			    scene.world.modifyBlocks([4,1,4,  4,3,4], () => Block.id("minecraft:air"), true);
			    scene.idle(5);
			    scene.world.createItemEntity([4.5, 2.5, 4.5], [0, 0, 0], "forbidden_arcanus:arcane_crystal_obelisk");
            }
        );
    }
)

