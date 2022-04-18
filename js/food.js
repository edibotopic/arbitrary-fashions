window.addEventListener("load", () => {

  var grammar = tracery.createGrammar(food);

  function init(){
    var first = grammar.flatten("#origin#");
    document.getElementById("output").innerHTML = first;
  }

  init();

  document.getElementById("generator").addEventListener("click", function() {
    var next = grammar.flatten("#origin#");
    document.getElementById("output").innerHTML = next;
  });
});
