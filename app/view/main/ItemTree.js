Ext.define('casco.view.main.ItemTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.itemtree',
    requires: ['casco.store.TreeItems'],
    displayField: 'name',

    header: false,
    rootVisible : false,
    initComponent: function(){
    	var me = this;
    	this.store = Ext.create('casco.store.TreeItems', {
    		proxy: {
    			extraParams: {
    				project_id: localStorage.project_id,
    				document_id: me.document_id //用于过滤与之相关的文档
    			}
    		}
    	});
    	
    	this.callParent();
    }
})