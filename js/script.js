
document.getElementById("enviar").onclick = function() {

    let nome = document.getElementById("nome_cliente").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let suite = document.getElementById("suite");
    let diarias = parseInt(document.getElementById("diarias").value);

    let radios = document.getElementsByName("genero");
    let adicionais = document.getElementsByName("adicionais");
    let radiosGuia = document.getElementsByName("guia");

    let genero = "";
    let guia = "";
    let valorAdicionais = 0;
    let valorGuia = 0;
    let valorAurora = 0;
    let valorSuite = parseInt(suite.value);
    let total = 0;
    let listaAdicionais = "";

    for(let i = 0; i < radios.length; i++) {

        if(radios[i].checked) {

            genero = radios[i].value;

        }

    }

    for(let i = 0; i < radiosGuia.length; i++) {

        if(radiosGuia[i].checked) {

            guia = radiosGuia[i].value;
            valorGuia = parseInt(radiosGuia[i].value);

        }

    }

    if(nome == "" || email == "" || data == "" || suite.value == "" || isNaN(diarias) || diarias < 1 || genero == "") {

        alert("Preencha todos os campos corretamente!");

    }

    else {

        for(let i = 0; i < adicionais.length; i++) {

            if(adicionais[i].checked) {

                valorAdicionais = valorAdicionais + parseInt(adicionais[i].value);

                listaAdicionais = listaAdicionais + adicionais[i].parentElement.textContent + "<br>";

            }

        }

        if(document.getElementById("aurora").checked) {

            valorAurora = parseInt(document.getElementById("aurora").value);

            listaAdicionais = listaAdicionais + document.getElementById("aurora").parentElement.textContent + "<br>";

        }

        total = (valorSuite + valorAdicionais + valorGuia) * diarias + valorAurora;

        document.getElementById("pNome").innerHTML = "Nome: " + nome;

        document.getElementById("pEmail").innerHTML = "E-mail: " + email;

        document.getElementById("pData").innerHTML = "Data de hospedagem: " + data;

        document.getElementById("pGenero").innerHTML = "Gênero: " + genero;

        document.getElementById("pSuite").innerHTML = "Hospedagem: " + suite.options[suite.selectedIndex].text;

        document.getElementById("pDiarias").innerHTML = "Número de diárias: " + diarias;

        document.getElementById("pAdicionais").innerHTML = "Adicionais: <br>" + listaAdicionais;

        if(guia == "120") {

            document.getElementById("pGuia").innerHTML = "Guia turístico: Com guia - R$ 120,00 por diária";

        }

        else {

            document.getElementById("pGuia").innerHTML = "Guia turístico: Sem guia";

        }

        document.getElementById("pTotal").innerHTML = "VALOR TOTAL: R$ " + total.toFixed(2).replace(".", ",");

    }

}
