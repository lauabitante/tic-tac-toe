
function Eu(game_array, player_id) {
	
	
	//COLUNAS MEIO
	
	if(game_array[0][0] == 'o' && game_array[0][2] == 'o' && game_array[0][1] != 'x'){
		return Array(0,1);
	} 
	else if(game_array[1][0] == 'o' && game_array[1][2] == 'o' && game_array[1][1] != 'x') {
		return Array(1,1);
	}
	else if(game_array[2][0] == 'o' && game_array[2][2] == 'o' && game_array[2][1] != 'x'){
		return Array(2,1);
	}
	
	
	
	//COLUNAS BAIXO
	
	else if(game_array[0][2] == 'o' && game_array[0][1] == 'o' && game_array[0][0] != 'x'){
		return Array(0,0);
	}
	else if(game_array[1][2] == 'o' && game_array[1][1] == 'o' && game_array[1][0] != 'x'){
		return Array(1,0);
	}
	else if(game_array[2][2] == 'o' && game_array[2][1] == 'o' && game_array[2][0] != 'x'){
		return Array(2,0);
	}
	
	
	//COLUNAS CIMA
	
	else if(game_array[0][0] == 'o' && game_array[0][1] == 'o' && game_array[0][2] != 'x'){
		return Array(0,2);
	}
	else if(game_array[1][0] == 'o' && game_array[1][1] == 'o' && game_array[1][2] != 'x'){
		return Array(1,2);
	}
	else if(game_array[2][0] == 'o' && game_array[2][1] == 'o' && game_array[2][2] != 'x'){
		return Array(2,2);
	}
	
	
	
	//LINHAS FIM
	
	else if(game_array[0][0] == 'o' && game_array[1][0] == 'o' && game_array[2][0] != 'x'){
		return Array(2,0);
	}
	else if(game_array[0][1] == 'o' && game_array[1][1] == 'o' && game_array[2][1] != 'x'){
		return Array(2,1);
	}
	else if(game_array[0][2] == 'o' && game_array[1][2] == 'o' && game_array[2][2] != 'x'){
		return Array(2,2);
	}
	
	
	
	//LINHAS MEIO
	
	else if(game_array[0][0] == 'o' && game_array[2][0] == 'o' && game_array[1][0] != 'x'){
		return Array(1,0);
	}
	else if(game_array[0][1] == 'o' && game_array[2][1] == 'o' && game_array[1][1] != 'x'){
		return Array(1,1);
	}
	else if(game_array[0][2] == 'o' && game_array[2][2] == 'o' && game_array[1][2] != 'x'){
		return Array(1,2);
	}
	
	
	
	//LINHAS INÍCIO
	
	else if(game_array[1][0] == 'o' && game_array[2][0] == 'o' && game_array[0][0] != 'x'){
		return Array(0,0);
	}
	else if(game_array[1][1] == 'o' && game_array[2][1] == 'o' && game_array[0][1] != 'x'){
		return Array(0,1);
	}
	else if(game_array[1][2] == 'o' && game_array[2][2] == 'o' && game_array[0][2] != 'x'){
		return Array(0,2);
	}
	
	
	
	//DIAGONAL CANTOS CIMA
	
	else if(game_array[1][1] == 'o' && game_array[2][0] == 'o' && game_array[0][2] != 'x'){
		return Array(0,2);
	}
	else if(game_array[0][0] == 'o' && game_array[1][1] == 'o' && game_array[2][2] != 'x'){
		return Array(2,2);
	}
	
	
	
	//DIAGONAL MEIO
	
	else if(game_array[0][2] == 'o' && game_array[2][0] == 'o' && game_array[1][1] != 'x'){
		return Array(1,1);
	}
	else if(game_array[0][0] == 'o' && game_array[2][2] == 'o' && game_array[1][1] != 'x'){
		return Array(1,1);
	}
	
	
	
	//DIAGONAL CANTOS BAIXO
	
	else if(game_array[1][1] == 'o' && game_array[2][2] == 'o' && game_array[0][0] != 'x'){
		return Array(0,0);
	}
	else if(game_array[0][2] == 'o' && game_array[1][1] == 'o' && game_array[2][0] != 'x'){
		return Array(2,0);
	}
	
	
	else{
		return Array(Math.floor((Math.random() * 3) + 0), Math.floor((Math.random() * 3) + 0));
	}
}