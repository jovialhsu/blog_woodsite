---
slug: 2021-05-safari-bug
title: 紀錄下safari瀏覽器下css的坑
category: html&css
date: 2021-05-24T02:15:39.202Z
excerpt: 自從IE宣告即將滅亡，處理畫面最多不一樣的細節當屬SAFARI，作為一個有蘋果相關產品但上班卻以WINDOWS為主，實在是對它又愛又恨，尤其在手機和電腦版還有很多落差！來記錄下幾項現在工作中遇到關於SAFARI神秘的坑，關關難過關關過，要記得下次不要再踩到就好😫。
image: ./img/iswanto-arif-kxtmgheovdw-unsplash.jpg
tags:
  - css
  - safari
  - browser
---
自從IE宣告即將滅亡，處理畫面最多不一樣的細節當屬SAFARI，作為一個有蘋果相關產品但上班卻以WINDOWS為主，實在是對它又愛又恨，尤其在手機和電腦版還有很多落差！來記錄下幾項現在工作中遇到關於SAFARI神秘的坑，關關難過關關過，要記得下次不要再踩到就好😫。

---
## 1. `transparent !== rgba(255,255,255,0)`
 原來透明不是真的透明！有透明設定直接寫rgba`transparent !== rgba(255,255,255,0)`
  發生在燈箱有設定透明漸層，在SAFARI上怎麼看都是加了層黑霧，不是透明，查了Stack　Overflow查發現Safari不認識`transparent`這個屬性值，如果需要一體適用，要記得都寫`rgba(255,255,255,0)`。
 ##### 參考:
 >[css - What happens in Safari with the transparent color? - Stack Overflow](https://stackoverflow.com/questions/46309641/what-happens-in-safari-with-the-transparent-color)
 ---
## 2. :after寬高都設百分比會失效
  透過偽元素設定圖片裝飾如果設定百分比，會抓不到父層的寬高，導致圖片跑版，現在尚無找到比較好的方式。

---

## 3. 手機版safari預設`input button`有圓角
 不要圓角要另外寫`border-radius: 0;`這個屬性。
##### 參考:
>[html - Turn off iPhone/Safari input element rounding - Stack Overflow](https://stackoverflow.com/questions/2918707/turn-off-iphone-safari-input-element-rounding)
---
## 4. 內文排版設定`word-break: keep-all;`CJK文本，不會照標點符號斷句
 查了查mdn都說keep-all在中日韓文字(CJK文本)，會在有標點符號斷句，其他瀏覽器都沒問題，但在手機版和safari上就是不行，直接長長一行不斷就是不斷，哈哈！
 
 目前解法是在下方在加一句`word-wrap: break-word;` 如果要非常精準就可能需要出動js去算了😓 
 >*2022.02.25 更新 在手機版上也不能加上`keep-all`!!!!*
 ---
 