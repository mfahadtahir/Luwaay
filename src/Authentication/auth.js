import firebase from 'firebase';
import { firebaseConfig } from "./firebase";
import { HideCard } from '../component/global/popupCard';
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
// const db = firebase.firestore();

// user Sign Up  

export const SignUp = () => {
    // e.preventDefault();
    var name = document.getElementById('reg-name').value;
    var email = document.getElementById("reg-email").value;
    var pass = document.getElementById("reg-password").value;
    var secondPass = document.getElementById("reg-sec-pass").value;
    // Loading('block')
    if ((name.length && email.length && pass.length) !== 0) {
        if(secondPass === pass){
            auth.createUserWithEmailAndPassword(email, pass)
            .then(async () => {
                console.log(auth.currentUser.email);
                alert('UserAdded');
                HideCard('signUp');
                auth.currentUser.updateProfile({displayName: name});
            })
        }
        else{
            alert('Your Re typed password is different from your password!')
        }
            // .then(async (user) => {
            //     await db.collection(DBName).doc(auth.currentUser.uid).set({
            //         name: name.value,
            //         email: email.value,
            //         id: auth.currentUser.uid
            //     })
            //         .then(res => {
            //             auth.currentUser.updateProfile({
            //                 displayName: name.value,
            //             }).then(function () {
            //                 console.log('User Name Added to authentication')
            //             }).catch(function (error) {
            //                 console.log('User Name Added to authentication')
            //             });
            //             alert(`Your Account Has Been Created Successfully !!`)
            //             SignOut(event);
            //             return Loading('none') && ClearField()
            //         })
            // })
            // .catch(err => {
            //     console.log(err.message)
            //     return Loading('none')
            // })

    } else {
        alert('field is empty!!')
    }
}

// User login 
export const SignIn = () => {
    // e.preventDefault();
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-pass").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(async res => {
            if (res) {
                console.log(auth.currentUser);
                HideCard('signIn');
                window.location.reload();
            //     await db.collection(text).doc(auth.currentUser.uid).get()
            //         .then(doc => {
            //             if (doc.exists) {
            //                 if (text === 'seller') {
            //                     window.location.replace("./Field_Wise_Pages/seller_page.html");
            //                 }
            //                 else if (text === 'buyer') {
            //                     window.location.replace("./Field_Wise_Pages/moderate_panel.html");
            //                 }

            //             } else {
            //                 alert('User Doesnt Exist!!!')
            //                 return Loading('none')
            //             }
            //         })
            //         .catch(err => {
            //             alert(err.message);
            //             return Loading('none')
            //         })
            }
        }).catch(err => {
            alert(err.message);
        });
}

// USer Sign Out
export const SignOut = () => {
    auth.signOut().then(res => {
        alert('You\'re Logged Out Successfully');
    }).catch(err => {
        alert(err.message);
    })
}



    // window.addEventListener('DOMContentLoaded', (event) => {
        //     // const reqFromModerate = (event) => {

    //     let table = document.getElementById("tbody_logs");
    //     if (table) {
        //         db.collection("logs").get()
    //             .then(snapshot => {
    //                 snapshot.forEach(doc => {
    //                     table.innerHTML += `
    //                     <tr>
    //                         <td>${doc.data().Message}</td>
    //                     </tr>
    //                     `;
    //                 });
    //             })
    //     }
    // })