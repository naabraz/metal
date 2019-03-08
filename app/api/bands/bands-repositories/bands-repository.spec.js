const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

const database = require('../../../managers/database');
const repository = require('./bands-repository');

describe('User wants to list all bands from base', () => {
  const sandbox = sinon.createSandbox();
  const bandsRepositoryResponse = [{
    _id: '5ae4ee0f66a91ad6dd98144e',
    name: 'Alcest',
    country: '5ae5e5ad66a91ad6dd9815be',
  }];

  beforeEach(() => {
    sandbox.stub(database, 'listCollection').resolves(bandsRepositoryResponse);
    sandbox.stub(database, 'insertDocument').resolves({ success: true });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return bands collection', async () => {
    const bands = await repository.listBands();

    expect(bands).to.be.an('array');
    expect(bands).to.deep.equal(bandsRepositoryResponse);
  });

  it('should add band to collection', async () => {
    const newBand = { name: 'Opeth' };
    const response = await repository.addBand(newBand);

    expect(response).to.be.an('object');
    expect(response).to.deep.equal({ success: true });
  });
});
