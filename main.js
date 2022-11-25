function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gm-TkFaM3/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) { //se o resultado for = a erro
    console.error(error); //mostrar no console o parâmentro erro
  } else { //senão for = a erro
    console.log(results); //mostrar no console o parâmetro resultado
    random_number_r = Math.floor(Math.random() * 255) + 1;  //definir var que vai arredondar o número aleatório de 0 a 1 (0.31) e obter esse resultado e multiplicar por 255(0.31*255 = 79.05) +1 (80.05)
    random_number_g = Math.floor(Math.random() * 255) + 1;  //definir var que vai arredondar o número aleatório de 0 a 1 (0.31) e obter esse resultado e multiplicar por 255(0.31*255 = 79.05) +1 (80.05)
    random_number_b = Math.floor(Math.random() * 255) + 1;  //definir var que vai arredondar o número aleatório de 0 a 1 (0.31) e obter esse resultado e multiplicar por 255(0.31*255 = 79.05) +1 (80.05)

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label; //obter o texto da "result_label" e modificar o texto para 'Posso ouvir' e o resultado 0 da array (que está no console)
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %"; //obter o texto da label e modificar o texto para 'Precisão' + obter o resultado 0 da array, multiplicar por 100 esse resultado, arredondar as 2 casas decimais + %
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; //obter o resultado da label, colocar a cor para um rgb aleatório que está armazenado na var
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; //obter o resultado da label, colocar a cor para um rgb aleatório que está armazenado na var


    img = document.getElementById('alien1')  //declarando uma imagem como var
    img1 = document.getElementById('alien2') //declarando uma imagem como var
    img2 = document.getElementById('alien3') //declarando uma imagem como var
    img3 = document.getElementById('alien4') //declarando uma imagem como var

    if (results[0].label == "Palmas") { //se o resultado 0 da array for = a "Palmas"
      img.src = 'aliens-01.gif'; //colocando um gif a variavel
      img1.src = 'aliens-02.png';//colocando uma a imagem da variavel
      img2.src = 'aliens-03.png';//colocando uma a imagem da variavel
      img3.src = 'aliens-04.png';//colocando uma a imagem da variavel
    } else if (results[0].label == "Sino") { //se o resultado 0 da array for = a "Sino"
      img.src = 'aliens-01.png';//colocando uma a imagem da variavel
      img1.src = 'aliens-02.gif';//colocando um gif a variavel
      img2.src = 'aliens-03.png';//colocando uma a imagem da variavel
      img3.src = 'aliens-04.png';//colocando uma a imagem da variavel
    } else if (results[0].label == "Estalos") { //se o resultado 0 da array for = a "Estalos"
      img.src = 'aliens-01.png';//colocando uma a imagem da variavel
      img1.src = 'aliens-02.png';//colocando uma a imagem da variavel
      img2.src = 'aliens-03.gif';//colocando um gif a variavel
      img3.src = 'aliens-04.png';//colocando uma a imagem da variavel
    }else{ //senão for nenhum desses
      img.src = 'aliens-01.png';//colocando uma a imagem da variavel
      img1.src = 'aliens-02.png';//colocando uma a imagem da variavel
      img2.src = 'aliens-03.png';//colocando uma a imagem da variavel
      img3.src = 'aliens-04.gif';//colocando um gif a variavel
    }//fecha chaves
  }//fecha chaves
} //fecha função
