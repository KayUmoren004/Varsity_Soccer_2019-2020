import * as firebase from "@react-native-firebase/app"
class Fire{
    constructor() {
        this.init()
        this.checkAuth()
    };

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCA3Vp_fRER9caqj9yBF5_qPbq0VaZ0bJ0",
                authDomain: "schenectady-varsity-soccer.firebaseapp.com",
                databaseURL: "https://schenectady-varsity-soccer.firebaseio.com",
                projectId: "schenectady-varsity-soccer",
                storageBucket: "schenectady-varsity-soccer.appspot.com",
                messagingSenderId: "815378221223",
                appId: "1:815378221223:web:b81d0f80677e4733eff382",
                measurementId: "G-DBRD7KEFMJ"
            });
        };
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user =>{
            if(!user) {
                () => this.props.navigation.navigate("Register")
            }
        });
    };

    

    send = messages => {
        messages.forEach(item =>{
            const message = {
                text: item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message)
        });

    };

    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key:_id} = message;
        const createdAt = new Date(timestamp);

        return{
            _id,
            createdAt,
            text,
            user,
        };
    };

    get = callback =>{
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off(){
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();