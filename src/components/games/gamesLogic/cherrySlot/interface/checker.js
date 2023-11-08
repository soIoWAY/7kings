

const winAnim = 'animate-blinkWinAnim'

export function checker(fruits, userBet, spansArray, setDisabled, updateBalance, updateWins, updateLoses, updateAnim, delayAnim, mixkitAward, payotAward, magicalWin) {
    if (fruits.every(fruit => fruit === '🍒')) {
        cherryWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
        cherryBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍒' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍒' && fruits[2] === fruits[1])) {
        updateLoses()
    } else if (fruits.every(fruit => fruit === '🍇')) {
        wineWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
        wineAndLemonBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
        updateLoses()
    } else if (fruits.every(fruit => fruit === '🍋')) {
        lemonWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
        wineAndLemonBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
        updateLoses()
    } else if (fruits.every(fruit => fruit === '🍏')) {
        appleWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
        appleBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍏' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍏' && fruits[2] === fruits[1])) {
        updateLoses()
    } else if (fruits.every(fruit => fruit === '💰')) {
        bagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if (fruits.every(fruit => fruit !== '💣' && fruit !== '💰') && (fruits[0] === fruits[1] || fruits[1] === fruits[2])) {
        fruitWinHandler(setDisabled, spansArray, updateAnim, userBet, magicalWin, updateBalance, updateWins, delayAnim)
    }  else {
        updateLoses()
    }
}

function fruitWinHandler(setDisabled, spansArray, updateAnim, userBet, magicalWin, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    magicalWin()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * 2)
    updateWins()
    delayAnim(spansArray, winAnim, 1000)
}

function bagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinBagAnim'
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * 5)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}

function appleBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * 3)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}

function appleWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinLemonAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * 10)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}


function wineAndLemonBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * 4)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}

function cherryBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * 6)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}

function cherryWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinCherryAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * 30) // констансти з кофами
    updateWins()
    delayAnim(spansArray, anim, 2500)
}

function wineWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinGrapeAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * 20)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}

function lemonWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinLemonAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * 20)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}