import React from 'react';

import Discussion from './Discussion'
import './DiscussionList.css';

class DiscussionList extends React.Component {

    render() {
        return (
            <div className="discussion-list">
                <Discussion />
                <Discussion />
                <Discussion />
                <Discussion />
            </div>
        )
    }
}

export default DiscussionList;