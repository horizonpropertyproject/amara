//home

exports.home=function(req,res)
{
res.render('home',{
	title:"Best Opportunity To Invest In Sheth Zuri At Thane",
 });
};
//Not Found
exports.notFound=function(req,res){
	res.send('The page you are looking not found');
};
