  
      function shuffle() {
        var container = document.getElementById("container");
        var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleMe'));
            elementsArray.forEach(function(element){
            container.removeChild(element);
        })
        shuffleArray(elementsArray);
        elementsArray.forEach(function(element){
        container.appendChild(element);
        })
        }

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
    function sort(){
        var toSort = document.getElementById('container').children;
toSort = Array.prototype.slice.call(toSort, 0);

toSort.sort(function(a, b) {
    var aord = +a.id;
    var bord = +b.id;
    // two elements never have the same ID hence this is sufficient:
    return (aord > bord) ? 1 : -1;
});

var parent = document.getElementById('container');
parent.innerHTML = "";

for(var i = 0, l = toSort.length; i < l; i++) {
    parent.appendChild(toSort[i]);
}
    }  