Ext.define('casco.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function(){
    	var me = this;
    	var view = this.getView();
    	var form = view.down("form");
    	Ext.Ajax.request({
			url: API + 'login',
			params: form.getValues(),
			withCredentials: true,
			success: function(response){
				var d = Ext.decode(response.responseText);
				if(d.code != 0){
					Ext.Msg.alert('Error', 'Authentication failure.');
				}else{
					localStorage.setItem("user", JSON.stringify(d.data));
					me.getView().destroy();
					Ext.widget('selectProject');
				}
			}
		});
    },
    
    onSelectClick: function(){
    	var me = this;
    	var project_id = this.getView().down('form combo').getValue();
		
    	this.redirectTo('project/'+project_id, true);
    	location.reload();
    },
    onManage: function(){
    	this.redirectTo('manage', true);
    	location.reload();
    }
});