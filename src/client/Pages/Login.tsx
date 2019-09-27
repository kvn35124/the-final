import * as React from 'react';
import { json } from '../utilities/api';
import { RouteComponentProps } from 'react-router';



class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            categories: [],
            categoryid: ''
        }
    }


    async componentDidMount() {
        try {
            let results = await json(`/api/categories`);
            this.setState({ categories: results })
        } catch (error) {
            console.log(error);
        }
    }


    async handleSubmit() {
        event.preventDefault();
        let newbook = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            categoryid: this.state.categoryid
        }
        try {
            let results = await json(`/api/books`, 'POST', newbook);
            if(results.ok) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return(
             <section className="row">
                 <article className="col">
                     <form action="" className="form-group border">
                         <label className="form-control">Title:</label>
                         <input type="text" value={this.state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value})} className="form-control" />
                         <label className="form-control">Author:</label>
                         <input type="text" value={this.state.author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value})} className="form-control" />
                         <label className="form-control">Price:</label>
                         <input type="text" value={this.state.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value})} className="form-control" />
                         <label className="form-control">Category:</label>
                         <select value={this.state.categoryid} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ categoryid: e.target.value})} className="form-control" >
                             <option value="0">Select a Category...</option>
                             {this.state.categories.map(category => (
                                 <option value={category.id}>{category.name}</option>
                             ))}
                         </select>
                         <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()}>Submit</button>
                     </form>
                 </article>
             </section>

        )
    }
}


interface ICategories {
    id: number;
    name: string;
}

interface LoginProps extends RouteComponentProps {}


interface LoginState {
    title: string;
    author: string;
    price: string;
    categories: Array<ICategories>;
    categoryid: string;
}




export default Login;