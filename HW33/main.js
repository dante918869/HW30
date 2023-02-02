// #1

const btn = document.querySelector(".counter")
let num  = 5

btn.addEventListener("click", ()=>{
    num++
    btn.textContent = num
})


// #2

const btn1 = document.querySelector(".eraser")
btn1.addEventListener("click", ()=>{
    btn1.remove()
})

// #3

const btnAll = document.querySelectorAll(".btn-delete")

btnAll.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
    elem.style.color = "black"
    elem.style.backgroundColor = "white"
    })
})

// #4

const numArr = [1,7, 17, 10, -6, 23, 14, -8]

const numArr1 = numArr.filter((elem, index) =>{
    if (elem%5===0) {
        return true
    } else {
        return false
    }
})
console.log(numArr1)

// #5

numArr.forEach((elem,index) =>{
    const h2 = document.createElement("h2")
    h2.textContent = `number is - ${numArr[3]}`
    document.body.append(h2)
    // console.log(elem*elem)
    // const btn = document.createElement("button")
    // btn.textContent = elem
    // document.body.append(btn)
    // const p = document.createElement("p")
    // p.textContent = elem
    // document.body.append(p)
})

// #6

const numArr2 = numArr.map((elem,index) =>{
    // return elem*elem
    // return elem*2
    return elem+10
})
 console.log(numArr2)