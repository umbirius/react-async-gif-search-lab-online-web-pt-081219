import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: [],
        search: ''
    }


    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=bozBeiLtlfJwL8wSfx3i2DUO8y51IQs1&rating=g`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: data.data.slice(0, 3).map(gif => gif.images.original.url)
                })
            })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    componentDidUpdate() {
        this.fetchGifs()
    }

    setQuery = (query) => {
        this.setState({
            search: query
        })
    }


    render() {
        return (
            <div>
                <GifSearch setQuery={this.setQuery} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

}