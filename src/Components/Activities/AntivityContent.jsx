import parse from 'html-react-parser';

const ActivityContent = ({ content }) => {
    return (
        <div>
            {parse(content)}
        </div>
    )
}

export default ActivityContent