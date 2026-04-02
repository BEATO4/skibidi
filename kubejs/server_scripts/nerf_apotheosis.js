// Priority: 100
ServerEvents.highPriorityData(event => {

    // ---------------------------------------------------------
    // 1. NERF: LACERATING (Espadas)
    // ---------------------------------------------------------
    event.addJson('apotheosis:affixes/sword/lacerating', {
        "type": "apotheosis:attribute",
        "attribute": "attributeslib:crit_damage",
        "operation": "ADDITION",
        "values": {
            "common":   { "min": 0.02, "steps": 5,  "step": 0.005 },
            "uncommon": { "min": 0.03, "steps": 5,  "step": 0.005 },
            "rare":     { "min": 0.05, "steps": 8,  "step": 0.005 },
            "epic":     { "min": 0.07, "steps": 8,  "step": 0.01 },
            "mythic":   { "min": 0.09, "steps": 10, "step": 0.01 },
            "ancient":  { "min": 0.10, "steps": 15, "step": 0.01 }
        },
        "types": ["sword", "trident"]
    })

    // ---------------------------------------------------------
    // 2. NERF: DECIMATING (Hachas/Mazas)
    // ---------------------------------------------------------
    event.addJson('apotheosis:affixes/heavy_weapon/decimating', {
        "type": "apotheosis:attribute",
        "attribute": "attributeslib:crit_damage",
        "operation": "ADDITION",
        "values": {
            "common":   { "min": 0.05, "steps": 5,  "step": 0.01 },
            "uncommon": { "min": 0.06, "steps": 5,  "step": 0.01 },
            "rare":     { "min": 0.08, "steps": 8,  "step": 0.01 },
            "epic":     { "min": 0.10, "steps": 10, "step": 0.01 },
            "mythic":   { "min": 0.12, "steps": 12, "step": 0.01 },
            "ancient":  { "min": 0.15, "steps": 15, "step": 0.01 }
        },
        "types": ["heavy_weapon"]
    })

    // ---------------------------------------------------------
    // 3. NERF: GEMA WARLORD (Corregido)
    // Agregamos "weight" y "quality" para que el juego no la borre.
    // ---------------------------------------------------------
    event.addJson('apotheosis:gems/core/warlord', {
        "variant": "warlord",  // <--- ¡ESTO FALTABA! Sin esto, la gema desaparece.
        "weight": 10,
        "quality": 0,
        "dimensions": [],
        "bonuses": [
            {
                // BONUS 1: Espadas y Arcos (Light Ranged / Sword)
                // NERFEADO: De 0.30 (30%) max a 0.10 (10%) max
                "type": "apotheosis:attribute",
                "gem_class": {
                    "key": "light_ranged",
                    "types": ["sword", "trident", "bow", "crossbow"]
                },
                "attribute": "attributeslib:crit_damage",
                "operation": "ADDITION",
                "values": {
                    "common": 0.02,
                    "uncommon": 0.03,
                    "rare": 0.05,
                    "epic": 0.07,
                    "mythic": 0.09,
                    "ancient": 0.10
                }
            },
            {
                // BONUS 2: Armas Pesadas (Heavy Weapon)
                // NERFEADO: De 0.40 (40%) max a 0.12 (12%) max
                "type": "apotheosis:attribute",
                "gem_class": {
                    "key": "heavy_weapon",
                    "types": ["heavy_weapon"]
                },
                "attribute": "attributeslib:crit_damage",
                "operation": "ADDITION",
                "values": {
                    "common": 0.03,
                    "uncommon": 0.04,
                    "rare": 0.06,
                    "epic": 0.08,
                    "mythic": 0.10,
                    "ancient": 0.12
                }
            },
            {
                // BONUS 3: Pecheras (Vida) - Mantenemos original
                "type": "apotheosis:attribute",
                "gem_class": {
                    "key": "chestplate",
                    "types": ["chestplate"]
                },
                "attribute": "minecraft:generic.max_health",
                "operation": "MULTIPLY_BASE",
                "values": {
                    "common": 0.05,
                    "uncommon": 0.10,
                    "rare": 0.15,
                    "epic": 0.20,
                    "mythic": 0.25,
                    "ancient": 0.30
                }
            },
            {
                // BONUS 4: Cascos (Daño) - Mantenemos original
                "type": "apotheosis:attribute",
                "gem_class": {
                    "key": "helmet",
                    "types": ["helmet"]
                },
                "attribute": "minecraft:generic.attack_damage",
                "operation": "MULTIPLY_TOTAL",
                "values": {
                    "common": 0.05,
                    "uncommon": 0.10,
                    "rare": 0.125,
                    "epic": 0.15,
                    "mythic": 0.175,
                    "ancient": 0.2
                }
            }
        ]
    })
})