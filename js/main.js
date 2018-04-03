
const data = [
    {
        data: 10,
        backgroundColor: "#e5685e",
        highlight: "#e29691",
        label: "HTML",
        labelcolor: "#e5685e"
    },
    {
        data: 8,
        backgroundColor: "#e58f62",
        highlight: "#e0a78b",
        label: "AngularJS",
        labelcolor: "#e58f62"
    },
    {
        data: 8,
        backgroundColor: "#4da395",
        highlight: "#6ea39a",
        label: "R",
        labelcolor: "#4da395"
    },
    {
        data: 7,
        backgroundColor: "#fd6887",
        highlight: "#ff879f",
        label: "JavaScript/ES6",
        labelcolor: "#fd6887"
    },
    {
        data: 7,
        backgroundColor: "#30a4fc",
        highlight: "#48aff9",
        label: "Bootstrap",
        labelcolor: "#30a4fc"
    },
    {
        data: 6,
        backgroundColor: "#be917c",
        highlight: "#bf9b8b",
        label: "jQuery",
        labelcolor: "#be917c"
    },
    {
        data: 6,
        backgroundColor: "#81d6ca",
        highlight: "#93d6cc",
        label: "Ajax",
        labelcolor: "#81d6ca"
    },
    {
        data: 6,
        backgroundColor: "#8585be",
        highlight: "#9191bc",
        label: "LESS",
        labelcolor: "#8585be"
    },
    {
        data: 6,
        backgroundColor: "#999999",
        highlight: "#a8a6a6",
        label: "Java",
        labelcolor: "#999999"
    },
    {
        data: 6,
        backgroundColor: "#627115",
        highlight: "#747f33",
        label: "PHP",
        labelcolor: "#627115"
    },
    {
        data: 6,
        backgroundColor: "#f2d37f",
        highlight: "#f2d68e",
        label: "C#",
        labelcolor: "#f2d37f"
    },
    {
        data: 6,
        backgroundColor: "#8b1e23",
        highlight: "#912e31",
        label: "ASP.NET",
        labelcolor: "#8b1e23"
    },
    {
        data: 5,
        backgroundColor: "#be917c",
        highlight: "#bc9887",
        label: "React.js",
        labelcolor: "#be917c"
    },
    {
        data: 5,
        backgroundColor: "#92a621",
        highlight: "#9aad30",
        label: "Redux",
        labelcolor: "#92a621"
    },
    {
        data: 5,
        backgroundColor: "#552905",
        highlight: "#562b08",
        label: "SQL",
        labelcolor: "#552905"
    },
    {
        data: 5,
        backgroundColor: "#a7287d",
        highlight: "#a83481",
        label: "Node.js",
        labelcolor: "#a7287d"
    },
    {
        data: 4,
        backgroundColor: "#fec850",
        highlight: "#fcd174",
        label: "Python",
        labelcolor: "#fec850"
    }
];

const skillData = {
    labels: ["HTML","AngularJS","R","JavaScript/ES6","Bootstrap","jQuery","Ajax","LESS","Java","PHP","C#","ASP.NET","React.js","Redux","SQL","Node.js","Python"],
    datasets: [{
        data: [10,8,8,7,7,6,6,6,6,6,6,6,5,5,5,5,4],
        backgroundColor: [
            "#e5685e","#92a621","#4da395","#fdb66c","#fd6887","#30a4fc","#be917c","#81d6ca","#ffe94c","#999999","#627115","#f2d37f","#8b1e23","#8585be","#e58f62","#552905","#a7287d"
        ]
    }]
}
const options = {
    animation: {
        animateRotate: true
    }
};

var displaySkillChart = () => {
    data.map((data) => {
        let label = data.label;
        let color = data.labelcolor;
        let skillElement = '<span class="label ' + color + '">' + label + '</span>';
        document.getElementById("skillList").insertAdjacentHTML('beforeend', skillElement);
    });
}

var displayProgressBar = (container, value) => {
    var bar = new ProgressBar.Line(container, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 3000,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            value: value,
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '0px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        }
    });
    bar.animate(parseInt(value)/100);  // Number from 0.0 to 1.0
}

window.onload = function() {
    window.myPolarArea = new Chart(document.getElementById("skillChart"), {
        type: 'polarArea',
        data: skillData,
        options: options
    });
    
    displayProgressBar('#progressBar_1', '100%');
    displayProgressBar('#progressBar_2', '100%');
    displayProgressBar('#progressBar_3', '100%');
    displayProgressBar('#progressBar_4', '50%');
    displayProgressBar('#progressBar_5', '100%');
    displayProgressBar('#progressBar_6', '60%');
    displayProgressBar('#progressBar_7', '80%');
}