import cuid from "cuid";
const activities = {
  1546968934: {
    id: "1546968934",
    title: "Learn Vue.js",
    notes: "I started today and it was not good.",
    progress: 60,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391,
  },
  1546969212: {
    id: "1546969212",
    title: "Read Witcher Books",
    notes: "These books are super nice",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391,
  },
}
const canContinue = () => {
  const rndNumber = Math.floor(Math.random() * 10);
  if(rndNumber > 5){
     return true
  } 
  return false
}
// Fetch Data Activity
export const fetchActivities = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(canContinue()){
        resolve(activities)
      }else {
        reject('Can not fetch activities')
      }
    }, 1000);
  })
}
// Fetch Data User
export const fetchUser = () => {
  return {
    name: "Filip Jerga",
    id: "-Aj34jknvncx98812",
  }
}
// Fetch Data Catigories
export const fetchCatigories = () => {
  return {
    '1546969049': {
      text: "books",
      id:'1546969049'
    },
    '1546969225': {
      text: "movies",
      id:'1546969225'
    }
  }
}

// Create New Activity
export const createActivityAPI = (newActivity) => {
  newActivity.id = cuid();
  newActivity.progress = 0;
  newActivity.createdAt = new Date().getTime();
  newActivity.updatedAt = new Date().getTime();
  return new Promise((resolve) => {
    return resolve(newActivity);
  })
}