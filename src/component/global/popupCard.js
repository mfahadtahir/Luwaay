
export const PopupCard = (card) => {
    var elem = document.getElementById(card);
    
    elem.style.display = 'block';

}
export const HideCard = (card) => {
    var elem = document.getElementById(card);
    
    elem.style.display = 'none';

}

export const hideAllOnStart = () => {
    let signInCard = document.getElementById('signIn'),
        signUpCard = document.getElementById('signUp'),
        contactCard = document.getElementById('contact'),
        forgotPass = document.getElementById('forgotPass'),
        profileCard = document.getElementById('profileDetail');

        signInCard.style.display = 'none'
        signUpCard.style.display = 'none'
        contactCard.style.display = 'none'
        forgotPass.style.display = 'none'
        profileCard.style.display = 'none'
}