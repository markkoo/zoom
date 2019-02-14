

function imageToFrame(imageWidth, imageHeight, frameWidth, frameHeight, objectFix) {
    const imageRatioPercent = imageWidth / imageHeight;
    const frameRatioPercent = frameWidth / frameHeight;
    // contain and cover 刚好是倒反, 如果 percent 一样那么随便哪个都可以过
    const toWidth = (objectFix == 'contain') ? imageRatioPercent > frameRatioPercent : imageRatioPercent < frameRatioPercent;
    if (toWidth) {
        return {
            width: frameWidth,
            height: frameWidth / imageRatioPercent
        };
    } else {
        return {
            width: frameHeight * imageRatioPercent,
            height: frameHeight
        };
    }
}


const frameElement = document.querySelector('.frame');
const imageWidth = 1920;
const imageHeight = 1080;

const frameWidth = 800;
const frameHeight = 900;
const zoomWidth = 400;
const zoomHeight = 700;



const result = imageToFrame(frameWidth, frameHeight, zoomWidth, zoomHeight, 'contain');
frameElement.style.width = `${result.width}px`;
frameElement.style.height = `${result.height}px`;

