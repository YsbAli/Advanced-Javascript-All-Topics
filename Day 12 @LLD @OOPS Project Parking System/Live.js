// 0. Vehicles
// 1. Parking Lot
// 2. Parking Floors
// 3. Parking Slots                              // The exact spot where the car will be park
// 4. Ticket





class Vehicles {
  constructor(type, registration, color) {
    this._type = type;                                                        //if you want to have a getter and setter method to the properties you put ( _ ) infront of this
    this._regNumber = registration;
    this._color = color;
  }

  get Type(){                                                //Type is a getter method here(Any name can give here,like adjfhakdjfkaf abra ka dabra),it's a prototype                         //we are creating this for simplier and  just saying return type
    return this._type; 
}

set Type(value){
   this._type = value;
}
// getType(){
//     return this.type;
// }

}

//Car, Bike, Truck

class Car extends Vehicles {
  constructor(registration, color) {
    super("Car", registration, color);                                  // type = "Car"  hardcodeing this value
  }

}

class Bike extends Car {
  constructor(registration, color) {
    super("Bike", registration, color);                                 // type = "Car"  hardcodeing this value
  }

}

class Truck extends Bike {
  constructor(registration, color) {
    super("Truck", registration, color);                                // type = "Car"  hardcodeing this value
  }
}


// getter and setter methods


// let C1 = new Car ('WB 64-3427', 'White')
// console.log('C1:', C1)                                       //C1: Car { _type: 'Car', _regNumber: 'WB 64-3427', _color: 'White' }                                  // Maximum call stack size exceeded

// console.log("C1", C1.Type)                                  //C1 Car              //we no need to like   - C1.Type()...that's how getter work



// Indivitual Parking Slot


class Slot{

    constructor(type,number){
       this.type = type; 
       this.number = number;
       this._isBooked = false;
    }
   
    get isBooked(){
        return this._isBooked;
    }
    set isBooked(value){
        this._isBooked = value
    }
   
}


//  Individual Floors


class ParkingFloor{
    constructor(floornumber,maxFloor){
      this.floornumber = floornumber;
      this._parkingspots =[]                  //we need to push parking slots  (video 51:00)     // slots is ready from Slot class , to getting those use for loop         //hybrite datastructure ....Array of Object 



    //   0 --Truck 
    // we categorized each car

     for(let i =0; i<maxFloor; i++){           // we are running for each floor i = floorNumber
     if(i === 0){
        //push Truck slots

        this._parkingspots.push(new Slot("Truck",i))

     }
     
     else if(i === 1){
        //push Bikes slots

        this._parkingspots.push(new Slot("Bike",i))

     }

     else{

      //push Cars slots  

          this._parkingspots.push(new Slot("Car",i))
     }
   }
 }
    get parkingspots(){
     return this._parkingspots;
    }
}

// let ParkingFloor1 = new ParkingFloor(0, 3)
// console.log('ParkingFloor1:', ParkingFloor1)                           // ParkingFloor1: ParkingFloor floorNumber: 0_parkingspots: [Slot { type: 'Truck', number: 0, _isBooked: false },Slot { type: 'Bike', number: 1, _isBooked: false },Slot { type: 'Car', number: 2, _isBooked: false }




//parkingFloor - slots


// ParkingLot - floors


// Parking Lot 

class ParkingLot{
    constructor(number){
        this._floors = []
        this._numberofFloors = number;        
        for(let i = 0; i<number; i++){
            this._floors[i] = new ParkingFloor(i, number)
        }
    }
    get numberofFloors(){
        return this._numberofFloors;
    }

   get floors(){
    return this._floors;
   }

   set floors(value){
    this._floors = value
   }


   parkVehicle(vehicle){
    
    let slot = this.findSlot(vehicle.type)       //car,bike,truck
   
    if(!slot){
        console.log("No Slots")
        return false;
    }

    this.bookingSlot(slot)        // slot                 // connectiong bookingSlot() funciton
    
    let ticket = new Ticket(slot.floornumber, slot.slot.number)
    console.log('ticket is issued:', ticket)
   
   }

  
findSlot(type){  
// floor  - 0 => 0,1,2
// floor  - 1 => 0,1,2
// floor  - 3 => 0,1,2
// so, require Nested Loop                                       // for finding slot
// console.log('type:', type)


//show all the slots

for(let i = 0; i<this._numberofFloors; i++){
    for(let slot of this.floors[i].parkingspots){
        // console.log('slot:', slot)
        if(slot.type === type && !slot.isBooked){
            // console.log('slot:', slot)
            return {floornumber : i, slot:slot}                     //object Destructuring
         }
       }   
     }
     return false;
   }

   bookingSlot(slot){
      slot.slot.isBooked = true;
      console.log('slot is booked:', slot)
      return true;
   }

 }



class Ticket{
    constructor(floorNumber,slotNumber){
        this.floorNumber = floorNumber;
        this.slotNumber = slotNumber;

        this.issedAt = new Date();
    }
}

// let p1 = new ParkingLot(3)
// console.log('p1:', p1)                                         //    p1: ParkingLot {_floors: [ParkingFloor { floorNumber: 0, _parkingspots: [Array] },ParkingFloor { floorNumber: 1, _parkingspots: [Array] },ParkingFloor { floorNumber: 2, _parkingspots: [Array] }],_numberofFloors: }
                        
// p1.findSlot("Car");
// p1.findSlot("Bike");


let p1 = new ParkingLot(3)

let b1 = new Bike("WB 64 2832" , 'Blue')

p1.parkVehicle(b1);




// to understand all of this you need to know class
// 1.class
// 2. Parking System

// and all of this 

// 0. Vehicles
// 1. Parking Lot
// 2. Parking Floors
// 3. Parking Slots                           
// 4. Ticket