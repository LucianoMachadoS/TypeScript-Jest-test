import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have properties name and price', () => {
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');//Testando propriedades
    expect(sut.price).toBeCloseTo(49.9);// Para testar numeros flutuantes, passamos o parametro como metodo no argumento e fazemos a verificação com o toBeCloseTo
  })

})
