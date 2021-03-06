var timer = new Date();
function web_send_msg()
{
    // Getting values from input elements.
    var text = $("#WebChatTextID").val();
    var name = $("#WebChatNameID").val();
 
    // Form cleaning
    $("#WebChatTextID").val("");  
 
    // We will write the time at the time of sending the message
    timer = new Date();
 
    // Adding a sent message to the list of messages.
    //$("#WebChatFormForm").append("<p><b>"+HtmlEncode(name)+": </b>"+HtmlEncode(text)+"</p>");
 
    // Sending a message to the chat channel
    CometServer().web_pipe_send("web_chat_pipe", {"text":text, "name":name});
 
    // Notify the other tabs that we added a message to the chat
    comet_server_signal().send_emit("AddToChat", {"text":text, "name":name})
}
 
 
// The function will be executed in after the page loads.
$(document).ready(function()
{
    // Create a chat form. Layout.
    var html =  "<div style=\"border: 1px solid #ccc;padding:10px;\" >"
            + "<div id=\"WebChatFormForm\" ></div>"
      + "<input type=\"text\" id=\"WebChatNameID\" placeholder=\"Enter your name...\" > <div id=\"answer_div\" style=\"float:right;\" ></div>"
            + "<textarea id = \"WebChatTextID\" placeholder = \"Send an online chat...\" ></textarea>"
 
                  + "<div style=\"margin-bottom: 0px;margin-top: 10px;\">"
                  +    "<input type=\"button\" style=\"width: 220px;\" onclick=\"web_send_msg();\" value=\"Send\" >"
                  +    " <div id=\"answer_error\"  style=\"float:right;\" ></div>"
                  + "</div>"
             +  "</div>";
    $("#web_chat_holder").html(html);
 
    // Subscribe to the channel in which chat messages will be sent.
    CometServer().subscription("web_chat_pipe", function(msg){
        console.log(["msg", msg]);
      
        // dding a received message to the list of messages.
        $("#WebChatFormForm").append("<p><b>"+HtmlEncode(msg.data.name)+": </b>"+HtmlEncode(msg.data.text)+"</p>");
    });
 
    // We subscribe to the event of adding a message to the chat by us, so that if the chat is open in several tabs
    // our message added on one tab was displayed on all the others without reloading the page
    comet_server_signal().connect("AddToChat", function(msg){
        console.log(["msg", msg]);
        // Adding a received message to the list of messages.
        $("#WebChatFormForm").append("<p><b>"+HtmlEncode(msg.name)+": </b>"+HtmlEncode(msg.text)+"</p>");
    });
 
    // We subscribe to the channel in which the delivery notifications of the sent messages will be sent.
    CometServer().subscription("#web_chat_pipe", function(p)
    {
        // We will write the time at the time of receipt of the delivery report
        var etime = new Date();
 
        console.log(["answer_to_web_chat_pipe", p]);
        $("#answer_div").html("Message delivered "+p.data.number_messages+" recipients for "+ (etime.getTime() - timer.getTime() )+"ms");
        
    });
 
   // Download message history
   CometServer().get_pipe_log("web_chat_pipe");
});
 
 
function HtmlEncode(s)
{
  var el = document.createElement("div");
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
}


CometServer().start({dev_id:439439429885893403498938123546235})