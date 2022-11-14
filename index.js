
// DataTypes 
// primitive datatypes 
// numbers ,String, boolean , undefined, null

// non-primitive dataTypes 
// function , array ,object 

let h = null;

// how to create variable 
let k = "khaalid";
let l = 'wanaagsan';
// String concatination 
// console.log(k+ " waa arday " +l);

// non_primitive DataTypes 
// Array 

//index, size or length, array methods
let firstAray = [12,34,56,'Khaaalid','cise','maryam',true,false];
let lastAray = ["cida",'cidooda','cida lee waaye'];
// console.log(firstAray.concat(lastAray));

let p = 30;
let c = 10;
// console.log(p - c);
// console.log(p * c);
// console.log(p / c);
// console.log(p + c);

// p++;
// p++;
// p--;
// console.log(p);

// --parseInt()---
// waa function u tirada string '30' u badala int 30 
// document.querySelector(".submit").addEventListener("click",function(){
//     let tests = document.querySelector("#number").value;
//     console.log(parseInt(tests)+30);
// })

// p += 5;
// p += 5;
// p += 5;
// p -= 5;
// p *= 2;
// console.log(p);


// functions 
function firstFunction(a){
    console.log(a);
}

let secondFunction = function(){
    console.log("hii people");
}

let thirdFunction = ()=>{

}
// secondFunction()
// firstFunction([12,34,5])

// object 
let newObject = {
    name:"ahmed",
    age:25,
    married:false,
    money:null,
    son:{
        name:"jamac",
        age:10
    },

    calc(a){
        return 20 + a;
    }
}
// console.log(newObject.son)

let num1 = '20';
let numm2 = 10;
let resul = num1 * numm2
console.log(resul);

let num7 = 10;
document.querySelector(".form").addEventListener("submit",function(e){
    e.preventDefault();
    let value = document.querySelector("#number").value;
    // console.log(parseInt(value)  +num7);
})

// conditional statement basics 
let x = 10 < 20;
if(x){
    // console.log("yees");
}

// equality 
// ==, === ,!=, !== 
let o = '10' === '10';
if(o){
    // console.log("yes");
}

// logical operators 
// and & or || not !
let married = false;
let job = true;
if(married || job){
    // console.log("hi");
}

// switch statement 
let dalab = "kaluun";

switch(dalab){
    case "baasto":
        console.log("waan heynaa");
        break;
    case "canjeero":
        console.log("waan haynaa");    
        break;
    case "bariis":
        console.log("waan haynaa");
        break
    default:
        // console.log("waan ka xunahay macmiil iminka ma helayno " + dalab);
}

// for loop 
for(let i = 0; i <= 20;i++){
    // console.log(i);
}
for(let i = 20; i > 5;i--){
    // console.log(i);
}

// loop throught array and loop throught object 
let arr = [12,3,4,'cabdi',true,"cise"];

let obj = {
    name:"cabdi",
    age:23,
    job:false
};
// console.log(obj); 
// loop for array 
for(let i = 0; i < arr.length;i++){
    // console.log(arr[i]);
}

// loop for object 
for(let j in obj){
    // console.log(obj[j]);
}

// while loop 
let v = 0;

while(v < 15){
    v++;
    // console.log(v);
}

// string methods tolowercase() ,touppercase() ,cahrat() ,idexof() ,includes
let kl = "hi my name is abdirahman";
// console.log(kl.charAt();
// console.log(kl.indexOf('a'));
// console.log(kl.includes('l'));
// console.log(kl.slice(1,7));

// array methods 
let jk = ['cabdi','cise','jamac'];
// length 
console.log(jk.length);
// concat 
let lk = ['fatima','marwo']
// console.log(jk.concat(lk));
// console.log(jk.reverse());



let person = ['mango','apple','cucumper','farah','cise']
// console.log(person[person.length -1]);

let names = ['ise','muse','farah','osman','yusuf','jamac']
let variable = 'hello';
let newArray = [];

for(let i = 0; i < names.length; i++){
//     console.log(i);
    // console.log(names[i]);
    let fullName = `${names[i]} ${variable}`;
    newArray.push(fullName);
}

// console.log(names);
// console.log(newArray);

let gas = [20,56,78,89]
let food = [34,67,90]

