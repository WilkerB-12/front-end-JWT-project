const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			values: {
				email:"",
				password:""
			},
			password_confirm:"",
			baseUrl: "http://127.0.0.1:5000",
			logged_User:{
				token:"",
				user_id:""
			},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleInputChange: (e)=>{
				setStore({values:{...getStore().values, [e.target.name]: e.target.value
				}})
			},
			handleInputChangePasswordConfirm: (e)=>{
				setStore({password_confirm:{...getStore().password_confirm, [e.target.name]: e.target.value
				}})
			},
			handleSubmit: (e,resource)=>{
				//e.preventDefault()
				const actions=getActions()
				console.log(getStore().values)
				if(actions.validationsSubmit(e)==false){
					return false
				}
				else{
				let validation=actions.Signin(resource)
					return validation
				}
			},
			Signin: async(resource)=>{	
				let requestOptions={
					method: 'POST',
					headers: { 'Content-Type':'application/json'},
					body: JSON.stringify(getStore().values)
				}
				const response=await fetch(
					`${getStore().baseUrl}${resource}`, requestOptions)
				if(response.status==201){
					alert("Registro completado")
					setStore({passRegister:true})
					return true
				}
				if(response.status==400){ 
					 const mensaje=await response.json()
					 alert(mensaje.msg)
					 return false
				}
			},
			validationsSubmit: (e)=>{	
				let isValid=true 
							
				if(getStore().values.email=="") {
					alert("necesita un email")
					isValid=false
				}		
				
				if(getStore().values.password=="") {
					alert("necesita un password")
					isValid=false
				}
				if(getStore().values.password_confirm=="") {
					alert("necesita confirmar contraseña")
					isValid=false
				}
				if(getStore().password_confirm.password_confirm !== getStore().values.password){
					alert("Las contraseñas no coinciden")
					isValid=false
				}
				return isValid   
			},


			login: async()=>{
				const resp = await fetch(`${getStore().baseUrl}/token`, { 
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: getStore().values.email, password: getStore().values.password }) 
			   })	
			   console.log({ email: getStore().values.email, password: getStore().values.password })  
			    if(!resp.ok) {
			   		alert("Hay un problema con la solicitud")
					   return undefined
					}
			    if(resp.status === 401){
					alert("Credencia invalida")
					return undefined
			    }
			    else if(resp.status === 400){
					alert("Correo o clave enviado")
					return undefined
			    }
			    const data = await resp.json()
			   // save your token in the localStorage
			  //also you should set your user into the store using the setStore function
			    localStorage.setItem("jwt-token", data.token)
				localStorage.setItem("user_id", data.user_id)
				setStore({logged_User:{...getStore().logged_User,user_id:data.user_id}})
				setStore({logged_User:{...getStore().logged_User,token:data.token}})
			    return data
			},
			isAuthenticated:()=>{
				console.log(localStorage.getItem('jwt-token'))
				if(localStorage.getItem('jwt-token')==null){
					return false;
				}
				return true
			},
			removeUser:(e)=>{
				localStorage.removeItem('jwt-token')
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
