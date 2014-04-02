$(document).ready(function() {



	$('#custom').click(function() {
	  alert('custom clicked');
	   $("#circle").animate(
            { left:'450px',
			  height:'800px',
			  width:'800px',
			  top: '50px'
			},
            "slow");
			
	$('#image1').fadeTo( "slow", 0.0);
	$('#image2').fadeTo( "slow", 0.0);
	$('#image3').fadeTo( "slow", 0.0);
	$('#textDrag').fadeTo( "slow", 0.0);
	$('#seeStuff').fadeTo( "slow", 0.0);
	$('#pageID').fadeTo( "slow", 1.0);
	});

	
	names = ["Hannah Gilbert","JaMarcus Davidson","Sofia Wesley","Mark Smith","Genesis Hailey","Amelia Webster","Leah Hodges","Jocelyn Higgins","Madelyn Galbraith","Gabrielle Wayne","Elizabeth Cook","Zoe Calhoun","Natalie Sheldon","Maya Geraldo","Isabelle Morrison","Maria Turner","Lauren Hoggarth","Madelyn Osborne","Vanessa Nash","Khloe Mercer","Rachel Garblinski","Steven Goldman","Hailey Carrington","Judith Brickman","Julia Oliver","Jasmine Abramson","Brooke Creighton","Sophie Wainwright","Gabriella Walkman","Archibald Carrington","Isabella Haig","Peter Carrington","Gabrielle Crofton","Makayla Chandter","Miles Turner","Isabelle Wainwright","Andrew WifKinson","Brenda Brown","Scotty Nash","Ariana Clapton","Peyton Fulton","Victoria Brown","Molly Daniels","Cynthia Monroe","Payton Thomson","Payton Wainwright","Kylie Webster","Harry Chiglitz","Lawrence Gilson","Olivia Cook","Henry Miller","Natalie Smith","Zoey Wainwright","Charlotte Gardner","Ira Wallace","Samantha Brickman","Hannah Galbraith","Kayla Davidson","Nevaeh Osborne","Gabrielle Chesterton","Katherine Hamphrey","Jerry Michaelson","Victoria Gibbs","Barry Goodman","Vincent Wilthorpe","Barney Mercer","Camilla Kapinksy","Jessica Cook","Kaitlyn Vaughan","Evelyn Nash","Trinity Neal","Melanie Oswald","Sophia Goldman","Kimberly Nathan","Ashley Carter","Elizabeth Abramson","Vinny Amarillo","Layla Gardner","Irma Nathan","Leah Galbraith","Katherine Miln","Caroline Miller","Ernie Carter","Winston Smith","Fyodor Dostoevsky","Neville James","Lucrecious Carter","Zebediah Jones"];
	names.sort();

	var namesListHTML = '';
	$.each(names, function(i) {
		namesListHTML += '<li data-icon="false"><a href="#"><h3>' + names[i] + '</h3></a></li>';
	});
	
	$('#alphabetListID').append(namesListHTML);
	$('#alphabetListID').listview('refresh').alphascroll();

});