import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4080bEDeED7B7538Dc626Be450B875cC46A37df1"
);

export default instance;
