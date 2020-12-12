import firebase from 'firebase';




export async function getposts(postRetrived){

    var postList = []
    var snapshot = await firebase.firestore()
    .collection('Shsfeed')
        .orderBy('timestamp')
    .get().then()

    snapshot.forEach((doc) => {
        postList.push(doc.data)
    });

    console.log(postList)

    postRetrived(postList);
}

export async function getGame(gamesRetrived) {

    var postList = []
    var snapshot = await firebase.firestore()
        .collection('Shsgame')
        .orderBy('timestamp')
        .get().then()

    snapshot.forEach((doc) => {
        postList.push(doc.data)
    });

    console.log(postList)

    postRetrived(postList);
}


export async function getVs(vSRetrived) {
const ref = firebase.storage().ref('Shsgame/coollogo_com-1245574.png');
const vs = ref.getDownloadUrl();
}