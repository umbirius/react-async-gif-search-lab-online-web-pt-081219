import React, { Component } from 'react'

export default class GifList extends Component {




    render () {
        return (
            <ul>
                {this.props.gifs.map((gif, index) => (
                    <li>
                        <img key={index} src={gif}/>
                    </li>
                ))}
            </ul>
        )
    }
}