//Variaveis usaveis

let Xp = 920500
let player = "APOLO"
let elos = ["Ferro", "Bronze","Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let eloDefined = null


//Estrutura de condições com definição de Nivel

        if (Xp >= 1001 && Xp < 2001) {
         eloDefined = elos[1]
        } 
        else if
        (Xp <= 1000){ 
            eloDefined = elos[0]
        }else if (Xp >= 2001 && Xp < 5001){
            eloDefined = elos[2]
        }else if (Xp >= 5001 && Xp < 7001){
            eloDefined = elos[3]
        }else if (Xp >= 7001 && Xp < 8001){
            eloDefined = elos[4]
        }else if (Xp >= 8001 && Xp < 9001){
            eloDefined = elos[5]
        }else if (Xp >= 9001 && Xp <10000){
            eloDefined = elos[6]
        }else if (Xp > 10000){
            eloDefined = elos[7]
        }else {
            eloDefined = "Usuario Sem Rank"
        }
        
    let player1 = "O Heroi de nome, "+ player+"," + " Tem a experiencia atual de: " + "( " + Xp +" )" + " E esta no nivel: " + eloDefined

    console.log(player1)

    //Atividade finalizada com saida esperada!
