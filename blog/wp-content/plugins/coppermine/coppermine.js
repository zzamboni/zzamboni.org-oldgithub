/*
 * This file contains javascript functions required by the admin section
 * for the Wordpress Coppermine Integration plugin.
 *
 * http://www.stilglog.com/wordpress-plugins/coppermine-plugin/
 *
 * copyright (c) 2005 Martijn van der Kwast
 */

function cpg_insert_image(pid) {
	var ta=document.getElementById("content");

	// type (image/thumb)
	var st=document.getElementById("cpg-image-insert-select-type").value;

	// align
	var al=document.getElementById("cpg-image-insert-select-style").value;

	// shadow
	var shadow=document.getElementById("cpg-image-insert-select-shadow").value;

	// link style
	var link=document.getElementById("cpg-image-insert-select-linktype").value;

	// condition
	//var cond=document.getElementById("cpg-image-insert-select-condition").value;

	var opts=pid+':'+al;
	if (shadow!='')
		opts+=':s='+shadow;
	if (link)
		opts+=':l='+link;
//	if (cond)
//		opts+=':i='+cond;

	if (st=="thumbnail") {
		cpg_edInsertContent(ta,"[thumb:"+opts+"]");
	}
	else {
		cpg_edInsertContent(ta,"[image:"+opts+"]");
	}
}


function get_group_opts()
{
	var ta=document.getElementById("content");

	// style
	var st=document.getElementById("cpg-image-insert-gs").value;

	// shadow
	var shadow=document.getElementById("cpg-image-insert-gsd").value;

	// condition
	//var cond=document.getElementById("cpg-image-insert-gcd").value;

	var opts='';
	if (st!='')
		opts+=':'+st;
	if (shadow!='')
		opts+=':s='+shadow;
//	if (cond!='')
//		opts+=':i='+cond;

	return opts;
}

function cpg_insert_album() {
	var aid=document.getElementById("cpg-image-insert-select-album").value;
	if (aid=='')
		return;
	var ta=document.getElementById("content");
	var num=document.getElementById("cpg-image-insert-select-album-number").value;
	var opts=get_group_opts();
	cpg_edInsertContent(ta,"[album:"+aid+","+num+opts+"]");
}

function cpg_insert_grouptag() {
	var ta=document.getElementById("content");
	var opts=get_group_opts();
	cpg_edInsertContent2(ta,"[group"+opts+"]", "[/group]");
}

function cpg_insert_nl() {
	var ta=document.getElementById("content");
	cpg_edInsertContent(ta,"[newline]\n");
}

function cpg_move_right() {
	for (i=cpg_inserter_num-1; i>0; i--) {
		var or=document.getElementById('insert-image-'+i);
		var ol=document.getElementById('insert-image-'+(i-1));
		or.innerHTML=ol.innerHTML;
	}
	ol.innerHTML='';
}

function cpg_add_image(pid, thumb, title) {
	var i;
	var ta=document.getElementById("content");
	for (i=cpg_inserter_num-1; i>=0; i--) {
		var o=document.getElementById('insert-image-'+i);	
		if (!(o.childNodes == null || o.childNodes.length>0))
			break;
	}
	if (i<0) {
		cpg_move_right();
		i=0;
	}
	li=document.getElementById('insert-image-'+i);
	li.innerHTML = '<img src="'+thumb+'" alt="'+title+'" onclick="cpg_insert_image(\''+pid+'\')" />';
}

/*
 from quicktags.js included in WordPress, by 
 Alex King (http://www.alexking.org/)
 duplicated here because on Safari quicktags are 
 disabled, which means edInsertContent is not 
 available.

 FIXME: you cannot select the textare with myField 
        if tinyMCE is enabled
*/
function cpg_edInsertContent(myField, myValue) {

	if (typeof(tinyMCE) == 'undefined') {

		// STANDARD HTML TEXTAREA
		
		//IE support
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = myValue;
			myField.focus();
		}
		//MOZILLA/NETSCAPE support
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			myField.value = myField.value.substring(0, startPos)
						  + myValue 
						  + myField.value.substring(endPos, myField.value.length);
			myField.focus();
			myField.selectionStart = startPos + myValue.length;
			myField.selectionEnd = startPos + myValue.length;
		} else {
			myField.value += myValue;
			myField.focus();
		}
	}
	else {
		// TINYMCE SUPPORT
		tinyMCE.activeEditor.selection.setContent(myValue);
		tinyMCE.execInstanceCommand('mce_editor_0','mceInsertContent', false, myValue);
		
	}
}

function cpg_edInsertContent2(myField, myValue1, myValue2) {

	if (typeof(tinyMCE) == 'undefined') {
		
		//IE support
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = myValue1 + sel.text + myValue2;
			myField.focus();
		}
		//MOZILLA/NETSCAPE support
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var val = myValue1 + myField.value.substring(startPos, endPos) + myValue2;
			myField.value = myField.value.substring(0, startPos)
						  + val 
						  + myField.value.substring(endPos, myField.value.length);
			myField.focus();
			myField.selectionStart = startPos + myValue.length;
			myField.selectionEnd = startPos + myValue.length;
		} else {
			myField.value += myValue1 + myValue2;
			myField.focus();
		}
	} else {

		var sel='';
		if (tinyMCE.isMSIE) {
			var rng = doc.selection.createRange();
			sel = rng.text;
		} else {
			sel = tinyMCE.getInstanceById('mce_editor_0').getSel().toString();
		}

		val = myValue1 + sel + myValue2;
		tinyMCE.execInstanceCommand('mce_editor_0','mceInsertContent', false, val);
		tinyMCE.triggerNodeChange();
		
	}
}

/*
 * Toggle button+div thing
 */
function cpg_togglediv_but(button, divid)
{
	var mydiv=document.getElementById(divid);

	if (mydiv.style.display=='none') {
		mydiv.style.display='block';
		if (button.className == 'cpg-expand') {
			button.className = 'cpg-collapse';
		}
	}
	else {
		mydiv.style.display='none';
		if (button.className == 'cpg-collapse') {
			button.className = 'cpg-expand';
		}
	}
}

function cpg_showdiv_but(button, divid)
{
	cpg_togglediv_but(button, divid);
	button.style.display="none";
}

function cpg_hidediv_but(button, divid, bshowid)
{
	cpg_togglediv_but(button, divid);
	button2 = document.getElementById(bshowid);
	button2.style.display="block";
}

