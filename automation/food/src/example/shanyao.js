module.exports =  `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>【山药】介绍，山药优点、缺点，山药怎么样-食材介绍-食材大全-食材比较-一起比</title>
<meta name="keywords" content="山药介绍，山药怎么样，食材比较，一起比" />
<meta name="description" content="山药介绍：介绍山药的基本信息、山药热量表信息等。选食材先上一起比" />
<link href="styles/food_introduce.css" rel="stylesheet" type="text/css" media="all"/>
<script type="text/javascript" src="../system_scripts/jquery-1.7.2.js"></script>
<script type="text/javascript" src="scripts/food_introduce.js"></script>
<script type="text/javascript" src="../system_scripts/navi.js"></script>
<script type="text/javascript" src="../system_scripts/taobao_external_reference.js"></script>
<link href="../system_styles/navi.css" rel="stylesheet" type="text/css" media="all"/>
<script type="text/javascript">
$(function()
{
	$("#content_reputation").focusin(function()
	{
		$(this).val("");
	});
	$('#content_reputation').click(function()
	{
		var username = "";
		var str = "http://www.1qibi.com/food/food_introduce.php?id=1235047";
		if(!username)
		{
			alert("请您先登录，谢谢！");
			window.location.href='../system_users/login.php?url=http://www.1qibi.com/food/food_introduce.php?id=1235047';
		}  	
	});
	$("#prevent_default_behaviour").click(function()
	{
		alert("请您先登录，谢谢！");
		window.location.href='../system_users/login.php?url=http://www.1qibi.com/food/food_introduce.php?id=1235047';
		return false;
	});
	
// 评论内容
	var div=$('#reputation_div');
	var li=$('.reputation_navi');
	var dataArr = {};
	
	li.click(function()
	{
		var navi = $(this).attr('name');
		var id = this.value;
        var field1 = 'navi_reputation';
	    var field2 = 'food_id';
	    var page_button = 'page_button';
	    var page = '首页';
	    eval('dataArr.'+page_button+'=page');
		eval('dataArr.'+field2+'=this.value');     
		eval('dataArr.'+field1+'=navi');           	 
		$.ajax
		({
			async:true,
			data:dataArr,
			cache:false,
			type:'post',
			url:'food_feedback_reputation.php',
			success:function(data)
			{
				div.html(data);	  
				
				$(".div_reply_form").hide();
				$(".reply").click(function()
				{
					$(this).parents('p').next().toggle();
				});
				$(".Reply_Submit").click(function()
				{
					var dataArr = {};
					var field_Form_Reply = $(".myForm_Reply").attr('name');
					var field_Text = $(".Reply_Text").attr('name');
					var field_Review_ID = $(".Review_ID").attr('name');
					var value_Form_Reply = $(".myForm_Reply").val();

					var value_Text = $(this).prev().val();
					var value_Review_ID = $(this).prev().prev().val();		

					value_Text = value_Text.replace(/(^\s*)|(\s*$)/g, ""); 
					if(!value_Text || value_Text == '请输入回复内容')
					{
						alert("请输入回复内容");
					}
					else
					{
						eval('dataArr.'+field_Form_Reply+'=value_Form_Reply');
						eval('dataArr.'+field_Text+'=value_Text');
						eval('dataArr.'+field_Review_ID+'=value_Review_ID');
						$.ajax
						({
							async:true,
						    data:dataArr,
						    cache:false,
						    type:'post',
						    url:'food_feedback_post.php',
						    success:function(data)
						    { 
								if(data == 0)
							    {
									alert("回复失败，请重新回复!");
							    }
							    else
							    {
								    alert("回复成功，感谢您的参与!");
								    window.location.reload();
							    }
						     }
						})
					}
					return false;
				});
				$(".prevent_default_behaviour").click(function()
				{
					alert("请您先登录，谢谢！");
					window.location.href='../system_users/login.php?url=http://www.1qibi.com/food/food_introduce.php?id=1235047';
					return false;
				});
				$(".Reply_Text").click(function()
				{
					var username = "";
					var str = "http://www.1qibi.com/food/food_introduce.php?id=1235047";
				    if(!username)
				    {
					    alert("请您先登录，谢谢！");
					    window.location.href='../system_users/login.php?url=http://www.1qibi.com/food/food_introduce.php?id=1235047';
				    }  	
				});
				$(".Reply_Text").focusin(function()
				{
					$(this).val("");
				});
				
			    $(".ding").click(function()									
				{        
					var dataDing = {};
			    	var dinged=parseInt($(this).prev().children().html())+1;	
			    	var id = $(this).attr('name');
			    	var field1 = 'Ding_Num';
			    	var field2 = 'Review_ID';
			    	var myForm = 'myForm_Ding';
			    	eval('dataDing.'+'myForm'+'=myForm');
			    	eval('dataDing.'+field1+'=dinged');             
			    	eval('dataDing.'+field2+'=id');  					
			    	var div = $(this).prev().children();							
			        $.ajax
			        ({
				        async:true,
				        cache:false,
			        	type:"post",
			            url:"food_feedback_post.php",
			            data:dataDing,                          				
			            success:function(data)
			            {
			            	div.html(data);  									
			            }
			        });
			    }); 
          
			}
		})
	});
	
	$("#navi_all_reputation").click(function()
	{
		$(this).css({background:"#0654A9"});
		$(this).children().css({color:"white"});
	    $(this).nextUntil('#DianPing').css({background:"#F5F5F5"});
	    $(this).nextUntil('#DianPing').children().css({color:"#5B5B5B"});
	});
	
	$("#navi_all_reputation").click();            

	$("#page_button a").click(function()
	{
		var field=$(this).parent().attr('name');
		var operate_name = "page_button";
		eval('dataArr.'+field+'=this.name');
		eval('dataArr.'+'last_operate'+'=operate_name');
		$.ajax
		({
			async:true,
			data:dataArr,
			cache:false,
			type:'post',
			url:'food_feedback_reputation.php',
			success:function(data)
			{
				div.html(data);								
				$(".div_reply_form").hide();
				$(".reply").click(function()
				{
					$(this).parents('p').next().toggle();
				});
				$(".Reply_Submit").click(function()
				{
					var dataArr = {};
					var field_Form_Reply = $(".myForm_Reply").attr('name');
					var field_Text = $(".Reply_Text").attr('name');
					var field_Review_ID = $(".Review_ID").attr('name');
					var value_Form_Reply = $(".myForm_Reply").val();
					var value_Text = $(this).prev().val();
					var value_Review_ID = $(this).prev().prev().val();		
					value_Text = value_Text.replace(/(^\s*)|(\s*$)/g, ""); 
					if(!value_Text || value_Text == '请输入回复内容')
					{
						alert("请输入回复内容");
					}
					else
					{
						eval('dataArr.'+field_Form_Reply+'=value_Form_Reply');
						eval('dataArr.'+field_Text+'=value_Text');
						eval('dataArr.'+field_Review_ID+'=value_Review_ID');
						$.ajax
						({
							async:true,
							data:dataArr,
							cache:false,
							type:'post',
							url:'food_feedback_post.php',
							success:function(data)
							{  
								if(data == 0)
								{
									alert("回复失败，请重新回复!");
								}
								else
								{
									alert("回复成功，感谢您的参与!");
									window.location.reload();
								}
							}
						})
					}
					return false;
				});

				$(".prevent_default_behaviour").click(function()
				{
					alert("请您先登录，谢谢！");
					window.location.href='../system_users/login.php?url=http://www.1qibi.com/food/food_introduce.php?id=1235047';
					return false;
				});	
				$(".Reply_Text").click(function()
				{
					var username = "";
					var str = "http://www.1qibi.com/food/food_introduce.php?id=1235047";
					if(!username)
					{
						alert("请您先登录，谢谢！");
						window.location.href='../system_users/login.php?url=http://www.1qibi.com/food/food_introduce.php?id=1235047';
					}  	
				});
				$(".Reply_Text").focusin(function()
				{
					$(this).val(" ");
				});			
				
			    $(".ding").click(function()											
				{         
					var dataDing = {};
					var dinged=parseInt($(this).prev().children().html())+1;
			    	var id = $(this).attr('name');
			    	var field1 = 'Ding_Num';
			    	var field2 = 'Review_ID';
			    	eval('dataDing.'+field1+'=dinged');            		 	
			    	eval('dataDing.'+field2+'=id');  								
			    	var div = $(this).prev().children();											
			        $.ajax
			        ({
			        	type:"post",
			            url:"food_feedback_process.php",
			            data:dataDing,                          							
			            success:function(data)
			            {
			            	div.html(data);  												
			            }
			        })
			    });     							
			}
		})
	});

	$(".knowledge").click(function(event)
	{
		$("#knowledge_cengji").css({display:"block"});
	
		x=event.clientX + document.body.scrollLeft - document.body.clientLeft; 
		var oscrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
		y=event.clientY + oscrollTop;	
		$("#knowledge_cengji").css({left:700});
		$("#knowledge_cengji").css({top:y-50});
			
		var value = $(this).attr('name');
		var div = $("#knowledge_cengji");
		
		$.ajax
		({
			async:true,
			data:{name:value},
			cache:false,
			type:'post',
			url:'food_knowledge.php',
			success:function(data)
			{
				div.html(data);
				$("#knowledge_close").click(function()
				{
					$("#knowledge_cengji").css({display:"none"});
				});
			}
		})
	});

	$("#bottom-bottom").css({"padding-top":"0px","border-top":"1px solid #C0C0C0"});
	$("#bottom-bottom hr").css({display:"none"});
		
});
</script>
</head>
<body>
	<div id="box">
		<a name="go_top"></a>
 				<div id="top_box" class="clear">
			<div id="logo">
				<a href="../index.php"><img src="../system_images/symbol/logo.png" alt="一起比" /></a>
			</div>
			<div id="navi_function">
				<div id="login_favorite" class='clear'>	
					<table cellpadding='0' cellspacing='0' border='0' width='' style='float:right;'><tr><td><a href='../system_users/login.php' style='font-size:12px;font-weight:normal;font-family:SimSun;'>登录</a>&nbsp;</td><td>&nbsp;<a href='../system_users/register.php' style='font-size:12px;font-weight:normal;font-family:SimSun;'>注册</a>&nbsp;</td><td>&nbsp;<a href='###' style='color:#5B5B5B;font-size:12px;font-weight:normal;font-family:SimSun;' onclick="AddFavorite('http://www.1qibi.com','一起比')">收藏</a>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table>				</div>
				<div id="main_navi">
					<ul class="clear">
						<li class="main_navi_li_index" style="margin-left:10px;display:inline;width:60px;">
							<h3><a href="../index.php">首页</a></h3>
						</li>
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">汽车</a><span>▼</span><a style='position:absolute;left:49px;top:-10px;font-weight:normal;color:red;font-size:12px;'>热</a></h3>
							<ul>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/car/car_index.php">汽车比较</li>
								<li name="http://www.1qibi.com/engine_oil/engine_oil_index.php">机油比较</li>
								<li name="http://www.1qibi.com/explosion_proof/explosion_proof_index.php">防爆膜比较</li>
								<li name="http://www.1qibi.com/gps/gps_index.php">GPS比较</li>
							</ul>
						</li>
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">电子</a><span>▼</span></h3>
							<ul style='width:90px;'>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/mobile/mobile_index.php">手机比较</li>
								<li name="http://www.1qibi.com/notebook/notebook_index.php">笔记本比较</li>
								<li name="http://www.1qibi.com/tablet/tablet_index.php">平板电脑比较</li>
								<li name="http://www.1qibi.com/camera/camera_index.php">数码相机比较</li>
							</ul>
						</li>
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">家电</a><span>▼</span></h3>
							<ul style='width:110px;'>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/washer/washer_index.php">洗衣机比较</li>
								<li name="http://www.1qibi.com/air_condition/air_condition_index.php">空调比较</li>
								<li name="http://www.1qibi.com/fridge/fridge_index.php">冰箱比较</li>
								<li name="http://www.1qibi.com/digital_tv/digital_tv_index.php">液晶电视比较</li>
								<li name="http://www.1qibi.com/pdp/pdp_index.php">等离子电视比较</li>
							</ul>
						</li>
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">办公</a><span>▼</span></h3>
							<ul>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/laser_printer/laser_printer_index.php">打印机比较</li>
								<li name="http://www.1qibi.com/copier/copier_index.php">复印机比较</li>
								<li name="http://www.1qibi.com/aio_printer/aio_printer_index.php">一体机比较</li>
							</ul>
						</li>
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">数码</a><span>▼</span></h3>
							<ul>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/mp3/mp3_index.php">MP3比较</li>
								<li name="http://www.1qibi.com/mp4/mp4_index.php">MP4比较</li>
							</ul>
						</li>
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">健康</a><span>▼</span></h3>
							<ul>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/food/food_index.php">食材比较</li>
								<li name="http://www.1qibi.com/beer/beer_index.php">啤酒比较</li>
							</ul>
						</li>	
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">宠物</a><span>▼</span></h3>
							<ul>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/pet_dog/pet_dog_index.php">宠物狗比较</li>
								<li name="http://www.1qibi.com/pet_cat/pet_cat_index.php">宠物猫比较</li>
							</ul>
						</li>	
						<li class="separator">
							<span>|</span>
						</li>
						<li class="main_navi_li">
							<h3><a href="###">其他</a><span>▼</span></h3>
							<ul  style='width:90px;'>
								<p style='margin-top:0px;margin-left:68px;padding:0px auto;height:1px;border-top:1px solid #D5D5D5;'>&nbsp;</p>
								<li style='margin-top:5px;' name="http://www.1qibi.com/credit_card/credit_card_index.php">信用卡比较</li>
								<li name="http://www.1qibi.com/city/city_index.php">城市比较</li>
								<li name="http://www.1qibi.com/housing/housing_index.php">住宅小区比较</li>
							</ul>
						</li>				
					</ul>
				</div>
			</div>	
		</div>
 				<div id="navi_bar">
			<ul class="clear">
				<li style="margin-left:5px;"><a href="food_index.php">食材大全</a></li>
				<li><a href="food_compare.php">食材对比</a></li>
				<li><a href="food_top.php">食材排行</a></li>
				<li><a href="food_interactive.php">互动问答</a></li>
			</ul>
		</div> 		
 		<div style="margin-top:5px;margin-bottom:10px;">
			<script type="text/javascript">
			/*食材首页960*90，创建于2013-7-27*/
			var cpro_id = "u1328215";
			</script>
			<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
		</div>
 		
		<div id="overview" class='clear'>
						<div id="overview_left" style="border-top:1px solid #E4E4E4;">
				<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-left:1px solid #E4E4E4;border-right:1px solid #E4E4E4;">
					<tr>
						<td width="50%" align='center' style='border-right:1px solid #E4E4E4;border-bottom:1px solid #E4E4E4;'><img src="images/food/1235047.jpg" alt="山药" style="margin:5px 0px;" /></td>
						<td width="50%" valign='top'>
							<p style='margin-top:15px;color:#0654A9;text-align:center;font-weight:bold;'>山药</p>
							<p style='margin-left:5px;margin-top:15px;width:110px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:12px;' title='薯蓣、山芋、诸薯、延草、薯药、大薯、淮山'>别名：薯蓣、山芋、诸薯、延草、薯药、大薯、淮山</p>							<p style='margin-left:5px;margin-top:10px;width:110px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:12px;' title="蔬菜">类别：蔬菜</p>
						</td>
					</tr>
				</table>
				<div id="enjoy_or_no">
					<table cellpadding="0" cellspacing="0" border="0" width="100%">
						<tr height="30" align="center">
							<td><a id="like" href="###" name="1235047">推荐</a></td>
							<td><a id="dislike" href="###" name="1235047">不推荐</a></td>
						</tr>
						<tr height="30" align="center">
							<td><span id="show_like">0</span></td>
							<td><span id="show_dislike">0</span></td>
						</tr>
					</table>
				</div>
						
				<div id='popular_food'><p>热门食材</p><table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
					<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
						<tr>
							<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
							<td width='95%' align='center'>
								<a href='food_introduce.php?id=1234886' target='_blank' style='font-size:12px;text-align:center;'>
									<span title='腊肉'>腊肉</span>
								</a>
							</td>
						</tr>
					</table>
				</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
					<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
						<tr>
							<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
							<td width='95%' align='center'>
								<a href='food_introduce.php?id=1234608' target='_blank' style='font-size:12px;text-align:center;'>
									<span title='比目鱼'>比目鱼</span>
								</a>
							</td>
						</tr>
					</table>
				</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
					<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
						<tr>
							<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
							<td width='95%' align='center'>
								<a href='food_introduce.php?id=1234936' target='_blank' style='font-size:12px;text-align:center;'>
									<span title='鳗鱼'>鳗鱼</span>
								</a>
							</td>
						</tr>
					</table>
				</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
					<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
						<tr>
							<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
							<td width='95%' align='center'>
								<a href='food_introduce.php?id=1234881' target='_blank' style='font-size:12px;text-align:center;'>
									<span title='蓝莓'>蓝莓</span>
								</a>
							</td>
						</tr>
					</table>
				</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
					<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
						<tr>
							<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
							<td width='95%' align='center'>
								<a href='food_introduce.php?id=1235016' target='_blank' style='font-size:12px;text-align:center;'>
									<span title='青口'>青口</span>
								</a>
							</td>
						</tr>
					</table>
				</td></tr></table></div>			
				
				<div style="margin-top:10px;border:1px solid #E4E4E4;">
					<script type="text/javascript">
					/*食材220*250，创建于2014-4-4*/
					var cpro_id = "u1512357";
					</script>
					<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
	 			</div>
				
				<div id="food_list">
					<p>同类别食材</p>
					<ul>
						<li name='1234579'>白萝卜</li><li name='1234586'>白心甘薯</li><li name='1234643'>春笋</li><li name='1234647'>刺老芽</li><li name='1234676'>冬笋</li><li name='1234700'>粉丝</li><li name='1234777'>红萝卜</li><li name='1234780'>红薯</li><li name='1234782'>红心甘薯</li><li name='1234812'>胡萝卜</li>					</ul>
				</div>
				
				<div style="margin-top:10px;">
					<script type="text/javascript">
					/*食材200*200，创建于2014-4-4*/
					var cpro_id = "u1512367";
					</script>
					<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
				</div>				
				
			</div>
			<div id="overview_right">
				<div id='food_sub_navi'><p style='width:695px;' class='clear'><span style='float:left;'><a href='#introduce'>基本介绍</a>&nbsp;&nbsp;&nbsp;<a href='#function'>功效与作用</a>&nbsp;&nbsp;&nbsp;<a href='#nutritive'>营养价值</a>&nbsp;&nbsp;&nbsp;<a href='#taboo'>禁忌人群</a>&nbsp;&nbsp;&nbsp;<a href='#suitable'>适宜人群</a>&nbsp;&nbsp;&nbsp;<a href='#choose'>选购</a>&nbsp;&nbsp;&nbsp;<a href='#store'>存储</a>&nbsp;&nbsp;&nbsp;<a href='#edible_methods'>食用方法</a>&nbsp;&nbsp;&nbsp;<a href='#para_list'>热量表</a></span></p></div><div id='para_list'><p class='title_para'>山药热量表（每100克）</p><table class='navi_table' cellpadding='0' cellspacing='0' border='0' width='100%'>
								<tr>
									<td width='80%'>
										选择对比范围：
										<a href='food_introduce.php?id=1235047&type=1' style='background:;'>全部食材(共717类)</a>
										<a href='food_introduce.php?id=1235047&type=2' style='background:#FF6100;'>蔬菜(共165类)</a>
									</td>
									<td width='20%'>
										<a href='food_compare.php?id[]=1235047' target='_blank' style='float:right;margin-right:10px;'>食材对比</a>
									</td>
								</tr>
							</table><table  class='mytable' bordercolor='#E4E4E4' cellspacing='0' width='100%'><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>热量（大卡）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>23</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>78</font>，<font color='#D26900'>低于平均值62.9%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='热量' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>碳水化合物（克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>5.9</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>66</font>，<font color='#D26900'>低于平均值57.7%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='碳水化合物' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>膳食纤维（克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>1.9</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>42</font>，<font color='#D26900'>低于平均值39.4%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='膳食纤维' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>蛋白质（克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>1.2</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>110</font>，<font color='#D26900'>低于平均值69.5%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='蛋白质' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>脂肪（克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.2</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>72</font>，<font color='#D26900'>低于平均值72.2%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='脂肪' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>钾（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>209</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/up_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>56</font>，<font color='#228B22'>高于平均值3.3%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='钾' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>磷（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>36</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>74</font>，<font color='#D26900'>低于平均值40.2%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='磷' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>钙（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>4</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>117</font>，<font color='#D26900'>低于平均值93.3%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='钙' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>维生素C（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>5</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>70</font>，<font color='#D26900'>低于平均值58.9%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='维生素C' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>镁（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>8</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>98</font>，<font color='#D26900'>低于平均值72.1%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='镁' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>钠（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>5.8</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>73</font>，<font color='#D26900'>低于平均值96.4%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='钠' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>铁（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.4</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>104</font>，<font color='#D26900'>低于平均值90%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='铁' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>锌（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.33</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>73</font>，<font color='#D26900'>低于平均值57.3%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='锌' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>维生素E（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.99</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/up_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>33</font>，<font color='#228B22'>高于平均值24.3%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='维生素E' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>烟酸（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.5</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>61</font>，<font color='#D26900'>低于平均值56.6%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='烟酸' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>锰（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.49</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/up_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>38</font>，<font color='#228B22'>高于平均值3.5%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='锰' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>维生素B2（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.03</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>72</font>，<font color='#D26900'>低于平均值78.5%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='维生素B2' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>铜（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.06</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>73</font>，<font color='#D26900'>低于平均值75.2%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='铜' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>维生素B1（毫克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.02</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>66</font>，<font color='#D26900'>低于平均值55.5%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='维生素B1' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>胡萝卜素（微克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>30</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>71</font>，<font color='#D26900'>低于平均值92.8%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='胡萝卜素' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>维生素A（微克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>5</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>72</font>，<font color='#D26900'>低于平均值94%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='维生素A' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr><tr height='60' class='tr_bgcolor'><td width='20%' align='right' style='border:1px solid #E4E4E4;border-left:0px;padding-right:5px;color:#696969;'>硒（微克）</td><td width='15%' align='center' style='border-left:0px;border:1px solid #E4E4E4;color:#363636;'>
											<table cellpadding='0' cellspacing='0' border='0' width='100%'>
												<tr>
													<td align='right' width='60%'>0.45</td>
													<td align='right' width='40%'><img src='../system_images/symbol/direction_symbol/down_arrow.jpg' alt='' style='width:8px;height:16px;border:none;vertical-align:bottom;' />&nbsp;</td>
												</tr>
											</table>
									</td><td width='59%' align='justify' style='padding-left:10px;font-size:13px;border:1px solid #E4E4E4; color:#77787B;border-right:0px;'>该食材在蔬菜食材(共165类)中排名第<font size=5 color=#FF0000>91</font>，<font color='#D26900'>低于平均值80.3%</font></td><td width='6%' align='center' style='border:1px solid #E4E4E4;border-right:0px;border-left:0px;'>
									<a href='###' class='knowledge' name='硒' style='background:#0654A9;border:1px solid #E4E4E4;padding:3px 4px 3px 4px;'>知识</a>
									</td></tr></table></div>	
				<div id="detail_intro" style="width:728px;">
					<div id='introduce'>
									<a name='introduce'></a>
									<h3 class='clear' style='border:0px solid red;'>
										<span style='float:left;'>山药的基本介绍</span>
									</h3>
									<span>&nbsp;&nbsp;&nbsp;&nbsp;薯蓣，通称山药。多年生草本植物，茎蔓生，常带紫色，块根圆柱形，叶子对生，卵形或椭圆形，花乳白色，雌雄异株。<br/>&nbsp;&nbsp;&nbsp;&nbsp;原产山西平遥、介休，现分布于我国华北、西北及长江流域的江西各省区。栽种者称家山药，野生者称野山药；中药材称淮山，淮山药、怀山药等。因其营养丰富，自古以来就被视为物美价廉的补虚佳品，既可作主粮，又可作蔬菜，还可以制成糖葫芦之类的小吃。我国主产于河南省北部，河北、山西、山东及中南、西南等地区也有栽培。冬季茎叶枯萎后采挖，切去根头，洗净，干燥。中国栽培的山药主要有普通的山药和田薯两大类。普通的山药块茎较小，其中尤以古怀庆府（今河南焦作境内，含博爱、沁阳、武陟、温县等县）所产山药名贵，习称“怀山药”，素有“怀参”之称，为全国之冠。现国内有两个地方的山药已申请了国家地理标志保护产品，一种是“铁棍山药”其产自河南焦作；另一种是“陈集山药”其产自山东省菏泽市陈集镇，包括“鸡皮糙山药”和“西施种子山药”。<br/>&nbsp;&nbsp;&nbsp;&nbsp;山药除含蛋白质、碳水化合物、钙、磷、铁、胡萝卜素及维生素等多种营养成分外，尚含淀粉酶、胆碱、粘液汁酶及薯蓣皂苷等。其中的淀粉酶又叫消化素，能分解淀粉等物质，若与碱性物质相混合，则淀粉酶作用消失。补而不腻，香而不燥。历代医家盛赞山药为“理虚之要药”。</span>
								</div><div id='function'>
									<a name='function'></a>
									<h3 class='clear' style='border:0px solid red;'>
									<span style='float:left;'>山药的功效与作用</span>
									</h3>
									<span>&nbsp;&nbsp;&nbsp;&nbsp;1.山药所含的热量和碳水化合物只有同一质量红薯的一半左右，不含脂肪，蛋白质含量较红薯高。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2.山药的主要成分是淀粉，其中的一部分可以转化为淀粉的分解产物糊精，糊精可以帮助消化，所以山药是可以生吃的芋类食品。<br/>&nbsp;&nbsp;&nbsp;&nbsp;3.山药含有多种微量元素，其中钾的含量较高，所含维生素的种类和数量较少，几乎不含胡萝卜素。<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.山药的叶是胡萝卜素的极好来源，也是钙、铁、维生素C的良好来源。</span>
								</div><div id='nutritive'>
							<a name='nutritive'></a>
							<h3 class='clear' style='border:0px solid red;'>
							<span style='float:left;'>山药的营养价值</span>
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;1.健脾益胃助消化<br/>&nbsp;&nbsp;&nbsp;&nbsp;有利于脾胃消化吸收功能，是一味平补脾胃的药食两用之品。不论脾阳亏或胃阴虚，皆可食用。临床上常与胃肠饮同用治脾胃虚弱，食少体倦，泄泻等病症。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2.滋肾益精<br/>&nbsp;&nbsp;&nbsp;&nbsp;强健机体，滋肾益精的作用。大凡肾亏遗精、妇女白带多、小便频数等症，皆可服之。<br/>&nbsp;&nbsp;&nbsp;&nbsp;3.降低血糖<br/>&nbsp;&nbsp;&nbsp;&nbsp;有降低血糖的作用。可用于治疗糖尿病，是糖尿病人的食疗佳品。<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.延年益寿<br/>&nbsp;&nbsp;&nbsp;&nbsp;有效阻止血脂在血管壁的沉淀，预防心血疾病。取得益志安神，延年益寿的功效。</span>
							</div><div id='taboo'>
							<a name='taboo'></a>
							<h3 class='clear' style='border:0px solid red;'>
							<span style='float:left;'>禁忌人群</span>
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;一般人群均可食用。适宜糖尿病患者、腹胀、病后虚弱者、慢性肾炎患者、长期腹泻者。</span>
							</div><div id='suitable'>
							<a name='suitable'></a>
							<h3 class='clear' style='border:0px solid red;'>
							<span style='float:left;'>适宜人群</span>
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;山药有收涩的作用，故大便燥结者不宜食用；另外有实邪者忌食山药。</span>
							</div><div id='choose'>
							<a name='choose'></a>
							<h3 class='clear' style='border:0px solid red;'>
							<span style='float:left;'>山药的选购</span>
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;如果整支尚未切开，可存放在阴凉通风处。如果切开了，可以盖上湿布保湿，放入冰箱保鲜或是削皮后切块，分袋包装，放在冰箱保鲜。</span>
							</div><div id='store'>
							<a name='store'></a>
							<h3 class='clear' style='border:0px solid red;'>
							<span style='float:left;'>山药的存储</span>
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;在选购的时候，大小一样的山药，较重的较好，同一品种的上要须毛越多的越好，须毛越多的山药口感更面，含山药多糖更多。营养也更好，最后再看横切面，山药的横切面肉质应呈雪白色，这说明是新鲜的，若呈黄色似铁锈的切勿购买。<br/>&nbsp;&nbsp;&nbsp;&nbsp;如果表面有异常斑点的山药绝对不能买，因为这可能已经感染过病害，还要注意山药断面应带有黏液，外皮无损伤。山药怕冻、怕热，冬季买山药时，可用手将其握10分钟左右，如山药出汗就是受过冻了，掰开来看，冻过的山药横断面黏液会化成水，有硬心且肉色发红、质量差。<br/>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</div><div id='edible_methods'>
							<a name='edible_methods'></a>
							<h3 class='clear' style='border:0px solid red;'>
							<span style='float:left;'>山药的食用方法</span>
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;1.去皮<br/>&nbsp;&nbsp;&nbsp;&nbsp;宜去皮食用,以免产生麻、刺等异常口感。山药皮中所含的皂角素或黏液里含的植物碱，少数人接触会引起山药过敏而发痒，处理山药时应避免直接接触。削完山药的手不要乱碰，马上多洗几遍手，要不然就会抓哪儿哪儿痒。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2.怎样让山药不脱手<br/>&nbsp;&nbsp;&nbsp;&nbsp;山药在剥皮之后，表面的粘液使其变的很滑，难以抓牢或稳稳的放在且板上，切成想要的形状，这时候，可以在双手上涂些盐和醋，再拿山药的时候就不会手滑了，也不会影响山药的正常味道。<br/>&nbsp;&nbsp;&nbsp;&nbsp;3.浸泡<br/>&nbsp;&nbsp;&nbsp;&nbsp;山药切片后需立即浸泡在盐水中，以防止氧化发黑。<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.山药鲜品多用于虚劳咳嗽及消渴病，炒熟食用治脾胃、肾气亏虚。</span>
							</div>				</div>				
								
				<div id="feedback_reputation">
					<ul class='clear'>
						<li id="navi_all_reputation" class="reputation_navi" name="all_reputation" value="1235047" style="width:80px;">
							<a href="###" style="width:80px;">全部评价<span>(0)</span></a>
						</li>
						<li id="DianPing" style="margin-left:540px;display:inline;border:1px solid #BFBFBF;line-height:20px;width:80px;height:20px;">
							<a href="#bottom" class='Problem_DianPing'  style="background:#FF6100;color:white;width:80px;height:20px;display:block;font-weight:normal;font-size:12px;">我要点评</a>
						</li>  
					</ul>							
					<div id="reputation_div" style="background:#FFFFFF;">
						<!-- 评论内容 -->
					</div>
					<div id="page_button" class="clear" name="page_button" style="width:100%;">
						<a href='###' name='首页'>首页</a>&nbsp;&nbsp;
				        <a href='###' name='前一页'>前一页</a>&nbsp;&nbsp;
						<a href='###' name='后一页'>后一页</a>&nbsp;&nbsp;
						<a href='###' name='尾页'>尾页</a>&nbsp;&nbsp;
					</div> 
				</div>
				
				<div style="margin-top:5px;">
					<script type="text/javascript">
					/*食材概述728*90，创建于2013-7-27*/
					var cpro_id = "u1328217";
					</script>
					<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
				</div>
				
				<div id="reputation_input">
					<p style='text-align:left;'><a name="bottom" class="anchor">我要点评</a></p>
					<p class="parting_line">&nbsp;</p>
				 	<form name="myForm_Comment" action="Food_feedback_post.php" method="post" enctype="multipart/form-data" class="clear">
						<p style="margin-left:15px;">内容</p>
						<textarea id="content_reputation"  name="PingLun">请输入评论</textarea>
						<input type="hidden" id = "food_ID" name="food_id" value="1235047" />
						<input type="reset" id="reputation_reset" name="submit2" value="重置" />
						<input id='prevent_default_behaviour' type='submit' value='发表点评' />						&nbsp;&nbsp;&nbsp;&nbsp; 
						<input type="hidden" id="myForm_Comment" name="myForm" value="myForm_Comment" />
					</form>
				</div> 
<!-- ------------------------------------------ -->						
			</div>
		</div>
				<div style="padding:15px 10px 0px 10px;margin:0px auto;background:#F9F9F9;">
			<p style='margin:0px auto;padding:0px auto;text-align:center;'>
				<span style='font-size:12px;font-weight:normal;color:#696969;'>说明：本网站食材数据来源于联网上公开的信息，在此基础上进行数值化比较。排名受基础数据完整性和准确性影响，仅供参考。</span>
			</p>
		</div>		﻿	<div id="bottom-bottom" style="margin:0px auto;padding-top:5px;line-height:1.8em;text-align:center;">
		<hr style='padding:0px auto;margin-top:15px;margin-bottom:0px;height:1px;border:0;border-bottom:1px solid #C0C0C0;'/>
		<p style="text-align:center;margin-top:5px;padding:0px auto;"><a href="../index.php">首页</a>&nbsp;|&nbsp;<a href="../public/about_us.php?name=about">关于我们</a>&nbsp;|&nbsp;<a href="../public/about_us.php?name=feedback">问题反馈</a>&nbsp;|&nbsp;<a href="../public/about_us.php?name=agreement">协议与声明</a></p>
		<p style="text-align:center;margin-top:0px;padding:0px auto;font-size:14px;color:#5B5B5B;">CopyRight&nbsp;<span style="font-size:18px;vertical-align:bottom;">&copy;</span>&nbsp;2012-2015 深圳市比擎科技有限公司 版权所有 </p>
		<p style="color:#5B5B5B;"><a href='http://www.miitbeian.gov.cn' style='hover:red;text-decoration:underline;' target='_blank'>粤ICP备12075350号-1</a>	
		<script type="text/javascript">
		var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
		document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fab2023d44ebf4318a1f1d085dfd944a0' type='text/javascript'%3E%3C/script%3E"));
		</script>
		</p>
	</div>

<!-- Baidu Button BEGIN -->
<script type="text/javascript" id="bdshare_js" data="type=slide&amp;img=6&amp;pos=right&amp;uid=6836663" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
var bds_config={"bdTop":60};
document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);
</script>
<!-- Baidu Button END -->
		
	</div>
	
<div id="side_piece" style="width:20px;margin:0px auto;padding:0px auto;border:1px solid #E4E4E4;position:absolute;left:1120px;top:300px;">
	<p style="width:20px;border:1px solid green;text-align:center;"><a href="#go_top" style="color:#272727;">返回顶部</a></p>
	<p style="width:20px;border:1px solid green;text-align:center;margin-top:10px;"><a href="http://www.1qibi.com/public/about_us.php?name=feedback" target="_blank" style="color:#272727;">问题反馈</a></p>
</div>

<script type="text/javascript">

		function Side_Piece_Scroll()
		{
			var oscrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
			var hscrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft; 
			var y = oscrollTop;
			var x = hscrollLeft;
			if(x > 0)
				var x = x + document.documentElement.clientWidth - 22;
			else
				var x = x + document.documentElement.clientWidth;

			var x_dimension = (x-960)/2 - 130;
			if(x_dimension < 0)
				x_dimension = 0;
			
			y = y + document.documentElement.clientHeight;
			var y_dimension = y - 200;
			y = y-430;
		
		    x = parseInt(x-960)/2;
			x = 960 + x;
			
			document.getElementById("side_piece").style.top = y+"px";
			document.getElementById("side_piece").style.left = x + "px";

			document.getElementById("two_dimension_code").style.top = y_dimension + "px";
			document.getElementById("two_dimension_code").style.left = x_dimension + "px";
			 
		}
		window.setInterval("Side_Piece_Scroll()",1);

		function AddFavorite(sURL, sTitle)			//  加入收藏函数
		{
		    try
		    {
		        window.external.addFavorite(sURL, sTitle);
		    }
		    catch (e)
		    {
		        try
		        {
		            window.sidebar.addPanel(sTitle, sURL, "");
		        }
		        catch (e)
		        {
		            alert("加入收藏失败，请使用Ctrl+D进行添加");
		        }
		    }
		}

	</script>
		<div id="knowledge_cengji"></div> 

<script type="text/javascript">
/*食材首页250*200，创建于2013-7-27*/
var cpro_id = "u1328216";
</script>
<script src="http://cpro.baidustatic.com/cpro/ui/f.js" type="text/javascript"></script>
	
</body>
</html>`