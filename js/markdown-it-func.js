/*
  I didn't write most of this Script!
  Original author: Moacir P. de Sá Pereira,
  Source: https://the-javascripting-english-major.org/v1/12-markdown
*/


$(document).ready(function() {
  getMdName();
  $(".md-link").on("click", function(e){
    readFromMd(e.currentTarget.href.split("#")[1]);

  });
    });

function getMdName() {
  $("#markdown-container").html("Loading...");
  const docToLoad = $(location).attr("href").split("#")[1];
  readFromMd(docToLoad);
}

function readFromMd(mdFile) {
  let md;
      md = window.markdownit({html: true}).use(window.markdownit);
      $.ajax({
        url: `./md_files/${mdFile}.md`,
        success: function(markdown){
          // Convert the Markdown to HTML.
          let html;
          html = md.render(markdown).replaceAll(`<a `, `<a target="_blank" `);
          // Remove h1 header
          html = html.replace(/<h1>.*<\/h1>/, "");
          // Print the HTML to #content using jQuery.
          $("#markdown-container").html(html);
        }
      }).then()
      $()
}