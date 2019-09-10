/* eslint-disable no-undef */
import { expect as expectChai } from 'chai';
import pagination from './index';

describe('PAGINATION TEST SUITE', () => {
  it('PAGINATION SHOULD BE A FUNCTION', () => {
    expectChai(pagination).to.be.a('function');
  });

  it('PAGINATION SHOULD RETURN [1]', () => {
    expectChai(pagination({ total: 1, activePage: 1 })).to.be.deep.equal([1]);
  });

  it('PAGINATION SHOULD RETURN [1, 2]', () => {
    expectChai(pagination({ total: 2, activePage: 1 })).to.be.deep.equal([1, 2]);
  });

  it('PAGINATION SHOULD RETURN [1, 2, 3, 4, 5]', () => {
    expectChai(pagination({ total: 5, activePage: 1 })).to.be.deep.equal([1, 2, 3, 4, 5]);
  });

  it('PAGINATION 1 SHOULD RETURN [1, 2, 3, ..., 6]', () => {
    expectChai(pagination({ total: 6, activePage: 1 })).to.be.deep.equal([1, 2, 3, '...', 6]);
  });

  it('PAGINATION 2 SHOULD RETURN [1, 2, 3, ..., 6]', () => {
    expectChai(pagination({ total: 6, activePage: 2 })).to.be.deep.equal([1, 2, 3, '...', 6]);
  });

  it('PAGINATION 3 SHOULD RETURN [1, 2, 3, 4, 5, 6]', () => {
    expectChai(pagination({ total: 6, activePage: 3 })).to.be.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it('PAGINATION 4 SHOULD RETURN [1, 2, 3, 4, 5, 6]', () => {
    expectChai(pagination({ total: 6, activePage: 4 })).to.be.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it('PAGINATION 5 SHOULD RETURN [1, \'...\', 4, 5, 6]', () => {
    expectChai(pagination({ total: 6, activePage: 5 })).to.be.deep.equal([1, '...', 4, 5, 6]);
  });

  it('PAGINATION 5 SHOULD RETURN [1, \'...\', 4, 5, 6]', () => {
    expectChai(pagination({ total: 6, activePage: 6 })).to.be.deep.equal([1, '...', 4, 5, 6]);
  });

  it('PAGINATION 6 SHOULD RETURN [1, \'...\', 6, \'...\', 8]', () => {
    expectChai(pagination({ total: 10, activePage: 6 })).to.be.deep.equal([1, '...', 5, 6, 7, '...', 10]);
  });
});
