// JavaScript Document
var Dianji=0;
var Dianji2=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("我这么帅气善良可爱的男孩哪里找？");
		   		
	   }else if(Dianji==3){
		   		alert("求求你再好好想想");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("房子写你名");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		Dianji2++;
		if(Dianji2==1){
	   			alert("小姐姐你真美，谢谢你同意了");
	   }else if(Dianji2==2){
		   		alert("你是我见过的最可爱的女孩");
		   		
	   }else if(Dianji2==3){
		   		alert("姐姐是小公主");
		   		
	   }else if(Dianji2==4){
		   		alert("姐姐真有眼光");
		   		
	  }else if(Dianji2==5){
		   		alert("姐姐是不是早就爱上我了？哈哈");
	  }else if(Dianji2==6){
		   		alert("姐姐我爱你");
	  }else if(Dianji2==7){
		   		alert("你是我的狗子了");
		  		Dianji2=1;
	  }
	}
	

}