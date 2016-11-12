function intOnly(i) {
		if(i.value.length>0) {
			i.value = i.value.replace(/[^\d]+/g, ''); 
		}
	}	
function validmail(email1) {
	invalidChars = " /:,;";
	if (email1 == "")	{		alert("Invalid E-mail ID.");		return false;	}
	for (i=0; i<invalidChars.length; i++) 	{		badChar = invalidChars.charAt(i); 		if (email1.indexOf(badChar,0) > -1) { return false;	}}
	atPos = email1.indexOf("@",1)
	if (atPos == -1) 	{		alert("Invalid E-mail ID.");		return false;	}
	if (email1.indexOf("@",atPos+1) != -1) 	{	alert("Invalid E-mail ID.");		return false;	}
	periodPos = email1.indexOf(".",atPos)
	if (periodPos == -1) 	{		alert("Invalid E-mail ID.");		return false;	}
	if (periodPos+3 > email1.length) 	{		alert("Invalid E-mail ID.");		return false;	}
	return true;
}

function Trim(strValue) {
	var j=strValue.length-1;
	var i=0;
	while(strValue.charAt(i++)==' ');
	while(strValue.charAt(j--)==' ');
	return strValue.substr(--i,++j-i+1);}
	
	
function containsdigit(param){
	mystrLen = param.length;
	for(i=0;i<mystrLen;i++) 	{ 
		if((param.charAt(i)=="0") || (param.charAt(i)=="1") || (param.charAt(i)=="2") || (param.charAt(i)=="3") || (param.charAt(i)=="4") || (param.charAt(i)=="5") || (param.charAt(i)=="6") || (param.charAt(i)=="7") || (param.charAt(i)=="8") || (param.charAt(i)=="9") || (param.charAt(i)=="/")) 		{ 			return true; 		} 	} 
	return false; }
	
