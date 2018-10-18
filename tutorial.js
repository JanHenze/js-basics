let selected = ["red", "blue"];
if (selected[0] == "red") {
    console.log(selected[0]);
}
console.log(selected);

function greet(name, nachname) {
    console.log(name +" " + nachname);

}
greet("Hallo");
greet("Jan", "Henze");

function square (number) {
    return number * number;
}

console.log(square(2));

for (num = 0; num < 10; num++) {
    console.log(square(num));

};