ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return
    event.server.gameRules.set("artifacts.ethernalSteak.enabled", false)
    event.server.gameRules.set("artifacts.everlastingBeef.enabled", false)
    event.server.gameRules.set("lavaSourceConversion", true)  
    event.server.persistentData.gameRules = true
  })