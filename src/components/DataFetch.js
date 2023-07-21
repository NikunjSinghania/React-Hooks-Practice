import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idButton, setIdButton] = useState(0)

    const handleClick = () => {
        setIdButton(id)
    }

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(
            (res) => {
                //console.log(res);
                setPost(res.data)
            },
            (rej) => {
                console.log(rej);
            }
        )
    }, [idButton])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Change POST</button>
        {/*<ul>
            {
                post.map(post => <l1 key={post.id}>{post.title}</l1>)
            }
        </ul>*/}

        <h1>{post.title}</h1>
    </div>
  )
}

export default DataFetch