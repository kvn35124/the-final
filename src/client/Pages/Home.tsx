import * as React from 'react';



class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <h1>Welcome!!!!</h1>
        )
    }
}


interface HomeProps {}


interface HomeState {}




export default Home;