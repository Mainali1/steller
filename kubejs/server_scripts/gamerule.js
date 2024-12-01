ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return
    event.server.gameRules.set("artifacts.ethernalSteak.enabled", false);
    event.server.gameRules.set("artifacts.everlastingBeef.enabled", false);
    event.server.gameRules.set("lavaSourceConversion", true);
    event.server.gameRules.set("artifacts.chorusTotem.cooldown", 10);
    event.server.gameRules.set("playersSleepingPercentage", 50);
    event.server.gameRules.set("lavaSourceConversion", true);
    event.server.gameRules.set("announceAdvancements", false); 
    event.server.persistentData.gameRules = true
  });