pimcore.registerNS("pimcore.plugin.pimcloud");

pimcore.plugin.pimcloud = Class.create(pimcore.plugin.admin, {
    getClassName: function() {
        return "pimcore.plugin.pimcloud";
    },

    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
    },
 
    pimcoreReady: function (params,broker){
        // alert("Pimcloud Plugin Ready!");
    }
});

var pimcloudPlugin = new pimcore.plugin.pimcloud();

