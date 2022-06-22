function imprimiDado(dado) {
    console.log("outras tarefas")
    console.log(dado());
}

imprimiDado(function() {
    return "Ola mundo!"
})