const btn = document.querySelector('#btn-whatsapp');

function mensagem(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo intagram.";
    const numero = '5561985060576';
    const msgFormatada = encodeURIComponent(mensagem);

    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
}