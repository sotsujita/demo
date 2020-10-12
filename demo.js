var ACCESS_TOKEN = "+6DU7B9yWx2hgxYDFeyhHaI1T2JKwmJ4V5jee3J4JGRW/xwcDlBZDV72SMpFAx69++gX8q5vbY0SYXmo0fO3qHfAcpT1i6Cg15bUaZeF2HvdKGHJ7k8mG1WwryIh/tfvRrGDD8F/PiwGb3GsFLb6wAdB04t89/1O/w1cDnyilFU=";
var URL_PUSH = "https://api.line.me/v2/bot/message/push";
var URL_REPLY = "https://api.line.me/v2/bot/message/reply";
var URL_BROADCAST = "https://api.line.me/v2/bot/message/broadcast";

// userIdで指定したユーザーにプッシュメッセージを送信
function push(message, userId)
{
  
  var headers = 
      {
        "Content-Type" : "application/json; charset=UTF-8",
        "Authorization" : "Bearer " + ACCESS_TOKEN
      };
  var post =
      {
        "to" : userId,
        "messages" : 
        [
          {
            "type" : "text",
            "text" : message
          }
        ]
      };
  var options = 
      {
        "method" : "POST",
        "headers" : headers,
        "payload" : JSON.stringify(post)
      };
  return UrlFetchApp.fetch(URL_PUSH, options);
  
}

// ブロードキャストメッセージでフォロワー全員にメッセージを送信
function broadcast(message)
{
  
  var headers = 
      {
        "Content-Type" : "application/json; charset=UTF-8",
        "Authorization" : "Bearer " + ACCESS_TOKEN
      };
  var post =
      {
        "messages" : 
        [
          {
            "type" : "text",
            "text" : message
          }
        ]
      };
  var options = 
      {
        "method" : "POST",
        "headers" : headers,
        "payload" : JSON.stringify(post)
      };
  return UrlFetchApp.fetch(URL_BROADCAST, options);  
}