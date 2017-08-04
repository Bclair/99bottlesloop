var word = 'bottles';
var lastWord = 'bottle'
var count = 99;

while (count > 1) {
    console.log(count + ' ' + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("take one down, pass it around,");
    count = count - 1;
    if (count > 1) {
        console.log(count + " " + word + "  of beer on the wall.");
    } else if (count >= 1) {
        console.log(count + " " +lastWord + ' of beer on the wall.');
        console.log(count + " " + lastWord + " of beer,");
        console.log("take one down, pass it around,");
        console.log("No More " + word + ' of beer on the wall.');

} 
    }
