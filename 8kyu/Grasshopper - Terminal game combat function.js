function combat(health, damage) {
    return health >= damage ? health - damage : 0
}