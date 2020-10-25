module.exports = function check(str, bracketsConfig) {

    // var chars = str.split(''),
    //     stack = [],
    //     open = ['{', '(', '['],
    //     close = ['}', ')', ']'],
    //     closeIndex,
    //     openIndex;
  
    // // Проходимся по строке, проверяя каждый ее символ (п.4).
    // for (var i = 0, len = chars.length; i < len; i++) {
    //     openIndex = open.indexOf(chars[i]);
    //     if (openIndex !== -1) {
    //         // Нашли открывающую скобку. Помещаем ее в стек (п.2).
    //         stack.push(openIndex);
    //         continue;
    //     }
  
    //     closeIndex = close.indexOf(chars[i]);
    //     if (closeIndex !== -1) {
    //         // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
    //         openIndex = stack.pop();
    //         if (closeIndex !== openIndex) {
    //             return false;
    //         }
    //     }
    // }
  
    // // Проверяем дисбаланс открытых/закрытых скобок (п.5).
    // if (stack.length !== 0) {
    //     return false;
    // }
  
    // return true;
  
    let stack = new Array;
      let quantOfDiffBrackets = bracketsConfig.length;
      let openBrackets = new Array;
      let closeBrackets = new Array;
      for (let i = 0; i < quantOfDiffBrackets; i++) {
          openBrackets.push(bracketsConfig[i][0]);
          closeBrackets.push(bracketsConfig[i][1]);
      }
      for (let i = 0; i < str.length; i++) {
            if (openBrackets.indexOf(str[i]) !==-1 && closeBrackets.indexOf(str[i]) === -1){
              stack.push(str[i]);
             }
            else if (openBrackets.indexOf(str[i]) !==-1 && closeBrackets.indexOf(str[i]) !== -1 && stack[stack.length-1] !== str[i]) {
              stack.push(str[i]);
            }
            else if (closeBrackets.indexOf(str[i]) !== -1 && stack[stack.length-1] === openBrackets[closeBrackets.indexOf(str[i])]) { 
              stack.pop();  
            }  
          else {
            stack.push(str[i]);
          }
      }
      if (stack.length === 0) { console.log('true');return true; }
      else { console.log('false');return false; }
  }
  
  
  
  
    // // пары открывающих-закрывающих скобок
    // var br = "(){}[]";
    // // стек открытых скобок
    // var st = [];
    // // бежим по всей строке
    // for (var i = 0; i < str.length; ++i) {
    //     // текущий символ
    //     var ch = str[i];
    //     // ищем символ в скобках
    //     var ind = br.indexOf(ch);
    //     // если скобка найдена
    //     if (ind >= 0) {
    //         // проверяем, какая это скобка
    //         if (ind & 1) {
    //             // если закрывающая скобка, проверяем стек
    //             // стек пуст - плохо
    //             if (!st.length) return false;
    //             // извлекаем последнюю открытую скобку из стека
    //             var last_br = st.pop();
    //             // если она не соответствует закрывающей скобке - тоже плохо
    //             if (last_br != br[ind - 1]) return false;
    //         } else { 
    //             // открывающую скобку просто пихаем в стек
    //             st.push(ch);
    //         }
    //     }
    // }
    // // если после обхода всей строки стек пуст - всё ок
    // return !st.length;
