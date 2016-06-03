function investmentReturns(age, start, expReturn, amtAdded, yrsAdded, yrs, retYr, retAmt)
{
	var investment = start; 
	var investmentStr = ''; 
	var age = age; 
	for(let i= 0; i< yrs; i++)
	{
		age += 1; 
		investment += investment * expReturn;
		if(i< yrsAdded)
		{
			investment+= amtAdded;
			investment = Math.floor(investment);
			investmentStr = investment.toLocaleString();	//this adds appropriate commas
			console.log('age ' + (age) + ': ' + investmentStr + ' contributed here '); 
		}
		else if(age < retYr)
		{
			investment = Math.floor(investment);
			investmentStr = investment.toLocaleString();	//adds appropriate commas
			console.log('age ' + (age) + ': ' + investmentStr);
		}
		else
		{
			investment -= retAmt;
			investment= Math.floor(investment);
			investmentStr = investment.toLocaleString();
			console.log("age " + (age) + ': ' + investmentStr + ' retired');
		}
	}
}

investmentReturns(25, 0, .05, 40000, 20, 60, 62, 60000);