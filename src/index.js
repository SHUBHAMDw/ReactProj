import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import { Promise, resolve } from 'q';
ReactDom.render(<App></App>,document.getElementById('root'));

class Animal 
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    speak()
    {
        console.log('I am '+this.name+' and I am '+this.age+' years old.')
    }
}

const an1=new Animal('Simba','3');
an1.speak();

class Lion extends Animal
{
    constructor(name,age, furcolor,speed)
    {
        super(name,age);
        this.furcolor=furcolor;
        this.speed=speed;
    }

    Roar()
    {
        console.log(this.name,this.age,this.furcolor,this.speed);
    }
}

const an2=new Lion('Sims','2','blue',2);
an2.Roar();

new Promise(
resolve=>{setTimeout(() => {console.log('Bears');
  resolve();}, 2000);

})
.then(()=>
{
    console.log("o mere bear");
    console.log("o mere mere bear");
}
)