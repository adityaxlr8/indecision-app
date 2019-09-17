console.log('Here we are')

class VisiblityToggle extends React.Component{
        constructor(props){
            super(props)
            this.handleVisiblityToggle = this.handleVisiblityToggle.bind(this)
            this.state = {
                visiblity:false
            } 
        }
        handleVisiblityToggle(){
            this.setState((prevState) => { 
                return { 
                    visiblity : !prevState.visiblity
                 }
                
                })
            }



        render(){
            return(
                <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleVisiblityToggle} >{this.state.visiblity?'Hide details':'Show details' }</button>
                {this.state.visiblity && (
                    <div>
                    <p>Here are some details for you</p>
                    
                    </div>
                )}               
                
                </div>

            )
        }

} 

ReactDOM.render(<VisiblityToggle />,document.getElementById('app') )






// let visiblity = false;

// const toggleVisiblity = (e) =>{
//     visiblity = !visiblity
//     render()
// }



// const render =  () =>{
//     const visible = (
//             <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={toggleVisiblity}> {visiblity?'Hide details':'Show details'}</button>
//             <br/>
//             {visiblity?'Hey,There are some details you can see':''}
//             </div>
//     )
//     ReactDOM.render(visible,appRoot )
// }
// const appRoot = document.getElementById('app')
// render();