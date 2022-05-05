import React, { tbody } from 'react';
import Box from './Box';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.GetMovies();
    }


    GetMovies() {
        let url = "https://hoblist.com/api/movieList";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category: "movies",
                language: "kannada", genre: "all",
                sort: "voting"
            })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => { this.setState({ movies: data }); });


    }


    render() {
        const rows = [];
        var i = 1;
        if (this.state == null)
            console.log("loading");
        else
            this.state?.movies?.result.forEach(element => {
                rows.push(<div>
                    <Box details={element}  keys={i++}/>
                </div>);
            });
        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{rows}</div>
            </div>
        );
    }
}