function trackConv(){   
       image =newImage(1,1);          
	   image.src = "www.googleadservices.com/pagead/conversion/959376801/?value=1.00&amp;currency_code=INR&amp;label=uQuiCLnSzFcQodu7yQM&amp;guid=ON&amp;script=0"; 
alert("Hi");
}
function submitfrm()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm.name.value=="") || (document.mfrm.name.value=="Enter your name")|| (Trim(document.mfrm.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm.name.focus();
		return false;
	}
for (var i = 0; i < document.mfrm.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm.name.value.charAt(i)) != -1) {
		alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm.name.focus();
		return false;		}
	  }	
	  if(document.mfrm.email.value!="Email Id")	{
		if (!validmail(document.mfrm.email.value))		{
			document.mfrm.email.focus();
			return false;		}		
	}
  if((document.mfrm.mobile.value=="Mobile No.") || (document.mfrm.mobile.value=="") || Trim(document.mfrm.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm.mobile.focus();
		return false;	 }
	
else if((document.mfrm.mobile.value.length<7) || (document.mfrm.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }
	   
	if(containsdigit(document.mfrm.mobile.value)==false){alert("Kindly Fill Correct Mobile Number!");
		document.mfrm.mobile.focus();
		return false;}
 if(document.mfrm.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm.type.focus();
		return false;
		}
if((document.mfrm.comment.value=="") || (document.mfrm.comment.value=="Full comment")|| (Trim(document.mfrm.comment.value))==false)	{
		alert("Kindly fill in your comment!"); 
		document.mfrm.comment.focus();
		return false;
	}
	
	/*trackConv();*/
}
	   
function submitfrm1()
{
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm1.name.value=="") || (document.mfrm1.name.value=="Full name")|| (Trim(document.mfrm1.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm1.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm1.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm1.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm1.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm1.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm1.name.focus();
		return false;		}
	  }
	  
	  	if(document.mfrm1.email.value!="Email Id")	{
		if (!validmail(document.mfrm1.email.value))		{
			document.mfrm1.email.focus();
			return false;		}		
	}		  
    if((document.mfrm1.mobile.value=="Mobile No.") || (document.mfrm1.mobile.value=="") || Trim(document.mfrm1.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm1.mobile.focus();
		return false;	 }	
		else if((document.mfrm1.mobile.value.length<7) || (document.mfrm1.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }
	else if(containsdigit(document.mfrm1.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm1.mobile.focus();
		return false;}
  if(document.mfrm1.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm1.type.focus();
		return false;
		}
		if(!document.mfrm1.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm1.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2.name.value=="") || (document.mfrm2.name.value=="Full name")|| (Trim(document.mfrm2.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2.name.focus();
		return false;		}
	  }
	  if(document.mfrm2.email.value!="Email Id")	{
		if (!validmail(document.mfrm2.email.value))		{
			document.mfrm2.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2.mobile.value=="Mobile No.") || (document.mfrm2.mobile.value=="") || Trim(document.mfrm2.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2.mobile.focus();
		return false;	 }
		else if((document.mfrm2.mobile.value.length<7) || (document.mfrm2.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2.mobile.focus();
		return false;}
    if(document.mfrm2.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2.type.focus();
		return false;
		}
	if(!document.mfrm2.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_1()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_1.name.value=="") || (document.mfrm2_1.name.value=="Full name")|| (Trim(document.mfrm2_1.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_1.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_1.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_1.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_1.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_1.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_1.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_1.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_1.email.value))		{
			document.mfrm2_1.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_1.mobile.value=="Mobile No.") || (document.mfrm2_1.mobile.value=="") || Trim(document.mfrm2_1.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_1.mobile.focus();
		return false;	 }
		else if((document.mfrm2_1.mobile.value.length<7) || (document.mfrm2_1.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_1.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_1.mobile.focus();
		return false;}
    if(document.mfrm2_1.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_1.type.focus();
		return false;
		}
	if(!document.mfrm2_1.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_1.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_2()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_2.name.value=="") || (document.mfrm2_2.name.value=="Full name")|| (Trim(document.mfrm2_2.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_2.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_2.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_2.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_2.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_2.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_2.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_2.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_2.email.value))		{
			document.mfrm2_2.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_2.mobile.value=="Mobile No.") || (document.mfrm2_2.mobile.value=="") || Trim(document.mfrm2_2.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_2.mobile.focus();
		return false;	 }
		else if((document.mfrm2_2.mobile.value.length<7) || (document.mfrm2_2.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_2.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_2.mobile.focus();
		return false;}
    if(document.mfrm2_2.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_2.type.focus();
		return false;
		}
	if(!document.mfrm2_2.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_2.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_3()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_3.name.value=="") || (document.mfrm2_3.name.value=="Full name")|| (Trim(document.mfrm2_3.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_3.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_3.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_3.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_3.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_3.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_3.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_3.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_3.email.value))		{
			document.mfrm2_3.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_3.mobile.value=="Mobile No.") || (document.mfrm2_3.mobile.value=="") || Trim(document.mfrm2_3.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_3.mobile.focus();
		return false;	 }
		else if((document.mfrm2_3.mobile.value.length<7) || (document.mfrm2_3.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_3.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_3.mobile.focus();
		return false;}
    if(document.mfrm2_3.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_3.type.focus();
		return false;
		}
	if(!document.mfrm2_3.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_3.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_4()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_4.name.value=="") || (document.mfrm2_4.name.value=="Full name")|| (Trim(document.mfrm2_4.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_4.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_4.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_4.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_4.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_4.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_4.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_4.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_4.email.value))		{
			document.mfrm2_4.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_4.mobile.value=="Mobile No.") || (document.mfrm2_4.mobile.value=="") || Trim(document.mfrm2_4.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_4.mobile.focus();
		return false;	 }
		else if((document.mfrm2_4.mobile.value.length<7) || (document.mfrm2_4.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_4.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_4.mobile.focus();
		return false;}
    if(document.mfrm2_4.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_4.type.focus();
		return false;
		}
	if(!document.mfrm2_4.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_4.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_5()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_5.name.value=="") || (document.mfrm2_5.name.value=="Full name")|| (Trim(document.mfrm2_5.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_5.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_5.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_5.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_5.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_5.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_5.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_5.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_5.email.value))		{
			document.mfrm2_5.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_5.mobile.value=="Mobile No.") || (document.mfrm2_5.mobile.value=="") || Trim(document.mfrm2_5.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_5.mobile.focus();
		return false;	 }
		else if((document.mfrm2_5.mobile.value.length<7) || (document.mfrm2_5.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_5.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_5.mobile.focus();
		return false;}
    if(document.mfrm2_5.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_5.type.focus();
		return false;
		}
	if(!document.mfrm2_5.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_5.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_6()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_6.name.value=="") || (document.mfrm2_6.name.value=="Full name")|| (Trim(document.mfrm2_6.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_6.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_6.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_6.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_6.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_6.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_6.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_6.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_6.email.value))		{
			document.mfrm2_6.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_6.mobile.value=="Mobile No.") || (document.mfrm2_6.mobile.value=="") || Trim(document.mfrm2_6.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_6.mobile.focus();
		return false;	 }
		else if((document.mfrm2_6.mobile.value.length<7) || (document.mfrm2_6.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_6.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_6.mobile.focus();
		return false;}
    if(document.mfrm2_6.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_6.type.focus();
		return false;
		}
	if(!document.mfrm2_6.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_6.accept.focus();
	return false;	}	
	/*trackConv();*/
}
function submitfrm2_7()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm2_7.name.value=="") || (document.mfrm2_7.name.value=="Full name")|| (Trim(document.mfrm2_7.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm2_7.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm2_7.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm2_7.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm2_7.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm2_7.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm2_7.name.focus();
		return false;		}
	  }
	  if(document.mfrm2_7.email.value!="Email Id")	{
		if (!validmail(document.mfrm2_7.email.value))		{
			document.mfrm2_7.email.focus();
			return false;		}		
	}			  
    if((document.mfrm2_7.mobile.value=="Mobile No.") || (document.mfrm2_7.mobile.value=="") || Trim(document.mfrm2_7.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm2_7.mobile.focus();
		return false;	 }
		else if((document.mfrm2_7.mobile.value.length<7) || (document.mfrm2_7.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }	
	if(containsdigit(document.mfrm2_7.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm2_7.mobile.focus();
		return false;}
    if(document.mfrm2_7.type.selectedIndex==0)
		{ alert("Please select Type");
		document.mfrm2_7.type.focus();
		return false;
		}
	if(!document.mfrm2_7.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm2_7.accept.focus();
	return false;	}	
	/*trackConv();*/
}


function submitfrm3()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm3.name.value=="") || (document.mfrm3.name.value=="Full name")|| (Trim(document.mfrm3.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm3.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm3.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm3.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm3.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm3.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm3.name.focus();
		return false;		}
	  }
	  	if(document.mfrm3.email.value!="Email Id")	{
		if (!validmail(document.mfrm3.email.value))		{
			document.mfrm3.email.focus();
			return false;		}		
	     }		  
    if((document.mfrm3.mobile.value=="Mobile No.") || (document.mfrm3.mobile.value=="") || Trim(document.mfrm3.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm3.mobile.focus();
		return false;	 }
		else if((document.mfrm3.mobile.value.length<7) || (document.mfrm3.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                document.mfrm3.mobile.focus();
				return false;
           }
			
	if(containsdigit(document.mfrm3.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm3.mobile.focus();
		return false;}

	if(!document.mfrm3.accept.checked)	{
		alert("Accept the Terms and Condition");
		document.mfrm3.accept.focus();
		return false;	}	
	/*trackConv();*/
} 
function submitfrm4()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm4.name.value=="") || (document.mfrm4.name.value=="Full name")|| (Trim(document.mfrm4.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm4.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm4.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm4.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm4.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm4.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm4.name.focus();
		return false;		}
	  }
	  if(document.mfrm4.email.value!="Email Id")	{
		if (!validmail(document.mfrm4.email.value))		{
			document.mfrm4.email.focus();
			return false;		}		
	}	
	  		  
    if((document.mfrm4.mobile.value=="Mobile No.") || (document.mfrm4.mobile.value=="") || Trim(document.mfrm4.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm4.mobile.focus();
		return false;	 }	
		else if((document.mfrm4.mobile.value.length<7) || (document.mfrm4.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }
	if(containsdigit(document.mfrm4.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm4.mobile.focus();
		return false;}
		
  if(document.mfrm4.type.selectedIndex==0)
		{ alert("Please select type");
		document.mfrm4.type.focus();
		return false;
		}
			if((document.mfrm4.date.value=="") || (Trim(document.mfrm4.date.value))==false)	{
		alert("Selectin pick up date!"); 
		document.mfrm4.date.focus();
		return false;
	}
	if((document.mfrm4.time.value=="") || (Trim(document.mfrm4.time.value))==false)	{
		alert("Kindly fill in pick up time!"); 
		document.mfrm4.time.focus();
		return false;
	}
		  if(document.mfrm4.time_fix.selectedIndex==0)
		{ alert("Please select AM OR PM");
		document.mfrm4.time_fix.focus();
		return false;
		}
if(!document.mfrm4.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm4.accept.focus();
	return false;	}	
	/*trackConv();*/
} 
function submitfrm4_1()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm4_1.name.value=="") || (document.mfrm4_1.name.value=="Full name")|| (Trim(document.mfrm4_1.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm4_1.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm4_1.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm4_1.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm4_1.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm4_1.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm4_1.name.focus();
		return false;		}
	  }
	  if(document.mfrm4_1.email.value!="Email Id")	{
		if (!validmail(document.mfrm4_1.email.value))		{
			document.mfrm4_1.email.focus();
			return false;		}		
	}	
	  		  
    if((document.mfrm4_1.mobile.value=="Mobile No.") || (document.mfrm4_1.mobile.value=="") || Trim(document.mfrm4_1.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm4_1.mobile.focus();
		return false;	 }	
		else if((document.mfrm4_1.mobile.value.length<7) || (document.mfrm4_1.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }
	if(containsdigit(document.mfrm4_1.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm4_1.mobile.focus();
		return false;}
		
  if(document.mfrm4_1.type.selectedIndex==0)
		{ alert("Please select type");
		document.mfrm4_1.type.focus();
		return false;
		}
			if((document.mfrm4_1.date.value=="") || (Trim(document.mfrm4_1.date.value))==false)	{
		alert("Selectin pick up date!"); 
		document.mfrm4_1.date.focus();
		return false;
	}
	if((document.mfrm4_1.time.value=="") || (Trim(document.mfrm4_1.time.value))==false)	{
		alert("Kindly fill in pick up time!"); 
		document.mfrm4_1.time.focus();
		return false;
	}
		  if(document.mfrm4_1.time_fix.selectedIndex==0)
		{ alert("Please select AM OR PM");
		document.mfrm4_1.time_fix.focus();
		return false;
		}
if(!document.mfrm4_1.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm4_1.accept.focus();
	return false;	}	
	/*trackConv();*/
} 	   
function submitfrm4_2()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm4_2.name.value=="") || (document.mfrm4_2.name.value=="Full name")|| (Trim(document.mfrm4_2.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm4_2.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm4_2.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm4_2.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm4_2.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm4_2.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm4_2.name.focus();
		return false;		}
	  }
	  if(document.mfrm4_2.email.value!="Email Id")	{
		if (!validmail(document.mfrm4_2.email.value))		{
			document.mfrm4_2.email.focus();
			return false;		}		
	}	
	  		  
    if((document.mfrm4_2.mobile.value=="Mobile No.") || (document.mfrm4_2.mobile.value=="") || Trim(document.mfrm4_2.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm4_2.mobile.focus();
		return false;	 }	
		else if((document.mfrm4_2.mobile.value.length<7) || (document.mfrm4_2.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }
	if(containsdigit(document.mfrm4_2.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm4_2.mobile.focus();
		return false;}
		
  if(document.mfrm4_2.type.selectedIndex==0)
		{ alert("Please select type");
		document.mfrm4_2.type.focus();
		return false;
		}
			if((document.mfrm4_2.date.value=="") || (Trim(document.mfrm4_2.date.value))==false)	{
		alert("Selectin pick up date!"); 
		document.mfrm4_2.date.focus();
		return false;
	}
	if((document.mfrm4_2.time.value=="") || (Trim(document.mfrm4_2.time.value))==false)	{
		alert("Kindly fill in pick up time!"); 
		document.mfrm4_2.time.focus();
		return false;
	}
		  if(document.mfrm4_2.time_fix.selectedIndex==0)
		{ alert("Please select AM OR PM");
		document.mfrm4_2.time_fix.focus();
		return false;
		}
if(!document.mfrm4_2.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm4_2.accept.focus();
	return false;	}	
	/*trackConv();*/
} 	   
function submitfrm4_3()
{ 
	var regMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
	var dt,mdate;dt=new Date();	
	var alpha=/^[a-zA-Z\ ]*$/;
	var alphanum=/^[a-zA-Z0-9]*$/;
	var num=/^[0-9]*$/;
	var space=/^[\ ]*$/;
	var iChars ="/@#$%^&*()+=-[]\\\';,.{}|\":<>?!";

    if((document.mfrm4_3.name.value=="") || (document.mfrm4_3.name.value=="Full name")|| (Trim(document.mfrm4_3.name.value))==false)	{
		alert("Kindly fill in your name!"); 
		document.mfrm4_3.name.focus();
		return false;
	}
	else if(containsdigit(document.mfrm4_3.name.value)==true)	{
		alert("name contains numbers!");
		document.mfrm4_3.name.focus();
		return false;
	}
	for (var i = 0; i < document.mfrm4_3.name.value.length; i++) {
		if (iChars.indexOf(document.mfrm4_3.name.value.charAt(i)) != -1) {
			alert ("name has special characters.\n Please remove them and try again.");
		document.mfrm4_3.name.focus();
		return false;		}
	  }
	  if(document.mfrm4_3.email.value!="Email Id")	{
		if (!validmail(document.mfrm4_3.email.value))		{
			document.mfrm4_3.email.focus();
			return false;		}		
	}	
	  		  
    if((document.mfrm4_3.mobile.value=="Mobile No.") || (document.mfrm4_3.mobile.value=="") || Trim(document.mfrm4_3.mobile.value)==false)	 {
		alert("Kindly fill in your Mobile Number!");
		document.mfrm4_3.mobile.focus();
		return false;	 }	
		else if((document.mfrm4_3.mobile.value.length<7) || (document.mfrm4_3.mobile.value.length>10))
           {
                alert("Enter 7 to 10 Digits Contact Number");
                return false;
           }
	if(containsdigit(document.mfrm4_3.mobile.value)==false){alert("Kindly fill CORRECT Mobile Number!");
		document.mfrm4_3.mobile.focus();
		return false;}
		
  if(document.mfrm4_3.type.selectedIndex==0)
		{ alert("Please select type");
		document.mfrm4_3.type.focus();
		return false;
		}
			if((document.mfrm4_3.date.value=="") || (Trim(document.mfrm4_3.date.value))==false)	{
		alert("Selectin pick up date!"); 
		document.mfrm4_3.date.focus();
		return false;
	}
	if((document.mfrm4_3.time.value=="") || (Trim(document.mfrm4_3.time.value))==false)	{
		alert("Kindly fill in pick up time!"); 
		document.mfrm4_3.time.focus();
		return false;
	}
		  if(document.mfrm4_3.time_fix.selectedIndex==0)
		{ alert("Please select AM OR PM");
		document.mfrm4_3.time_fix.focus();
		return false;
		}
if(!document.mfrm4_3.accept.checked)	{
	alert("Accept the Terms and Condition");
	document.mfrm4_3.accept.focus();
	return false;	}	
	/*trackConv();*/
} 	   	   