import React, {Component} from 'react'

export default class Hog extends Component{

    state={
        clicked:false,
        hidden:false,
    }
    convertToImgPath=(name)=>{
        const imgPath = name.replaceAll(' ','_').toLowerCase()
        return require(`./../hog-imgs/${imgPath}.jpg`)
    }
    handleClick=(e)=>{
        const isClicked= this.state.clicked
        this.setState({
            clicked:!isClicked
        })
    }
    hideHog=(e)=>{
        e.preventDefault()
        this.setState({
            hidden:true,
        })
    }
    render(){
        return (
        <div onContextMenu={(e)=>{this.hideHog(e)}} onClick={(e)=>{this.handleClick(e)}} class="hog">
            {!this.state.hidden ? 
                <div
                    ><h1>{this.props.hog.name}</h1>
                    <img src={this.convertToImgPath(this.props.hog.name)} alt={this.props.hog.name}></img>
                    {this.state.clicked? 
                        <div>
                            <p>specialty: {this.props.hog.specialty}</p>
                            <p>greased: {this.props.hog.greased.toString()}</p>
                            <p>weight: {this.props.hog.weight}</p>
                            <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
                        </div>:
                        <div></div>
                    }
                </div> : 
                <div></div>
            }
        </div>)
    }
}