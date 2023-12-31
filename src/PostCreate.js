
import React, {useState} from 'react';
import axios from 'axios';

function PostCreate() {
    const [title, setTitle] = useState('');

    const onsubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
