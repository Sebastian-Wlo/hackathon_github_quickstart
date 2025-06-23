/*
  I didn't write most of this Script!
  Original author: Moacir P. de Sá Pereira,
  Source: https://the-javascripting-english-major.org/v1/12-markdown
*/
 const title = document.title;

$(document).ready(function() {

      let md;
      md = window.markdownit({html: true}).use(window.markdownit);
      $.ajax({
        url: `./md_files/${title}.md`,
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
    });

    
    