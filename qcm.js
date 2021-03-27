/* Declaration de tableau pour rendre les elements accessible via une cle [i]
dans un loop .each() futur */
let images = $("img");
let reponses_tableau = $(".reponse");

// Stylage des contenaires pour les questions
$(".question")
  .css("width", "95%")
  .css("margin", "auto")
  .css("margin-top", "20px")
  .css("margin-bottom", "20px")
  .css("padding", "5px")
  .css("border", "2px solid black")
  .css("background-color", "#d67d05")
  .css("content-align", "center");

// Cache les reponses en preservant l'espace qu'ils prennent, .hide() ne suffit pas
$(".reponse")
  .css("display", "block")
  .css("margin-right", "100px")
  .css("margin-bottom", "30px")
  .css("visibility", "hidden");

// Loop qui re-arrange le placement des logos question et supprime les originaux
$("h2").each(function (i) {
  $("<img id='img" + (i + 1) + "' src='question.png' />").insertAfter($(this));
  $(images[i]).remove();
});
$("img").css("float", "right");
images = $("img");

// Hover handler
$("a").hover(
  /* Sur un survol, modifier les src d'icones et les proprietes css des textes reponses
  grace a un .each() loop en fonction de la radio selectionne. Les bonne reponses
  sont stockes dans le dictionary "reponses" si dessous -> */
  function () {
    let reponses = {
      0: "r1",
      1: "r4",
      2: "r8",
    };
    $(".question").each(function (i) {
      if ($(":radio#" + reponses[i] + ":checked").val()) {
        $(images[i]).attr("src", "bon.png");
        $(reponses_tableau[i]).css("visibility", "").css("color", "green");
      } else {
        $(images[i]).attr("src", "mauvais.png");
        $(reponses_tableau[i]).css("visibility", "").css("color", "red");
      }
    });
  },

  // A la fin du survol, reset des icones et du texte reponse
  function () {
    $("img").attr("src", "question.png");
    $(".reponse").css("visibility", "hidden").css("color", "black");
  }
);
