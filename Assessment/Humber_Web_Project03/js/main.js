/**
 * Javascript functions documents
 * author Wenhao Fang
 */

function bindDate(elementID) {
  var now = new Date();
  var today =
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  $("#" + elementID).val(today);
}

function isNullInput(elementID, msgID, msg) {
  if ($("#" + elementID).val() == "") {
    $("#" + elementID).css("border", "1px solid red");
    $("#" + msgID).html(msg);
    return false;
  } else {
    $("#" + elementID).css("border", "1px solid rgb(206, 212, 218)");
    $("#" + msgID).html("");
    return true;
  }
}

function isCheck(nameID, msgID, msg) {
  let isCheck = false;
  $("[name=" + nameID + "]").each(function (index, item) {
    // console.log(index);
    if ($(item).prop("checked")) {
      isCheck = true;
      return false;
    }
  });

  if (!isCheck) {
    //if is not check
    $("#" + msgID).html(msg);
  } else {
    $("#" + msgID).html("");
  }
  return isCheck;
}

function isInteger(elementID, msgID, msg) {
  // let result = false;
  let value = document.getElementById(elementID).value;

  if (!Number.isInteger(parseInt(value))) {
    document.getElementById(msgID).innerText = msg;
    return false;
  } else {
    document.getElementById(msgID).innerText = "";
    return true;
  }
}

function isRange(elementID, minVal, maxVal, msgID, msg) {
  let value = document.getElementById(elementID).value;

  if (parseInt(value) < minVal || parseInt(value) > maxVal) {
    //if input is out of range
    document.getElementById(msgID).innerText = msg;
    return false;
  } else {
    document.getElementById(msgID).innerText = "";
    return true;
  }
}

function checkNull(elementID, msgID, msg) {
  isNullInput(elementID, msgID, msg);
}

function checkNum(elementID, minVal, maxVal, msgID, msgNull, msgInt, msgRng) {
  let isNotNull = isNullInput(elementID, msgID, msgNull);

  if (isNotNull) {
    let isInt = isInteger(elementID, msgID, msgInt);
    if (isInt) {
      // console.log(isRange(elementID, minVal, maxVal, msgID, msgRng));

      isRange(elementID, minVal, maxVal, msgID, msgRng);
    }
  }
}

function listUrlParam(url) {
  let strUrl = url.split("?")[1];
  let dict = {};
  let arrParam = strUrl.split("&");
  for (let i = 0, len = arrParam.length; i < len; i++) {
    let arr = arrParam[i].split("=");
    dict[arr[0]] = arr[1];
  }
  return dict;
}
