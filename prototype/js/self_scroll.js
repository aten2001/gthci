$(document).ready(function() {

	names = ["Quan Yu","Yan Lin","Xander Andrew","Ubera Kelvin","David Davidson","Hannah Gilbert","JaMarcus Davidson","Sofia Wesley","Mark Smith","Genesis Hailey","Amelia Webster","Leah Hodges","Jocelyn Higgins","Madelyn Galbraith","Gabrielle Wayne","Elizabeth Cook","Zoe Calhoun","Natalie Sheldon","Maya Geraldo","Isabelle Morrison","Maria Turner","Lauren Hoggarth","Madelyn Osborne","Vanessa Nash","Khloe Mercer","Rachel Garblinski","Steven Goldman","Hailey Carrington","Judith Brickman","Julia Oliver","Jasmine Abramson","Brooke Creighton","Sophie Wainwright","Gabriella Walkman","Archibald Carrington","Isabella Haig","Peter Carrington","Gabrielle Crofton","Makayla Chandter","Miles Turner","Isabelle Wainwright","Andrew WifKinson","Brenda Brown","Scotty Nash","Ariana Clapton","Peyton Fulton","Victoria Brown","Molly Daniels","Cynthia Monroe","Payton Thomson","Payton Wainwright","Kylie Webster","Harry Chiglitz","Lawrence Gilson","Olivia Cook","Henry Miller","Natalie Smith","Zoey Wainwright","Charlotte Gardner","Ira Wallace","Samantha Brickman","Hannah Galbraith","Kayla Davidson","Nevaeh Osborne","Gabrielle Chesterton","Katherine Hamphrey","Jerry Michaelson","Victoria Gibbs","Barry Goodman","Vincent Wilthorpe","Barney Mercer","Camilla Kapinksy","Jessica Cook","Kaitlyn Vaughan","Evelyn Nash","Trinity Neal","Melanie Oswald","Sophia Goldman","Kimberly Nathan","Ashley Carter","Elizabeth Abramson","Vinny Amarillo","Layla Gardner","Irma Nathan","Leah Galbraith","Katherine Miln","Caroline Miller","Ernie Carter","Winston Smith","Fyodor Dostoevsky","Neville James","Lucrecious Carter","Zebediah Jones"];
	names.sort();

	var namesListHTML = '';
	var curr = names[0].charAt(0);
	
	console.log("first curr: " + curr);
	$.each(names, function(i) {
		if(names[i].charAt(0) == curr) {
			namesListHTML += '<li style="display: none;" id="' + curr + '" class="' + curr + '" data-icon="false"><a href="#"><h3>' + names[i] + '</h3></a></li>';
			//namesListHTML += '<li class="' + curr + '"Class data-icon="false"><a href="#"><h3>' + names[i] + '</h3></a></li>';
		} else {
			curr = names[i].charAt(0);
			namesListHTML += '<li style="display: none;" id="' + curr + '" class="' + curr + '" data-icon="false"><a href="#"><h3>' + names[i] + '</h3></a></li>';
			//namesListHTML += '<li class="' + curr + 'Class" data-icon="false"><a href="#"><h3>' + names[i] + '</h3></a></li>';
		}
	});

	$('#alphabetListID').append(namesListHTML);
	//$('#alphabetListID').listview('refresh').alphascroll();
	
	$('#alphabetListID').css('display', 'none');
	var list = $('#alphabetListID .' + names[0].charAt(0));
	$.each(list, function(i) {
		var temp = $(list[i]).clone();
		$(temp).attr('id', 'NEW' + $(list[i]).attr('id'));
		$('#nameListID').append(temp);
		$(temp).css('display', 'block');
	});
	$('#nameListID').listview('refresh');
	$('#alphabetListID').listview('refresh').alphascroll();
});