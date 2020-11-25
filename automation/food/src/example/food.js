module.exports = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>【食材大全】-食材比较-一起比</title>
<meta name="keywords" content="食材大全，食材比较，食材怎么样，一起比" />
<meta name="description" content="食材大全：一起比提供全面的食材参数、食材热量表和食材比较、食材排行信息。选食材先上一起比" />
<script type="text/javascript" src="../system_scripts/jquery-1.7.2.js"></script>
<script type="text/javascript" src="scripts/food_index.js"></script>
<script type="text/javascript" src="../system_scripts/navi.js"></script>
<link href="../system_styles/navi.css" rel="stylesheet" type="text/css" media="all"/>
<link href="styles/food_index.css" rel="stylesheet" type="text/css" media="all"/>

<script type="text/javascript">
$(function()
{
// 快速搜索
	$("#search_button").click(function()
	{	
		var search_value = $("#search_value").val();
		search_value = search_value.replace(/(^\s*)|(\s*$)/g, ""); 

		if(search_value)
	    {
		    var url = "food_index.php?search="+search_value;
			window.location.href(url);
		}
	    else
	    {
	    	alert('请输入搜索内容');
	    }
	});

	document.onkeydown = function(event)
	{
		event = event || window.event;
		var key = event ? (event.charCode || event.keyCode) : 0;
		var search_value = $("#search_value").val();
		search_value = search_value.replace(/(^\s*)|(\s*$)/g, ""); 
		
		if(key == 13)
		{
			if(search_value)
			{
				$('#search_button').click();
			}	
		}
	}
	
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
		<div style="margin-top:5px;">
			<script type="text/javascript">
			/*食材首页960*90，创建于2013-7-27*/
			var cpro_id = "u1328215";
			</script>
			<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
		</div>
 		
		<div id="food_list" class="clear">
			<div id="food_list_left">
			<h3>肉类</h3><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/猪肉.jpg' alt='肉类' /></div><p>[猪肉]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234626' target='_blank'>叉烧肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234785' target='_blank'>后臀尖</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234816' target='_blank'>火腿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234886' target='_blank'>腊肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234994' target='_blank'>排骨</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234996' target='_blank'>培根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235114' target='_blank'>午餐肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235118' target='_blank'>五花肉</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235131' target='_blank'>香肠</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235145' target='_blank'>咸肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235179' target='_blank'>熏肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235259' target='_blank'>炸肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235267' target='_blank'>猪大肠</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235268' target='_blank'>猪大骨头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235269' target='_blank'>猪肚</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235271' target='_blank'>猪肺</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235272' target='_blank'>猪肝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235274' target='_blank'>猪里脊肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235275' target='_blank'>猪脑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235276' target='_blank'>猪皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235277' target='_blank'>猪肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235280' target='_blank'>猪蹄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235281' target='_blank'>猪蹄筋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235282' target='_blank'>猪小排</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235283' target='_blank'>猪心</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235284' target='_blank'>猪血</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235285' target='_blank'>猪腰</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235286' target='_blank'>猪肘</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/牛肉.jpg' alt='肉类' /></div><p>[牛肉]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234697' target='_blank'>肥牛</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234969' target='_blank'>牛鞭</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234971' target='_blank'>牛肚</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234972' target='_blank'>牛肺</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234973' target='_blank'>牛肝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234974' target='_blank'>牛里脊</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234975' target='_blank'>牛里脊肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234976' target='_blank'>牛腩</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234977' target='_blank'>牛脑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234978' target='_blank'>牛排</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234979' target='_blank'>牛肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234980' target='_blank'>牛肾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234981' target='_blank'>牛髓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234982' target='_blank'>牛蹄筋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234983' target='_blank'>牛尾</a></td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/羊肉.jpg' alt='肉类' /></div><p>[羊肉]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234874' target='_blank'>烤肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235187' target='_blank'>羊肚</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235189' target='_blank'>羊肝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235190' target='_blank'>羊骨</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235192' target='_blank'>羊里脊肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235194' target='_blank'>羊排</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235196' target='_blank'>羊肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235197' target='_blank'>羊肉卷</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235198' target='_blank'>羊肾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235199' target='_blank'>羊髓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235201' target='_blank'>羊蹄筋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235202' target='_blank'>羊蝎子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235204' target='_blank'>羊血</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/鸡肉.jpg' alt='肉类' /></div><p>[鸡肉]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234814' target='_blank'>火鸡</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234824' target='_blank'>鸡翅</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234833' target='_blank'>鸡肝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234846' target='_blank'>鸡肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234850' target='_blank'>鸡腿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234855' target='_blank'>鸡心</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234856' target='_blank'>鸡胸脯肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234857' target='_blank'>鸡血</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234861' target='_blank'>鸡爪</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234862' target='_blank'>鸡胗</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235116' target='_blank'>乌骨鸡</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/鸭肉.jpg' alt='肉类' /></div><p>[鸭肉]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235182' target='_blank'>鸭翅</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235185' target='_blank'>鸭肝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235210' target='_blank'>鸭肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235211' target='_blank'>鸭腿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235212' target='_blank'>鸭胸脯肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235213' target='_blank'>鸭血</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235215' target='_blank'>鸭掌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235216' target='_blank'>鸭胗</a></td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/其他.jpg' alt='肉类' /></div><p>[其他]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234640' target='_blank'>穿山甲</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234692' target='_blank'>鹅肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234885' target='_blank'>老鼠</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234916' target='_blank'>鹿肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234923' target='_blank'>驴肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235031' target='_blank'>肉松</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235101' target='_blank'>兔肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235112' target='_blank'>蜗牛肉</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235160' target='_blank'>蟹柳</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235174' target='_blank'>雪蛤</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235207' target='_blank'>燕窝</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>蔬菜</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/叶子类.jpg' alt='蔬菜' /></div><p>[叶子类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234572' target='_blank'>白菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234578' target='_blank'>百合</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234595' target='_blank'>抱子甘蓝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234606' target='_blank'>荸荠</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234610' target='_blank'>菠菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234615' target='_blank'>菜花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234644' target='_blank'>荠菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234645' target='_blank'>刺儿菜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234670' target='_blank'>地笋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234678' target='_blank'>豆瓣菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234715' target='_blank'>橄榄菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234728' target='_blank'>枸杞菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234771' target='_blank'>红菜苔</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234787' target='_blank'>槐花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234793' target='_blank'>黄花菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234809' target='_blank'>茴香</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234828' target='_blank'>芥菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234830' target='_blank'>芥蓝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234843' target='_blank'>金银花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234863' target='_blank'>卷心菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234864' target='_blank'>蕨菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234869' target='_blank'>菊花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234870' target='_blank'>菊花脑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234875' target='_blank'>空心菜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234878' target='_blank'>苦菊</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234893' target='_blank'>藜蒿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234894' target='_blank'>菱角</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234904' target='_blank'>龙蒿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234908' target='_blank'>芦荟</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234909' target='_blank'>萝卜叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234910' target='_blank'>萝卜缨</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234913' target='_blank'>落葵</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234925' target='_blank'>马齿苋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234941' target='_blank'>玫瑰花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234949' target='_blank'>墨角兰</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234953' target='_blank'>木耳</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234988' target='_blank'>牛至</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234992' target='_blank'>藕带</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235000' target='_blank'>蒲菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235013' target='_blank'>芹菜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235051' target='_blank'>生菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235064' target='_blank'>水芹菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235097' target='_blank'>茼蒿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235106' target='_blank'>苋菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235107' target='_blank'>豌豆尖</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235110' target='_blank'>娃娃菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235113' target='_blank'>莴笋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235130' target='_blank'>香菜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235148' target='_blank'>小白菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235166' target='_blank'>西兰花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235171' target='_blank'>西芹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235178' target='_blank'>雪里蕻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235223' target='_blank'>银耳</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235230' target='_blank'>油菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235234' target='_blank'>油麦菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235266' target='_blank'>芝麻菜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235290' target='_blank'>紫甘蓝</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/根茎类.jpg' alt='蔬菜' /></div><p>[根茎类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234579' target='_blank'>白萝卜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234586' target='_blank'>白心甘薯</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234643' target='_blank'>春笋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234647' target='_blank'>刺老芽</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234676' target='_blank'>冬笋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234700' target='_blank'>粉丝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234777' target='_blank'>红萝卜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234780' target='_blank'>红薯</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234782' target='_blank'>红心甘薯</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234812' target='_blank'>胡萝卜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234818' target='_blank'>姜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234829' target='_blank'>芥菜头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234951' target='_blank'>魔芋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234968' target='_blank'>牛蒡</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234991' target='_blank'>藕</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235011' target='_blank'>荞头</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235017' target='_blank'>青萝卜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235047' target='_blank'>山药</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235090' target='_blank'>甜菜根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235100' target='_blank'>土豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235167' target='_blank'>西米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235170' target='_blank'>心里美萝卜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235251' target='_blank'>芋头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235278' target='_blank'>竹笋</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235293' target='_blank'>紫薯</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/瓜果类.jpg' alt='蔬菜' /></div><p>[瓜果类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234573' target='_blank'>白豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234614' target='_blank'>菜瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234616' target='_blank'>彩椒</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234675' target='_blank'>冬瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234695' target='_blank'>方瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234702' target='_blank'>佛手瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234734' target='_blank'>瓠瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234774' target='_blank'>红椒</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234792' target='_blank'>黄瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234799' target='_blank'>黄秋葵</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234811' target='_blank'>葫芦</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234876' target='_blank'>苦瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234880' target='_blank'>辣椒</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234922' target='_blank'>绿茄子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234960' target='_blank'>南瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235012' target='_blank'>茄子</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235015' target='_blank'>青椒</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235068' target='_blank'>丝瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235081' target='_blank'>笋瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235092' target='_blank'>甜椒</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235164' target='_blank'>西红柿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235165' target='_blank'>西葫芦</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235191' target='_blank'>羊角椒</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235239' target='_blank'>圆茄子</a></td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/菌菇.jpg' alt='蔬菜' /></div><p>[菌菇]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234599' target='_blank'>北风菌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234619' target='_blank'>草菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234627' target='_blank'>茶树菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234637' target='_blank'>虫草花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234646' target='_blank'>慈菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234652' target='_blank'>大红菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234671' target='_blank'>地衣</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234674' target='_blank'>冬菇</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234718' target='_blank'>干香菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234784' target='_blank'>猴头菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234797' target='_blank'>黄蘑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234825' target='_blank'>鸡枞</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234845' target='_blank'>金针菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234849' target='_blank'>鸡土从</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234851' target='_blank'>鸡腿菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234948' target='_blank'>蘑菇</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235019' target='_blank'>青头菌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235032' target='_blank'>乳牛肝菌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235072' target='_blank'>松蘑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235135' target='_blank'>香菇</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235177' target='_blank'>雪莲菌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235188' target='_blank'>羊肚菌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235261' target='_blank'>榛蘑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235279' target='_blank'>竹荪</a></td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/嫩茎叶花.jpg' alt='蔬菜' /></div><p>[嫩茎/叶/花]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234624' target='_blank'>柴胡</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234736' target='_blank'>桂花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234821' target='_blank'>茭白</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234831' target='_blank'>芥兰</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234832' target='_blank'>结球甘蓝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234844' target='_blank'>金针菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234858' target='_blank'>积雪草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234917' target='_blank'>芦笋</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234930' target='_blank'>马兰头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234952' target='_blank'>牡丹花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234985' target='_blank'>牛心菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235121' target='_blank'>乌树叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235231' target='_blank'>油菜心</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235240' target='_blank'>圆生菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235287' target='_blank'>紫背天葵</a></td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/鲜豆类.jpg' alt='蔬菜' /></div><p>[鲜豆类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234903' target='_blank'>龙豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235069' target='_blank'>四季豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235070' target='_blank'>四棱豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235146' target='_blank'>鲜豌豆</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/野生蔬菜.jpg' alt='蔬菜' /></div><p>[野生蔬菜]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234584' target='_blank'>白薯叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234596' target='_blank'>霸王花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234651' target='_blank'>大巢菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234654' target='_blank'>大蓟叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234770' target='_blank'>荷叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234956' target='_blank'>苜蓿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235045' target='_blank'>山苦荬叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235076' target='_blank'>酸模</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235289' target='_blank'>紫萼香茶菜</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/葱蒜类.jpg' alt='蔬菜' /></div><p>[葱蒜类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234650' target='_blank'>葱白</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234852' target='_blank'>韭菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234853' target='_blank'>韭黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235018' target='_blank'>青蒜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235075' target='_blank'>蒜苗</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235149' target='_blank'>小葱</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235186' target='_blank'>洋葱</a></td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>豆类、豆制品</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/豆类.jpg' alt='豆类、豆制品' /></div><p>[豆类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234570' target='_blank'>白扁豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234602' target='_blank'>扁豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234617' target='_blank'>蚕豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234636' target='_blank'>赤小豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234657' target='_blank'>蛋白粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234680' target='_blank'>豆腐</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234681' target='_blank'>豆腐干</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234684' target='_blank'>豆角</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234759' target='_blank'>黑豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234763' target='_blank'>荷兰豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234783' target='_blank'>红腰豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234786' target='_blank'>花豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234790' target='_blank'>黄豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234791' target='_blank'>黄豆芽</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234819' target='_blank'>豇豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234897' target='_blank'>山药豆</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234920' target='_blank'>绿豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234921' target='_blank'>绿豆芽</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234939' target='_blank'>毛豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235014' target='_blank'>青豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235108' target='_blank'>豌豆粒</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235109' target='_blank'>豌豆苗</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235233' target='_blank'>油豆角</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235250' target='_blank'>芸豆</a></td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/豆制品.jpg' alt='豆类、豆制品' /></div><p>[豆制品]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234598' target='_blank'>北豆腐</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234673' target='_blank'>冻豆腐</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234679' target='_blank'>豆豉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234682' target='_blank'>豆腐皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234683' target='_blank'>豆腐丝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234706' target='_blank'>腐竹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234959' target='_blank'>南豆腐</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235008' target='_blank'>千张</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235080' target='_blank'>素鸡</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235134' target='_blank'>香干</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235232' target='_blank'>油豆腐</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>蛋、奶</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/蛋类.jpg' alt='蛋、奶' /></div><p>[蛋类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234569' target='_blank'>鹌鹑蛋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234727' target='_blank'>鸽子蛋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234826' target='_blank'>鸡蛋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234827' target='_blank'>鸡蛋黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235071' target='_blank'>松花蛋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235147' target='_blank'>咸鸭蛋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235183' target='_blank'>鸭蛋</a></td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/乳制品.jpg' alt='蛋、奶' /></div><p>[乳制品]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234803' target='_blank'>黄油</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234957' target='_blank'>奶酪</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234958' target='_blank'>奶油</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>鱼类</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/淡水鱼.jpg' alt='鱼类' /></div><p>[淡水鱼]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234577' target='_blank'>白姑鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234597' target='_blank'>鲅鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234604' target='_blank'>鳊鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234608' target='_blank'>比目鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234623' target='_blank'>草鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234625' target='_blank'>鲳鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234662' target='_blank'>鲷鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234669' target='_blank'>丁香鱼</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234687' target='_blank'>多宝鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234688' target='_blank'>多春鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234738' target='_blank'>鳜鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234801' target='_blank'>黄鳝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234804' target='_blank'>黄鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234805' target='_blank'>湟鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234810' target='_blank'>鮰鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234823' target='_blank'>甲鱼</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234839' target='_blank'>金枪鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234860' target='_blank'>鲫鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234884' target='_blank'>老板鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234891' target='_blank'>鲢鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234896' target='_blank'>鲮鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234900' target='_blank'>鲤鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234905' target='_blank'>龙利鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234911' target='_blank'>罗非鱼</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234918' target='_blank'>鲈鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234931' target='_blank'>马面鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234933' target='_blank'>芒鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234936' target='_blank'>鳗鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234946' target='_blank'>明太鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234963' target='_blank'>鲶鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234967' target='_blank'>泥鳅</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235021' target='_blank'>青鱼</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235036' target='_blank'>三文鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235037' target='_blank'>沙丁鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235039' target='_blank'>沙尖鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235058' target='_blank'>虱目鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235060' target='_blank'>鲥鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235083' target='_blank'>梭鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235086' target='_blank'>鳎目鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235115' target='_blank'>武昌鱼</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235119' target='_blank'>乌鳢</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235228' target='_blank'>银鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235229' target='_blank'>鳙鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235252' target='_blank'>鱼头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235256' target='_blank'>鱼籽</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235299' target='_blank'>鳟鱼</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>水产</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/虾.jpg' alt='水产' /></div><p>[虾]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234601' target='_blank'>北极虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234749' target='_blank'>海虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234767' target='_blank'>河虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234820' target='_blank'>江虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234854' target='_blank'>基围虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234906' target='_blank'>龙虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234947' target='_blank'>明虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234999' target='_blank'>皮皮虾</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235087' target='_blank'>塘水虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235126' target='_blank'>虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235128' target='_blank'>虾米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235150' target='_blank'>小龙虾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235156' target='_blank'>虾皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235157' target='_blank'>虾仁</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/蟹.jpg' alt='水产' /></div><p>[蟹]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234590' target='_blank'>螃蟹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234750' target='_blank'>海蟹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234769' target='_blank'>河蟹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235020' target='_blank'>青蟹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235059' target='_blank'>石蟹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235084' target='_blank'>梭子蟹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235159' target='_blank'>蟹黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235161' target='_blank'>蟹肉</a></td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/贝.jpg' alt='水产' /></div><p>[贝]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234594' target='_blank'>鲍鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234600' target='_blank'>北极贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234631' target='_blank'>蛏子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234635' target='_blank'>赤贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234658' target='_blank'>淡菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234707' target='_blank'>干贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234741' target='_blank'>海蚌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234754' target='_blank'>蛤蜊</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234764' target='_blank'>河蚌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234768' target='_blank'>河蚬</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234940' target='_blank'>毛蛤蜊</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234964' target='_blank'>泥蚶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235016' target='_blank'>青口</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235040' target='_blank'>扇贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235052' target='_blank'>生蚝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235111' target='_blank'>文蛤</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235129' target='_blank'>鲜贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235220' target='_blank'>贻贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235226' target='_blank'>银蚶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235273' target='_blank'>锥螺</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/其他水产.jpg' alt='水产' /></div><p>[其他水产]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234743' target='_blank'>海胆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234746' target='_blank'>海螺</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234747' target='_blank'>海参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234752' target='_blank'>海蜇皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234753' target='_blank'>海蜇头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234776' target='_blank'>红螺</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234950' target='_blank'>墨鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234955' target='_blank'>牡蛎</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235091' target='_blank'>田鸡</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235093' target='_blank'>田螺</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235236' target='_blank'>鱿鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235258' target='_blank'>章鱼</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235288' target='_blank'>紫菜</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/藻类.jpg' alt='水产' /></div><p>[藻类]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234693' target='_blank'>发菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234742' target='_blank'>海带</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234745' target='_blank'>海冻菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234751' target='_blank'>海藻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234914' target='_blank'>螺旋藻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235025' target='_blank'>裙带菜</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>水果、干果类</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/水果.jpg' alt='水果、干果类' /></div><p>[水果]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234585' target='_blank'>百香果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234605' target='_blank'>枇杷</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234609' target='_blank'>槟榔</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234612' target='_blank'>菠萝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234621' target='_blank'>草莓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234628' target='_blank'>车厘子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234629' target='_blank'>橙</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234648' target='_blank'>刺山柑</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234677' target='_blank'>冬枣</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234696' target='_blank'>番石榴</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234701' target='_blank'>佛手柑</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234704' target='_blank'>覆盆子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234712' target='_blank'>柑桔</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234714' target='_blank'>橄榄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234719' target='_blank'>甘蔗</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234739' target='_blank'>桂圆</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234755' target='_blank'>哈蜜瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234756' target='_blank'>哈密瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234758' target='_blank'>黑布林</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234760' target='_blank'>黑橄榄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234778' target='_blank'>红毛丹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234802' target='_blank'>黄桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234815' target='_blank'>火龙果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234837' target='_blank'>金桔</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234840' target='_blank'>金丝瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234841' target='_blank'>金丝小枣</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234872' target='_blank'>桔子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234881' target='_blank'>蓝莓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234888' target='_blank'>梨</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234899' target='_blank'>榴莲</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234901' target='_blank'>荔枝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234902' target='_blank'>李子</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234932' target='_blank'>芒果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234937' target='_blank'>蔓越莓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234945' target='_blank'>猕猴桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234954' target='_blank'>木瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234965' target='_blank'>柠檬</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234987' target='_blank'>牛油果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234998' target='_blank'>苹果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235002' target='_blank'>葡萄</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235003' target='_blank'>葡萄干</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235004' target='_blank'>葡萄柚</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235005' target='_blank'>葡萄籽</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235033' target='_blank'>桑葚</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235038' target='_blank'>沙果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235041' target='_blank'>山楂</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235048' target='_blank'>山竹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235057' target='_blank'>石榴</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235061' target='_blank'>柿子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235065' target='_blank'>树莓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235077' target='_blank'>酸枣</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235088' target='_blank'>桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235117' target='_blank'>无花果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235136' target='_blank'>香瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235138' target='_blank'>香蕉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235139' target='_blank'>香梨</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235143' target='_blank'>仙人掌果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235162' target='_blank'>西瓜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235163' target='_blank'>西瓜皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235168' target='_blank'>杏</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235184' target='_blank'>鸭梨</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235193' target='_blank'>杨梅</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235200' target='_blank'>杨桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235219' target='_blank'>椰子</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235224' target='_blank'>樱桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235225' target='_blank'>樱桃番茄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235237' target='_blank'>柚子</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/干果.jpg' alt='水果、干果类' /></div><p>[干果]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234576' target='_blank'>白果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234592' target='_blank'>板栗</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234607' target='_blank'>碧根果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234691' target='_blank'>阿胶枣</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234717' target='_blank'>干无花果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234740' target='_blank'>桂圆肉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234744' target='_blank'>海底椰</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234762' target='_blank'>黑枣</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234766' target='_blank'>核桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234807' target='_blank'>花生</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234808' target='_blank'>花生仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234873' target='_blank'>开心果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234877' target='_blank'>葵花子仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234892' target='_blank'>莲子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234912' target='_blank'>罗汉果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234961' target='_blank'>南瓜子</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235043' target='_blank'>山核桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235074' target='_blank'>松子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235141' target='_blank'>鲜花生</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235158' target='_blank'>夏威夷果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235169' target='_blank'>杏仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235176' target='_blank'>雪莲果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235209' target='_blank'>腰果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235257' target='_blank'>红枣</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235262' target='_blank'>榛子</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>五谷杂粮</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/面.jpg' alt='五谷杂粮' /></div><p>[面]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234716' target='_blank'>干切面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234733' target='_blank'>挂面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234757' target='_blank'>河粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234944' target='_blank'>米粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235010' target='_blank'>荞麦面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235098' target='_blank'>通心粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235099' target='_blank'>通心面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235142' target='_blank'>籼米粉</a></td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/谷物.jpg' alt='五谷杂粮' /></div><p>[谷物]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234587' target='_blank'>白玉米面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234622' target='_blank'>糙米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234655' target='_blank'>大麦</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234656' target='_blank'>大米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234664' target='_blank'>低筋面粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234667' target='_blank'>莜麦面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234720' target='_blank'>高筋面粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234722' target='_blank'>高粱米</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234725' target='_blank'>葛根粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234761' target='_blank'>黑米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234772' target='_blank'>红豆</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234796' target='_blank'>黄米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234806' target='_blank'>黄玉米面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234813' target='_blank'>馄饨皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234836' target='_blank'>粳米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234929' target='_blank'>麦芽</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234943' target='_blank'>米饭</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234989' target='_blank'>糯米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235009' target='_blank'>荞麦</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235024' target='_blank'>全麦粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235063' target='_blank'>水面筋</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235066' target='_blank'>熟面粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235140' target='_blank'>香米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235151' target='_blank'>小麦</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235152' target='_blank'>小麦面粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235153' target='_blank'>小米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235154' target='_blank'>小米面</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235205' target='_blank'>燕麦</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235214' target='_blank'>鸭血糯</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235221' target='_blank'>薏米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235248' target='_blank'>玉米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235265' target='_blank'>芝麻</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235292' target='_blank'>紫米</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/其他杂粮.jpg' alt='五谷杂粮' /></div><p>[其他杂粮]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234889' target='_blank'>凉粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234934' target='_blank'>馒头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234942' target='_blank'>面包</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234962' target='_blank'>年糕</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235103' target='_blank'>吐司</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235206' target='_blank'>燕麦片</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235235' target='_blank'>油条</a></td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table><h3 style='margin-top:25px;margin-bottom:0px;padding-top:5px;border-top:2px solid #01A719;'>药食</h3><table cellpadding='0' cellspacing='0' border='0' width='100%' style='margin-top:25px;'><tr align='center' valign='top'><td width='16%'><div style='border:1px solid #E4E4E4;'><img src='images/food/药食.jpg' alt='药食' /></div><p>[药食]</p></td><td width='84%' valign='top'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234568' target='_blank'>艾叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234571' target='_blank'>百部</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234574' target='_blank'>白豆蔻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234575' target='_blank'>白矾</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234580' target='_blank'>白梅花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234581' target='_blank'>白芍</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234582' target='_blank'>白首乌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234583' target='_blank'>白术</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234588' target='_blank'>白芷</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234589' target='_blank'>巴戟天</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234591' target='_blank'>板蓝根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234593' target='_blank'>半夏</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234603' target='_blank'>扁蓄菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234611' target='_blank'>薄荷</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234613' target='_blank'>不老草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234618' target='_blank'>藏红花</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234620' target='_blank'>草果</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234630' target='_blank'>橙皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234632' target='_blank'>陈皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234633' target='_blank'>车前草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234634' target='_blank'>车前子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234638' target='_blank'>川贝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234639' target='_blank'>川贝母</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234641' target='_blank'>穿心莲</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234642' target='_blank'>川芎</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234649' target='_blank'>刺五加</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234653' target='_blank'>大黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234659' target='_blank'>当归</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234660' target='_blank'>党参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234661' target='_blank'>丹参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234663' target='_blank'>地黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234665' target='_blank'>地骷髅</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234666' target='_blank'>地龙</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234668' target='_blank'>丁香</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234672' target='_blank'>冬虫夏草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234685' target='_blank'>豆蔻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234686' target='_blank'>杜鹃花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234689' target='_blank'>杜仲</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234690' target='_blank'>阿胶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234694' target='_blank'>防风</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234698' target='_blank'>蜂胶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234699' target='_blank'>风轮草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234703' target='_blank'>茯苓</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234705' target='_blank'>芙蓉花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234708' target='_blank'>干薄荷</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234709' target='_blank'>甘草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234710' target='_blank'>干黄花菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234711' target='_blank'>干姜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234713' target='_blank'>干菊花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234721' target='_blank'>高良姜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234723' target='_blank'>高丽参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234724' target='_blank'>葛根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234726' target='_blank'>葛仙米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234729' target='_blank'>枸杞叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234730' target='_blank'>枸杞子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234731' target='_blank'>瓜蒌</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234732' target='_blank'>栝楼根粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234735' target='_blank'>龟板</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234737' target='_blank'>桂皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234765' target='_blank'>何首乌</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234773' target='_blank'>红花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234775' target='_blank'>红景天</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234788' target='_blank'>黄柏</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234789' target='_blank'>黄芪</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234794' target='_blank'>黄精</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234795' target='_blank'>黄连</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234798' target='_blank'>黄芩</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234817' target='_blank'>藿香叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234822' target='_blank'>绞股蓝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234834' target='_blank'>鸡骨草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234835' target='_blank'>鸡内金</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234838' target='_blank'>金钱草</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234842' target='_blank'>金樱子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234848' target='_blank'>鸡屎藤</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234859' target='_blank'>鸡血藤</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234865' target='_blank'>决明子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234866' target='_blank'>蒌蒿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234867' target='_blank'>桔梗</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234868' target='_blank'>橘红</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234871' target='_blank'>桔皮</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234879' target='_blank'>莱菔子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234882' target='_blank'>榄仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234883' target='_blank'>兰香子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234887' target='_blank'>叻沙叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234895' target='_blank'>羚羊角</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234898' target='_blank'>灵芝</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234907' target='_blank'>芦根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234915' target='_blank'>鹿茸</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234924' target='_blank'>马鞭草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234926' target='_blank'>麻根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234927' target='_blank'>麦冬</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234928' target='_blank'>麦瓶草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234935' target='_blank'>曼陀罗花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234938' target='_blank'>毛冬青</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234966' target='_blank'>柠檬叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234970' target='_blank'>牛大力</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234990' target='_blank'>女贞子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234993' target='_blank'>欧石楠</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234995' target='_blank'>胖大海</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1234997' target='_blank'>啤酒花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235001' target='_blank'>蒲公英叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235006' target='_blank'>掐不齐</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235007' target='_blank'>芡实米</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235023' target='_blank'>蚯蚓</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235026' target='_blank'>人参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235027' target='_blank'>肉苁蓉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235028' target='_blank'>肉豆蔻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235029' target='_blank'>肉桂</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235030' target='_blank'>肉蔻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235034' target='_blank'>桑叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235035' target='_blank'>三七花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235042' target='_blank'>山楂叶</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235044' target='_blank'>山黄皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235046' target='_blank'>山蜜草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235049' target='_blank'>砂仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235050' target='_blank'>沙参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235053' target='_blank'>生地黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235054' target='_blank'>石耳</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235055' target='_blank'>石斛</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235056' target='_blank'>使君子</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235062' target='_blank'>熟地黄</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235067' target='_blank'>鼠尾草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235073' target='_blank'>松针</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235078' target='_blank'>酸枣仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235079' target='_blank'>苏打粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235082' target='_blank'>锁阳</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235085' target='_blank'>太子参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235089' target='_blank'>桃仁</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235094' target='_blank'>天麻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235095' target='_blank'>田七</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235096' target='_blank'>通草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235102' target='_blank'>土三七</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235104' target='_blank'>菟丝子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235105' target='_blank'>歪头菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235120' target='_blank'>乌梅</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235122' target='_blank'>梧桐子</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235123' target='_blank'>乌头</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235124' target='_blank'>五味子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235125' target='_blank'>五指毛桃</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235127' target='_blank'>夏枯草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235132' target='_blank'>香椿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235133' target='_blank'>香附</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235137' target='_blank'>香花菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235172' target='_blank'>西洋参</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235173' target='_blank'>玄参</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235175' target='_blank'>雪菊</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235180' target='_blank'>薰衣草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235195' target='_blank'>羊栖菜</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235203' target='_blank'>养心草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235208' target='_blank'>盐藻</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235217' target='_blank'>野菊</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235218' target='_blank'>野蒜</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235222' target='_blank'>益母草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235227' target='_blank'>淫羊藿</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235238' target='_blank'>柚子皮</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235242' target='_blank'>月见草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235243' target='_blank'>鱼肝油</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235244' target='_blank'>余甘子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235245' target='_blank'>鱼胶粉</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235246' target='_blank'>玉兰花</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235247' target='_blank'>郁李仁</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235249' target='_blank'>玉米须</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235253' target='_blank'>鱼腥草</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235254' target='_blank'>鱼油</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235255' target='_blank'>玉竹</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235260' target='_blank'>折耳根</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235263' target='_blank'>知了</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235264' target='_blank'>知了肉</a></td></tr><tr align='center' height='40' valign='top'><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235291' target='_blank'>紫河车</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235294' target='_blank'>紫苏</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235295' target='_blank'>紫苏叶</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235296' target='_blank'>紫苏子</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235297' target='_blank'>紫藤花</a></td><td width='10.5%' style='font-size:14px;'><a href='food_introduce.php?id=1235298' target='_blank'>棕榈心</a></td><td width='10.5%'>&nbsp;</td><td width='10.5%'>&nbsp;</td></tr></table></td></tr></table>			
			</div>
			
			<div id="food_list_right">
				<div id="food_search">
					<table border="0" cellpadding="0" cellspacing="0" width="100%">
						<tr>
							<td width="25%" align="center"><span>快速搜索</span></td>
							<td width="73%" align="left" valign="middle">
								<table width="100%" border='0' cellpadding='0' cellspacing='0' bgcolor='#C0C0C0' height='22'>
									<tr>
										<td width="80%" style="border-left:1px solid #0654A9;"><input id="search_value" type="text" name="search_condition" value="" /></td>
										<td width="20%" align="center" style="height:18px;"><a href='#' id="search_button">搜索</a></td>
									</tr>
								</table>
							</td>
							<td width="2%"></td>
						</tr>
					</table>
				</div>
				
			
				<div style="margin-top:10px;border:1px solid #E4E4E4;">
					<script type="text/javascript">
					/*食材220*250，创建于2014-4-4*/
					var cpro_id = "u1512357";
					</script>
					<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
				</div>				
			
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>蔬菜</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235130' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='香菜'>香菜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234596' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='霸王花'>霸王花</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235090' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='甜菜根'>甜菜根</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234869' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='菊花'>菊花</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235100' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='土豆'>土豆</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234578' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='百合'>百合</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234948' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='蘑菇'>蘑菇</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234579' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='白萝卜'>白萝卜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234572' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='白菜'>白菜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234702' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='佛手瓜'>佛手瓜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
								
				<div class="food_ad">
					<img src="images/ad_images/food_ad7.jpg" alt="水产" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>水产</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
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
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234590' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='螃蟹'>螃蟹</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235025' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='裙带菜'>裙带菜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234693' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='发菜'>发菜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234658' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='淡菜'>淡菜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234594' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鲍鱼'>鲍鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235258' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='章鱼'>章鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234751' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='海藻'>海藻</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234631' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='蛏子'>蛏子</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234746' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='海螺'>海螺</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
				
				<div class="food_ad">
					<img src="images/ad_images/food_ad8.jpg" alt="肉类" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>肉类</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
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
														<a href='food_introduce.php?id=1235131' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='香肠'>香肠</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235118' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='五花肉'>五花肉</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234626' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='叉烧肉'>叉烧肉</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234846' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鸡肉'>鸡肉</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234979' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='牛肉'>牛肉</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234982' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='牛蹄筋'>牛蹄筋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235179' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='熏肉'>熏肉</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235277' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='猪肉'>猪肉</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234994' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='排骨'>排骨</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
				
				<div class="food_ad">
					<img src="images/ad_images/food_ad9.jpg" alt="豆类、豆制品" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>豆类、豆制品</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234939' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='毛豆'>毛豆</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234790' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='黄豆'>黄豆</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235233' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='油豆角'>油豆角</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235108' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='豌豆粒'>豌豆粒</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234598' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='北豆腐'>北豆腐</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234920' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='绿豆'>绿豆</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234759' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='黑豆'>黑豆</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234959' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='南豆腐'>南豆腐</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235008' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='千张'>千张</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234783' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='红腰豆'>红腰豆</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
				
				<div class="food_ad">
					<img src="images/ad_images/food_ad10.jpg" alt="蛋、奶" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>蛋、奶</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234957' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='奶酪'>奶酪</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234958' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='奶油'>奶油</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234826' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鸡蛋'>鸡蛋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235183' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鸭蛋'>鸭蛋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234803' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='黄油'>黄油</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235071' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='松花蛋'>松花蛋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235147' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='咸鸭蛋'>咸鸭蛋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234569' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鹌鹑蛋'>鹌鹑蛋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234827' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鸡蛋黄'>鸡蛋黄</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234727' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鸽子蛋'>鸽子蛋</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
				
				<div class="food_ad">
					<img src="images/ad_images/food_ad11.jpg" alt="鱼类" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>鱼类</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
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
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
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
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234810' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鮰鱼'>鮰鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235036' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='三文鱼'>三文鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234946' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='明太鱼'>明太鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234900' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='鲤鱼'>鲤鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234688' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='多春鱼'>多春鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234623' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='草鱼'>草鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234801' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='黄鳝'>黄鳝</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234905' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='龙利鱼'>龙利鱼</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
				
				<div class="food_ad">
					<img src="images/ad_images/food_ad12.jpg" alt="水果、干果类" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>水果、干果类</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
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
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234621' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='草莓'>草莓</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234965' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='柠檬'>柠檬</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235237' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='柚子'>柚子</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234807' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='花生'>花生</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235074' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='松子'>松子</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234756' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='哈密瓜'>哈密瓜</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234585' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='百香果'>百香果</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234902' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='李子'>李子</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234873' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='开心果'>开心果</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
								
				<div class="food_ad">
					<img src="images/ad_images/food_ad14.jpg" alt="药食" />
				</div>
				
				<div class="popular_food">
					<p>热门食材—<span style='color:#01A719;'>药食</span></p>
					<table border='0' cellspacing='0' cellpadding='0' width='100%' style='padding:0px auto;margin:0px auto;'><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235023' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='蚯蚓'>蚯蚓</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235026' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='人参'>人参</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234581' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='白芍'>白芍</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234895' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='羚羊角'>羚羊角</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235297' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='紫藤花'>紫藤花</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234580' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='白梅花'>白梅花</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234659' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='当归'>当归</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235030' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='肉蔻'>肉蔻</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#FFFFFF;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1235132' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='香椿'>香椿</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr><tr height='30' style='overflow:hidden;'><td align='center' style='background:#F5F5F5;padding:0px auto;'>
											<table width='100%' height='100%' cellspacing='0' cellpadding='0' border='0'>
												<tr>
													<td width='5%' align='left' style='padding-left:5px;'><img src='../system_images/symbol/direction_symbol/hot.png' alt='' style='width:20px;height:20px;'/></td>
													<td width='95%' align='center'>
														<a href='food_introduce.php?id=1234690' target='_blank' style='font-size:12px;text-align:center;'>
															<span title='阿胶'>阿胶</span>
														</a>
													</td>
												</tr>
											</table>
										</td></tr></table>		
				</div>
				
				<div style="margin-top:10px;">
					<script type="text/javascript">
					/*食材200*200，创建于2014-4-4*/
					var cpro_id = "u1512367";
					</script>
					<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
				</div>				
								
			</div>			
		</div>
		
		<div style="margin-top:10px;">
			<script type="text/javascript">
			/*自定义标签云，创建于2014-4-4*/
			var cpro_id = "u1512370";
			</script>
			<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
		</div>		
		
		﻿	<div id="bottom-bottom" style="margin:0px auto;padding-top:5px;line-height:1.8em;text-align:center;">
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
<script type="text/javascript">
/*食材首页250*200，创建于2013-7-27*/
var cpro_id = "u1328216";
</script>
<script src="http://cpro.baidustatic.com/cpro/ui/f.js" type="text/javascript"></script>
	
</body>
</html>


`