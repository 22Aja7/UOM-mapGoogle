let places = [
        {place:"dnyaneshwar bhavan",lat:19.07241,lng:72.85818},
{place:"lokmanya tilak bhavan (department of physics)",lat:19.07210,
lng:72.85850},
{place:"department of biotechnology",lat:19.07142,lng:72.85858},
{place:"pherozshah mehta bhavan (deparment of civics and politics)",lat:19.07358,lng:72.85906},
{place:"department of communication and journalism",lat:19.07308,lng:72.86044},
{place:"health center (mehul stationary)",lat:19.07307,lng:72.86024},
{place:"department of archeology",lat:19.07322,lng:72.86023},
{place:"center for extra mural studies",lat:19.07306,lng:72.86020},
{place:"savitribai phule hostel",lat:19.07302,lng:72.85965},
{place:"three monkey point",lat:19.07273,lng:72.85996},
{place:"rose garden",lat:19.07224,lng:72.85984},
{place:"sculpture point",lat:19.07174,lng:72.85995},
{place:"academy for administrative career",lat:19.07178,lng:72.86018},
{place:"j.p naik bhavan",lat:19.07177,lng:72.86023},
{place:"K.B.P boys hostel",lat:19.07019,lng:72.85973},
{place:"UGC human resources development centre",lat:19.06960,lng:72.85972},
{place:"university of mumbai law academy",lat:19.06947,lng:72.85990},
{place:"shakarrao chavan bhavan",lat:19.06945,lng:72.86001},
{place:"maulana abul kalam azad bhavan",lat:19.06892,lng:72.85920},
{place:"alkesh dinesh mody institute for financial and management studies",
lat:19.06965,lng:72.85845},
{place:"mahatma jyotirao phule bhavan",lat:19.06860,lng:72.85740},
{place:"university main canteen",lat:19.07089,lng:72.85898},
{place:"the buddha circle",lat:19.0711,lng:72.85833},
{place:"marathi bhasa bhavan",lat:19.07082,lng:72.85820},
{place:"nyaymurthi ranade bhavan",lat:19.07101,lng:72.85789},
{place:"pariksha bhavan(exam house)",lat:19.06829,lng:72.85719},
{place:"chatrapati shivaji maharaj bhavan",lat:19.06814,lng:72.85765},	
{place:"rajiv gandhi centre for contemporary studies",lat:19.07012,lng:72.85598},
{place:"thesis department of mumbai",lat:19.06907,lng:72.85528},
{place:"national centre for nanoscience and nanotechnology",lat:19.06898,lng:72.85510},
{place:"CEBS hostel takshashila",lat:19.06823,lng:72.85506},			
{place:"UM-DAE centre for excellencce and basic ( CEBS)",lat:19.06790,lng:72.85476},
{place:"international students hostel",lat:19.06811,lng:72.85444},			
{place:"Dr. ambedkar bhavan",lat:19.072487454083642,lng:72.85537341132714}, 		
{place:"university of mumbai sports complex",lat:19.073364290353833,lng:72.85412002351745},				
{place:"centre for central euresian studies",lat:19.07024055864898,lng:72.85787042225209},	
{place:"department of applied psychology",lat:19.072435225571727,lng:72.85693500185818},
{place:"basket ball courts",lat:19.072705199916825,lng:72.85454381252185},
{place:"garware institute of career educations and development",lat:19.07357722670885,
lng:72.85708654663445},
{place:"university department  of information techonology",
lat:19.073090514646065,lng:72.85829890513193},
{place:"instiute of distance learning",lat:19.07318620944782,lng:72.85857852546947},
{place:"nehru yuva kendra sanghthan",lat:19.071873094481365,lng:72.86031659687633},		
{place:"old lecture complex",lat:19.07169818069658,lng:72.85762522581585}
    ];
	
    let inputs = document.querySelectorAll("input");
    let start = document.querySelector("select[name='start']");
    let end = document.querySelector("select[name='end']");
    inputs[0].addEventListener("keyup", (e) => doAction(e, start));
    
	inputs[1].addEventListener("keyup", (e) => doAction(e, end));
    start.addEventListener("change", () => {
        inputs[0].value = start.options[start.selectedIndex].innerText;
    });
    end.addEventListener("change", () => {
        inputs[1].value = end.options[end.selectedIndex].innerText;
    });
    function doAction(e, targetSelect) {
        targetSelect.options.length = 1; // Clear previous options except the first one
        if(e.target.value == "")
		{targetSelect.options.length = 1;}
		else
		{for (let pl of places) {
            if (pl.place.toLowerCase().includes(e.target.value.toLowerCase())) {
                targetSelect.options[targetSelect.options.length] = new Option(pl.place, `${pl.lat},${pl.lng}`);
            }}}}
document.getElementById('map_direction').addEventListener("click",() => {
		let [lat1,lng1] = start.value.split(",");
		let [lat2,lng2] = end.value.split(",");
		if(lat1 == lat2 && lat2 == lat2)
		{
			alert("both position must be different");
		}
		
		else if (lat1 && lng1 && lat2 && lng2) {
            open("https://www.google.com/maps/dir/"+start.value +"/"+ (end.options[end.selectedIndex].innerText).split(" ").join("+") +"/@"+end.value+"z/");
        } else {
            alert('Please select both start and end locations.');
        }});