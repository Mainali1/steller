ServerEvents.recipes(event => {
    // Philosophers' Stone
    event.shaped('projecte:philosophers_stone', [
        'DND',
        'NWN',
        'DND'
    ], {
        D: 'minecraft:diamond',
        N: 'minecraft:netherite_ingot',
        W: 'cataclysm:witherite_block'
    });

    // Dark Matter
    event.shaped('projecte:dark_matter', [
        'AAA',
        'AUU',
        'AAA'
    ], {
        A: 'projecte:aeternalis_fuel',
        U: 'biggerreactors:uranium_block'
    });

    // Klein Star Ein
    event.shaped('projecte:klein_star_ein', [
        'MMM',
        'MAM',
        'MMM'
    ], {
        M: 'projecte:mobius_fuel',
        A: 'cataclysm:ancient_metal_ingot'
    });

    // Alchemical Chest
    event.shaped('projecte:alchemical_chest', [
        'LMH',
        'SIS',
        'ICI'
    ], {
        L: 'projecte:low_covalence_dust',
        M: 'projecte:medium_covalence_dust',
        H: 'projecte:high_covalence_dust',
        S: '#createbigcannons:stone',
        I: 'minecraft:iron_ingot',
        C: '#forge:chests/wooden'
    });

    // Transmutation Tablet
    event.shaped('projecte:transmutation_tablet', [
        'IDI',
        'DMD',
        'IDI'
    ], {
        I: 'cataclysm:ignitium_block',
        D: 'projecte:dark_matter_block',
        M: 'projecte:transmutation_table'
    });

    // Shapeless Recipes
    event.shapeless('salt:salt', [
        'meadow:alpine_salt'
    ]);

    event.shapeless('salt:salt', [
        'refurbished_furniture:sea_salt'
    ]);
});
