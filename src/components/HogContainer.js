import React, {Component} from 'react'
import Hog from './Hog'

export default class HogContainer extends Component{

    returnHogs=()=>{
        return this.props.hogs.map(hog=>
            <Hog hog={hog} showHogs={this.showHogs}/>
        )
    }
    showHogs(){
        this.setState({
            hidden:false
        })
    }
    render(){
        return <div className="hogContainer">
            {this.returnHogs('')}
        </div>
    }
}