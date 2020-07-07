import React, { Component, Fragment } from 'react'


export default class Customer extends Component {
    render() {
        return (
            <Fragment>
                <CustomerProfile 
                    id={this.props.id}
                    img={this.props.img}
                    name={this.props.name}
                />
                <CustomerInfo 
                    id={this.props.id}
                    name={this.props.name}
                    birth={this.props.birth}
                    gender={this.props.gender}
                />
            </Fragment>
        )
    }
}
class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt="profile"/>
            </div>
        )
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <h2> id = {this.props.id}</h2>
                <h2> name = {this.props.name}</h2>
                <h2> birth = {this.props.birth}</h2>
                <h2> gender = {this.props.gender}</h2>
            </div>
        )
    }
}
