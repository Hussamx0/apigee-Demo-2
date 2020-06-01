// Get Response from target server
var payload = JSON.parse(context.getVariable("response.content"));

// Get Variable from service callout
var req=context.getVariable("v-res"); //{"email":"marshallramirez@inquala.com","gender":"male"}
var obj = JSON.parse(req);
payload.phone=obj.phone;
payload.gender=obj.gender;
payload = JSON.stringify(payload);
context.setVariable("response.content",payload);