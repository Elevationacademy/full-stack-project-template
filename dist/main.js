
const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function () {
    activityController.addActivity()
}

async function filterActivity() {
    await activityController.filterActivities(filtered = true)
}
async function deleteActivity() {
    await activityController.deleteMyActivity(activityID)

}

async function editActivity(activityID) {
    const capacity = $(`#capacity-${activityID}`).val()
    await activityController.editCapacity(activityID, capacity)
}

async function myActivity() {
    await activityController.showMyActivities()
}

async function init() {
    await activityController.filterActivities()
}

//Get the button
let mybutton = $("#btn-back-to-top");


init()








