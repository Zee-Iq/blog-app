const [tag, setTag] = useState('')

const handleTagSubmit = e => {
    e.preventDefault();

    console.log('this is form submit');

    setData({...data, tags: [...data.tags, tag]})
    setTag('')
}


<div>
    <form onSubmit={handleTagSubmit}>
    <input type="text" value={tag} onChange={e=> SetTag(e.target.value)}/>

    </form>

    <div style={{display: 'flex' }}>
        {
            data.tags.length ? 
            data.tags.map((item, idx) => <div style={{border: '1px solid', 
            marginRight:'10px'}}key={idx}>{item}</div>)

            :

            'No tages added'
        }
    </div>
    
</div>
