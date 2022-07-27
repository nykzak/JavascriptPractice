//Массив, в котором содержатся ссылки на изображения
				var imageArray = [
					"img/1.jpg",		
					"img/2.jpg",		
					"img/3.jpg",		
					"img/4.jpg",		
					"img/5.jpg"					
				];
				window.number = '0';
				//Привязываем количество картинок к размеру массива
				var imageCount = imageArray.length;		
				function image(num){				
					//Если выбрана следующая картинка
					if(num == 1){
						//Если это последняя картинка, то не увеличиваем счетчик number
						if(number < imageCount - 1){						
							number++;
							document.getElementById('images').src = imageArray[number];
							document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
						}
					}					 
					else{  //Если выбрана предыдущая картинка					
						//Если это первая картинка, то не уменьшаем счетчик number
						if(number > 0){						
							number--;
							document.getElementById('images').src = imageArray[number];
							document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
						}
					}
				}				
				//Функция для показа стрелочек
				function btn_show(){
					if(number != 0) document.getElementById('left').style.display='block';
					if(number != imageCount - 1) document.getElementById('right').style.display='block';
				}				
				//Функция, которая прекращает показ стрелочек
				function btn_noshow(){
					document.getElementById('left').style.display='none';
					document.getElementById('right').style.display='none';
				}
				//Выводим картинки
				document.write('<img id="images" src="' + imageArray[0] + '">');