import React, { Component } from 'react';
import common from './common.jpg'

export class NewItem extends Component {
    render() {
        const { img, des, title, url, date, author, source } = this.props
        return (
            <>
                <div className='container my-3'>
                    <div className="card" >
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "83%", zIndex: 1 }}>
                            {source}
                        </span>
                        <img src={!img ? common : img} className="card-img-top" alt="..." width={200} height={200} />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{des}...</p>
                            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                            <a href={url} target="blank" rel="noopener" className="btn btn-secondary">Read</a>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default NewItem