// function calculateTotal(x){
//     let total = 0;
//     for(let i = 0; i < x.length ; i++){
//         total += x[i]
//     }


//     if(total > 100){
//         console.log('you spending too much');
//         return total;
//     }
    
//     console.log('good u spending middle');
    
//     return total;
  
// }

// let gasTotal = calculateTotal(gas);
// let foodTotal = calculateTotal(food);
// let randomTotal = calculateTotal([45,87,90,80]);

// console.log({
//     Gas: gasTotal,
//     Food: foodTotal,
//     Random: randomTotal
// });

// let x = 40 > 20;
// x ? console.log(true) : console.log(false);
let mn = 10 < 20;
let ll = 20;
// mn ? console.log(ll+30 ):console.log("thats bad");
// global scope and local/function scope .........

// let li = 10;

// function funcName(num1 , num2){
//     let li = 20;
//     let result = num1 + num2 + li;

//     function add(j,m){
//         let li = 30;
//         let isugayn = j + m + li;
//         console.log(isugayn); 
//     }
//     add(3,5)

//     return result;
// }

// console.log(funcName(2,5));

//CALLBACK FUNCTION AND HIGHER ORDER FUNCTION
// function callback(){
//     console.log("hi im callback"); 
// }

// function higherOrder(cb){
//     cb();
//     console.log("hi people");
// }
// higherOrder(callback)
// function callback(name){
//     return 'i know your name is ' + name;
// }

// setTimeout(()=>{
//     console.log("hi this is for delay");
// },2000);


// function higherOrder(name,cb){
//     console.log(cb(name));
   
// }

// higherOrder('mohamed',callback)

// ---array methods ---- FOREACH, MAP, FILTER, REDUCE, FIND, INCLUDES, indexOf, SOME, FLAT, FILL,FROM, SORT,JION----
// waxaa lagaga maarmaa loopka si loo soo celceliyo array
// mid kasta oo ka mid ah iyaga waxuu aqbalaa callback function qaab argument ahaana 
// callback guna waxa uu u yeeraa ama soo celiyaa ama soo jiitaa item kasta oo ku jira gudaha array ga


// INCLUDES 

// let fruits = ['apple','panana','mango']
// let res = fruits.includes('canab')
// if(res){
//     console.log('this cond. is true');
// }
// else{
//     console.log('ooops!! the cond. is false');
// }

// JOIN wxay kala saadha arrayga elementiga ku jira;

// let items = ['panana','spoon','glass'];

// let countries = ['somalia','turkey','qadar'];

// let res = countries.join(' - ');
// console.log(res);

// // INDEXOF waxy ku shegysa indexka Element ku jira arrayga ;

// let mgac = [12,45,67,8,9];
// let res = mgac.indexOf(9);
// console.log(res);

// EVERY

// let items = [-1,1,2,3,4,5]
// let res = items.every(num)

// function num(item){
//     return item > 0
// }
// console.log(res);

// SOME 

let persons = [

    {
        name : 'ahmed',
        age : 20,
    },
    {
        name : 'farah',
        age : 30
    },
    {
        name : 'muse',
        age : 40,
    }

]

// let res = person.some(item =>{
//     return item.age > 20
// })
// console.log(res);

// FOREACH
// FOREACH it doesnot return new array

// persons.forEach(item =>{
//     console.log(item);
// })

// 
// persons.forEach(item =>{
//     // console.log(item.name.toUpperCase());
//    
// })
// items += "</ul>";

// document.body.innerHTML = items

// function cb(item){
//     console.log(item.position.toUpperCase());
// }


// MAP
// RETURNS NEW array
// it doesnt change orginal size

// persons.map(item =>{
//     console.log(item);
// })

// let items = '<ul>';
// persons.map((item) =>{
//     // console.log(item);
//     items += `<li>${item.name}</li>
//                 <li>${item.age}</li>`
// })
// items += "</ul>";

// document.body.innerHTML = items

// let map = persons.map(item =>{
//     // for(let i = 0; i < item.length; i++){
//     //     return item[i];
//     // }
//     return item;
// })
// console.log(map);

// let map = people.map(item =>{
//     return item.position
// })
// console.log(map);


