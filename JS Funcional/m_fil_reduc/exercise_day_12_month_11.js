const best2019Movies = [
    { title: 'Parasita', directedBy: 'Bong Joon-ho' },
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Entre Facas e Segredos', directedBy: 'Chris Columbus' },
    { title: 'D-Grayman: lorenIpsum', directedBy: 'Dolor minus' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'Klaus', directedBy: 'Chris Columbus' },
    { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
    { title: 'Shazam', directedBy: 'David F. Sandberg' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Chris Columbus' }
  ];



  const best2019MoviesSecond = [
    { title: 'Vingadores', directedBy: 'Bongo' },
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Naruto', directedBy: 'Akira Toriyama' },
    { title: 'D-Grayman: lorenIpsum', directedBy: 'Dolor minus' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'Klaus', directedBy: 'Chris Columbus' },
    { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
    { title: 'Nemo', directedBy: 'Gloris Richard' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Chris Columbus' }
  ];


// Verificando quantos title existem total


// const verifyTitle = best2019Movies.reduce((acc, {title}) => {

// acc[title]= acc[title] + 1 || 1

// return acc

// }, {})


// console.log(verifyTitle)


// verificando tudo que seja diferente de title: 'Parasita' e directedBy: 'Chris Columbus' e trazendo a lista.


const changeTitle = best2019Movies.filter(item => {

  best2019Movies[2].title = 'Laravel' 
 best2019Movies[2].directedBy = 'PHP'

  return item.title && item.directedBy

});



  const simpleFastList = best2019Movies.filter(item => {
    
    return item.title !== 'Parasita' && item.directedBy !== 'Chris Columbus'})
    .reduce((acc, {title, directedBy}) => `${acc} - ${title} | ${directedBy}\n`, 'Filmes de Teo:\n\n');

 

  console.log(simpleFastList);