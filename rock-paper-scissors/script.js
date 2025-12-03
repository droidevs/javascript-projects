

const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector('.result');
const optionsImages = document.querySelectorAll('.option_image');


optionsImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait..."
        optionsImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add('start');

        let time = setTimeout(() => {
            gameContainer.classList.remove('start');
            let imageSrc = e.target.querySelector('img').src;
            userResult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ['images/rock.png','images/paper.png','images/scissors.png'];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ['R','P','S'][randomNumber];
            let userValue = ['R','P','S'][index];

            let outComes = {
                RP:'Cpu',
                RS:'User',
                PS:'Cpu',
                PR:'User',
                SR:'Cpu',
                SP:'User'
            };


            let outComeValue = outComes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValue} Won`;
        },2500);
    });
})
console.log(gameContainer, userResult, cpuResult, result, optionsImages);

