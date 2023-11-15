

const winAnim = 'animate-blinkWinAnim'

const cherryX = 3
const grapeX = 2.75
const lemonX = 2.5
const appleX = 2.25
const bagX = 1.5


const extraWinCherry = (Math.round(cherryX * cherryX * cherryX)) // 27
const extraWinGrape = (Math.round(grapeX * grapeX * grapeX)) // 20
const extraWinLemon = (Math.round(lemonX * lemonX * lemonX)) // 15
const extraWinApple = (Math.round(appleX * appleX *appleX)) // 11

const bagWin = (Math.round(bagX * bagX * bagX)) // 8

const winCherryBag = (Math.round((cherryX * cherryX) * bagX)) // 12
const winGrapeBag = (Math.round((grapeX * grapeX) * bagX)) // 11
const winLemonBag = (Math.round((lemonX * lemonX) * bagX)) // 9
const winAppleBag = (Math.round((appleX * appleX) * bagX)) // 8

const winFruit = 2


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
        grapeBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍇' && fruits[1] === fruits[0] && fruits[2] === '💣') || (fruits[0] === '💣' && fruits[1] === '🍇' && fruits[2] === fruits[1])) {
        updateLoses()
    } else if (fruits.every(fruit => fruit === '🍋')) {
        lemonWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
    } else if ((fruits[0] === '🍋' && fruits[1] === fruits[0] && fruits[2] === '💰') || (fruits[0] === '💰' && fruits[1] === '🍋' && fruits[2] === fruits[1])) {
        lemonBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim)
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
    updateBalance(userBet * winFruit)
    updateWins()
    delayAnim(spansArray, winAnim, 1000)
}

function bagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinBagAnim'
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * bagWin)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}

function appleBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * winAppleBag)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}

function appleWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinLemonAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * extraWinApple)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}


function lemonBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * winLemonBag)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}

function grapeBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * winGrapeBag)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}



function cherryBagWinHandler(setDisabled, userBet, mixkitAward, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    setDisabled(true)
    mixkitAward()
    updateAnim(spansArray, winAnim)
    updateBalance(userBet * winCherryBag)
    updateWins()
    delayAnim(spansArray, winAnim, 1500)
}

function cherryWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinCherryAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * extraWinCherry)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}

function wineWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinGrapeAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * extraWinGrape)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}

function lemonWinHandler(setDisabled, payotAward, userBet, spansArray, updateAnim, updateBalance, updateWins, delayAnim) {
    const anim = 'animate-blinkWinLemonAnim'
    setDisabled(true)
    payotAward()
    updateAnim(spansArray, anim)
    updateBalance(userBet * extraWinLemon)
    updateWins()
    delayAnim(spansArray, anim, 2500)
}