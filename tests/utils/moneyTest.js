import {formatCurrency} from '../../scripts/utils/money.js';


describe('test suite: formatCurrency',() => {
  it('converts cents into dollar',() => {
    expect(formatCurrency(2095)).toEqual('2095.00');
  });
  it('works with zero',() => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  it('rounds up nearest',() => {
    expect(formatCurrency(2095.5)).toEqual('2096.00');
  });
});