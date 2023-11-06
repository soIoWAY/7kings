

export const checker = (isGameStarted, fruits) => {
    if (isGameStarted) {
        if (fruits.every(fruit => fruit === '🍒')) {
            console.log('x30')
        } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
            console.log('x6')
        } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
            console.log('x0')
        } else if (fruits.every(fruit => fruit === '🍇')) {
            console.log('x20')
        } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
            console.log('x4')
        } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
            console.log('x0')
        } else if (fruits.every(fruit => fruit === '🍋')) {
            console.log('x20')
        } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
            console.log('x4')
        } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
            console.log('x0')
        } else if (fruits.every(fruit => fruit === '🍏')) {
            console.log('x10')
        } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
            console.log('x3')
        } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
            console.log('x0')
        } else if (fruits.every(fruit => fruit === '💰')) {
            console.log('x5')
        } else if (fruits.every(fruit => fruit !== '💣' && fruit !== '💰') && (fruits[0] === fruits[1] || fruits[1] === fruits[2])) {
            console.log('x2')
        }
    }
}