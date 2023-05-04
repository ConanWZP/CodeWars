function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
}

DNAtoRNA('GCAT')

console.log(DNAtoRNA('GCAT'))