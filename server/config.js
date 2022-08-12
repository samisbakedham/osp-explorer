module.exports = {
  port: process.env.PORT || 8000,
  database: './db.json',
  ethInstance:
    process.env.ETH_INSTANCE ||
    'wss://candleexplorer.com/socket',
  ledgerContract: '0x4f7f56d57607e346ff8719c9f34cba3bbccae71f',
  routerRegistryContract: '0x2f11656af5d1e9be634a8d00417cc05ebb43fc08',
  backup: process.env.BACKUP,
  initialBlock: 10012234,
  verifySig: false,
  ospReportTimeout: 120, // 120 minutes
  tokens: [
    {
      name: 'CNDL',
      address: '0x0000000000000000000000000000000000000000',
    },
    {
      name: 'WCNDL',
      address: '0x85FA00f55492B0437b3925381fAaf0E024747627',
    },
  ],
};