// let map = persons.map((person)=>{
//     return {
//         firstName : person.name,
//         oldAge : person.age + 20,
//     }
   
// })

// console.log(map);

// let name = people.map((item)=>{
//     return `<h1>${item.position}</h1>`
// })

// document.body.innerHTML = name

// console.log(name);

// FIND 

// persons.find(item =>{
//     console.log(item);
// })
let abdi = [3,4,5];

// let find = persons.find(person =>{
//     return person.name == 'muse';
// })
// console.log(find);
// console.log(find.name);
// console.log(find.age);
// console.log(find.position);
// console.log(find.id);
// console.log(find.salary);

// FILTER 
// returns new array 
// waxuu kala shaandheeya xogta ku jirta arrayga iyadoo markaa aad ka eegi ka dho meelo badan sida nameka oo kle ama ageka oo kale iyo wixii la mid

// let filter = persons.filter(person =>{
//     return person.name !== "muse";
// })
// console.log(filter);


// console.log(filter[0].name);
// console.log(filter[0].age);
// console.log(filter[0].position);
// console.log(filter[0].id);

// let filter = people.filter(person =>{
//     return person.position === 'senior developer'
// })
// console.log(filter);


// FIND 
// waxay soo jiidata kaliya hal object ma soo wada saari kadho labo object hadiiba ay yimaadaan
// labo cndition oo isku mida waxy soo saareysa kaliya kan labad horeeya 


// let find = people.find(person=>{
//     return person.name == 'ahmed';
// })
// console.log(find);
// console.log(find.name);
// console.log(find.age);
// console.log(find.position);
// console.log(find.id);

// let names = ['ahmed','abdi','farah']
// console.log(names.find(person =>{
//     return person == 'cise'
// }));

// REDUCE
// REDUCE SINGLE VALUE - could be number,array,object or other else 
// 1 parameter ('acc') waxuu isku darayaa ama total u yahay calculationka
// 2 parameter ('curr') waxuu soo celiyaa value ga arrayga ku jira


// let reduce = people.reduce((total,currItem) =>{
//     console.log(`total : ${total}`);
//     console.log(`salary : ${currItem.salary}`);
//     total += currItem.salary
//     return toal
// },0)

// console.log(reduce);

// MATH OBJECT 
// let colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];


// function rand(){
//     let k = Math.floor(Math.random() * colors.length);
//     return k;
// }

// let hex = '#';
// for(let i = 0; i < 6;i++){
//     let randRepre = rand();
//     hex += colors[randRepre]
// }

// document.body.style.backgroundColor = hex;
// console.log(colors[rand()]);

// document.querySelector("h1").innerHTML = hex;

// let test = Math.floor(Math.random() * 10);
// console.log(test);
// let number = 4.789000;
// let result = Math.floor(number)
// floor waxy tirada u round garaysa hoos

// let number = 4.789000;
// let result = Math.ceil(number)
// ceil waxay tirada u round gareaysa kor

// let number = 25;
// let result = Math.sqrt(number)
// // sqrt waa square root 

// let result = Math.min(7,8,23,67)
// min waxay ku tustaa tirada ugu yar ee mesha taal

// let result = Math.max(7,8,23,67)
// min waxay ku tustaa tirada ugu wayn ee mesha taal
// let result = Math.PI
// console.log(result);

// let number = Math.ceil (Math.random() * 10) 
// console.log(number);

let months = [
    'january',
    'febuary',
    'march',
    'april',
    'may',
    'june',
    'jully',
    'august',
    'sep',
    'october',
    'november',
    'decemper',
];

let days = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thru',
    'fri',
    'sat',
]

// let date = new Date();
// console.log(date.getMonth());

// let newUl = document.createElement('ul');
// newUl.classList.add("newUl")
// let newElemnts =  `<li>${date.getDay()}</li><li>${months[date.getMonth()]}</li><li>${date.getDate()}</li><li>${date.getFullYear()}</li><li>${date.getHours()}</li><li>${date.getMinutes()}</li><li>${date.getSeconds()}</li>`
// newUl.innerHTML = newElemnts;


// document.body.appendChild(newUl);
// document.querySelector("h1").append(newUl);
// let date = new Date()

// let month = date.getMonth()
// console.log(months[month])

