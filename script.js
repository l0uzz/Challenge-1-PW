const lista = document.querySelector(".lista");

let adicionar = document.querySelector("#adicionar").addEventListener('click', () => {
    let texto = document.createTextNode(document.querySelector("#entradaTexto").value);
    
    if(texto.value == 0 || !/\S/.test(texto.value)){
        return null;
    } else {
        let listaItem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        lista.appendChild(listaItem);
        listaItem.appendChild(checkbox);
        listaItem.appendChild(texto);
        document.querySelector('#entradaTexto').value = "";
    }
});

let remover = document.querySelector("#remover").addEventListener('click', () => {
    const itens = [].slice.call(lista.childNodes);
    let item;

    while(item = itens.pop()){
        if(item.firstChild && item.firstChild.checked){
            lista.removeChild(item);
        }
    }
});