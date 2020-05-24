import React, {Component} from 'react';
import firebase from '../../firebase';
import './register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        };
        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    register(e){
        e.preventDefault();
        this.onRegister();
    }

    onRegister = async() => {
        try{
            const {nome, email, password} = this.state;
    
            await firebase.register(nome, email, password)
            .catch((error)=>{
                alert('Código de erro: ' + error.message);
                return null;
            });
            this.props.history.replace('/dashboard');
        }catch(error){
            alert(error.message);
        }
    }

    render(){
        return (
            <div>
                <h1 className="register-h1">Novo Usuario</h1>
                <form onSubmit={this.register} id="register">
                    <label>Nome:</label><br/>
                    <input type="text" value={this.state.nome} autoFocus autoComplete="off" 
                    onChange={(e)=> this.setState({nome: e.target.value})} placeholder="teste"/><br/>
                    <label>Nome:</label><br/>
                    <input type="email" value={this.state.email} autoComplete="off"  
                    onChange={(e)=> this.setState({email: e.target.value})} placeholder="teste@teste.com"/><br/>
                    <label>Nome:</label><br/>
                    <input type="password" value={this.state.password} autoComplete="off" 
                    onChange={(e)=> this.setState({password: e.target.value})} placeholder="Digite sua senha"/><br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );  
    }
}

export default Register;