const firstList = [
   
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Entre Facas e Segredos', directedBy: 'Chris Columbus' },
    { title: 'D-Grayman: lorenIpsum', directedBy: 'Dolor minus' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Chris Columbus' }
  ];


  const secondList = [
    { title: 'Vingadores', directedBy: 'Bongo' },
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Naruto', directedBy: 'Akira Toriyama' },
    { title: 'D-Grayman: lorenIpsum', directedBy: 'Dolor minus' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Chris Columbus' }
  ];

  
  
const supportList = secondList.reduce((acc, {title}) => `${acc} - ${title}\n`, 'Title List Name secondList:\n\n')


console.log(supportList)


    // COMPARAÇÃO SOMENTE NO ARRAY

    
  const listResult = firstList.filter((item) => {
      
        const modify = () => {
         
        const implicite = firstList[2].title = 'Okay'
      
        return implicite
        

        };

        modify()
   
        return item
      
})

// console.log(listResult)