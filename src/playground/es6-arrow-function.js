// const square = function (x) {
//  return x*x ;   
// }

// const squareArrow = (x) =>{
//     return x*x;
// }

// console.log(squareArrow(9));
    

//    const getFirstName = (fullName) => fullName.split(' ')[0];

//     console.log(getFirstName('Aditya Gupta'));


const user = {
    name : 'Andrew',
    cities : ['Delhi','Mumbai','Kolkatta'],
    printPlacesLived(){ 
       const cityMessages = this.cities.map((city) =>{
            return this.name + ' has lived in '+ city
            })
            return cityMessages;
      }
   }
   
   console.log(user.printPlacesLived());

   const multipler = {
        numbers : [1,6,8,5],
        multiplyBy: 2 ,
        multiply(){
         return this.numbers.map((number) =>{
             return this.multiplyBy * number
         })
    }
   }
   

    console.log(multipler.multiply());






