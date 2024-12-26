ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return;

    const gameRules = event.server.gameRules;
    
    gameRules.set("artifacts.ethernalSteak.enabled", false);
    gameRules.set("artifacts.everlastingBeef.enabled", false);
    gameRules.set("lavaSourceConversion", true);
    gameRules.set("artifacts.chorusTotem.cooldown", 10);
    gameRules.set("playersSleepingPercentage", 50);
    gameRules.set("announceAdvancements", false); 

    event.server.persistentData.gameRules = true;
});
