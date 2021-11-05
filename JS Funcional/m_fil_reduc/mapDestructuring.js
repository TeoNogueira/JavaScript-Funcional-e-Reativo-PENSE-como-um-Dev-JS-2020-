let listVideos = [


    {Film: 'Robots', hours: 1.35},
    {Film: 'Prince of Persia', hours: 1.55},
    {Film: 'Narnia', hours: 1.75},
    {Film: 'Harry Potter', hours: 3.25},
    {Film: 'Hobbit', hours: 2.35},
    {Film: 'Lord of the Rings', hours: 4.35},
    {Film: 'X-men\'s', hours: 1.45},
    {Film: 'League of justice', hours: 1.35},
    {Film: 'Spider-man', hours: 1.21},
    {Film: 'Jurassic Park 3', hours: 1.05}



];


const resultList = listVideos.map(({ Film }) => Film); // retorno implicito com destructuring de objts
 



console.log(resultList);