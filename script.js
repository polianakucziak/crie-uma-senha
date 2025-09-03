 const numeroSenha = document.querySelector('.parametro-senha-texto');
 let tamanhoSenha = 12;
 numeroSenha.textContent = tamanhoSenha;
 const checkbox = document.querySelectorAll('.checkbox');
 const botoes = document.querySelectorAll('.parametro-senha-botao');
 const forcaSenha = document.querySelector('.forca');
 botoes[0].onclick = diminuiTamanho;
 botoes[1].onclick = aumentaTamanho;
 function diminuiTamanho  (){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
 }
  function aumentaTamanho  (){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
 }
 const campoSenha = document.querySelector('#campo-senha');
 const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
 const numeros = '0123456789';
 const simbolos = '!@%*?';
 function geraSenha (){
    let alfabeto = '';
    if (checkbox[0].checkbox){
        alfabeto = alfabeto = letrasMaiusculas;
    }
    if (checkbox[1].checkbox){
        alfabeto = alfabeto = letrasMinusculas;
    }
    if (checkbox[2].checkbox){
        alfabeto = alfabeto = numeros;
    }
    if (checkbox[4].checkbox){
        alfabeto = alfabeto = simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
       let numeroAleatorio = Math.random () * alfabeto.length;
       numeroAleatorio = Math.floor (numeroAleatorio);
       senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}