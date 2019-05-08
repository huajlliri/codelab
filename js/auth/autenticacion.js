class Autenticacion {
  authCuentaGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result=>{
        $('#avatar').attr('src',result.user.photoURL)
      })
      .catch(error=>{
        console.log(`salio este error ${error}`)
      })
  }
}
