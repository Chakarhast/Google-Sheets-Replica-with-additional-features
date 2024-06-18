function changeWhiteToBlack() {

    // Colors mapping
    const colorMapping = {
        "#F9FBFD": "black",  // Sample new color for background
        "#1e1e1e": "#FFFFFF",  // Sample new color for text
        "rgb(144, 196, 238)": "#00FF00",  // Sample new color for rightMostBox
        "rgb(239, 244, 249)": "#666",  // Sample new color for circularBar
        "#ffffff": "#00FF00",  // Sample new color for CB1 and others
        "#5d5b5b": "#00FF00",  // Sample new color for text
        "#3d3c3c": "#ddd",  // Sample new color for th first child text
        "#626161": "#eee",  // Sample new color for button text
        "#eeecec": "#000",  // Sample new color for scrollbar thumb
        "#9e9e9e": "#111"   // Sample new color for scrollbar thumb hover
    };

   
    // Change scrollbar colors (for WebKit browsers)
    const style = document.createElement('style');
    style.innerHTML = `
        .spreadSheet::-webkit-scrollbar-track {
            background: ${colorMapping["#ffffff"] || "#000"};
        }
        .spreadSheet::-webkit-scrollbar-thumb {
            background-color: ${colorMapping["#eeecec"] || "#000"};
            border: 3px solid ${colorMapping["#ffffff"] || "#000"};
        }
        .spreadSheet::-webkit-scrollbar-thumb:hover {
            background-color: ${colorMapping["#9e9e9e"] || "#000"};
        }
    `;
    document.head.appendChild(style);


    const taskBar = document.querySelector('.taskBar');
    taskBar.style.backgroundColor = "black";


    const spreadSheet = document.querySelector('.spreadSheet');
    spreadSheet.style.backgroundColor = "black";
    spreadSheet.style.color = "#bfbebb"; // first row text

   

    // First Row borders
    const sSfirstrowborder = document.querySelectorAll('.spreadSheet th');

    sSfirstrowborder.forEach(th => {
        th.style.borderColor = '#2b2a2a'; 
    });

    // All cell borders
    const sSallcellcolumnborder = document.querySelectorAll('.spreadSheet td');

    sSallcellcolumnborder.forEach(td => {
        td.style.borderColor = '#2b2a2a'; 
    });


    // First column
    const firstColumnThs = document.querySelectorAll('#gridTable th:first-child');
  
    // Apply styles to th elements
    firstColumnThs.forEach(th => {
        th.style.borderColor = '#2b2a2a';
        th.style.backgroundColor = 'black';
        th.style.color = '#bfbebb';
    });

    
}