import React from "react";
import "./Blog.css"

const styles = {
    container1: {
       
        backgroundColor: '#36A025',
        height:'50px'
       
    },
}

function Blog() {
    return <div style={styles.container1} >
        <div className="head">
            <h4>My Blog</h4>
        </div>
        <div className="head1">
            <p>Description of My Blog</p>
        </div>
    </div>
}

export default Blog;