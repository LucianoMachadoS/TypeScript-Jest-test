import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};
afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {

  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Luciano', 'Machado', '111.111');
    expect(sut).toHaveProperty('firstName', 'Luciano'); // Testando as propriedades, e verificando o retorno
    expect(sut).toHaveProperty('lastName', 'Machado');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for Individual Customer', () => {
    const sut = createIndividualCustomer('Luciano', 'Machado', '111.111');
    expect(sut.getName()).toBe('Luciano Machado');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Luciano', '111.111');
    expect(sut).toHaveProperty('name', 'Luciano');
    expect(sut).toHaveProperty('cnpj', '111.111');
  });

  it('should have methods to get name and idn for Enterprise Customer', () => {
    const sut = createEnterpriseCustomer('Luciano', '111.111');
    expect(sut.getName()).toBe('Luciano');
    expect(sut.getIDN()).toBe('111.111');
  });
});
