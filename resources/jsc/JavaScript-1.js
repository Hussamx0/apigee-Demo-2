var phone = context.getVariable('ExtractResponse.phone');
var gender = context.getVariable('ExtractResponse.gender');
var res = JSON.stringify({"phone":phone,"gender": gender});
context.setVariable("res",res);