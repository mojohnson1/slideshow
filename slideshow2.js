 var images = [
    'c:/users/tony m johnson/desktop/tts/slideshow2/chicken.jpeg', 
    'c:/users/tony m johnson/desktop/tts/slideshow2/elephant.jpeg', 
    'c:/users/tony m johnson/desktop/tts/slideshow2/zebra.png',
    'c:/users/tony m johnson/desktop/tts/slideshow2/penguin.jpeg',
    'c:/users/tony m johnson/desktop/tts/slideshow2/puppy.jpg',
    'c:/users/tony m johnson/desktop/tts/slideshow2/igloo.jpeg',
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}