// {% for collection in collectionsbientries %}
// <section class="collection">
//   <!-- titre collection -->
//   <li><span class="titleColl">{{ collection.coll.data.name }}</span>
//
//   <!-- titre sous-collection -->
//   {% if collection.childrenColl %}
//     {% for collChild in collection.childrenColl %}
//
//       <ul><span class="titleSubColl">{{ collChild.coll.data.name }}</span></ul>
//     {% endfor %}
//   {% endif %}
//
//   </li>
// </section>
// {% endfor %}

// {% for collection in collection_2 %}
// <section class="collection">
//   <!-- titre collection -->
//   <li><span class="titleColl">{{ collection.data.name }}</span>
//
//   <!-- titre sous-collection -->
//     {% for collectionSub in collectionSub_2 %}
//
//       <ul><span class="titleSubColl">{{ collectionSub.data.name }}</span></ul>
//     {% endfor %}
//
//   </li>
// </section>
// {% endfor %}


//
// 	{% macro list(item) -%}
//   <ul name="{{ item.name }}">
//   {% for item in item.list -%}
//     {% if item.a -%}
//       <li a="{{ item.a }}"/>
//     {% elif item.b -%}
//       <li b="{{ item.a }}">
//     {% item.name -%}
//       {{- list(item) }}
//     {% endif -%}
//   {%- endfor %}
//   </ul>
// {% endmacro -%}
//
//
//
// 	</li>
// </section>
// {% endfor %}


// var Doc = document.getElementsByClassName("document");
//   Array.from(Doc).forEach(function(doc) {
//
//   var TitleDoc = doc.getElementsByClassName("titleDoc");
//   var About = doc.getElementsByClassName("about");
//   console.log(TitleDoc);
//   console.log(About);
//
//     Array.from(About).forEach(function(about) {
//       doc.removeEventListener('mouseover', function() {
//       about.classList.add('test')
//     })
//
//   })
// });

// var Doc = document.getElementsByClassName("document");
//   Array.from(Doc).forEach(function(doc) {
//
//   var TitleDoc = doc.querySelector(".titleDoc");
//   var About = doc.querySelector(".about");
//   console.log(TitleDoc);
//   console.log(About);
//
//     About.addEventListener('mouseover', function(about) {
//       About.classList.add('test');
//     })
//
// });
// DERNIERE VERSION
// var tableau =[];
//
// var Docs = document.querySelectorAll(".document");
// console.log(Docs);
//
// Docs.forEach(function(doc) {
//   var position = doc.offsetTop;
//   console.log(position);
//   tableau.push(position);
// });
//
// console.log(tableau);
//
// var DocAttach = document.getElementsByClassName("attachment");
// Array.from(DocAttach).forEach(function(docAtt) {
//   for(i = 0; i < tableau.length; i++){
//     console.log(tableau[0])
//     // docAtt.style.marginTop = tableau[i] + 'px';
//   }
// });


//
// top = angular.element('#user'+user.id).prop('offsetTop');
// angular.element('#feed-details').css('margin-top', top);
// document.getElementById('feed-details').style.marginTop = document.getElementById('user'+user.id).offsetTop+"px";
