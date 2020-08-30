const removeFromArray = function(array, ...itemsToRemove) {
    return array.filter(value => !itemsToRemove.includes(value))
}

module.exports = removeFromArray
