const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

const bandsService = require('./bands-service');
const bandsRepository = require('../bands-repositories/bands-repository');

describe('User wants to list all bands', () => {
  const sandbox = sinon.createSandbox();
  const bandsRepositoryResponse = [{
    _id: '5ae4ee0f66a91ad6dd98144e',
    name: 'Alcest',
    country: '5ae5e5ad66a91ad6dd9815be',
  }];

  beforeEach(() => {
    sandbox.stub(bandsRepository, 'listBands').resolves(bandsRepositoryResponse);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should list all bands', async () => {
    const response = await bandsService.listBands();

    expect(response).to.be.an('array');
    expect(response).to.deep.equal(bandsRepositoryResponse);
  });
});
