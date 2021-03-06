/*
 * File: app/store/PresentationStore.js
 * Date: Mon Feb 27 2012 22:28:22 GMT+0100 (Mitteleuropäische Zeit)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Web Song Presenter.store.PresentationStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'PresentationStore',
            proxy: {
                type: 'ajax',
                url: 'mock/examplePresentationStore.json',
                reader: {
                    type: 'json',
                    root: 'rows'
                }
            },
            fields: [
                {
                    name: 'id'
                },
                {
                    name: 'title'
                }
            ]
        }, cfg)]);
    }
});