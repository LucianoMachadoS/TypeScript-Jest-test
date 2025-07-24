describe('Primitive values', ()=> {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // Aqui eu colocaria que espero o valor do tipo "expect" por exemplo do tipo number, e o toBe seria o valor que eu deveria receber neste test
    expect(number).toEqual(10);
  })

  it('should split tests', () => {
    const number = 10;

    expect(number).not.toBeFalsy(); // not nesse contexto checa se algum numero não é falsy, lembrando que falsy não é somente o valor boolean e sim valores que o typescript pode reconhecer com um valor falso.
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001); //Checar numeros proximos
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();
  });
})

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luciano', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);// Verificando se o valores são iguais
    expect(person).toHaveProperty('age');// Verificando se existe a propriedade ou a chave com o nome 'age'
    expect(person).toHaveProperty('age', 30);
    expect(person).not.toHaveProperty('lastname');
  });
});
