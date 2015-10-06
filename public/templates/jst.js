module.exports = {
	layouts: {
		'role': [
			'<a class="accordion-head" tabindex="0">',
				'<%=role%>',
			'</a>',
			'<div class="role-requests" style="display:none;"></div>'
		].join('\n')
		
	},

	templates: {
		'form-request': [
			'<a href="#" style="display:block;">*<%=name%></a>'
		].join('\n'),

		'form-A': [
			'<div class="modal-dialog">',
			    '<div class="modal-content">',
			      '<div class="modal-header">',
			        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
			        '<h4 class="modal-title" id="myModalLabel"><%=name%></h4>',
			      '</div>',
			      '<div class="modal-body">',
			      '<form>',
			          '<div class="form-group">',
			            '<label for="recipient-name" class="control-label">Recipient:</label>',
			            '<input type="text" class="form-control" id="recipient-name">',
			          '</div>',
			          '<div class="form-group">',
			            '<label for="recipient-email" class="control-label">Email:</label>',
			            '<input type="text" class="form-control" id="recipient-email">',
			          '</div>',
			          '<div class="form-group">',
			            '<label for="message-text" class="control-label">Message:</label>',
			            '<textarea class="form-control" id="message-text"></textarea>',
			          '</div>',
		          '</form>',
			      '</div>',
			      '<div class="modal-footer">',
			        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
			        '<button type="button" class="btn btn-primary tfp-save-js">Save changes</button>',
			      '</div>',
			    '</div>',
			'</div>'
		].join('\n')
	}
}