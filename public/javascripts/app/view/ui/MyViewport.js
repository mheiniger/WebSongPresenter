/*
 * File: app/view/ui/MyViewport.js
 * Date: Thu Feb 02 2012 22:12:53 GMT+0100 (Mitteleuropäische Zeit)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'border'
                    },
                    title: 'Web Song Presenter',
                    items: [
                        {
                            xtype: 'gridpanel',
                            title: 'Lied',
                            hideHeaders: true,
                            store: 'MyJsonStore1',
                            region: 'center',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'string',
                                    text: 'String'
                                }
                            ],
                            viewConfig: {

                            }
                        },
                        {
                            xtype: 'panel',
                            width: 150,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            region: 'west',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    width: 150,
                                    title: 'Reihenfolge',
                                    hideHeaders: true,
                                    store: 'MyJsonStore',
                                    flex: 1,
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'string',
                                            flex: 1,
                                            text: 'String'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    height: 200,
                                    width: 148,
                                    title: 'Vorschau'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Datei'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});