// get the vars for the block paragraph
const BHSlider = document.getElementById("block-height-slider");
const BHSliderOutput = document.getElementById("block-height-output");
const BWSlider = document.getElementById("block-width-slider");
const BWSliderOutput = document.getElementById("block-width-output");
const blockParaElement = document.getElementById("block-para");

// assign an event listener for the block height slider
BHSlider.addEventListener("input", () => {
    const heightValue = BHSlider.value + "px";
    blockParaElement.style.height = heightValue;
    BHSliderOutput.textContent = BHSlider.value;
});

// assign an event listener for the block width slider
BWSlider.addEventListener("input", () => {
    const widthValue = BWSlider.value + "px";
    blockParaElement.style.width = widthValue;
    BWSliderOutput.textContent = BWSlider.value;
});


// get the vars for the inline paragraph
const ILHSlider = document.getElementById("inline-height-slider");
const ILHSliderOutput = document.getElementById("inline-height-output");
const ILWSlider = document.getElementById("inline-width-slider");
const ILWSliderOutput = document.getElementById("inline-width-output");
const inlineParaElement = document.getElementById("inline-para");

// assign an event listener for the inline height slider
ILHSlider.addEventListener("input", () => {
    const heightValue = ILHSlider.value + "px";
    inlineParaElement.style.height = heightValue;
    ILHSliderOutput.textContent = ILHSlider.value;
});

// assign an event listener for the inline width slider
ILWSlider.addEventListener("input", () => {
    const widthValue = ILWSlider.value + "px";
    inlineParaElement.style.width = widthValue;
    ILWSliderOutput.textContent = ILWSlider.value;
});


// get the vars for the inline-block paragraph
const ILBHSlider = document.getElementById("inline-block-height-slider");
const ILBHSliderOutput = document.getElementById("inline-block-height-output");
const ILBWSlider = document.getElementById("inline-block-width-slider");
const ILBWSliderOutput = document.getElementById("inline-block-width-output");
const inlineBlockParaElement = document.getElementById("inline-block-para");

// assign an event listener for the inline-block height slider
ILBHSlider.addEventListener("input", () => {
    const heightValue = ILBHSlider.value + "px";
    inlineBlockParaElement.style.height = heightValue;
    ILBHSliderOutput.textContent = ILBHSlider.value;
});

// assign an event listener for the inline-block width slider
ILBWSlider.addEventListener("input", () => {
    const widthValue = ILBWSlider.value + "px";
    inlineBlockParaElement.style.width = widthValue;
    ILBWSliderOutput.textContent = ILBWSlider.value;
});
