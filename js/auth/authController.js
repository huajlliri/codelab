$(()=>{
  const objAuth = new Autenticacion()
  $("#btnAuthGoogle").click(()=>{ objAuth.authCuentaGoogle() })
})
