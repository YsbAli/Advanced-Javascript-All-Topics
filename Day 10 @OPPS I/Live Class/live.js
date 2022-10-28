/*

// ES6 CLSSES  -- Crete Object  


class Car{
    constructor(n,a,c){
        this.name = n;
        this.age = a;
        this.city = c
    }
    showName(){

        console.log(this.name)           // Honda City
    }


}

let Name = new Car('Honda City' , 25, 'Cooch Behar')

console.log('Name:', Name)      // Name: Car { name: 'Honda City', age: 25, city: 'Cooch Behar' }
Name.showName()                  // Honda City




*/



// NOW We will Show 

// Object Oriented Programming  
    //  -- four Important rules/patters 
     
    // 1. Inheritance 
    // 2. Encapsulation 
    // 3. Abstraction
    // 4. Polymorphism




/*



    // 1.  Inheritance :-


 // Example 2 :-





class Car{
    constructor(n,b){
        this.name = n;
        this.brand = b;
        this.whiles = 4;
    }

}

class Sedan extends Car{
   
    constructor (n,b){
    
        //super()          // S1: Sedan { name: undefined, brand: undefined, whiles: 4 }

        super(n,b)
        this.sunroof = true;


    }

}

// let S1 = new Sedan()                       // S1: Sedan { name: undefined, brand: undefined, whiles: 4 }

// let S1 = new Sedan('Verna','Hyundai')        //S1: Sedan { name: 'Verna', brand: 'Hyundai', whiles: 4 }             // S1: Sedan { name: 'Verna', brand: 'Hyundai', whiles: 4, sunroof: true }
// console.log('S1:', S1)



class ElectricSedan extends Sedan{
    

    constructor (n,b,value,c){

        super(n,b)
        this.electric = true;
        //but if we want to give our own value in the ElectricSedan class then
        this.electric = value;
        this.color = c;

    }

}

let E1 = new ElectricSedan('Verna', 'Hyundai')
// console.log('E1:', E1)                                // E1: ElectricSedan {name: 'Verna',brand: 'Hyundai',whiles: 4,sunroof: true,electric: true}


// after giving our own value 

let E2 = new ElectricSedan('Verna','Hyundai',true, "Red")                
console.log('E2:', E2)                             //  E2: ElectricSedan {name: 'Verna',brand: 'Hyundai',whiles: 4,sunroof: true,electric: true,color: 'Red'}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Example 2 :-



class Friends{
    constructor(n,a,r){
        this.name = n;                 //"Ishan"
        this.age = a;                  //23,
        this.role =r                    //"Soft Developer"
    }
}


class Friend2 extends Friends{
    constructor(n,a,r){
        super(n,a,r)
        this.country = "India"
        

    }
}

class FriedsForever extends Friend2{
    constructor(n,a,r,s,c){
        super(n,a,r)
        this.state = s;
        this.city = c;
    }
}

let FriendShip = new FriedsForever('Yousub',23,"Softwere Engineer","West Bengal", 'Cooch Behar')
console.log('FriendShip:', FriendShip)                   // FriendShip: FriedsForever {name: 'Yousub',age: 23,role: 'Softwere Engineer',country: 'India',state: 'West Bengal',city: 'Cooch Behar'}






*/





// 2. Encapsulation    (video starts at 46:00)

   
/*
    -- hiding someting
    --capsule
    --there is someting inside it
    --hiding something

*/

// Two Methods :- 
     //  1.Getter Method
    //   2. Setter Method



/*

class Employee{
    constructor(n,r){
        this.name = n;
        this.rating = r;
    }
    
}

let E1 = new Employee ('Pablo',10)
   console.log(E1.name)                    // Pablo


   */









   /*

   
//    but sometimes we don't want to access directly in the object, we want to hide it 
// to do that :-


// Two Methods :- 
     //  1.Getter Method
    //   2. Setter Method




class Employee{
    constructor(){
        // this.name = n;
        // this.rating = r;

        // var name;                                 // console.log(E2.name)      // undefined         
        // var rating;                   
     
        // also works in let variable 

        let name;
        let rating;
        

    }

    GetName(){
        return this.name;          //for name
    }
    GetRating(){
        return this.rating;
    }

    SetName(value){                               // if we set the value, needs to know about the value
      
        this.name = value;
    }
    
    SetRating(r){
        this.rating = r;
    }
    
}

let E2 = new Employee()                            // why E2 ? because it's stored in E2. The child of this perticuler object is availabe in E2,. instance of  parent object

// E2.SetName('Ishan')                            // if we not write this then it will throw undefinite
E2.SetName('Ishan')
console.log(E2.GetName())                         // Ishan

E2.SetRating(10)
console.log(E2.GetRating())                      //10


*/













