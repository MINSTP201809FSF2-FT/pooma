import React from 'react';

import Discussion from './Discussion'
import './DiscussionList.css';

class DiscussionList extends React.Component {
    state = {
        discussions = []
    }
    render() {
        return (
            <div className="discussion-list">
                <Discussion title='I am a discussion title'/>
                <Discussion title='I am a discussion title'/>
                <Discussion title='I am a discussion title'/>
                <Discussion title='I am a discussion title'/>
            </div>
        )
    }
}

export default DiscussionList;