


let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: true },
    {store: 'Giraffas', open: true },
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
    

const resultAllFoodsOpen = restaurantsAndRodies(restaurant(), rod())


console.log(resultAllFoodsOpen);



function consultRestaurantsList() {



    const consultListRestaurants = ifoodStores.filter(item => item.open === false).reduce((acc, {store}) => `${acc} - ${store}\n`, 'Restaurantes:\n\n')

    console.log(consultListRestaurants)


}



function consultRodiziosList() {


const consultListRodizios = rodizio.filter(item => item.open === false).reduce((acc, {store}) => `${acc} - ${store}\n`, 'Rodizios:\n\n')

console.log(consultListRodizios);

}


const resultAllRestaurants = restaurantsAndRodies(consultRestaurantsList(), consultRodiziosList());


console.log(resultAllRestaurants);










