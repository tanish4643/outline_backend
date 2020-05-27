module.exports = {
    getEmployees,
    getSurveys,
    updateEmployeeSurvey
};

var employees = [
    {id: 1, name: "Tanish", surveys: []},
    {id: 2, name: "Amit", surveys: []},
    {id: 3, name: "Ankita", surveys: []},
    {id: 4, name: "Kritika", surveys: []},
    {id: 5, name: "Gurpreet", surveys: []},
    {id: 6, name: "Pallika", surveys: []}
];

var surveys = [
    {id: 1, name: "Survey 1", assigned: false},
    {id: 2, name: "Survey 2", assigned: false},
    {id: 3, name: "Survey 3", assigned: false},
    {id: 4, name: "Survey 4", assigned: false},
    {id: 5, name: "Survey 5", assigned: false},
    {id: 6, name: "Survey 6", assigned: false},
    {id: 7, name: "Survey 7", assigned: false},
    {id: 8, name: "Survey 8", assigned: false},
    {id: 9, name: "Survey 9", assigned: false},
    {id: 10, name: "Survey 10", assigned: false},
];

async function getEmployees() {
    return employees;
}

async function getSurveys() {
    return surveys;
}

// Action: 0 - Add, 1 - Remove
// sid: survey id
// eid: employee id
async function updateEmployeeSurvey(sid, eid, action){
    var flag = false;
    var employee;
    
    for(var i=0; i<employees.length; i++){
        if(employees[i].id == eid){
            if(action == 0){
                employees[i].surveys.push(sid);
                console.log("A New Survey has been assigned to "+employees[i].name+" having Survey ID: "+sid);
            }else{
                employees[i].surveys.splice(employees[i].surveys.indexOf(sid),1);
                console.log("A Prev. Survey has been taken back from "+employees[i].name+" having Survey ID: "+sid);
            }
            flag = true;
            break;
        }
    }

    if(flag){
        surveys = surveys.map((item) => item.id == sid ? {...item, assigned: !item.assigned} : item );
    }

    return {message: "Action processed successfully"};
}