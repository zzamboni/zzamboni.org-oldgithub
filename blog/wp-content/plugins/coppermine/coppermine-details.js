var sendCoppermineComment = function(msg_author,pid,msg_body)
{

    new Ajax.Request("wp-content/plugins/coppermine/coppermine-details.php?mode=addcomment&msg_author="+msg_author+"&pid="+pid+"&msg_body="+msg_body,
                        {
                    onSuccess: function(t)
                            {
                                //$('imageCoppermineDetails').innerHTML = t.responseText;
                                new Ajax.Request("wp-content/plugins/coppermine/coppermine-details.php?pic="+$('lightboxImage').src,
					{
						onSuccess: function(t)
						{
							$('imageCoppermineDetails').innerHTML = t.responseText;
						},
						onFailure: function(r)
						{
							//alert("error");
							$('imageCoppermineDetails').innerHTML = '';
						}
					}
				 );
                            },
                            onFailure: function(r)
                            {
                                
                            }
                        }
                     );
}

var sendCoppermineRating = function(pid,value)
{

    new Ajax.Request("wp-content/plugins/coppermine/coppermine-details.php?mode=rating&pid="+pid+"&rating="+value,
                        {
                    onSuccess: function(t)
                            {
                                //$('imageCoppermineDetails').innerHTML = t.responseText;
                                new Ajax.Request("wp-content/plugins/coppermine/coppermine-details.php?pic="+$('lightboxImage').src,
					{
						onSuccess: function(t)
						{
							$('imageCoppermineDetails').innerHTML = t.responseText;
						},
						onFailure: function(r)
						{
							//alert("error");
							$('imageCoppermineDetails').innerHTML = '';
						}
					}
				 );
                            },
                            onFailure: function(r)
                            {
                                
                            }
                        }
                     );
}
