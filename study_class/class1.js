// 데이터 추상화
// 데이터화
// 회원(id, pw, name, )

let p = {
    name: 'iu',
    age: 30,
    move: function(){
        console.log("move")
    }
}

console.log(p.name)
p.move()

p.ki=60
console.log(p.ki)

p.attack=()=>{
    console.log("attack")
}

p.attack()

class Car{
    company= "kia";
    color;

    // 생성자는 클래스당 한개만만
    // constructor(){

    // }

    constructor(company, color){
        this.company = company;
        this.color = color;
    }

    move(){
        console.log("move");
    }
}

let c1 = new Car();
console.log(c1.company)

c1 = new Car("BMW", "RED");
console.log(c1.company)

c1.fuel = "gas"
console.log(c1.fuel)