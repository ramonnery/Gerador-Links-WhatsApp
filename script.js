let input_phone = document.querySelector(".phone")
let btn = document.querySelector(".btn")
let link_field = document.querySelector(".link")

function gerarLink() {
    let phone_number = input_phone.value

    if(+phone_number) {
        let link = "https://wa.me/55" + phone_number.trim()
        link_field.innerHTML = link
        link_field.setAttribute("href", link)
    }
    else {
        alert("Insira um número de telefone válido")
    }
}


btn.addEventListener("click", gerarLink)