const best2019Movies = [
    { title: 'Parasita', directedBy: 'Bong Joon-ho' },
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Entre Facas e Segredos', directedBy: 'Sergio Pablos' },
    { title: 'D-Grayman: lorenIpsum', directedBy: 'Dolor minus' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'Klaus', directedBy: 'Sergio Pablos' },
    { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
    { title: 'Shazam', directedBy: 'David F. Sandberg' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Sergio Pablos' }
  ];



  const best2019MoviesSecond = [
    { title: 'Vingadores', directedBy: 'Bongo' },
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Naruto', directedBy: 'Akira Toriyama' },
    { title: 'D-Grayman: lorenIpsum', directedBy: 'Dolor minus' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'Klaus', directedBy: 'Sergio Pablos' },
    { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
    { title: 'Nemo', directedBy: 'Gloris Richard' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Sergio Pablos' }
  ];











// Verificando quantos title existem total


// const verifyTitle = best2019Movies.reduce((acc, {title}) => {

// acc[title]= acc[title] + 1 || 1

// return acc

// }, {})


// console.log(verifyTitle)




// verificando tudo que seja diferente de title: 'Parasita' e directedBy: 'Sergio Pablos' e trazendo a lista.


  const simpleFastList = best2019Movies.filter(item => item.title !== 'Parasita' && item.directedBy !== 'Sergio Pablos').reduce((acc, {title, directedBy}) => `${acc} - ${title} | ${directedBy}\n`, 'Filmes de Teo:\n\n');


  console.log(simpleFastList);