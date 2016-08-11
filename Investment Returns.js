function investmentReturns(age, start, expReturn, amtAdded, yrs, yrsAdded, retYr, retAmt) {
	var returnArr = [];
	var investment = start; 
	var investmentStr= ''; 
	for(var i = 0; i < yrs; i++) {
		age++; 
		investment += investment * expReturn;
		if(i< yrsAdded) {
			investment+= amtAdded;
			investment = Math.floor(investment);
			investmentStr = investment.toLocaleString();	//this adds appropriate commas
			console.log('age ' + (age) + ': ' + 'Net Worth: ' + investmentStr + ' contributed here '); 
			returnArr.push(
				[{
					age : age,
					netWorth : investmentStr, 
					saved : 'Yes'
					
				}]
			);
		}
		else if(age < retYr) {
			investment = Math.floor(investment);
			investmentStr = investment.toLocaleString();	//adds appropriate commas
			console.log('age ' + (age) + ': ' + 'Net Worth: ' + investmentStr);
			returnArr.push(
				[{
					age : age,
					netWorth : investmentStr, 
					saved : 'No'
					
				}]
			);
		}
		else {
			investment -= retAmt;
			investment= Math.floor(investment);
			investmentStr = investment.toLocaleString();
			console.log("age " + (age) + ': ' + 'Net Worth: ' + investmentStr + ' retired');
			returnArr.push(
				[{
					age : age,
					netWorth : investmentStr, 
					saved : 'No'
					
				}]
			);
		}
	}
	//IF YOU WOULD LIKE TO SEE ARRAY OF OBJECTS, UNCOMMENT RETURN
	//return returnArr;
}

//CHANGE HERE!
var yourAge = 25, 
	yourNetWorth = 0;
	ROI = .04, //4 percent ROI
	yourSavings = 30000,
	yearsToRun = 60,
	yearsSaved = 30,
	yearRetired = 62,
	amtForRetirement = 80000;
	

investmentReturns(yourAge, yourNetWorth, ROI, yourSavings, yearsToRun, yearsSaved, yearRetired, amtForRetirement);
