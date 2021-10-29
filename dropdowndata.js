
function fillCategory(){ 
 // this function is used to fill the category list on load
addOption(document.drop_list.Category, "IT", "IT", "");
addOption(document.drop_list.Category, "Business", "Business", "");
addOption(document.drop_list.Category, "Aviation", "Aviation", "");
}

function SelectSubCat(){
// ON selection of category this function will work

removeAllOptions(document.drop_list.SubCat);
addOption(document.drop_list.SubCat, "", "Select Your Position", "");

if(document.drop_list.Category.value == 'IT'){
addOption(document.drop_list.SubCat,"Web Development", "Web Development");
addOption(document.drop_list.SubCat,"Front-End Developer", "Front-End Developer");
addOption(document.drop_list.SubCat,"Full-Stack Developer", "Full-Stack Developer");
}
if(document.drop_list.Category.value == 'Business'){
addOption(document.drop_list.SubCat,"Accountant", "Accountant");
addOption(document.drop_list.SubCat,"Market Research Analyst", "Market Research Analyst");
addOption(document.drop_list.SubCat,"Fundraiser", "Fundraiser", "");
}
if(document.drop_list.Category.value == 'Aviation'){
addOption(document.drop_list.SubCat,"Aircraft Dispatcher", "Aircraft Dispatcher");
addOption(document.drop_list.SubCat,"Airline Pilot", "Airline Pilot");
addOption(document.drop_list.SubCat,"Flight Attendant", "Flight Attendant");
}

}
////////////////// 

function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		//selectbox.options.remove(i);
		selectbox.remove(i);
	}
}


function addOption(selectbox, value, text )
{
	var optn = document.createElement("option");
	optn.text = text;
	optn.value = value;

	selectbox.options.add(optn);
}
