function togglePopup(region=''){

    const popup=document.getElementById("popup-1");
    const title=document.getElementById("popup-title");
    const content=document.getElementById("popup-content");
    const image1=document.getElementById("popup-img")
    

    if(region){
        title.innerText=region;

        if (region === 'Delhi') {
            image1.src = 'download.jpeg';
            content.innerText = 'Delhi, the capital city of India, is a vibrant metropolis with a rich history and modern infrastructure. It is known for its historical landmarks like the Red Fort, India Gate, and Qutub Minar, alongside being the political hub of the country. Delhi is also famous for its diverse culture, bustling markets, and a blend of old-world charm with contemporary urban life. The city serves as a major center for politics, commerce, education, and culture in India.';
        }

        if (region === 'West-Bengal') {
            content.innerText = 'west bengal ,West Bengal is a state in eastern India, known for its cultural heritage, including the historic city of Kolkata, the Sundarbans mangrove forest, and the Darjeeling tea plantations.';
        }

        if(region === "tamilnadu")
        {
            image1.src = 'images.jpeg';
            content.innerText="Tamil Nadu, located in the southern part of India, is known for its rich cultural heritage, classical arts, and vibrant traditions. The state is famous for its ancient temples with stunning Dravidian architecture, such as the Brihadeeswarar Temple in Thanjavur and the Meenakshi Temple in Madurai. Tamil Nadu is also a hub for classical music, Bharatanatyam dance, and Tamil literature. The state has a diverse landscape ranging from the Nilgiri Hills to the coastal plains along the Bay of Bengal, and it plays a significant role in India's textile, automobile, and technology industries.";
        }
        
    }


    popup.classList.toggle("active");
}

const legendtex=document.getElementById("legend-text");
const namearea=document.changelegend()

function changelegend() {
    // Use the `event` object to get the element that triggered the event
    const areaElement = event.target;

    // Log the title of the area element
    console.log(areaElement.title);

    // Set the legend text to the title of the area element
    const legendtex = document.getElementById("legend-text");
    legendtex.textContent = areaElement.title;
}

// Attach the `changelegend` function to each area element
const areaElements = document.querySelectorAll('area.tooltip');
areaElements.forEach(area => {
    area.addEventListener('mouseover', changelegend);
});