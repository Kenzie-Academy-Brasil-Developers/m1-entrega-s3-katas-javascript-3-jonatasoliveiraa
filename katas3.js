const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (valor){

    console.log(valor)
}

function kata1() {
    
    let resultado = ""
    for(let i = 1; i <= 25; i++){
        resultado += ` ${(i)},`
    }
 
    showResults(resultado)
    return resultado

}kata1()

function kata2() {
    
    let resultado = ""
    for(let i = 25; i > 0; i--){
        resultado += ` ${(i)},`
    }

    showResults(resultado)
    return resultado

}kata2()

function kata3() {
    
    let resultado = ""
    for(let i = -1; i >= -25; i--){
        resultado += ` ${(i)},`
    }

    showResults(resultado)
    return resultado

}kata3()

function kata4() {
    
    let resultado = ""
    for(let i = -25; i < 0; i++){
        resultado += ` ${(i)},`
    }

    showResults(resultado)
    return resultado

}kata4()

function kata5() {
    
    let resultado = ""
    for(let i = 25; i >= -25; i--){
        if(i % 2 == 1 || i % 2 == -1){
            resultado += ` ${(i)},`
        }
    }

    showResults(resultado)
    return resultado

}kata5()

function kata6() {
    
    let resultado = ""
    for(let i = 3; i < 100; i++){
        if(i % 3 == 0){
            resultado += ` ${(i)},`
        }
    }

    showResults(resultado)
    return resultado

}kata6()

function kata7() {

    let resultado = ""
    for(let i = 7; i < 100; i++){
        if(i % 7 == 0){
            resultado += ` ${(i)},`
        }
    }

    showResults(resultado)
    return resultado

}kata7()

function kata8() {

    let resultado = ""
    for(let i = 100; i > 0; i--){
        if(i % 3 == 0 || i % 7 == 0){
            resultado += ` ${(i)},`
        }
    }

    showResults(resultado)
    return resultado

}kata8()

function kata9() {

    let resultado = ""
    for(let i = 5; i < 100; i += 5){
        if(i % 2 == 1){
            resultado += ` ${(i)},`
        }
    } 
    showResults(resultado)
    return resultado

}kata9()

function kata10() {

    let resultado = ""
    for(let i = 0; i < sampleArray.length; i++){
        resultado += ` ${sampleArray[i]},`
    }

    showResults(resultado)
    return resultado

}kata10()
function kata11() {

    let resultado = ""
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 == 0){
            resultado += ` ${sampleArray[i]},`
        }
    }

    showResults(resultado)
    return resultado

}kata11()

function kata12() {

    let resultado = ""
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 == 1){
            resultado += ` ${sampleArray[i]},`
        }
    }

    showResults(resultado)
    return resultado

}kata12()

function kata13() {

    let resultado = ""
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 == 0){
            resultado += ` ${sampleArray[i]},`
        }
    }

    showResults(resultado)
    return resultado

}kata13()

function kata14() {

    let resultado = ""
    for(let i = 0; i < sampleArray.length; i ++){
        resultado += ` ${sampleArray[i] ** 2},`
    }

    showResults(resultado)
    return resultado

}kata14()

function kata15() {

    let resultado = 0
    for(let i = 0; i <= 20; i++){
        resultado += (i)
    }

    showResults(resultado)
    return resultado

}kata15()

function kata16() {

    let resultado = 0
    for(let i = 0; i < sampleArray.length; i++){
        resultado += sampleArray[i]
    }

    showResults(resultado)
    return resultado

}kata16()

function kata17() {

    let resultado = 940
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < resultado){
            resultado = sampleArray[i]
        }
    }

    showResults(resultado)
    return resultado

}kata17()

function kata18() {
    
    let resultado = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > resultado){
            resultado = sampleArray[i]
        }
    }
  
    showResults(resultado)
    return resultado

}kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
