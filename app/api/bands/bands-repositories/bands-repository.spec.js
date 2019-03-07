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

  const collectionReturn = {
    find() {
      return {
        toArray() {
          return bandsRepositoryResponse;
        },
      };
    },
  };

  beforeEach(() => {
    sandbox.stub(database, 'startConnection').resolves({});
    sandbox.stub(database, 'closeConnection').resolves({});
    sandbox.stub(database, 'base').resolves({});
    sandbox.stub(database, 'collection').resolves(collectionReturn);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should connect to database', async () => {
    const startConnection = await database.startConnection();

    expect(startConnection).to.be.an('object');
  });

  it('should select base', async () => {
    const base = await database.base({});

    expect(base).to.be.an('object');
  });

  it('should close connection', async () => {
    const closeConnection = await database.closeConnection();

    expect(closeConnection).to.be.an('object');
  });

  it('should return bands collection', async () => {
    const bands = await repository.listBands();

    expect(bands).to.be.an('array');
    expect(bands).to.deep.equal(bandsRepositoryResponse);
  });
});
