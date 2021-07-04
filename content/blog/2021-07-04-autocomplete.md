---
slug: email-autocomplete
title: autocomplete
category: JavaScript
date: 2021-07-04T09:47:52.315Z
excerpt: 這次有個需求是關於autocomplete的，在email的`input`輸入框，輸入到`@`時候，會跳出常用信箱供選擇。
image: ./img/sigmund-f_m44ut3xtw-unsplash.jpeg
tags:
  - autocomplete
  - html
  - event
  - startsWith
  - input
---

## autocomplete

### 緣由

這次有個需求是關於 autocomplete 的，在 email 的`input`輸入框，輸入到`@`時候，會跳出常用信箱供選擇，如下圖。
![image:email-autocomplete](./img/Pasted image 20210704151439.png)

---

仔細查查果不其然，只要牽扯到輸入行爲，就要考慮很多相關事項，（還有很多花式自動提示更別提要和[瀏覽器作戰](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password)），包括很多防呆或使用者體驗的項目，好像簡單的事情也變得不簡單了，關於無障礙我先裝死略過。

### 調查 survey

因為是想要跨框架使用，主管希望可以寫純 JS，再度失去和 storybook 交手的機會，但我覺得框架自己刻一個還比較友善。
所以就沒有去查 react 或 vue 的寫法。
參考了以下幾個：

1.  https://codepen.io/trevoreyre/pen/bvwOeL
2.  另外還有一個開源的方案也很不錯，github 上有 3000 多顆星。
    https://tarekraafat.github.io/autoComplete.js/#/
3.  svelte 版本：
    https://github.com/themarquisdesheric/simply-svelte-autocomplete/blob/master/src/Autocomplete.svelte
4.  jQuery UI 版本:
    https://jqueryui.com/autocomplete/

### 碰到的一些小問題

在測試的時候發現如果有在`input`輸入框進行即時檢查，會造成 js 寫不進去值
因為 autocomplete 主要會兩個行為，當下方 popup 出現的時候，可以透過**方向鍵去選取提示**或是透過**滑鼠去`click`點擊所出現的提示項目**。
查了一下和事件流的發生順序有關：
一般來說輸入框鍵盤輸入事件是從：

> focus->keydown->input->keyup->change->blur

的順序進行的，但當透過方向鍵去選取提示只會有`keydown`和`keyup`事件發生，而且`keydown`當下是不會把輸入的值寫回`input`的`value`內，而滑鼠去`click`點擊所出現的提示項目會直接觸發`change`->`blur`事件，也不能即時寫回當下的 value。
另外有查到可以去偵測目前事件流的 console 寫法，給不信邪的人參考(就是我):

```js
var yourInput = document.getElementById("personId")
var result = []
yourInput.addEventListener("input", function (event) {
  result.push({
    event: "input",
    value: this.value,
    key: event.key,
  })
})
//  註冊keydown事件
yourInput.addEventListener("keydown", function (event) {
  result.push({
    event: "keydown",
    value: this.value,
    key: event.key,
  })
})
//  註冊keyup事件
yourInput.addEventListener("keyup", function (event) {
  result.push({
    event: "keyup",
    value: this.value,
    key: event.key,
  })
})
//  註冊change事件
yourInput.addEventListener("change", function (event) {
  result.push({
    event: "change",
    value: this.value,
    key: event.key,
  })
  console.table(result)
})
//  註冊blur事件
yourInput.addEventListener("blur", function (event) {
  result.push({
    event: "blur",
    value: this.value,
    key: event.key,
  })
  //  輸出結果
  console.table(result)
})
```

所以必須在透過 js 改變`value`的當下去觸發`input`事件，在觸發事件這裡又再度發生令人兩難的事件，一種在網路查到的寫法`initEvent`已經不被建議使用，而另一種新的寫法`new Event`，尚未死透的`ie`不支援！

```js
//舊的寫法
var event = document.createEvent("HTMLEvents")
event.initEvent("input", true, true)
event.eventType = "message"
this.inputNode.dispatchEvent(event)

//新的寫法
var ev = new Event("input", { bubbles: true, cancelable: true })
this.inputNode.dispatchEvent(ev)
```

想說公司網站已經不支援`ie`我也應該向前看才是:P。anyway 這真的是令人覺得 fantastic 的事件，再度複習`HTML`[^1]😭

[^1]: [HTML 屬性 autocomplete 說明 from MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/autocomplete)

---

btw，還有比較複雜的是要怎麼匹配選取的項目。這邊是透過[`startsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)這個 function 去支援，之前 Wesbos 在 js30 的範例中是透過正則去匹配。

```js
function findMatchEmailsArray(inputValue) {
  if (inputValue.length < 1) {
    return []
  }
  return emails.filter(email => {
    return email.domain.toLowerCase().startsWith(inputValue.toLowerCase())
  })
}
//正則的版本（但沒辦法從頭篩選，適合關鍵字）
const regex = new RegExp(inputValue, "gi") //不論大小寫
return email.domain.match(regex)
```

### 小結

不過如果這個可以靈活運用又要寫得很彈性的話，也要考慮很多事，前端真的是要心思細膩還要有被害妄想症。
