//Write a class to calculate the Uber price:

class Uber{
    constructor(carType,distance,rate){
       
        this.carType = carType;
        this.distance = distance;
        this.rate = rate;
    
    }
     
    getFinalAmount(){
        
        let price = this.distance*this.rate;
        let riderDetails = (`Cutomer travelled for ${this.distance}km by ${this.carType} and rate per km is RS.${this.rate}, If Ur total amount is more then RS.5000 U can get RS.100 OFFER.`)
       
        if(price > 5000){
            let finalPrice = price - 100;            
            console.log(`${riderDetails} Congrats U are getting RS.100 Disount.Total Amount to be paid is RS.${finalPrice}(original Amt = RS.${price}) .Thank U for choosing Uber.`);
        }else{
            console.log(`${riderDetails} Total Amount to be paid is RS.${price}.Thank U for choosing Uber.`);
        }
    }
}

let rider1 = new Uber("premium","50",25);
let rider2 = new Uber("XL","100",50);
let rider3 = new Uber("suv","150",100);
let rider4 = new Uber("Lux","50",150);

rider4.getFinalAmount();
