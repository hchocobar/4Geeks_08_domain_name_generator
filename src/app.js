/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  var textHTML = "<ul>";

  for (let index = 0; index < pronoun.length; index++) {
    for (let index = 0; index < adj.length; index++) {
      for (let index = 0; index < noun.length; index++) {
        const element1 = pronoun[index];
        const element2 = adj[index];
        const element3 = noun[index];

        let domainName = element1 + element2 + element3 + ".com";
        textHTML += "<li>" + domainName + "</li>";
      }
    }
  }
  textHTML += "</ul>";
  document.write(textHTML);
  console.log("Hello Rigo from the console!");
};
