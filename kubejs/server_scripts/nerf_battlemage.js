EntityEvents.hurt(event => {
    // 1. Filter: Only check if the attacker is a player
    const attacker = event.getSource().getPlayer();
    if (!attacker) return;

    // 2. Filter: Identify "Magic" Damage
    // We check the damage source type ID. 
    // Most mods use IDs like "magic", "indirect_magic", "lightning", "fireball", or contain "spell".
    const dmgType = event.getSource().getType();
    const isMagic = dmgType.includes("magic") || 
                    dmgType.includes("spell") || 
                    dmgType.includes("lightning") ||
                    dmgType.includes("wither"); // Add other mod-specific types here

    if (!isMagic) return;

    // 3. Filter: Check if Main Hand is a "Stat Stick"
    const mainHandItem = attacker.getMainHandItem();
    
    // OPTION A: Target ALL Swords/Axes (Broad approach)
    // const isMeleeWeapon = mainHandItem.hasTag('forge:tools/swords') || mainHandItem.hasTag('forge:tools/axes');

    // OPTION B: Target ONLY Apotheosis Affix items (Surgical approach)
    // We check if the item has the NBT tag that holds affix data
    const isApotheosisWeapon = mainHandItem.nbt && mainHandItem.nbt.contains("affix_data");

    if (isApotheosisWeapon) {
        // 4. The Nerf
        // If casting magic with a God-Slayer Sword, reduce damage to 40% (0.4)
        // This offsets the insane Crit/Dmg buffs the sword gives.
        event.setDamage(event.getDamage() * 0.4);
        
        // Optional: Warn the player (Debugging)
        // attacker.tell("Your heavy weapon interferes with your magic channeling!");
    }
});