
var SPREADSHEET_ID = "16ABb-dvasSNME_7Rq-MfoAwqzUGL9n0fMCSUNn3lYoY";
var TAB_NAME = "Sheet1";

/* 
These are two variables (containers for data) that you need to replace with your own information.

1. SPREADSHEET_ID: To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  2. TAB_NAME is just the name of your spreadsheet tab. Write it as it is (it's case-sensitive!). 
    –– The default Google Sheet tab is Sheet1.
    –– This also accepts the tab number, in order
  
*/

/* 
   Link to the example spreadsheet: https://docs.google.com/spreadsheets/d/1ndp1b_EgDONxhSEa9rd6N80Y_oEvI57cNbqO9EMUIGQ/edit#gid=0
*/


$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
    
    console.log(data); 
    
     // go over everything in data and run the code below
    data.forEach(function (entry, index) {
      
      console.log(entry);
      if(index == 0) return; // ignoring the description row of the spreadsheet- only present on gsheets

      
      let div = $(`<div class='p'>
      <h2 class="book">` + entry.Book + ` </br> <span class='author'>` + entry.Author + ` </span></h2>
      <span class="Rating">` + entry.Rating + "/5" + `</p>
      </div>`).appendTo("table");


    if (entry.Image && entry.Image.length > 3) {
      $(`<div class='img'><img src="` + entry.Image + `"></div>`).appendTo(div);
    }

    if (entry.Genre) {
      $(`<div class='genre'` + entry.Genre + `</div>`).appendTo("table");
    }



      // $(`<tr> 
      //       <td>` + entry.Name + `</td>
      //       <td>` + entry.Book + `</td>
      //       <td>` + entry.Author + `</td>
      //       <td>` + entry.Genre + `</td>
      //       <td>` + entry.Feeling + `</td>
      //       <td>` + entry.Rating + `</td>
            
      //       <td>` + entry.Link + `</td>
      //    </tr>`)
      //   .appendTo("table");
  
    });
  });  
});
  


// thank you https://github.com/benborgers/opensheet
