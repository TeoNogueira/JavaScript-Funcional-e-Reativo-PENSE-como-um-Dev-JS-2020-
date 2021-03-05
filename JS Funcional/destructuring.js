 /*const pessoa = {
    
Nome: "Teo...",
Lugar: "...cadeira",
GostaDe: "...brincar e estudar",
UF: "...Recife",
Bairro: "...Porto da Madeira",


links: {

    Github: 'https://github.com/TeoNogueira',
    Instagram: 'https://www.instagram.com/teo_nogueira/',

}

}



const {Nome, Lugar, links:{Instagram, Github}} = pessoa;



function x(pessoa) {

    console.log(pessoa)



}

  function y({ links:Instagram, Github, Nome, Lugar }) {
   
   console.log(Nome, Lugar, {links:Instagram, Github})

  }

  y(pessoa) */

/*
  const Clan = {
    
    Nome: "Shadow",
    Nation: "Ametis",
    Level: 50,
    Marechal: "Exilion",
    To_Marechal: 120,
    
    
    links: {
    
        Github: 'https://github.com/TeoNogueira',
        Instagram: 'https://www.instagram.com/teo_nogueira/',
    
    }
    
    }

    const {Nome, Nation, Level, Marechal, To_Marechal, links:{Github}} = Clan


function ApenasTresDados({Marechal, To_Marechal, links:{Github}}) {

console.log({Marechal, To_Marechal, links:{Github}})

}

ApenasTresDados(Clan)

*/


   const ClanTwo = {
    
    NomeClan: "GreenClans",
    Nation: "Ellora",
    Level: 50,
    Marechal: "GrandFather",
    To_Marechal: 200,
    
    
    OrderToMarechal: {
    
        TitleQuantity: 15,
        Wars: 320,
        Honor: 500,
        Aliance: false,
        
    }
    
    }

    const { NomeClan, Level, Marechal, Nation, OrderToMarechal:{TitleQuantity, Wars, Honor, Aliance}} = ClanTwo


    function algo({NomeClan, Marechal, Nation, OrderToMarechal:{Aliance, Wars}}) {


       console.log({NomeClan, Marechal, Nation, OrderToMarechal:{Aliance, Wars}})

    }

    algo(ClanTwo)