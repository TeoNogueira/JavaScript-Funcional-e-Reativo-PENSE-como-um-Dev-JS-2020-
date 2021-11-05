let listVideosEv = [


    'Robots', 
    'Matrix', 
    'Narnia', 
    'Harry Potter', 
    'Hobbit', 
    'War Planets', 
    'Nemo', 
    'League of justice', 
    'Captain-America', 
    'Jurassic park', 
    


];


let listVideosT = [


 'Roblox', 
 'Matrix', 
 'Narnia', 
 'Harry Potter', 
 'Hobbit', 
 'Lord of the Rings', 
 'X-men\'s', 
 'League of justice', 
 'Spider-man', 
 'Jurassic park', 

]


const listResult = listVideosEv.filter((filmesSemelhantes) => listVideosT.includes(filmesSemelhantes));


console.log(listResult)