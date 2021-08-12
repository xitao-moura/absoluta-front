test("resultados devem possuir os mesmo atributos",
    () => {
        let geladeira = {
            preco: 1249.99,
            ano: '2017',
            modelo: 'Eletrolux'
        }
        expect(geladeira).toEqual({preco: 1249.99, ano: '2017', modelo: 'Eletrolux'})
})