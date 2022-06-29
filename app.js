//https://github.com/jwill9999/JavaScript-Array-Interview-Practice

// Q1. Create an Array object.
var fruits = [];
fruits.push('apple');
console.log(fruits);

var cars = ['tesla', 'hyundai'];
console.log(cars);

var family = [];
family[0] = 'mom';
console.log(family);

// Q2. Take this array var array = [1,2,3,4,5] and copy it using the slice method and the for loop method
var array = [1,2,3,4,5,6];
var result = array.slice();  // to copy an array to new array
console.log(array);  // [1,2,3,4,5,6]
console.log(result); // [1,2,3,4,5,6]

var array = [1,2,3,4,5,6];
var result = [];
for (i = 0; i < array.length; i++){
    result.push(array[i]);
    //result[i] = array[i];
}
console.log(result)

// Q3. Empty this array var array = [1,2,3,4,5]
var array = [1, 2, 3, 4, 5];
array = [];
console.log(array);

var array = [1, 2, 3, 4, 5];
array.length = 0;
console.log(array);

var array = [1, 2, 3, 4, 5, 6, 7];
function emptyArray (array){
    while(array.length){
        array.pop();
    }
}

emptyArray(array);
console.log(array);

// Q4. What type is an Array set to?
var array = [1, 2, 3];
console.log(typeof(array)); //answer: object

// Q5. How can you check if something is an Array?
var array = [1, 2, 3];
var checkArray = Array.isArray(array)
console.log(checkArray)

// Q6. Add an item to the end of an array.
var array = [1, 2, 3, 4, 5]
//array[array.length] = 6
array.push(6)
console.log(array)

// Q7. Find the index position of d in this array var arr= ['a','b','c','d'];
var array= ['a','b','c','d'];
console.log(array.indexOf('d'));

// Q8. What will be returned if you look for the index of something that does not exist?
var array= ['a','b','c','d'];
console.log(array.indexOf('3')); // -1

// Q9. Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];
var items = ['milk', 'bread', 'sugar'];

function checkItem(item){

    if (items.indexOf(item) === -1){
        console.log('item does not exist');
    } else {
        console.log('item exists');
    }
}

checkItem('milk');
checkItem('cup');

// Q10. Now you've found milk exists add some code to find the index of milk and remove that item.
console.log('Q10')
var milkIndex = items.indexOf('milk')
console.log(milkIndex);
items.splice(milkIndex, 1);
console.log(items);

// Q11. List the ways to loop over an array.
var array = [1, 2, 3, 4, 5];

let text = "";
const freshFruits = ["apple", "orange", "cherry"];
freshFruits.forEach(myFunction);

// document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
  console.log(text);
}

// Q12. Write some code to put these numbers in order var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
// https://hianna.tistory.com/409
// 이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우,
// 이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
// 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
// 만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.

var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];

numbers.sort(function(a, b){
    // 오름차순
    return a-b; 
})
console.log(numbers);

numbers.sort(function(a, b){
    // 내림차순
    return b-a; 
})
console.log(numbers);


// Q13. Write some code to place this list in alphabetical order var p = ['a','z','e','y'];
var letters = ['a','z','e','y'];
letters.sort()
console.log(letters)
letters.reverse() // 역순
console.log(letters)


// Q14. What is the length of these arrays
// A. var arr1 = [,,,]; 4?
// B. var arr2 = new Array(3)
// C. var arr3 = [1,2,3,4,5]
// D. var array = [ [1,2,3], [4,5,6]  ];
// E. var array[0].length = [ [1,2,3], [4,5,6]  ];

var array = [ , , , ]; 
console.log(array); 
console.log(array.length); //3

array = new Array(3)
console.log(array);
console.log(array.length); // empty 3


// Q15. What are the results of these splice and slice methods
// https://www.daleseo.com/js-array-slice-splice/
// slice(): 잘라내서 없앰. 첫번째 인자로 넘어온 시작 인덱스가 가리키는 값은 포함하지만, 두번째 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않음
// splice(): 잘라내서 없애는 것이 아니라, 떼어내서 살리는 것이다!
var a = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a.slice(1, 3);
var spliced = names.splice(1,3);
console.log(spliced)


// Q16. What are the console logs of these shift and unshift methods
// unshift: 맨앞추가
// shift: 맨앞삭제
var a = [ ] ; 

a.unshift(1);
console.log(a);
a.unshift(22);
console.log(a);
a.shift(); // ['1']
console.log(a);
a.unshift(3,[4,5]); 
console.log(a); // [3, [4,5], 1]
a.shift(); 
console.log(a); // [[4,5], 1]
a.shift();
console.log(a);
a.shift();
console.log(a);


// Q17. Using reduce add all these numbers var numbers = [1, 2, 3, 4, 5, 6];
// 배열 요소들마다 연산을 함
var numbers = [1, 2, 3, 4, 5, 6];
var total = numbers.reduce((a, b) => {return a+b}) // 함수 인자 => 리턴
// var total = numbers.reduce((a, b) => a + b) // 화살표 함수
console.log(total)


// Q18. Flatten this array to one single array using reduce Var array = [[0, 1], [2, 3], [4, 5]];
// concat : 붙히는 역할 (두개의 문자열 또는 배열을 하나로)
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220237837400
var array = [[0, 1], [2, 3], [4, 5, 6, 7]];
var flattened = array.reduce((a, b) => a.concat(b))
console.log(flattened)

// Q19. Filter this array to return just the dogs
// https://7942yongdae.tistory.com/49
var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

var dogs = animals.filter((animals => animals.species === "dog")) // 조건을 만족시키지 않는 것은 다 없어짐
var luke = animals.filter((animals => animals.name === "Luke")) // 조건을 만족시키지 않는 것은 다 없어짐

console.log(dogs)
console.log(luke)


// Q20. Using array in question 19 use map function to return all the species
// map() 함수는 모든 배열의 값에 Function을 실행하는 Method이다.
var species = animals.map((animals => animals.name))
console.log(species)



















