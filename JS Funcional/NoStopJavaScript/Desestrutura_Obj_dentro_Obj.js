// TRES MODOS DE TRAZER RESPOSTAS DE OBJETO:
// PRIMERO COM O USO DE OBJETO DENTRO DE OBJETO COM THIS E DOIS METODOS!
// SEGUNDO: OBJETO DENTRO DE OBJETO ATRAVÉS DE function
// TERCEIRO: OBJETO DENTRO DE OBJETO ATRAVÉS DE UMA CONST



const ojb = {

    ok: 'Ok',
    beleza: {

        leza: 'Okay',
        nesarang: 12

    },

    metododesestururar() {
      
        const { beleza } = this

        return `${beleza.leza} ${beleza.nesarang}`

    },

    execdesestrutura() {

        const executar = this.metododesestururar()

        console.log(executar)
    }
}


ojb.execdesestrutura()


const relaxa = {

    tomarAgua: 'Tome Bastante Agua',
    refrigerante: 'Evite beber refrigerante',
    diario: {
         deDia: 'Beba 1,5 litro durante o Dia',
         deTarde: 'de intervalos para agua',
         deNoite: 'Beba pelo menos 500 Ml'   
    },

metodoDesestruturar() {

    const { refrigerante, diario } = this

    return `${refrigerante}. ${diario.deTarde}, ${diario.deDia}`

},

executarMetodoDesestruturar() {

const executar = this.metodoDesestruturar()

console.log(executar)

}

}

relaxa.executarMetodoDesestruturar()

const objForFunc = {

    animes: {

        dragonBall: 'DBGT',
        shingekiNoKiyojin: 'shingekiNoKiyojin!',
        naruto: 'N.Shippuden'

    }
}


function myFunc({animes:{dragonBall}, animes:{naruto}}) {

    console.log({animes:{dragonBall}, animes:{naruto}})


}

myFunc(objForFunc)


const forConsts = {

    objetar: {

        um: 'um!',
        dois: 'tres!'
    }
}

const {objetar} = forConsts

console.log(objetar.um, objetar.dois)



// TRES MODOS DE TRAZER RESPOSTAS DE OBJETO:
// PRIMERO COM O USO DE OBJETO DENTRO DE OBJETO COM THIS E DOIS METODOS!
// SEGUNDO: OBJETO DENTRO DE OBJETO ATRAVÉS DE FUNCTION
// TERCEIRO: OBJETO DENTRO DE OBJETO ATRAVÉS DE UMA CONST