// let day = date.getDay()
// console.log(days[day]);

// console.log(date.getDate());

// console.log(date.getFullYear());

// let sentences = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`
// console.log( sentences);
// document.body.innerHTML = sentences

// DOM document object model 
// waxay isku xirta content gaaga sida html/js oo kle iyo browserka

// childNodes waxay ku tusaysa elementiga PARENTga ah childka ku jira iyo whitespaceka

// let x = document.querySelector('#cat')
// let y = x.childNodes
// console.log(y);

// // CHILDREN waxay ku tusaysa elementiga PARENTga ah childka ku jira kaliya
// let x = document.querySelector('#cat')
// let y = x.children
// console.log(y);


// // PARENT ELEMENT 

// let waxkale = document.querySelector('li')
// console.log(waxkale.parentElement);

// NEXTSIBLING AND PREV SIBLING , waxaa loo isticmaala inaad select gareyso element  elementiga ku xiga iyo element elementiga ka sokeeyea 


// let next = document.querySelector('button')
// console.log(next.nextSibling.nextSibling);
// let prev = document.querySelector('#cat')

// nextelementsibling and prevelementsibling

// let next = document.querySelector('button')
// console.log(next.nextElementSibling);

// let next = document.querySelector('#cat')
// console.log(next.previousElementSibling);

// nodevalue and textcontent labada method waxaa loo isticmaala in lagu ogaado elemniga textga ku jira

// // nodeValue
// let x = document.querySelector('.meow')
// let y = x.firstChild.nodeValue
// console.log(y);

// textcontent
// let x = document.querySelector('.meow')
// console.log(x.textContent);

// getattribute and setattribute;

// let wow = document.querySelector("h5");
// wow.setAttribute("src","hii")
// console.log(wow);

// let x = document.querySelector('#cat')
// let idvalue = x.getAttribute('id')
// console.log(idvalue);

// let y = document.querySelector('.meow')
// let classvalue = y.getAttribute('class')
// console.log(classvalue);

// let link = document.querySelector('#link')
// let linkvalue = link.getAttribute('href')
// console.log(linkvalue);

// classname and classlist

// classname waxay kuu shaygaysa classka elementga iyo inaad badasho classka ama aad mid cusub ku dadho

// let x = document.querySelector('#woow')
// let y = x.className
// // console.log(y);

// // waxaad elementiga ku dari kadhaa class adigoo isticmaalaya className 
// let n = document.querySelector('#cat')
// n.className = 'colors text'

// classList 
// waxd elemntigaga ku darsan kadhaa classka aad rabto adigo isticmalaya classList 

// let x = document.querySelector('#cat')
// x.classList.add('colors', 'text')
// x.classList.remove('text')
// // (contains) waxaa loo isticmala inay ku sheegto inta class ee kugu jira elelmentiga
// let result = x.classList.contains('colors')
// if(result){
//     console.log('correct');
// }
// else{
//     console.log('wrong');
// }

// createElement and createTextNode and appendchild

// let result = document.querySelector('#cat')
// let h = document.querySelector('#cat')

// let x = document.createElement('h3')
// let y = document.createTextNode('this is element')
// x.appendChild(y)
// document.body.replaceChild(x,h)

// let x = document.createElement('h5')
// let text = document.createTextNode ('textnode')
// x.appendChild(text)

// prepend and innertext waxay la mid yihiin (createtextnode iyo appenchild)

// let x = document.createElement('div')
// x.innerText = 'goood im like  textnode'
// // console.log(x);
// document.querySelector('h5').prepend(x)

// // insertbefore

// document.body.insertBefore(x,result)

// replaceChild(new,old) waa inaad element aad elelment kale ku badalato

// let result = document.querySelector('#cat')

// let x = document.createElement('h3')
// let y = document.createTextNode('replace child')
// x.appendChild(y)

// document.body.replaceChild(x,result)

// ***************************************************
//program that tells your ageindays

// function test(){
//     const brithyear = prompt('sanadkee dhalatay')
//     const ageInDays = (2021 - brithyear) * 365
//     const x = document.createElement('h2')
//     const text = document.createTextNode ('your are ' + ageInDays + ' days old')
//     x.appendChild(text)
//     x.setAttribute('id','ageInDays')
//     document.querySelector('#cat').appendChild(x)
// }

