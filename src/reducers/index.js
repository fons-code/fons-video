const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			return {
				...state,
				mylist: [...state.mylist, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;


function findNb(m) {
    let acum = 0
    let count = 0
    while(acum==m){
      acum += (count + 1)**3
      count ++
	}
	console.log(count -1)
	console.log(acum)
    if(acum == m) {
    return count 
    }else{
      return (-1);
    }
}

console.log(findNb(135440716410000));
