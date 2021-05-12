
document.querySelector('form').addEventListener('submit',SubmitNew)
document.querySelector('ul').addEventListener('click',removeTodo)
document.querySelector('ul').addEventListener('click',checked)
document.querySelector('.allTodos').addEventListener('click',allTodos)
document.querySelector('.clearComplete').addEventListener('click',removeChecked)
 document.querySelector('.activeTodo').addEventListener('click',active)
 document.querySelector('.completedTodos').addEventListener('click',completedTodos)
let items =document.querySelector('.items-left')
let todo = document.querySelectorAll('.todoItem')
let todos = todo.length

function completedTodos () {
  document.querySelector('.active').classList.remove('active')
  document.querySelector('.completedTodos').classList.add('active')

  let elements = document.querySelectorAll('.lis__div')
  for( let element of elements) {
  if(!element.classList.contains("todoDone")) {
    element.classList.add('hideDiv')
  }
  }
  let otherElements = document.querySelectorAll('.todoDone')
  for( let element of otherElements) {
    element.classList.remove('hideDiv')
  }
}

function allTodos() {
  document.querySelector('.active').classList.remove('active')
  document.querySelector('.allTodos').classList.add('active')
  let elements = document.querySelectorAll('.lis__div')
  for (let element of elements) {
    if(element.classList.contains('hideDiv')){
      element.classList.remove('hideDiv')
    }
  }
}

function active () {
  document.querySelector('.active').classList.remove('active')
  document.querySelector('.activeTodo').classList.add('active')

  let elements = document.querySelectorAll('.todoDone')
  for( let element of elements) {
    element.classList.add('hideDiv')
  }
  let otherElements = document.querySelectorAll('.lis__div')
  for( let element of otherElements) {
  if(!element.classList.contains("todoDone")) {
    element.classList.remove('hideDiv')
  }
  }
}


function removeChecked (e) {
let elements = document.querySelectorAll('.todoDone')

for(let element of elements) {
  element.remove()
}  
console.log(elements)
}

function SubmitNew (e){
    e.preventDefault()
    
    const newTodo =document.querySelector('input').value
   
    const div = document.createElement("div")
    const li = document.createElement("li")
    const spanDiv = document.createElement("div")
    const spanX = document.createElement("span")
    const p = document.createElement("p")
      div.classList.add('lis__div', 'todoItem')
      li.classList.add('lis')
      spanDiv.classList.add('lis__div-span1','-icon' )
      spanX.classList.add('lis__div-span1','-cross' )
      p.classList.add('p')
      p.innerText= newTodo
      spanX.innerText="X"
      spanDiv.innerHTML=`<span class="spanNew">  </span>`
      li.append(spanDiv,p,spanX)
      div.append(li)
    document.querySelector('ul').appendChild(div)
    document.querySelector('input').value=''
    todos+= 1
 items.innerText= ` ${todos} items left`
}
function removeTodo(e) {

if (e.target.classList.contains('-cross')){
    todos+= -1
 items.innerText= ` ${todos} items left`
  e.target.parentElement.parentElement.remove()
if(e.target.parentElement.children[0].firstElementChild.classList.contains('clicked'))
todos+= +1
items.innerText= ` ${todos} items left`
}

}
function checked(e){

  if(e.target.classList.contains('-icon')){
    e.target.firstElementChild.classList.add('clicked')
    console.log(e.target.parentElement.parentElement.classList.add('todoDone'))
    console.log(e.target.parentElement.parentElement)
    const li = e.target.parentElement
    todos+= -1
 items.innerText= ` ${todos} items left`
   if(li.children[1].nodeName === 'P'){
    li.children[1].classList.add('lineThrough')

   }
  }
  if(e.target.classList.contains('clicked')){
    const parent = e.target.parentElement
   parent.firstElementChild.classList.remove('clicked')
   const li = e.target.parentElement.parentElement
   if(li.children[1].nodeName === 'P'){
   li.children[1].classList.remove('lineThrough')  
   todos+= +1
   items.innerText= ` ${todos} items left`
  }
  }
  e.stopPropagation()

}