// function reset(){
//     document.querySelector('#ageInDays').remove();
// }
// // ******************************************************

// remove and removechild waxaa loo isticmaal in lagu delete greyo elements ka

// let x = document.querySelector('h5')
// x.remove()

// let x = document.querySelector('#link')
// let y = x.querySelector('h5')
// x.removeChild(y)

// textcontent and innerhtml

// let x = document.querySelector('#link')
// console.log(x.textContent);

// let x = document.querySelector('#link')
// console.log(x.innerHTML);

// let ul = document.createElement('ul')
// ul.textContent = `<li>list items</li> <li>list items</li> <li>list items</li>`
// document.body.appendChild(ul)

// let x = document.querySelector('h5')

// function changeColor(){
//     x.classList.add('colors','text')
    
// }

// function reset(){
//     x.classList.remove('colors','text')
   
// }

// keypres keydown keyUP

// event 
// event.currentTarget 
// eventtype 
// preventdefault waxy diida click garaynta
// this.  wa keyword kuu shegaya elemniga aad marka ku jidh ama functionka aad marka isticmalyso ama object
// kale arrow function laguma isticmali karo

// let x = document.querySelector('h5')

// x.addEventListener('click',function(event){
// //    event.currentTarget.classList.add('colors','text')
// //    console.log(event.type);
// console.log(event.currentTarget);
// })

// x.addEventListener('click',() => {
//     this.classList.add('colors','text')
// })

// let m = document.querySelector('.book')

// m.addEventListener('click',function(e){
//     e.preventDefault()
// })

// current.target and target 

// let x = document.querySelector('.container')
// let y = document.querySelector('.list')

// x.addEventListener('click',function(e){
//     console.log('current',e.currentTarget,{capture:true});
//     console.log('target',e.target,{capture:true});
// })

// y.addEventListener('click',function(e){
//     console.log('current',e.currentTarget,{capture:true});
//     console.log('target',e.target,{capture:true});
// })

// let x = document.querySelectorAll('#btn')

// let x = document.querySelectorAll('#btn')

// x.forEach(person =>{
//     person.addEventListener('click',e => {
//         // e.currentTarget.style.color = 'red'
//         console.log(e.currentTarget);
//         e.target.style.color = 'green'
//         console.log(e.target);
//     })
// })

// let x = document.querySelectorAll('#btn')

// x.forEach(person => {
//     person.addEventListener('click', function(e){
//         e.currentTarget.style.backgroundColor = 'red'
//     })
// })

// event bubbling inaad mar qura target iyo e.target meel ku wada qodho
// let x = document.querySelector('.container')
// let y = document.querySelector('.list')

// function showPop(e){
//     console.log('current',e.currentTarget);
//     console.log('target',e.target);
//     if(e.target.classList.contains('li')){
//         console.log('it has li class');
//     }
//     else{
//         e.target.classList.add('li')
//     } 
// }



// // stopPropagation waxa ya kaa joojinysaa in uu dhaco falku
// function waxkale(e) {
//     e.stopPropagation()
// }

// x.addEventListener('click',waxkale,{capture:true})
// window.addEventListener('click',showPop,{capture:true})
// y.addEventListener('click',showPop,{capture:true})
// document.addEventListener('click',showPop,{capture:true})


// event capturing waxay kuu kala hormanysa elementiga iyadoo kasoo bilaabaysa window ilaa iy

// let x = document.querySelector('#ki')
// let container = document.querySelector('.container')
// let heading = document.querySelector('.text')


// x.addEventListener('click',function(){
//     let element = document.createElement('h1');
//     element.classList.add('text');
//     element.textContent = 'hellooooooooo';
//     container.appendChild(element)
// })

// heading.addEventListener('click',function(){
//     console.log('hello');
// })

// form submit 
// preventdefualt 
// how to get value

// form.addEventListener('submit',e =>{
//     e.preventDefault();
//     console.log(name.value);
//     console.log(password.value);
// })

// web storage  api 
// local storage and sessionstorage 
// setitme, getitem, removeitem, clear 

let items = ['chair','table','spoon']
localStorage.setItem('items',JSON.stringify(items))
console.log(JSON.parse(localStorage.getItem("items")));
// localStorage.setItem('items',items)
// console.log(localStorage.getItem('items'));

