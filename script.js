function cadPessoa(nome, sobrenome, email, altura, sexo){
    let tb = document.getElementById('tbPessoas');
    let qtddLinhas = tb.rows.length;
    let linha = tb.insertRow(qtddLinhas);

    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellSobrenome = linha.insertCell(2);
    let cellEmail = linha.insertCell(3);
    var cellAltura = linha.insertCell(4);
    var cellSexo = linha.insertCell(5);

    cellCodigo.innerHTML = qtddLinhas;
    cellNome.innerHTML= nome;
    cellSobrenome.innerHTML = sobrenome;
    cellEmail.innerHTML = email;
    cellAltura.innerHTML = altura;
    cellSexo.innerHTML = sexo;

}
