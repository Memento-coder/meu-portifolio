/*
    ============================================================
    PORTFÓLIO LEONARDO
    JavaScript principal
    ============================================================

    Conceitos utilizados:
    - Manipulação do DOM
    - Eventos
    - Validação de entrada
    - Expressões regulares
    - Persistência de preferência visual
    - Menu responsivo

    SSDLC:
    A aplicação não confia automaticamente nos dados fornecidos
    pelo usuário. Antes da simulação de envio, os campos são
    validados e tratados.
*/

/* ============================================================
   MENU RESPONSIVO
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });

}

/*
    Fecha o menu quando o usuário seleciona um link.
    Isso melhora a experiência em dispositivos móveis.
*/

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (mainNav) {
            mainNav.classList.remove("show");
        }

    });

});


/* ============================================================
   TEMA CLARO / ESCURO
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    /*
        Recupera a preferência armazenada anteriormente.

        A utilização de localStorage é apenas para guardar
        a preferência visual do usuário.
    */

    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeToggle.textContent = "☾";

    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        if (isLight) {

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

            themeToggle.textContent = "☾";

        } else {

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

            themeToggle.textContent = "☀";

        }

    });

}


/* ============================================================
   VALIDAÇÃO DO FORMULÁRIO
   ============================================================ */

const contatoForm =
    document.getElementById("contatoForm");

if (contatoForm) {

    contatoForm.addEventListener(
        "submit",
        function (event) {

            /*
                Impede o comportamento padrão do formulário.

                Como este é um projeto acadêmico sem backend,
                o envio será apenas simulado.
            */

            event.preventDefault();

            const nome =
                document.getElementById("nome");

            const email =
                document.getElementById("email");

            const mensagem =
                document.getElementById("mensagem");

            const nomeError =
                document.getElementById("nomeError");

            const emailError =
                document.getElementById("emailError");

            const mensagemError =
                document.getElementById("mensagemError");

            const formSuccess =
                document.getElementById("formSuccess");


            /* Limpa mensagens anteriores */

            nomeError.textContent = "";
            emailError.textContent = "";
            mensagemError.textContent = "";
            formSuccess.textContent = "";

            nome.classList.remove("invalid");
            email.classList.remove("invalid");
            mensagem.classList.remove("invalid");


            /*
                Obtém os valores removendo espaços extras
                no início e no final.

                Isso evita aceitar um campo contendo apenas
                espaços como entrada válida.
            */

            const nomeValor =
                nome.value.trim();

            const emailValor =
                email.value.trim();

            const mensagemValor =
                mensagem.value.trim();

            let formularioValido = true;


            /* =================================================
               VALIDAÇÃO DO NOME
               ================================================= */

            if (nomeValor.length < 3) {

                nomeError.textContent =
                    "Informe um nome válido.";

                nome.classList.add("invalid");

                formularioValido = false;

            }


            /* =================================================
               VALIDAÇÃO DO E-MAIL
               ================================================= */

            /*
                Expressão regular simples para verificar
                a estrutura básica de um endereço de e-mail.

                A validação não substitui uma validação
                realizada por servidor em uma aplicação real.
            */

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailValor)) {

                emailError.textContent =
                    "Informe um e-mail válido.";

                email.classList.add("invalid");

                formularioValido = false;

            }


            /* =================================================
               VALIDAÇÃO DA MENSAGEM
               ================================================= */

            if (mensagemValor.length < 10) {

                mensagemError.textContent =
                    "A mensagem deve possuir pelo menos 10 caracteres.";

                mensagem.classList.add("invalid");

                formularioValido = false;

            }


            /* =================================================
               RESULTADO
               ================================================= */

            if (!formularioValido) {

                return;

            }


            /*
                SIMULAÇÃO DE ENVIO

                Não existe backend neste projeto.
                Portanto, os dados não são enviados para
                nenhum servidor.

                O objetivo é demonstrar o funcionamento
                da validação JavaScript exigida pela atividade.
            */

            formSuccess.textContent =
                "Mensagem enviada com sucesso!";

            /*
                Limpa os campos após o envio simulado.
            */

            contatoForm.reset();

        }
    );

}
