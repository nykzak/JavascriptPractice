window.addEventListener('DOMContentLoaded', () => {
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();


        //request.open(method, url, async , login , pass);
        request.open('GET','current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();





        request.addEventListener('readystatechange', function(){
            if (request.readyState === 4 && request.status == 200){

                let data = JSON.parse(request.response);

                inputUsd.value = inputRub.value / data.usd;

            }else{
                inputUsd.value = "Error";
            }

        });

});
});

/*
inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response)
                        }
                        else {
                            reject();
                        
                        }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")


});

*/















/*
var carName = 'ford'
var carYear = 2010
var personYear = 1990

calculateAge = year =>{
	var currectAge = 2019
	var result = currectAge - year
	return result;
}

checkAndLogAge = year =>{
	if(calculateAge(year) <10){
		console.log('Возраст меньше 10 ')
	}else {
			console.log('Возраст больше 10')
	}
}
checkAndLogAge(carYear)
checkAndLogAge(personYear)
*/