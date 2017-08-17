/**
 * Created by ronaldo.rampelotti on 08/08/2017.
 */
export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}