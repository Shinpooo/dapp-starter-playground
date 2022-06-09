"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("tailwindcss/tailwind.css");
var consts_1 = require("@/lib/consts");
require("@rainbow-me/rainbowkit/styles.css");
var wagmi_1 = require("wagmi");
var rainbowkit_1 = require("@rainbow-me/rainbowkit");
var _a = rainbowkit_1.configureChains([wagmi_1.chain.polygon], [rainbowkit_1.apiProvider.infura(process.env.NEXT_PUBLIC_INFURA_ID), rainbowkit_1.apiProvider.fallback()]), chains = _a.chains, provider = _a.provider;
var connectors = rainbowkit_1.getDefaultWallets({ appName: consts_1.APP_NAME, chains: chains }).connectors;
var wagmiClient = wagmi_1.createClient({ autoConnect: true, connectors: connectors, provider: provider });
var App = function (_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(wagmi_1.WagmiConfig, { client: wagmiClient },
        React.createElement(rainbowkit_1.RainbowKitProvider, { chains: chains },
            React.createElement(Component, __assign({}, pageProps)))));
};
exports["default"] = App;
