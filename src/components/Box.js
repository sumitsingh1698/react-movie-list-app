import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function Box(props) {
    const detail = props.details;
    console.log(detail);
    return (
        <div>
            <div className='full-box-container'>

                <div className='box-container'>
                    <div className='arrow-container'><div ><FaArrowUp size={30.0} /></div>
                        <div><h1>{detail.voting}</h1></div> <div> <FaArrowDown size={30.0} /> </div> </div>
                    <div className='image-container'>
                        <img src={detail.poster} />
                    </div>
                    <div className='detail-container'>
                        <p className='title'>{detail.title}</p>
                        <p className='value'><label className='key'>Genre:</label>{detail.genre}</p>
                        <p className='value'><label className='key'>Director:</label> {detail.director[0]}</p>
                        <p className='value'><label className='key'>Starring:</label> {detail.stars[0]}</p>                      
                        <p>Mini | {detail.language} </p>
                    </div>
                </div>
                <button className='watch-trailer-button'>Watch trailer</button>
            </div>
        </div>
    )
}
