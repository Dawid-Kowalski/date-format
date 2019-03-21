const formatDate = (timeInSeconds) => {

	let results = "";

	if(timeInSeconds == null){
		return results += '0s';
	}

	const houers = Math.floor(timeInSeconds / 3600);
	const minutes = Math.floor((timeInSeconds - houers*3600)/60);
	const seconds = (timeInSeconds  % 3600) % 60;

	if(houers!=0){
		results += `${houers}h `;
	}

	if(minutes!=0){
		results += `${minutes}m `;
	}

	if(seconds!=0 || (seconds==0 && (((houers && minutes) || (!!houers && minutes) || (houers && !!minutes)) && !(!!houers && !!minutes)))){
		results += `${seconds}s `;
	}

	results = results.slice(0,results.length-1);

	return results;
}

module.exports = formatDate;