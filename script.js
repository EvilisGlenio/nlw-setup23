/*primeiro eu encontro o formulário e guardo em uma constante*/
const form = document.querySelector('#form-habits')
/*Agora eu preciso pegar a biblioteca e instancia-lá aqui*/
const nlwSetup = new NLWSetup(form)

/*Irei pegar o botão do header*/
const button = document.querySelector('header button')

/* Quando o botão for acionado, uma função será invocada*/
button.addEventListener("click",add)

/*Qualquer mudança feita no formulário chamará a função save*/
form.addEventListener("change", save)

/*Quando a função for chamada...*/
function add() {
    /*HOJE receberá os dados do objeto Date, do método "toLocaleDateString", e ativar a função slice*/
    const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)/*se a data já tiver sido adcionada
    dayExists será TRUE*/

    /*Se dayExists for verdadeiro é pq o dia já foi adcionado*/
    if(dayExists){
        alert("Esta data já existe 🔴")
        return /* encerra a função */
    }
    /*Se o dayExists for false, é pq o dia ainda não foi inserido
    e será adcionado agora*/
    alert("Dia adcionado com sucesso ✔️")
    nlwSetup.addDay(today)
}
/*Quando a função for chamada ...*/
function save() {
    /*localStorage => um objeto que guarda informações na memória do browser
       getItem() é uma função que pede uma key e um valor como parâmetro
       JSON.stringify é uma biblioteca.função que transforma um objeto em String*/
    window.localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

/*JSON.parse é uma BIBLIOTECA.funçãp que converte a String em objeto
e adcionado ao "data"*/
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} 
/*sem o "|| {} / ou OBJETO VAZIO" a aplicação abriria em outro
 dispositivo com um erro, pois retornaria um objeto NULL*/

 /* Agora vamos adcionar o objeto 'data' ao metodo setData() e em seguida carrega-los com o load()
na página*/
nlwSetup.setData(data)
nlwSetup.load()