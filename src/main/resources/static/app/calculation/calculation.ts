export class Calculation{


constructor(
  public vatRate: string,
  public valueAddedTax?: string,
  public priceWoVat?: string,
  public priceInclVat?: string)  {}
}
