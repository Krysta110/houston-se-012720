import React from 'react'

export default class PaintingForm extends React.Component{

    render(){
        return(<div>
            PaintingForm:
            <form onSubmit={(e) => this.props.addPainting(e)}>
                <input type='text' placeholder='Painting Title'/>
                <input type='text' placeholder='Painting Image URL'/>
                <input type='text' placeholder='Artist Name'/>
                <input type='submit' value='Add Painting'/> 
            </form>
        </div>)
    }
}