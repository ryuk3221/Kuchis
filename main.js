let cost = []
let  goodsName = []  //список хранищий общее количество проданного товара 
let  amountAllGoods = {}
// словарь где key - наименование товара, value - его количество ( для отчета по блюдам)
function fillingGoods() { 
  //данная функция заполняет словарь выше
  for (let i of goodsName){
    if (amountAllGoods[i] !== undefined){
      amountAllGoods[i] += 1 
    }
    else {
      amountAllGoods[i] = 1
    }
  }
  let innerModal = document.querySelector('#modal')  //получили модальное окно 
  for (let k in amountAllGoods){
    innerModal.innerHTML += k + ' : ' + amountAllGoods[k] + '<br>'
  }
}

//здесь тупа в падлу было гуглить встроенную ф-ию js котоаря суммирует значения масива ))))
function sum(args){
  //функция сумматор
  let result = 0
  for (let i of args){
  i = parseInt(i)
  result += i
  }
  return result
}

//
function showChek(el){
  document.querySelector('.check').innerHTML += '<label class="goods">' + el.innerHTML + '</label>'
  cost.push(Number(el.id))
  let itog = document.getElementById('sumChek').innerHTML
  itog = Number(itog)
  document.getElementById('sumChek').innerHTML = sum(cost)
  let name = el.innerHTML
  goodsName.push(name)
}

//показать отчёт (модальное окно)
function showModal(){
    document.querySelector('.modal').style.display= "block"
}

//скрыть очтёт (модальное окно)
function hideModal(){
  document.querySelector('.modal').style.display= "none"
}
let totalNal = []
//добавить накопившуюся сумму чека в отчёт (наличные) а так же отчистить чек
function addSumNal(){
  let sumChek = document.querySelector('.sumChek').innerHTML
  sumChek = Number(sumChek)
  totalNal.push(sumChek)
  document.querySelector('.total-nal-number').innerHTML = sum(totalNal)
  document.querySelector('.sumChek').innerHTML = ''
  cost = []
  document.querySelector('.check').innerHTML = '<h2 class="sub-title st1">Чек</h2><button class="nal" onclick="addSumNal()">Наличные</button><button class="debit" onclick="addSumDebit()">Банковская карта</button><button class="modal-btn" onclick="showModal()">Отчёт по смене</button><p class="totalChek">Сумма чека: <span class="sumChek" id="sumChek"></span></p>'
}

let totalDebit = []
//добавить безнал соответственно
function addSumDebit(){
  let sumChek = document.querySelector('.sumChek').innerHTML
  sumChek = Number(sumChek)
  totalDebit.push(sumChek)
  document.querySelector('.total-debit-number').innerHTML = sum(totalDebit)
  document.querySelector('.sumChek').innerHTML = ''
  cost = []
  document.querySelector('.check').innerHTML = '<h2 class="sub-title st1">Чек</h2><button class="nal" onclick="addSumNal()">Наличные</button><button class="debit" onclick="addSumDebit()">Банковская карта</button><button class="modal-btn" onclick="showModal()">Отчёт по смене</button><p class="totalChek">Сумма чека: <span class="sumChek" id="sumChek"></span></p>'
}