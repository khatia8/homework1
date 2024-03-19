//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function test1(m, n) {
  if (m == n) {
    return 0;
  }
  if (m > n) {
    return m;
  }
  if (m < n) {
    return n;
  }
}

console.log(test1(5, 20));

//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function test2(m, n) {
  return m + n;
}

console.log(test2(10, 20));

//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function test3() {
  console.log('Khatia Pasikashvili');
}
test3();

//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function test4(firstname, lastname) {
  return firstname + ' ' + lastname;
}

console.log(test4('Khatia', 'Pasikashvili'));

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს 👎 და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი
// ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის
//  შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)
function test5(n) {
  let namravli = 1;
  for (let i = 1; i <= n; i++) {
    namravli *= i;
  }
  return namravli;
}

console.log(test5(3));

// Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstname, lastname, age,
// marks (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს
// ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ )

const student = {
  firstname: 'Khatia',
  lastname: 'Pasikashvili',
  age: 30,
  scores: [4, 7, 5, 3, 2],
  fullname: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

//6. დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)
console.log(student.fullname());

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function test7(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}

console.log(test7(student.scores));

//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log(student.firstname, student.age);
