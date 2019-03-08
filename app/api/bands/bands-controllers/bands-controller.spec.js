const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

const bandsService = require('../bands-services');
const bandsController = require('../bands-controllers');

describe('User access route to list bands', () => {
  const sandbox = sinon.createSandbox();
  const bandsRepositoryResponse = [{
    _id: '5ae4ee0f66a91ad6dd98144e',
    name: 'Alcest',
    country: '5ae5e5ad66a91ad6dd9815be',
  }];

  beforeEach(() => {
    sandbox.stub(bandsService, 'listBands').resolves(bandsRepositoryResponse);
    sandbox.stub(bandsService, 'addBand').resolves({ success: true });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should list all bands', async () => {
    const response = await bandsController.listBands();

    expect(response).to.be.an('array');
    expect(response).to.deep.equal(bandsRepositoryResponse);
  });

  it('should add band', async () => {
    const newBand = { name: 'Opeth' };
    const response = await bandsController.addBand(newBand);

    expect(response).to.be.an('object');
    expect(response).to.deep.equal({ success: true });
  });
});
