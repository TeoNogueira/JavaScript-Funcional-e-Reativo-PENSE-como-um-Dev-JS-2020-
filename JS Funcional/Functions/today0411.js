


let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: false },
    {store: 'Giraffas', open: false },
    {store: 'Faaca', open: true },
    {store: 'Zen', open: true },
    {store: 'BurguerKing', open: true },

];


function restaurant()
 {

    const mapRestaurant = ifoodStores.reduce((acc, { open }) => {

        acc[open] = acc[open] + 1 || 1
        
        
        return acc
        
        }, {});
   
           console.log(mapRestaurant)


 }   



let rodizio = [

    {store: 'PizzaAtlant', open: false },
    {store: 'Macunaima', open: false },
    {store: 'Zens', open: false },
    {store: 'BurguerDoce', open: true },
    {store: 'China24Hrs', open: true },
    {store: 'Dominus', open: true },

];


function rod() {



let mapRodizio = rodizio.reduce((acc, { open }) => {


acc[open] = acc[open] + 1 || 1;


return acc

}, {})

console.log(mapRodizio)

}



function restaurantsAndRodies(a, b) {



    return a  + b
    
    
    }
    

const resultAll = restaurantsAndRodies(restaurant(), rod())


console.log(resultAll);













