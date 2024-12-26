BlockEvents.rightClicked('campfire', event => {
    if (event.hand != 'main_hand' || !event.item.empty) return
    let { player, level } = event

    // Basically just create an invisible entity and let player ride on it
    if (player.vehicle == null) {
        let display = level.createEntity('minecraft:item_display')
        display.setPos(player.x, player.y, player.z)
        player.startRiding(display)
        display.spawn()
    }
})

EntityEvents.spawned('minecraft:item_display', event => {
    // We delete every item display entity on the next load
    // There's a minor problem which the player will not be able
    // to stay sitting if there's a world load/unload due to some
    // ordering problem
    if (event.entity.passengers.isEmpty()) {
        event.cancel()
    }
})