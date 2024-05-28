const z = 1;
if (z === 1) {
    const z = 2;  // outra variável z, específica do bloco if
    console.log(z);  // 2
}
console.log(z);  // 1