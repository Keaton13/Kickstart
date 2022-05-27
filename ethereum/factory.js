import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xC39cb0983767E2d82abcBE9b19dFe3C92Dc3B221'
);

export default instance;