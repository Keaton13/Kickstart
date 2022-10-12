import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x36431357db6B6c4711632dEDDDc6314d8B172cFa"
);

export default instance;
