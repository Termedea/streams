import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderStreamList() {
        console.log(this.props.streams);
        return this.props.streams.map((stream) => {
            return (
                <li
                    className="StreamList__item bg-white bg-opacity-20 p-5 my-1 shadow-md flex gap-3 items-center"
                    key={stream.id}>
                    <div className="StreamList__icon border border-indigo-700 p-5 bg-white">
                        <FontAwesomeIcon icon={faCamera} size="4x" className="text-indigo-700" />
                    </div>
                    <div className="StreamList__content flex-grow">
                        <header className="border-indigo-500 border-b">
                            <h3 className="StreamList__heading text-2xl">{stream.title}</h3>
                        </header>
                        <div className="StreamList__body py-5">{stream.description}</div>
                    </div>
                </li>
            );
        });
    }
    render() {
        console.log(this.props.streams);
        return <ul className="StreamList">{this.renderStreamList()}</ul>;
    }
}
const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
