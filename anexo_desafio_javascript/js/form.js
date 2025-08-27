const form = document.querySelector(".form");
const nome = document.getElementById("nomeid");
//class contato

class contato {
    constructor(nome, email,telefone,contato){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(evento, form) {
    evento.preventDefault();
    
    let data = new contato(
            form.elements.namedItem("nome").value, 
            form.elements.namedItem("email").value,  
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value
        );
        return data;
}


function Enviar() {
    
    form.onsubmit = function (evento) {
        const data = Post(evento, form);
        
        alert(`Obrigado sr(a) ${nome.value}, os seus dados foram encaminhados com sucesso`);
        form.reset();
    };
}


Enviar();