// usage for bookmarklet
// javascript:void(function(){var%20d=document,scr=d.createElement("script");scr.src="https://raw.githubusercontent.com/rtokiwa/rtokiwa_jslib/master/rm_html_out_of_sel.js";scr.type="text/javascript";scr.defer=true;d.getElementsByTagName("head").item(0).appendChild(scr)}())
var s=getSelection(),d=document,b=d.body;
var rr=d.createRange();
for(var i=0,r,rp,c=s.rangeCount;i<c;++i,rp=r){
	r=s.getRangeAt(i);
	//選択範囲が有効かどうかチェック
	if(r.startContainer!=r.endContainer||r.startOffset!=r.endOffset){
		//削除開始位置
		if(i==0){
		  rr.setStart(b,0);
		}else{
		  rr.setStart(rp.endContainer,rp.endOffset);
		}
		//削除終了位置
		rr.setEnd(r.startContainer,r.startOffset);
		//削除範囲のコンテンツを削除
		rr.deleteContents();
		//最後の選択範囲の場合
		if(i==c-1){
			rr.setStart(r.endContainer,r.endOffset);
			rr.setEnd(b,b.childNodes.length);
			rr.deleteContents();
		}
	}
}
//選択範囲を解除
s.removeAllRanges();
