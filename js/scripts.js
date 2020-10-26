
/* $(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    console.log(person1Input);
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $("person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
}); 

*/

// looop practice //

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    // let favFruit = "peach";
    // let favCity = "Paris";
    // let favorites = [favFruit, favCity];
    let person1input = "input#person1";
    let person2input = "input#person2";
    //const person1Input = $("input#person1").val();
    let array [person1input, person2input];
    array.forEach(function(element) {
      alert(element + "Hi");
    });
  });
});