// let students = ['mohamed','farah','ise','jamac']

// localStorage.setItem('students',JSON.stringify(students))
// let get = localStorage.getItem('students')
// console.log(get);
// localStorage.setItem('name','hanuniye')
// localStorage.setItem('freind','cadde')
// localStorage.setItem('job','developer')
// localStorage.setItem('adress','street 123')

// localStorage.removeItem('job')
// localStorage.clear()

// JSON.stringify and JSON.parse 

// let friends = ['cise','farah','casho']

// localStorage.setItem('freinds',JSON.stringify(friends))

// console.log(JSON.parse(localStorage.getItem('freinds')));;

// localStorage.setItem('fruits',JSON.stringify(['banana','mango','apple']))
// localStorage.clear()

// let fruits;

// if(localStorage.getItem('fruits')){
//     // fruits = JSON.parse(localStorage.getItem('fruits'))
//     // console.log(fruits);
// }
// else{
//     fruits = []
// }
// console.log(fruits);
// fruits.push('apple')
// fruits.push('orange')
// localStorage.setItem('fruits',JSON.stringify(fruits))

// array mehtods 

// let k = ['abdi','muse','farah','jama','laxle']
// console.log(k.length);
// console.log(k[k.length -1]);

// let x = ['abdi','muse','farah','jama','laxle']

// let u = ['fatima','quen','sahra']

// let y = x.concat(u)
// console.log(y.reverse());

// alert confirm prompt 
// alert("hi")
// let yes = prompt("enter your age")
// console.log(yes);
// let noo = confirm("are u sure to delete this")
// console.log(noo);

// if(noo == true){
//     console.log("its deleted");
// }else{
//     console.log("the data is safe");
// }

// let x = confirm('are u sure ?') 
// console.log(x);

// let y = prompt('what is ur age ?')
// console.log(y);

// let hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
// let ki = document.querySelector('#ki')
// // let haye = nasiib()

// ki.addEventListener('click', function(e){
//     e.preventDefault()
//     let hexColor = '#';
//     for(let i = 0; i <= 5; i++){
//         hexColor += hex[nasiib()];
//     }
    
//     console.log(hexColor);

// })

// function nasiib(){
//     return Math.floor(Math.random() * hex.length)
// }
let ka = document.querySelectorAll("#ka");
ka.forEach(item =>{
    
})


let click = document.querySelectorAll('#ka')
let text = document.querySelector('.text')
let count = 0;

click.forEach(function(haye){
    haye.addEventListener('click',function(){
        e.preventDefault()
        if(haye.classList.contains('add')){
            count ++
        }
        else{
            count --
        }
        text.innerHTML = count
        if(count > 0){
            text.style.color = 'green'
        }
        else if(count === 0){
            text.style.color = 'black'
        }
        else{
            text.style.color = 'red'
        }
    })
    
})

// let hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
// let text = document.querySelector('.text');
// let ki = document.querySelector('#ki');

// ki.addEventListener('click', function(e){
//     e.preventDefault()
//     let hexColor = '#'
//     for(let i = 0; i < 6; i++){
//         hexColor += hex[getRandom()]
//     }
//     // console.log(hexColor);
//     document.body.style.backgroundColor = hexColor
//     text.innerHTML = hexColor

// })
// function getRandom(){
//     return Math.floor(Math.random() * hex.length)
// }

// let fruits = ['mango','apple','panana','tufax']

let data = {
    name : 'ahmed',
    age : 20,
    married : true
}

// for(let i in data){
//     console.log(i,data[i]);
// }

// let total = 0;

// object deconstraction 


// let object = {
//     age : 34,
//     firstName : 'muhamed'
// }
// let {age,firstName} = object;
// console.log(age,firstName);
// console.log(object.age,object.firstName);

// foreach

let shoppingList = [
    {name : 'ahmed', age : 12},
    {name : 'salax', age : 30},
    {name : 'abdi', age : 40},
]

let shoping = ['soap','perfume','cream','shampoo'];

// shoppingList.forEach((product) =>{
//     console.log(product + ' new')
// })

// let map = shoppingList.map(product =>{
//     return product
// })

