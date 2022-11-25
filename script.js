const TITLE = document.getElementById("title");
let widthTitle = TITLE.getBoundingClientRect().width;
let leftTitle = TITLE.getBoundingClientRect().left;
let rightTitle = TITLE.getBoundingClientRect().right;

let middleXTitle = leftTitle + widthTitle / 2;
let middleYTitle = TITLE.getBoundingClientRect().top + TITLE.getBoundingClientRect().height / 2;

let marginRightTitle = window.innerWidth - middleXTitle;
let marginLeftTitle = middleXTitle;

const MAX_TRANSLATE = 15;
const MAX_HEIGHT = 500;

let currentTranslateX = 0;
let currentTranslateY = 0;


document.addEventListener("mousemove", (e) =>{
    if(e.clientX > middleXTitle){
        //console.log("right");
        let percentageRight = ((e.clientX - middleXTitle) / marginRightTitle) * 100;
        currentTranslateX = -(MAX_TRANSLATE * (percentageRight / 100));
    }

    if(e.clientX < middleXTitle){
        //console.log("left");
        let percentageLeft = ((middleXTitle - e.clientX) / marginLeftTitle) * 100;
        currentTranslateX = (MAX_TRANSLATE * (percentageLeft / 100));
    }

    if(e.clientY > middleYTitle){
        let percentageBottom = 0;
        if((e.clientY - middleYTitle) > MAX_HEIGHT){
            percentageBottom = 100;
        }else{
            percentageBottom = ((e.clientY - middleYTitle) / MAX_HEIGHT) * 100;
        }
        currentTranslateY = -(MAX_TRANSLATE * (percentageBottom / 100));
    }

    if(e.clientY < middleYTitle){
        console.log("top");
    }

    TITLE.style.transform = "translate("+ currentTranslateX +"px, "+ currentTranslateY +"px)";
});