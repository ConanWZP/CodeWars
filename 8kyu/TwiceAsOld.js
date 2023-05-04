function twiceAsOld(dadYearsOld, sonYearsOld) {

    if (sonYearsOld !== 0) {
        let simpleDivide = dadYearsOld / sonYearsOld
        if (simpleDivide > 2) {
            return dadYearsOld - 2 * sonYearsOld
        } else if (simpleDivide < 2) {
            return 2 * sonYearsOld - dadYearsOld
        } else if (simpleDivide === 2) {
            return 0
        }
    } else {
        return dadYearsOld
    }
}

twiceAsOld(29, 0)

console.log(twiceAsOld(29, 0))