// // console.log(map[0].name);
// // console.log(map[0].age);


// let filter = shoppingList.filter(product =>{
//     return product.age > 12
// })

// console.log(filter);

// classes and  inheretence 

// class user{
//     constructor(username,email,passw){
//         this.username = username,
//         this.email = email,
//         this.passw = passw
//     }

//     static good(){
//         console.log('this is good person');
//     }

//     regester(){
//         console.log(`${this.username} is regestered now`);
//     }
// }

// let farah = new user('farah','farah@gmial.com',12345)
// console.log(farah);
// farah.regester()

// user.good()

// class member extends user{
//     constructor(username,email,passw,admin){
//         super(username,email,passw);
//         this.admin = admin
//     }

//     method(){
//         console.log(`${this.email} we got your email`);
//     }
// }

// let ise = new member('ise','ise@gmail.com',12345,'admin');
// // console.log(ise);
// ise.method()

// function oow(title,author,year){
//     this.title = title,
//     this.author = author,
//     this.year = year,

//     this.getsumarry = function() {
//         return `${this.title} was written by ${this.author} in ${this.year }`
//     }
// }

// let book1 = new oow('book 1','jhon deo','2021')
// // console.log(book1);
// // let book2 = new 

// let book2 = new oow('book 1','jhon deo','2021')
// // console.log(book2);
// console.log(book2.getsumarry());

// class Rectangle {
//     constructor(width,height,color){
        
//         console.log('hi the class is excuted');
//         this.name = width,
//         this.age = height,
//         this.married = color

//     }

//     area(){
//         return `the area of this rectangle is  ${this.name * this.age}`
//     }
// }

// let text1 = new Rectangle(12,3,'blue');
// console.log(text1);
// console.log(text1.area());

// class User {
//     constructor(name,email,cridit){

//         this.magac = name,
//         this.email = email,
//         this.cridit = cridit

//     }

//     method(){
//         return `${this.magac} we get his name`
//     }
// }

// let ahmed = new User('ahmed','ahmed&gmail.com' ,20)

// class user2 extends User {
//     constructor(name,email,cridit, admin){
//         super(name,email,cridit)
//         this.admin = admin
//     }

//     method1(){
//         return `${this.admin} he is the admin`
//     }
// }

// let farah = new user2('farah','farah&gmail.com',40,'admin')
// console.log(farah);
// console.log(farah.method1());

// // STATIC METHODS 

// class wxkale {
//     constructor(width){
//         this.width = width
//         this.hiegh = width
//     }

//     static add(){
//         return this.width * this.hiegh
//     }
// }

// let cabir = new wxkale(12)

// console.log(wxkale.add());

//promises waa balan

// let promise = new Promise((resolve,reject)=>{
//     if(xl == true){
//         resolve("seecessfully !!!");
//     }
//     else{
//         reject("ooopss!! server down");
//     }
    
// })


// let cond = false;

// let promise = new Promise((resolve,reject)=>{
//     if(cond){
//         resolve("success");
//     }else{
//         reject("error")
//     }
    
// })

// promise.then(result =>{
//     alert(result)
// }).catch(result =>{
//     alert(result);
// })





    
        
    // let promise = new Promise((res,rej)=>{

    //     let xhr = new XMLHttpRequest();
    
    //     xhr.open("get","https://aws.random.cat/meow",true);
    //     xhr.onload = function(){
    //         if(xhr.status == 200){
    //            res(JSON.parse(xhr.responseText))
    //         }
    //         else{
    //             rej("waxbaa khaldamay");
    //         }
    //     }
    //     xhr.send()

        
    // })

    // promise.then(item =>{
    //     
    // }).catch(item => {
    //     console.log(item);
    // })

    // fetch("https://aws.random.cat/meow").then(item =>{
    //     return item.json();
    // }).then( items =>{
    //     let hej = `<img src="${items.file}" >`;
    //     document.querySelector("h1").innerHTML = hej
    // })
  

// // fetch  
// document.querySelector("#cat").addEventListener("click",function (){
//     fetch("https://aws.random.cat/meow").then(response =>{
//         return response.json().then(result =>{
//             let cats = result.file;
//             let image = document.createElement("img");
//             image.src = cats;
//             image.style.width = "200px";
//             image.style.height = "200px";
//             document.body.append(image)
//         })        
//     })
// })
    

