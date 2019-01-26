    //Styling your console.log
    console.log('%c My Friends' , 'color:orange; font-weight:bold;');
   
   //Logging an array of objects on your browser console
    const foo = {name : "Tom" , age : 34 , code : "PHP"};
   const bar = {name : "Dick" , age : 45 , code : "Java"};
   const barz = {name : "Harry" , age: 46 , code : "Python"};

console.table([foo , bar , barz]);


//console.trace();
function deleteFromDatabase() {console.trace("Deleted from database");
  }
  deleteFromDatabase();
  deleteFromDatabase();


  //Object destructuring in JavaScript
  function feed ({name , meal , diet}) {

    return `Feed animal ${name} ${meal} kilos of ${diet}`
  }
const animal= {name : "Goat" , meal : 20 ,  diet : "Fish"};

console.log(feed(animal));

//Template strings in JavaScript
  const horse = {name : "Topher" , size : "Large" , skills : ['jousting' , 'racing'] , age : 7};

  const {name , size , skills , age} = horse;

  const bio = `${name} is a ${age} years old ${size} horse, skilled in ${skills.join(' & ')}`;
  console.log(bio);

  //Spread Syntax

  const pickachu = {
      name : "Pickachu"
  }

  const stats = {
      hp : 40 , attack : 60 ,defense : 45
  };

  const level10 = Object.assign(pickachu , stats);
  const level11 = Object.assign(pickachu , {hp : 45});

  const lvl10 = {...pickachu , ...stats};
  const lvl11 = {...pickachu , hp : 45};

  // Spread syntax on an array 
  
  let pokemon = ["Arbok" , "Raichu" , "Sandshrew"];

  pokemon = [...pokemon , 'Bulbasaur' , 'Metapod' , 'Weedle'];

  //pokemon = ['Bulbasaur' , 'Metapod' , 'Weedle' , ...pokemon];
  //pokemon = ['Bulbasaur' , 'Metapod' , ...pokemon , 'Weedle'];

  
  //Loops 

  const orders = [500 , 30 , 99 , 15 , 223];


  const total = orders.reduce((accumulatedValues , currentValue) => accumulatedValues + currentValue);
  const highValues = orders.filter((value) => value > 100);
  const withTax = orders.map(v => v * 1.1);

  //Async await

  const random = () => {
      return Promise.resolve(Math.random());
  }

  const sumRandomAsyncNumbers = async() => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result: ${first + second + third}`);
  }


  sumRandomAsyncNumbers();

