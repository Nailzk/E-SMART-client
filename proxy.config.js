var HttpsProxyAgent = require('https-proxy-agent');

var proxyConfig = [
  {
    context: '/api/products',
    pathRewrite: { "^/api/products": "" },
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: true,
  },
  {
    context: '/api/auth',
    pathRewrite: { "^/api/auth": "" },
    target: 'http://localhost:3000',
    secure: false,
    changeOrigin: true,
  },
  {
    context: '/api/storage',
    pathRewrite: { "^/api/storage": "" },
    target: 'http://localhost:3002',
    secure: false,
    changeOrigin: true,
  },
  {
    context: '/crm',
    pathRewrite: { "^/crm": "" },
    target: 'http://localhost:4222',
    secure: false,
    changeOrigin: true,
  },
];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function (entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);