import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    onInputSearch(query) {
        this.setState({
            search: query.target.value
        })
        console.log(this.state.search)
    }

    handleSubmit(event) {
        this.props.setQuery(this.state.search)
        event.preventDefault();
        console.log(this.state.search)
    }


    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>
                    Enter a Search Term <br></br>
                <input
                        type="text"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={event => this.onInputSearch(event)} />
                </label><br></br>
                <input type="submit" value="Find Gifs"></input>
            </form>
        )
    }
}