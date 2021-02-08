//6a
let num = 0;

while (num <= 100) {
    if (num % 2 == 0)
    console.log(num);
    num  ++;
}
//6b
let x = 100;

while (x >= 0) {
    console.log(x);
    x -= 3;
}
//6c
for (i = 0; i <= 100; i++) {
    if (i % 2 == 1)
    console.log(i);
}
//6d
for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i > 0)
    console.log("HelloWorld");
   else if (i % 3 == 0 && i > 0)
   console.log("Hello");
   else if (i % 5 == 0 && i > 0)
   console.log("World");
    else console.log(i);
}