// async await 
// async function asyncFunct(){
//     let si = await fetch("https://aws.random.cat/meow");
//     return si.json();
// }
// asyncFunct().then(item =>{
//                 let image = document.createElement("img");
//                 image.src = item.file;
//                 image.style.width = "200px";
//                 image.style.height = "200px";
//                 document.body.append(image)
// })
    
// if the function doesnot return any thing the it means return undefined
// function huh(){

// }
// console.log(huh());


// ---JAVASCRIPT NUGETTS----
// 1=MAP  
// waxay soo celisa ama loop gareys aarrayga 
// waxay so celisaa array cusub 
// waxba kama badasho arrayga hore xaga sizeka 
// waxuu isticmala valuega arraygi hore markuu array cusub samaynaayo 

const people = [
    {name:"cabdi",age:20,position:'web dev'},
    {name:"cies",age:30,position:'web des'},
    {name:"jamac",age:19,position:'web hosting'},
]


// let testMap = people.map((test) =>{
//     // console.log(test);
//     return test.age;
// })
// console.log(testMap);

// let testMap = people.map(test => `<h2>${test.name}</h2>`)
// let doc = document.querySelector("#woow");
// doc.innerHTML = testMap.join(' ')
// function mapFunction(person){
//     return person.age + 10;
// }
// let testMap = people.map(mapFunction)
// console.log(testMap);

// --GETING UNIQUE VALUES BY map() method and Set()--
let menu = [
    {
        name:"bariis",
        category:"qadada"
    },
    {
        name:"canjeelo",
        category:"quraac"
    },
    {
        name:"kaluun",
        category:"casho"
    },
    {
        name:"baasto",
        category:"qadada"
    },
    {
        name:"roodhi",
        category:"quraac"
    },
    {
        name:"subayad",
        category:"casho"
    },

]


// Set waa class loo isticmaalo in valuaga soo noq noqda hal laga dhigo
// let sets = ["casho","casho","qado","qado"];
// let setTest = new Set(sets)
// console.log(setTest);

// [...] calamadan waxy valuega u badasha array tusaale 
// let changeIntoArray = ["all",... setTest]
// console.log(changeIntoArray);

// let menus = new Set(menu.map(item =>{
//     return item.category
// }))

// use two ways 
let i = '';
// menus.forEach(test =>{
//     i+= `<button class='ow'>${test}</button>`
// })
// document.querySelector("#woow").innerHTML = i


// let menus = [... new Set(menu.map(item =>{
//     return `<button>${item.category}</button>`
// }))] 
// console.log(menus);
// document.querySelector("#woow").innerHTML = menus.join(" ")


// let menus = ["all",... new Set(menu.map(item =>{
//     return item.category
// }))] 


// document.querySelector("#woow").innerHTML =  menus.map(items =>{
//     return `<button>${items}</button>` ;
// }).join(" ")

// --DYNAMIC OBJECTS KEYS---
let agePerson = 'age';
let newobj = {
    ['name']:"abdi",
    
}

// // dot notation 
// console.log(newobj.name);
// console.log(newobj['name']);

// // square bracket notation 
// let objs = {
//     "names":["cise","jamac","salax"]
// }
// console.log(objs['names']);

// let testing = 'age';
// testing = 'ayooo'
// let test1 = 'male';
// let newObj = {
//     [testing]:22
// }
// newObj['ayooo'] = 40
// newObj['job'] = true;
// newObj[test1] = true
// console.log(newObj);

// let test2 = {
//     job:''
// }

// function objAsDynamic(key,value){
//     test2[key] = value
// }
// objAsDynamic('name','jamac')
// objAsDynamic('age',22)
// objAsDynamic('job','web des')
// objAsDynamic('name','salah')
// console.log(test2);

// --FILTER AND FIND---
let filters = people.filter(item =>{
    // first way 
    // if(item.position == 'web dev'){
    //     return item
    // }

    // second way 
    return item.position == ''
})
console.log(filters);

// let ara = ['salah','cilmi','geedi'];

// let test5 = ara.filter(test =>{
//     return test == 'cilmi'
// })
// console.log(test5);