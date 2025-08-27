
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// Verifica se o carro já está no array
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

// Adiciona ou remove carro do array quando o checkbox é clicado
function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if (carArr.length >= 2) {
                alert("Você só pode comparar 2 carros por vez.");
                el.checked = false;
                return;
            }        
            carArr.push(carClass);
        } else {
            // Remove do array se desmarcado
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) {
                carArr.splice(pos, 1);
            }
        }
    }
}


function ShowCompare() {
    if(carArr.length !== 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    
}

function UpdateCompareTable() {
    for (let i = 0; i < carArr.length; i++) {
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carArr[i].image}" width="150">`;
        document.getElementById(`compare_modelo_${i}`).textContent = carArr[i].nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = carArr[i].alturaCacamba + " mm";
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = carArr[i].alturaVeiculo + " mm";
        document.getElementById(`compare_alturasolo_${i}`).textContent = carArr[i].alturaSolo + " mm";
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = carArr[i].capacidadeCarga + " Kg";
        document.getElementById(`compare_motor_${i}`).textContent = carArr[i].motor + " L";
        document.getElementById(`compare_potencia_${i}`).textContent = carArr[i].potencia + " cv";
        document.getElementById(`compare_volumecacamba_${i}`).textContent = carArr[i].volumeCacamba + " L";
        document.getElementById(`compare_roda_${i}`).textContent = carArr[i].roda;
        document.getElementById(`compare_preco_${i}`).textContent = "R$ " + carArr[i].preco.toLocaleString('pt-BR');
    }
}