/*
//--------------------------------Now Set and Get Methods  with new function



class Employee{
    constructor(){        // if we dont declared here till it will work properly
        // let name;     
        // let rating;
        // // let city;
        // // let age;
    }

    GetName(){
        return this.name;                 
    }
    GetCity(){
        return this.city;
    }
    GetAge(){
        return this.age;
    }
    GetRating(){
        return this.rating;
    }

    SetName(value){                            
        this.name = value;
    }
    
    SetCity(c){
        this.city = c;
    }
    SetAge(a){
        this.age = a;
    }
    SetRating(r){
        this.rating = r;
    }
    
}

let E3 = new Employee() 

E3.SetName('Yousub Ali')
console.log( "Name is:" ,E3.GetName())            //Name is: Yousub Ali

E3.SetRating(100)
console.log("Rating is:" ,E3.GetRating())         // Rating is: 100

E3.SetCity('Cooch Behar')
console.log("City is:" ,E3.GetCity())          // City is: Cooch Behar

E3.SetAge(23)
console.log("Age is :", E3.GetAge())            //  Age is : 23






*/




/*



// 3.Abstraction            (video stars at 1:17:00)




class Employees {

  constructor(n,r){
    this.name = n;
    this.rating = r;
    this.skills = []
  }
  
  learnSkills(s){                       // its implementing ...adding items
    this.skills.push(s)
  }

}



/*
   // same thing with CF  is :-

   Employees.prototype.learnSkills = function (){
     this.skills.push(s)
     }
*/



// let E4 = new Employees("Yousub", 1000)
// console.log('E4:', E4)                          //E4: Employees { name: 'Yousub', rating: 1000, skills: [] }

// want to add skills 

// E4.learnSkills("Opps Concepts")
// console.log('E4:', E4)                            // E4: Employees { name: 'Yousub', rating: 1000, skills: [ 'Opps Concepts' ] }

 
// My custom methods are abstructed away in Prototype 




/*


// function inside the constructor function (Avoid this method)


class Employees2{

    constructor(n,r){
      this.name = n;
      this.rating = r;
      this.skills = [];

      this.learnSkills = (s)=>{                       // its implementing ...adding items
        this.skills.push(s)
      }

    } 
  
  }



let E5 = new Employees2('Ishan', 100)

E5.learnSkills("Softwere Developing")
console.log('E5:', E5)                       //E5: Employees2 {name: 'Ishan',rating: 100,skills: [ 'Softwere Developing' ],learnSkills: [Function (anonymous)]}


// its defining skills as an Arguments and give the property as  skills prototype
// this is not asbtraction 
// it's taking some arguments called Skills, so its not good architechture at all 
// So we avoid this 






*/






// 4. Polymorphism



class Vehicle{                                        // not writing constructor because there is no property to pass
run(){
    console.log("Vahicle is running")
}

}


class Car extends Vehicle {                        // Car is running
    run(){
        console.log("Car is running")
    }
}
 
class Car extends Vehicle { }                     //  if there is a child method they will access the child method, if there is no any child method then only it will access its parent method. That's Why here Output is:- Vahicle is running   


class Truck extends Car {
    run(){
        console.log("Truck is running")
    }
}



let V1 = new Vehicle()                   

let V2 = new Car()

let V3 = new Truck()

V1.run()                                   // Vahicle is running

V2.run()                                   // Car is running

V3.run()                                    // Truck is running



// Parent -- Vehicle

// child -- Car, Truck


// one method  but will be instentiated depending on who is invoking.
// it will not execute something else. that's all its. 



// its like protype chain



// important one is : inheritance and Encapsulation 